<?php
/**
 * Skewbo Global Paint Limited
 * Public Web Application Front Controller
 * PHP 8.0+
 */

declare(strict_types=1);

define('APP_ROOT', dirname(__DIR__));
require_once APP_ROOT . '/config/config.php';

// Autoloader for Namespaces (App\...)
spl_autoload_register(function ($class) {
    $prefix = 'App\\';
    $base_dir = APP_ROOT . '/app/';
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }
    $relative_class = substr($class, $len);
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';
    if (file_exists($file)) {
        require $file;
    }
});

use App\Models\Setting;
use App\Models\Product;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Enquiry;
use App\Helpers\Sanitizer;
use App\Helpers\Auth;

// Simple Router Dispatch
$requestUri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$scriptName = dirname($_SERVER['SCRIPT_NAME'] ?? '');
$route = trim(str_replace($scriptName, '', $requestUri), '/');

// Handle API / AJAX quotation submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $route === 'api/quote') {
    header('Content-Type: application/json');
    $input = json_decode(file_get_contents('php://input'), true) ?: $_POST;
    
    if (empty($input['full_name']) || empty($input['phone']) || empty($input['email'])) {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'Please provide full name, phone number, and email.']);
        exit;
    }

    $result = Enquiry::create([
        'full_name' => Sanitizer::cleanString($input['full_name']),
        'company_name' => Sanitizer::cleanString($input['company_name'] ?? ''),
        'phone' => Sanitizer::cleanString($input['phone']),
        'email' => Sanitizer::cleanEmail($input['email']),
        'project_type' => Sanitizer::cleanString($input['project_type'] ?? ''),
        'location' => Sanitizer::cleanString($input['location'] ?? ''),
        'message' => Sanitizer::cleanString($input['message'] ?? '')
    ], $input['items'] ?? []);

    echo json_encode($result);
    exit;
}

// Global Site Settings for Views
$settings = Setting::getAll();
$featuredBrands = Brand::getAll(true);
$categories = Category::getAll(true);
$featuredProducts = Product::getAll(['featured' => true, 'limit' => 8]);

// Include Main Layout / View
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= Sanitizer::escape($settings['seo_title'] ?? 'Skewbo Global Paint Limited') ?></title>
  <meta name="description" content="<?= Sanitizer::escape($settings['seo_description'] ?? '') ?>">
  <link rel="icon" type="image/jpeg" href="<?= Sanitizer::escape($settings['logo_url'] ?? '/assets/images/skewbo-logo.jpg') ?>">
  <!-- Bootstrap 5 Framework -->
  <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

  <!-- Top Bar -->
  <div class="topbar">
    <div class="container">
      <div class="topbar-info">
        <span class="topbar-item">📍 <?= Sanitizer::escape($settings['business_address'] ?? '') ?></span>
        <span class="topbar-item">🕒 <?= Sanitizer::escape($settings['business_hours'] ?? '') ?></span>
        <span class="topbar-item">✉️ <a href="mailto:<?= Sanitizer::escape($settings['email_address'] ?? '') ?>"><?= Sanitizer::escape($settings['email_address'] ?? '') ?></a></span>
      </div>
      <div class="topbar-actions">
        <a href="/admin" class="admin-switch-btn">Admin Portal</a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="brand-logo-container">
        <img src="<?= Sanitizer::escape($settings['logo_url'] ?? '/assets/images/skewbo-logo.jpg') ?>" 
             alt="Skewbo Global Paint Limited Logo" 
             class="official-logo-img">
      </a>

      <nav class="main-nav">
        <a href="#home" class="nav-link active">Home</a>
        <a href="#about" class="nav-link">About Us</a>
        <a href="#brands" class="nav-link">Paint Brands</a>
        <a href="#products" class="nav-link">Products</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#industries" class="nav-link">Industries</a>
        <a href="#why-us" class="nav-link">Why Choose Us</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>

      <div class="header-actions">
        <button class="quote-cart-btn" onclick="openQuoteModal()">
          <span>Quote Cart</span>
          <span class="quote-badge" id="quoteBadgeCount">0</span>
        </button>
        <a href="#quote" class="btn btn-primary btn-sm">Request a Quote</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero-section">
    <div class="container hero-grid">
      <div>
        <div class="hero-pill">Official Paint & Materials Supplier</div>
        <h1 class="hero-title"><?= Sanitizer::escape($settings['hero_title'] ?? 'Premium Paints, Coatings & Building Materials You Can Trust') ?></h1>
        <p class="hero-description"><?= Sanitizer::escape($settings['hero_description'] ?? '') ?></p>
        <div class="hero-cta-group">
          <a href="#products" class="btn btn-primary">Explore Products</a>
          <a href="#quote" class="btn btn-outline-white">Request a Quote</a>
        </div>
      </div>
      <div>
        <div class="hero-card">
          <div class="hero-card-header">
            <h3>Industrial Sourcing & Supply</h3>
            <p>Reliable logistics for marine, building & civil projects</p>
          </div>
          <ul class="hero-feature-list">
            <li class="hero-feature-item"><span class="hero-feature-icon">✓</span> Marine & Protective Industrial Coatings</li>
            <li class="hero-feature-item"><span class="hero-feature-icon">✓</span> International, Sigma, Jotun & Hempel Paints</li>
            <li class="hero-feature-item"><span class="hero-feature-icon">✓</span> Portland Cement & Construction Chemicals</li>
            <li class="hero-feature-item"><span class="hero-feature-icon">✓</span> Pressure PVC, PPR & HDPE Plumbing Pipes</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Content rendered cleanly with PHP views -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom-bar">
        <p>&copy; <?= date('Y') ?> <?= Sanitizer::escape($settings['footer_copyright'] ?? 'Skewbo Global Paint Limited. All Rights Reserved.') ?></p>
        <div class="footer-legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="/admin">Staff Login</a>
        </div>
      </div>
    </div>
  </footer>

  <script src="/assets/js/bootstrap.bundle.min.js"></script>
  <script src="/assets/js/main.js"></script>
</body>
</html>
