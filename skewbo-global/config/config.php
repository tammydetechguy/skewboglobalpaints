<?php
/**
 * Skewbo Global Paint Limited
 * Application Configuration File
 * PHP 8.0+
 */

declare(strict_types=1);

// Prevent direct access
defined('APP_ROOT') or define('APP_ROOT', dirname(__DIR__));

// Environment & Debugging
define('APP_ENV', getenv('APP_ENV') ?: 'production'); // 'development' or 'production'
define('APP_DEBUG', APP_ENV === 'development');

if (APP_DEBUG) {
    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', '0');
    ini_set('display_startup_errors', '0');
    error_reporting(0);
}

// Application Info
define('APP_NAME', 'Skewbo Global Paint Limited');
define('APP_URL', rtrim(getenv('APP_URL') ?: 'http://localhost/skewbo-global/public', '/'));
define('ADMIN_URL', APP_URL . '/admin');

// Upload Directory Paths
define('UPLOAD_DIR', APP_ROOT . '/public/assets/uploads');
define('UPLOAD_URL', APP_URL . '/assets/uploads');
define('MAX_UPLOAD_SIZE', 5 * 1024 * 1024); // 5 Megabytes
define('ALLOWED_IMAGE_TYPES', ['image/jpeg', 'image/png', 'image/webp']);

// Session Configuration (Strict security settings)
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.cookie_httponly', '1');
    ini_set('session.use_only_cookies', '1');
    ini_set('session.cookie_samesite', 'Lax');
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
        ini_set('session.cookie_secure', '1');
    }
    session_start();
}

// Generate CSRF Token if not present
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
