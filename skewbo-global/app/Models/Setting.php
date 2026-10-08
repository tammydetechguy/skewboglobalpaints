<?php
/**
 * Skewbo Global Paint Limited
 * Site Settings Model (Key-Value Content Management)
 */

declare(strict_types=1);

namespace App\Models;

use App\Core\Database;
use PDO;

class Setting
{
    private static array $cache = [];

    public static function getAll(): array
    {
        if (!empty(self::$cache)) {
            return self::$cache;
        }

        $db = Database::getConnection();
        $stmt = $db->query("SELECT setting_key, setting_value FROM site_settings");
        $results = $stmt->fetchAll(PDO::FETCH_KEY_PAIR);
        self::$cache = $results;
        return $results;
    }

    public static function get(string $key, string $default = ''): string
    {
        $all = self::getAll();
        return $all[$key] ?? $default;
    }

    public static function set(string $key, string $value): bool
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("INSERT INTO site_settings (setting_key, setting_value) 
                              VALUES (:key, :value) 
                              ON DUPLICATE KEY UPDATE setting_value = :update_val");
        self::$cache[$key] = $value;
        return $stmt->execute([
            ':key' => $key,
            ':value' => $value,
            ':update_val' => $value
        ]);
    }

    public static function updateMany(array $settings): bool
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("UPDATE site_settings SET setting_value = :value WHERE setting_key = :key");
        foreach ($settings as $key => $val) {
            $stmt->execute([':key' => $key, ':value' => (string)$val]);
            self::$cache[$key] = (string)$val;
        }
        return true;
    }
}
