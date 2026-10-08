<?php
/**
 * Skewbo Global Paint Limited
 * Brand & Category Models
 */

declare(strict_types=1);

namespace App\Models;

use App\Core\Database;
use PDO;

class Brand
{
    public static function getAll(bool $activeOnly = true): array
    {
        $db = Database::getConnection();
        $sql = "SELECT * FROM brands" . ($activeOnly ? " WHERE is_active = 1" : "") . " ORDER BY display_order ASC, name ASC";
        return $db->query($sql)->fetchAll();
    }

    public static function getBySlug(string $slug): ?array
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("SELECT * FROM brands WHERE slug = :slug LIMIT 1");
        $stmt->execute([':slug' => $slug]);
        $row = $stmt->fetch();
        return $row ?: null;
    }

    public static function create(array $data): int
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("INSERT INTO brands (name, slug, logo_url, description, is_active, display_order)
                              VALUES (:name, :slug, :logo_url, :description, :is_active, :display_order)");
        $stmt->execute([
            ':name' => $data['name'],
            ':slug' => $data['slug'],
            ':logo_url' => $data['logo_url'] ?? '',
            ':description' => $data['description'] ?? '',
            ':is_active' => !empty($data['is_active']) ? 1 : 0,
            ':display_order' => (int)($data['display_order'] ?? 0)
        ]);
        return (int)$db->lastInsertId();
    }

    public static function update(int $id, array $data): bool
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("UPDATE brands SET name = :name, slug = :slug, logo_url = :logo_url, description = :description, is_active = :is_active WHERE id = :id");
        return $stmt->execute([
            ':id' => $id,
            ':name' => $data['name'],
            ':slug' => $data['slug'],
            ':logo_url' => $data['logo_url'] ?? '',
            ':description' => $data['description'] ?? '',
            ':is_active' => !empty($data['is_active']) ? 1 : 0
        ]);
    }
}

class Category
{
    public static function getAll(bool $activeOnly = true): array
    {
        $db = Database::getConnection();
        $sql = "SELECT * FROM categories" . ($activeOnly ? " WHERE is_active = 1" : "") . " ORDER BY display_order ASC, name ASC";
        return $db->query($sql)->fetchAll();
    }

    public static function getBySlug(string $slug): ?array
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("SELECT * FROM categories WHERE slug = :slug LIMIT 1");
        $stmt->execute([':slug' => $slug]);
        $row = $stmt->fetch();
        return $row ?: null;
    }

    public static function create(array $data): int
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("INSERT INTO categories (name, slug, description, image_url, is_active, display_order)
                              VALUES (:name, :slug, :description, :image_url, :is_active, :display_order)");
        $stmt->execute([
            ':name' => $data['name'],
            ':slug' => $data['slug'],
            ':description' => $data['description'] ?? '',
            ':image_url' => $data['image_url'] ?? '',
            ':is_active' => !empty($data['is_active']) ? 1 : 0,
            ':display_order' => (int)($data['display_order'] ?? 0)
        ]);
        return (int)$db->lastInsertId();
    }
}
