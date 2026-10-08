# Skewbo Global Paint Limited - Production Deployment Guide

This package contains the complete, production-ready website and administration portal for **Skewbo Global Paint Limited**, built with clean **HTML5, CSS3, Vanilla JavaScript, PHP 8+, and MySQL**.

---

## 1. Directory Structure

```text
/skewbo-global/
│
├── public/                    <-- Web Root (Point VirtualHost or public_html here)
│   ├── index.php              <-- Front controller
│   ├── .htaccess              <-- URL rewriting & security headers
│   └── assets/
│       ├── css/style.css      <-- Custom vanilla CSS3
│       ├── js/main.js         <-- Vanilla JavaScript
│       ├── images/            <-- Official logo & banners
│       └── uploads/           <-- Product uploads directory
│
├── app/
│   ├── Controllers/           <-- Application controllers
│   ├── Models/                <-- Product, Brand, Category, Enquiry, Setting models
│   ├── Views/                 <-- Modular presentation templates
│   ├── Core/                  <-- Database (PDO singleton), Router
│   └── Helpers/               <-- Auth (session & password_hash), Sanitizer (XSS protection)
│
├── config/
│   ├── config.php             <-- Main application settings & constants
│   └── database.php           <-- MySQL PDO credentials
│
├── admin/                     <-- Dedicated secure admin portal
│   ├── index.php              <-- Admin dashboard & CRUD management
│   └── login.php              <-- Admin login & session verification
│
└── database/
    └── skewbo_global.sql      <-- Full database schema & seed demonstration data
```

---

## 2. Requirements

- **PHP 8.0 or newer** (with `pdo_mysql`, `mbstring`, `fileinfo` extensions enabled)
- **MySQL 5.7+ or MariaDB 10.3+**
- **Apache Web Server** (with `mod_rewrite` enabled) or **Nginx**

---

## 3. Database Installation

1. Create a new MySQL database named `skewbo_global`:
   ```sql
   CREATE DATABASE skewbo_global CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```
2. Import the schema script:
   ```bash
   mysql -u root -p skewbo_global < database/skewbo_global.sql
   ```
   *(Or in phpMyAdmin: Select `skewbo_global` -> Click Import -> Select `database/skewbo_global.sql` -> Go).*

---

## 4. Configuration

Edit `config/database.php` with your database credentials:

```php
return [
    'host'     => '127.0.0.1',
    'port'     => '3306',
    'database' => 'skewbo_global',
    'username' => 'your_db_username',
    'password' => 'your_db_password',
    'charset'  => 'utf8mb4',
];
```

Ensure the upload directory is writable by your web server:
```bash
chmod -R 775 public/assets/uploads
```

---

## 5. Default Admin Credentials

- **Admin URL:** `http://your-domain.com/admin`
- **Username:** `admin`
- **Default Password:** `SkewboAdmin2026!`

*(Note: Change your password immediately upon first login in the Admin portal).*
