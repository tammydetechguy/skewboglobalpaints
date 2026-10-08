<?php
/**
 * Skewbo Global Paint Limited
 * Database Core Singleton Handler (PDO)
 */

declare(strict_types=1);

namespace App\Core;

use PDO;
use PDOException;
use RuntimeException;

class Database
{
    private static ?PDO $instance = null;

    private function __construct() {}
    private function __clone() {}

    public static function getConnection(): PDO
    {
        if (self::$instance === null) {
            $config = require APP_ROOT . '/config/database.php';
            $dsn = sprintf(
                "mysql:host=%s;port=%s;dbname=%s;charset=%s",
                $config['host'],
                $config['port'],
                $config['database'],
                $config['charset']
            );

            try {
                self::$instance = new PDO(
                    $dsn,
                    $config['username'],
                    $config['password'],
                    $config['options']
                );
            } catch (PDOException $e) {
                if (defined('APP_DEBUG') && APP_DEBUG) {
                    throw new RuntimeException("Database Connection Error: " . $e->getMessage(), (int)$e->getCode());
                }
                error_log("Database connection error: " . $e->getMessage());
                die("A secure database connection could not be established. Please check configuration settings.");
            }
        }

        return self::$instance;
    }
}
