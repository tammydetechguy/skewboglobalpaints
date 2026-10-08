<?php
/**
 * Skewbo Global Paint Limited
 * Product Model
 */

declare(strict_types=1);

namespace App\Models;

use App\Core\Database;
use PDO;

class Product
{
    public static function getAll(array $filters = []): array
    {
        $db = Database::getConnection();
        $sql = "SELECT p.*, b.name AS brand_name, c.name AS category_name, c.slug AS category_slug 
                FROM products p
                LEFT JOIN brands b ON p.brand_id = b.id
                JOIN categories c ON p.category_id = c.id
                WHERE p.status = 'active'";
        $params = [];

        if (!empty($filters['category_id'])) {
            $sql .= " AND p.category_id = :category_id";
            $params[':category_id'] = $filters['category_id'];
        }

        if (!empty($filters['brand_id'])) {
            $sql .= " AND p.brand_id = :brand_id";
            $params[':brand_id'] = $filters['brand_id'];
        }

        if (!empty($filters['featured'])) {
            $sql .= " AND p.featured = 1";
        }

        if (!empty($filters['search'])) {
            $sql .= " AND (p.name LIKE :search OR p.short_description LIKE :search OR p.description LIKE :search)";
            $params[':search'] = '%' . $filters['search'] . '%';
        }

        $sql .= " ORDER BY p.id DESC";

        if (!empty($filters['limit'])) {
            $sql .= " LIMIT " . (int)$filters['limit'];
        }

        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll();
    }

    public static function getBySlug(string $slug): ?array
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("SELECT p.*, b.name AS brand_name, b.logo_url AS brand_logo, c.name AS category_name, c.slug AS category_slug 
                              FROM products p
                              LEFT JOIN brands b ON p.brand_id = b.id
                              JOIN categories c ON p.category_id = c.id
                              WHERE p.slug = :slug AND p.status = 'active' LIMIT 1");
        $stmt->execute([':slug' => $slug]);
        $product = $stmt->fetch();
        return $product ?: null;
    }

    public static function getById(int $id): ?array
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("SELECT * FROM products WHERE id = :id LIMIT 1");
        $stmt->execute([':id' => $id]);
        $product = $stmt->fetch();
        return $product ?: null;
    }

    public static function create(array $data): int
    {
        $db = Database::getConnection();
        $sql = "INSERT INTO products (name, slug, brand_id, category_id, short_description, description, application_use, specifications, packaging, price, show_price, availability, featured, status, image_url)
                VALUES (:name, :slug, :brand_id, :category_id, :short_description, :description, :application_use, :specifications, :packaging, :price, :show_price, :availability, :featured, :status, :image_url)";
        
        $stmt = $db->prepare($sql);
        $stmt->execute([
            ':name' => $data['name'],
            ':slug' => $data['slug'],
            ':brand_id' => $data['brand_id'] ?: null,
            ':category_id' => $data['category_id'],
            ':short_description' => $data['short_description'] ?? '',
            ':description' => $data['description'] ?? '',
            ':application_use' => $data['application_use'] ?? '',
            ':specifications' => is_array($data['specifications'] ?? null) ? json_encode($data['specifications']) : ($data['specifications'] ?? '{}'),
            ':packaging' => $data['packaging'] ?? '20 Litre Drum, 4 Litre Gallon',
            ':price' => $data['price'] ?? 0.00,
            ':show_price' => !empty($data['show_price']) ? 1 : 0,
            ':availability' => $data['availability'] ?? 'in_stock',
            ':featured' => !empty($data['featured']) ? 1 : 0,
            ':status' => $data['status'] ?? 'active',
            ':image_url' => $data['image_url'] ?? '/assets/images/paint-products.jpg'
        ]);

        return (int)$db->lastInsertId();
    }

    public static function update(int $id, array $data): bool
    {
        $db = Database::getConnection();
        $sql = "UPDATE products SET 
                name = :name, slug = :slug, brand_id = :brand_id, category_id = :category_id,
                short_description = :short_description, description = :description, application_use = :application_use,
                specifications = :specifications, packaging = :packaging, price = :price, show_price = :show_price,
                availability = :availability, featured = :featured, status = :status, image_url = :image_url
                WHERE id = :id";

        $stmt = $db->prepare($sql);
        return $stmt->execute([
            ':id' => $id,
            ':name' => $data['name'],
            ':slug' => $data['slug'],
            ':brand_id' => $data['brand_id'] ?: null,
            ':category_id' => $data['category_id'],
            ':short_description' => $data['short_description'] ?? '',
            ':description' => $data['description'] ?? '',
            ':application_use' => $data['application_use'] ?? '',
            ':specifications' => is_array($data['specifications'] ?? null) ? json_encode($data['specifications']) : ($data['specifications'] ?? '{}'),
            ':packaging' => $data['packaging'] ?? '',
            ':price' => $data['price'] ?? 0.00,
            ':show_price' => !empty($data['show_price']) ? 1 : 0,
            ':availability' => $data['availability'] ?? 'in_stock',
            ':featured' => !empty($data['featured']) ? 1 : 0,
            ':status' => $data['status'] ?? 'active',
            ':image_url' => $data['image_url'] ?? '/assets/images/paint-products.jpg'
        ]);
    }

    public static function delete(int $id): bool
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("DELETE FROM products WHERE id = :id");
        return $stmt->execute([':id' => $id]);
    }
}
