<?php
/**
 * Skewbo Global Paint Limited
 * Enquiry (Quote Request) Model & Reference Generator
 */

declare(strict_types=1);

namespace App\Models;

use App\Core\Database;
use PDO;

class Enquiry
{
    public static function generateReferenceNo(): string
    {
        $db = Database::getConnection();
        $year = date('Y');
        $stmt = $db->query("SELECT COUNT(*) FROM enquiries");
        $count = (int)$stmt->fetchColumn() + 1;
        return sprintf("SKG-%s-%04d", $year, $count);
    }

    public static function create(array $data, array $items = []): array
    {
        $db = Database::getConnection();
        $db->beginTransaction();

        try {
            $ref = self::generateReferenceNo();
            $sql = "INSERT INTO enquiries (reference_no, full_name, company_name, phone, email, project_type, location, message, status, ip_address)
                    VALUES (:ref, :name, :company, :phone, :email, :project, :location, :msg, 'New', :ip)";
            
            $stmt = $db->prepare($sql);
            $stmt->execute([
                ':ref' => $ref,
                ':name' => $data['full_name'],
                ':company' => $data['company_name'] ?? '',
                ':phone' => $data['phone'],
                ':email' => $data['email'],
                ':project' => $data['project_type'] ?? '',
                ':location' => $data['location'] ?? '',
                ':msg' => $data['message'] ?? '',
                ':ip' => $_SERVER['REMOTE_ADDR'] ?? ''
            ]);

            $enquiryId = (int)$db->lastInsertId();

            if (!empty($items)) {
                $itemStmt = $db->prepare("INSERT INTO enquiry_items (enquiry_id, product_id, product_name, quantity, notes)
                                          VALUES (:enq_id, :prod_id, :prod_name, :qty, :notes)");
                foreach ($items as $item) {
                    $itemStmt->execute([
                        ':enq_id' => $enquiryId,
                        ':prod_id' => $item['product_id'] ?? null,
                        ':prod_name' => $item['product_name'] ?? 'General Enquiry Item',
                        ':qty' => $item['quantity'] ?? '1',
                        ':notes' => $item['notes'] ?? ''
                    ]);
                }
            }

            $db->commit();
            return ['success' => true, 'id' => $enquiryId, 'reference_no' => $ref];
        } catch (\Exception $e) {
            $db->rollBack();
            error_log("Enquiry creation error: " . $e->getMessage());
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public static function getAll(array $filters = []): array
    {
        $db = Database::getConnection();
        $sql = "SELECT e.*, COUNT(ei.id) as item_count 
                FROM enquiries e 
                LEFT JOIN enquiry_items ei ON e.id = ei.enquiry_id";
        $params = [];

        if (!empty($filters['status'])) {
            $sql .= " WHERE e.status = :status";
            $params[':status'] = $filters['status'];
        }

        $sql .= " GROUP BY e.id ORDER BY e.id DESC";
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll();
    }

    public static function getDetails(int $id): ?array
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("SELECT * FROM enquiries WHERE id = :id LIMIT 1");
        $stmt->execute([':id' => $id]);
        $enquiry = $stmt->fetch();

        if (!$enquiry) {
            return null;
        }

        $itemsStmt = $db->prepare("SELECT * FROM enquiry_items WHERE enquiry_id = :id");
        $itemsStmt->execute([':id' => $id]);
        $enquiry['items'] = $itemsStmt->fetchAll();

        return $enquiry;
    }

    public static function updateStatus(int $id, string $status, ?string $internalNotes = null): bool
    {
        $db = Database::getConnection();
        $sql = "UPDATE enquiries SET status = :status";
        $params = [':id' => $id, ':status' => $status];

        if ($internalNotes !== null) {
            $sql .= ", internal_notes = :notes";
            $params[':notes'] = $internalNotes;
        }

        $sql .= " WHERE id = :id";
        $stmt = $db->prepare($sql);
        return $stmt->execute($params);
    }
}
