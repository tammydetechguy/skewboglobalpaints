<?php
/**
 * Skewbo Global Paint Limited
 * Authentication & Session Helper
 */

declare(strict_types=1);

namespace App\Helpers;

use App\Core\Database;
use PDO;

class Auth
{
    public static function check(): bool
    {
        return !empty($_SESSION['admin_id']);
    }

    public static function user(): ?array
    {
        if (!self::check()) {
            return null;
        }

        return [
            'id' => $_SESSION['admin_id'],
            'username' => $_SESSION['admin_username'] ?? '',
            'full_name' => $_SESSION['admin_name'] ?? '',
            'email' => $_SESSION['admin_email'] ?? '',
            'role' => $_SESSION['admin_role'] ?? 'super_admin'
        ];
    }

    public static function attempt(string $username, string $password): bool
    {
        $db = Database::getConnection();
        $stmt = $db->prepare("SELECT * FROM admins WHERE username = :username OR email = :username LIMIT 1");
        $stmt->execute([':username' => $username]);
        $admin = $stmt->fetch();

        if ($admin && password_verify($password, $admin['password_hash'])) {
            // Regenerate session id to protect against session fixation
            session_regenerate_id(true);

            $_SESSION['admin_id'] = $admin['id'];
            $_SESSION['admin_username'] = $admin['username'];
            $_SESSION['admin_name'] = $admin['full_name'];
            $_SESSION['admin_email'] = $admin['email'];
            $_SESSION['admin_role'] = $admin['role'];

            // Update last login
            $update = $db->prepare("UPDATE admins SET last_login = NOW() WHERE id = :id");
            $update->execute([':id' => $admin['id']]);

            return true;
        }

        return false;
    }

    public static function logout(): void
    {
        $_SESSION = [];
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        session_destroy();
    }

    public static function verifyCsrf(string $token): bool
    {
        return !empty($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
    }
}
