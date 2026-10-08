-- ============================================================================
-- Database: `skewbo_global`
-- Skewbo Global Paint Limited - Master MySQL Schema & Initial Data
-- Engine: InnoDB, Charset: utf8mb4_unicode_ci
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `skewbo_global` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `skewbo_global`;

-- ----------------------------------------------------------------------------
-- Table: admins
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(100) NOT NULL,
  `role` ENUM('super_admin', 'manager', 'editor') DEFAULT 'super_admin',
  `last_login` DATETIME NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_admin_username` (`username`),
  INDEX `idx_admin_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: brands
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL UNIQUE,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `logo_url` VARCHAR(255) NULL,
  `description` TEXT NULL,
  `website` VARCHAR(255) NULL,
  `is_active` TINYINT(1) DEFAULT 1,
  `display_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_brand_slug` (`slug`),
  INDEX `idx_brand_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: categories
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `parent_id` INT UNSIGNED NULL DEFAULT NULL,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `description` TEXT NULL,
  `image_url` VARCHAR(255) NULL,
  `is_active` TINYINT(1) DEFAULT 1,
  `display_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`parent_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL,
  INDEX `idx_cat_slug` (`slug`),
  INDEX `idx_cat_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: products
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `brand_id` INT UNSIGNED NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `short_description` TEXT NULL,
  `description` LONGTEXT NULL,
  `application_use` TEXT NULL,
  `specifications` JSON NULL,
  `packaging` VARCHAR(150) DEFAULT '20 Litre Drum, 4 Litre Gallon',
  `price` DECIMAL(12, 2) NULL DEFAULT 0.00,
  `show_price` TINYINT(1) DEFAULT 0,
  `availability` ENUM('in_stock', 'pre_order', 'on_request') DEFAULT 'in_stock',
  `featured` TINYINT(1) DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `image_url` VARCHAR(255) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`brand_id`) REFERENCES `brands`(`id`) ON DELETE SET NULL,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT,
  INDEX `idx_prod_slug` (`slug`),
  INDEX `idx_prod_status` (`status`),
  INDEX `idx_prod_featured` (`featured`),
  FULLTEXT INDEX `ft_prod_search` (`name`, `short_description`, `description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: product_images
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `product_images`;
CREATE TABLE `product_images` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `product_id` INT UNSIGNED NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  `is_primary` TINYINT(1) DEFAULT 0,
  `display_order` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: enquiries (Quote Requests)
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `enquiries`;
CREATE TABLE `enquiries` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `reference_no` VARCHAR(50) NOT NULL UNIQUE,
  `full_name` VARCHAR(100) NOT NULL,
  `company_name` VARCHAR(150) NULL,
  `phone` VARCHAR(30) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `project_type` VARCHAR(100) NULL,
  `location` VARCHAR(150) NULL,
  `message` TEXT NULL,
  `status` ENUM('New', 'Contacted', 'Quoted', 'Completed', 'Cancelled') DEFAULT 'New',
  `internal_notes` TEXT NULL,
  `ip_address` VARCHAR(45) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_enq_ref` (`reference_no`),
  INDEX `idx_enq_status` (`status`),
  INDEX `idx_enq_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: enquiry_items
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `enquiry_items`;
CREATE TABLE `enquiry_items` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `enquiry_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NULL,
  `product_name` VARCHAR(255) NOT NULL,
  `quantity` VARCHAR(50) NOT NULL DEFAULT '1',
  `notes` VARCHAR(255) NULL,
  FOREIGN KEY (`enquiry_id`) REFERENCES `enquiries`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: site_settings
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `site_settings`;
CREATE TABLE `site_settings` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `setting_key` VARCHAR(100) NOT NULL UNIQUE,
  `setting_value` LONGTEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX `idx_setting_key` (`setting_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: contact_messages
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `contact_messages`;
CREATE TABLE `contact_messages` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(30) NULL,
  `subject` VARCHAR(200) NOT NULL,
  `message` TEXT NOT NULL,
  `is_read` TINYINT(1) DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_msg_read` (`is_read`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------------------------------------------------------
-- Table: faqs
-- ----------------------------------------------------------------------------
DROP TABLE IF EXISTS `faqs`;
CREATE TABLE `faqs` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `question` VARCHAR(255) NOT NULL,
  `answer` TEXT NOT NULL,
  `display_order` INT DEFAULT 0,
  `is_active` TINYINT(1) DEFAULT 1,
  INDEX `idx_faq_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- SEED DATA
-- ============================================================================

-- Default Admin User: (Username: admin, Password: SkewboAdmin2026!)
INSERT INTO `admins` (`username`, `email`, `password_hash`, `full_name`, `role`) VALUES
('admin', 'admin@skewboglobal.com', '$2y$10$0k7oU/0iLdFz1sJmgmQ2Q.dJp5vYcW1bFjQ/6iF6Xw4G.N/aA0.yS', 'Skewbo System Administrator', 'super_admin');

-- Brands
INSERT INTO `brands` (`id`, `name`, `slug`, `logo_url`, `description`, `is_active`, `display_order`) VALUES
(1, 'International Paint', 'international-paint', '/assets/images/international-logo.jpg', 'Globally trusted high-performance marine coatings, heavy duty epoxy primers, and protective industrial coatings for offshore and harsh atmospheric environments.', 1, 1),
(2, 'Sigma Paint', 'sigma-paint', '/assets/images/sigma-logo.jpg', 'World-class protective and marine coatings specializing in ballast tank protection, cargo hold linings, anti-fouling systems, and industrial metal steel protection.', 1, 2),
(3, 'Jotun Paint', 'jotun-paint', '/assets/images/jotun-logo.jpg', 'Leading Norwegian protective coatings, marine epoxy coatings, anti-corrosive systems, and decorative exterior architectural finishes engineered for extreme durability.', 1, 3),
(4, 'Hempel Paint', 'hempel-paint', '/assets/images/hempel-logo.jpg', 'Renowned Danish marine coatings, anti-corrosive systems, infrastructure protective paints, and high temperature resistant coatings.', 1, 4),
(5, 'Other Reputable Brands', 'other-reputable-brands', '/assets/images/paint-products.jpg', 'Selected top-quality paint and coating brands available in Nigeria for specialized architectural, automotive, and industrial uses.', 1, 5);

-- Categories
INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `image_url`, `is_active`, `display_order`) VALUES
(1, 'Marine Paints', 'marine-paints', 'Specialized marine coatings, antifouling paints, ballast tank linings, and boot-top coatings for ships, offshore barges, and marine equipment.', '/assets/images/hero-industrial.jpg', 1, 1),
(2, 'Industrial & Protective Coatings', 'industrial-coatings', 'Heavy duty epoxy primers, polyurethane topcoats, and anti-corrosion barrier coatings for steel structures, oil & gas assets, and industrial plants.', '/assets/images/paint-products.jpg', 1, 2),
(3, 'Building & Decorative Paints', 'building-paints', 'Premium interior and exterior emulsions, acrylic weather-shield coatings, primers, and satin finishes for residential and commercial structures.', '/assets/images/paint-products.jpg', 1, 3),
(4, 'Primers, Thinners & Chemicals', 'primers-thinners', 'Zinc-rich primers, epoxy thinners, universal retarders, etching solutions, and industrial degreasers.', '/assets/images/paint-products.jpg', 1, 4),
(5, 'Building Materials', 'building-materials', 'Quality construction materials including high-grade cement, roofing sheets, ceiling systems, floor tiles, and structural bonding adhesives.', '/assets/images/building-materials.jpg', 1, 5),
(6, 'Plumbing Materials', 'plumbing-materials', 'Comprehensive plumbing solutions including pressure PVC pipes, PPR hot and cold pipes, HDPE coils, valves, brass taps, and drainage fittings.', '/assets/images/plumbing-materials.jpg', 1, 6);

-- Products
INSERT INTO `products` (`id`, `name`, `slug`, `brand_id`, `category_id`, `short_description`, `description`, `application_use`, `specifications`, `packaging`, `price`, `show_price`, `availability`, `featured`, `status`, `image_url`) VALUES
(1, 'Jotamastic 90 High Solids Epoxy Mastic', 'jotamastic-90-epoxy-mastic', 3, 2, 'Two-component polyamine cured epoxy mastic coating offering superior surface tolerance and anti-corrosive protection.', 'Jotamastic 90 is designed for maintenance and repair of steel structures where optimum surface preparation is difficult. Provides long-lasting protection in atmospheric and immersed environments.', 'Marine hulls, offshore rigs, refinery pipelines, and industrial structural steelwork.', '{"Volume Solids": "80%", "Drying Time": "2.5 Hours", "Recommended Thinner": "Jotun Thinner No. 17", "Theoretical Coverage": "8 m²/L"}', '20 Litre Drum (Part A & B)', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/paint-products.jpg'),
(2, 'Interprotect High Build Epoxy Primer', 'interprotect-high-build-epoxy-primer', 1, 1, 'Heavy duty two-pack epoxy primer with micaceous iron oxide barrier protection against water ingress and corrosion.', 'Interprotect provides exceptional chemical resistance and osmotic blistering defense for marine hulls, submerged equipment, and marine transport vessels.', 'Steel and fiberglass boat hulls, water treatment tanks, marine docks.', '{"Volume Solids": "65%", "Drying Time": "3 Hours", "Pot Life": "6 Hours at 25°C", "Finish": "Semi-Gloss"}', '20 Litre Drum, 4 Litre Gallon', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/hero-industrial.jpg'),
(3, 'SigmaPrime 200 Multi-Purpose Epoxy System', 'sigmaprime-200-epoxy-system', 2, 1, 'Universal epoxy primer system providing outstanding anti-corrosion performance for all ship areas.', 'SigmaPrime 200 delivers excellent adhesion to steel and shop primers, with superior water resistance and mechanical durability suitable for heavy marine service.', 'Vessel topsides, decks, superstructures, and ballast tanks.', '{"Volume Solids": "57%", "Recoat Interval": "Min 4h", "Flash Point": "28°C", "Application": "Airless Spray / Roller"}', '20 Litre Set', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/hero-industrial.jpg'),
(4, 'Hempadur Quattro 17634 Epoxy Primer', 'hempadur-quattro-17634', 4, 2, 'Two-component universal epoxy coating which cures to a hard and tough coating with good resistance to abrasion and seawater.', 'Hempadur Quattro is engineered as a year-round universal primer for heavy industrial structures and marine vessels operating in challenging climates.', 'Bridges, marine offshore structures, oil storage tank exteriors.', '{"Volume Solids": "72%", "Dry Film Thickness": "125-200 microns", "Color": "Grey / Red", "Base": "Polyamide Cured"}', '20 Litre Drum', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/paint-products.jpg'),
(5, 'Hardtop XP Polyurethane Topcoat', 'hardtop-xp-polyurethane-topcoat', 3, 2, 'Two-pack chemically curing aliphatic polyurethane coating with excellent gloss and color retention.', 'Specially formulated as an ultra-durable industrial topcoat resistant to intense marine UV exposure, industrial chemical fallouts, and weather abrasion.', 'Exterior marine topsides, oil & gas facilities, commercial architectural facades.', '{"Gloss Level": "High Gloss", "Volume Solids": "63%", "UV Resistance": "Superior Class 1", "Recoatable": "Yes"}', '20 Litre Drum, 5 Litre Gallon', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/paint-products.jpg'),
(6, 'Skewbo Heavy Duty Zinc Phosphate Primer', 'skewbo-zinc-phosphate-primer', 5, 4, 'Fast drying anti-corrosive synthetic alkyd primer for structural steel framing and metal fabrications.', 'Offers robust rust-inhibiting protection on cleaned structural steelwork before final architectural or industrial topcoating.', 'Structural steel frames, warehouses, gates, and commercial metal roofing frameworks.', '{"Drying Time": "30 mins touch dry", "Specific Gravity": "1.35", "Thinning": "Industrial Mineral Thinner"}', '20 Litre Drum, 4 Litre Gallon', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/paint-products.jpg'),
(7, 'Premium Portland Cement (Grade 42.5R)', 'premium-portland-cement-425r', NULL, 5, 'High strength rapid hardening Portland cement for heavy civil and construction works.', 'Quality certified Portland cement delivering exceptional compressive strength for multi-storey structural beams, foundation piling, and concrete blocks.', 'Foundations, load-bearing concrete, structural columns, civil bridges.', '{"Grade": "42.5R High Early Strength", "Setting Time": "Initial 75 mins", "Compliance": "NIS/BS Standard"}', '50kg Moisture-Resistant Bag / Bulk Pallets', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/building-materials.jpg'),
(8, 'Industrial Construction Chemical & Waterproofing Bonding Agent', 'construction-waterproofing-bonding-agent', NULL, 5, 'Polymer modified liquid bonding additive and waterproofing admixture for mortars and screeds.', 'Improves tensile strength, water impermeability, and chemical resistance in concrete, plaster, and floor toppings.', 'Water retaining basements, swimming pools, concrete roofs, and tile adhesives.', '{"Dosage": "5-10% by cement weight", "Form": "Milky Liquid", "pH": "7.5 - 8.5"}', '25 Litre Drum / 200 Litre Barrel', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/building-materials.jpg'),
(9, 'Heavy Duty Class E PVC Pressure Pipes (PN16)', 'heavy-duty-class-e-pvc-pressure-pipes', NULL, 6, 'High density unplasticized polyvinyl chloride pressure pipes for industrial and municipal water supply.', 'Manufactured for high pressure endurance, smooth flow hydraulics, and full resistance to chemical soil corrosion.', 'Potable water networks, industrial water cooling pipelines, irrigation mains.', '{"Pressure Rating": "PN16 / Class E", "Diameters": "1/2 inch to 8 inch", "Standard Length": "5.8 meters / 6 meters"}', 'Bundles of 10 / Project Lots', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/plumbing-materials.jpg'),
(10, 'PPR Hot & Cold Water Piping System & Brass Insert Fittings', 'ppr-hot-cold-water-piping-system', NULL, 6, 'High molecular polypropylene random copolymer pipes and fusion fittings for domestic and industrial plumbing.', 'Provides zero corrosion, exceptional heat tolerance up to 95°C, and leak-proof thermal fusion welded joints.', 'Hospital hot water lines, residential estates, high-rise building plumbing risers.', '{"Temperature Tolerance": "Up to 95°C", "Working Pressure": "PN20 / PN25", "Material": "100% Virgin PPR"}', '4 Meter Lengths / Assorted Boxes', 0.00, 0, 'in_stock', 1, 'active', '/assets/images/plumbing-materials.jpg'),
(11, 'Industrial Brass & Bronze Gate Valves (PN25)', 'industrial-brass-bronze-gate-valves', NULL, 6, 'Heavy pattern full-bore brass and bronze gate valves with solid wedge disc and non-rising stem.', 'Engineered for smooth bi-directional shut-off service in water, oil, and non-corrosive industrial fluids.', 'Main water distribution lines, plumbing pump headers, boiler feed setups.', '{"Nominal Pressure": "25 Bar (PN25)", "Connection": "BSPT Female Threaded", "Size Range": "1/2 inch to 4 inch"}', 'Single Units / Carton of 24', 0.00, 0, 'in_stock', 0, 'active', '/assets/images/plumbing-materials.jpg'),
(12, 'High-Traffic Porcelain Floor Tiles & Heavy Adhesives', 'high-traffic-porcelain-floor-tiles', NULL, 5, 'Vitrified non-porous floor and wall tiles engineered for heavy commercial and industrial pedestrian traffic.', 'Scratch-resistant, chemical-resistant tiles paired with high-polymer tile adhesives for reliable long-term bonding.', 'Showrooms, corporate offices, industrial corridors, and residential developments.', '{"Water Absorption": "< 0.5%", "Sizes": "60x60cm, 60x120cm", "Surface": "Polished / Matte Anti-Slip"}', 'Boxes / Pallet Quantities', 0.00, 0, 'in_stock', 0, 'active', '/assets/images/building-materials.jpg');

-- Site Settings
INSERT INTO `site_settings` (`setting_key`, `setting_value`) VALUES
('business_name', 'Skewbo Global Paint Limited'),
('logo_url', '/assets/images/skewbo-logo.jpg'),
('business_address', '50B Hospital Road Port Harcourt Rivers State'),
('phone_number', '07050509842'),
('whatsapp_number', '2347050509842'),
('whatsapp_default_message', 'Hello Skewbo Global Paint Limited, I would like to enquire about your products and request a quotation.'),
('email_address', 'info@skewboglobal.com'),
('business_hours', 'Monday - Friday: 8:00 AM - 5:30 PM | Saturday: 9:00 AM - 3:00 PM'),
('facebook_url', 'https://facebook.com/'),
('instagram_url', 'https://instagram.com/'),
('linkedin_url', 'https://linkedin.com/company/'),
('google_maps_url', 'https://maps.google.com/?q=50B+Hospital+Road+Port+Harcourt+Rivers+State'),
('hero_title', 'Premium Paints, Coatings & Building Materials You Can Trust'),
('hero_description', 'Quality paints, industrial coatings, building materials and plumbing solutions for homes, businesses, construction projects and industrial applications.'),
('footer_copyright', 'Skewbo Global Paint Limited. All Rights Reserved.'),
('seo_title', 'Skewbo Global Paint Limited | Industrial & Marine Paints, Building & Plumbing Materials Nigeria'),
('seo_description', 'Reliable supplier of premium marine paints, industrial coatings (Jotun, International, Sigma, Hempel), building materials, and plumbing supplies in Nigeria.');

-- Sample Quote Inquiries
INSERT INTO `enquiries` (`id`, `reference_no`, `full_name`, `company_name`, `phone`, `email`, `project_type`, `location`, `message`, `status`, `internal_notes`) VALUES
(1, 'SKG-2026-0001', 'Engr. Babatunde Alabi', 'Niger Delta Marine Logistics', '+234 803 123 4567', 'balabi@ndmarine.com', 'Marine Vessel Maintenance', 'Warri Port, Delta State', 'We require supply of Jotamastic 90 and Interprotect primer for an upcoming 1,500 DWT cargo barge maintenance docking in Warri.', 'Quoted', 'Formal invoice and delivery schedule sent via email. Awaiting client purchase order.'),
(2, 'SKG-2026-0002', 'Arch. Chidiebere Okeke', 'Apex Built Construction Ltd', '+234 802 987 6543', 'c.okeke@apexbuilt.ng', 'Commercial Building Construction', 'Victoria Island, Lagos', 'Please provide quotation for 500 bags of 42.5R Portland cement and PN16 PVC pressure pipe lots for plumbing installations.', 'New', 'New enquiry received. Sourcing logistics team reviewing delivery schedule to Lagos Island.');

INSERT INTO `enquiry_items` (`enquiry_id`, `product_id`, `product_name`, `quantity`, `notes`) VALUES
(1, 1, 'Jotamastic 90 High Solids Epoxy Mastic', '15 x 20L Drums', 'Part A & B Aluminium Grey'),
(1, 2, 'Interprotect High Build Epoxy Primer', '10 x 20L Drums', 'High build barrier'),
(2, 7, 'Premium Portland Cement (Grade 42.5R)', '500 Bags', 'Site delivery required'),
(2, 9, 'Heavy Duty Class E PVC Pressure Pipes (PN16)', '60 Lengths (3 Inch)', 'PN16 with fittings');

-- FAQs
INSERT INTO `faqs` (`question`, `answer`, `display_order`, `is_active`) VALUES
('Do you supply industrial paints?', 'Yes. Skewbo Global Paint Limited supplies industrial protective coatings, epoxy primers, polyurethane topcoats, and anti-corrosive barrier coatings suitable for manufacturing plants, structural steel, pipelines, and civil infrastructure.', 1, 1),
('Do you supply marine paints?', 'Yes. We supply high-performance marine coatings including antifouling paints, high-build epoxy mastic primers, ballast tank linings, and deck finishes from world-renowned brands like Jotun, International Paint, Sigma, and Hempel.', 2, 1),
('What paint brands do you sell?', 'We offer supply and distribution of reputable global and local brands including International Paint, Sigma Paint, Jotun Paint, Hempel Paint, as well as other quality architectural and industrial coatings available in Nigeria.', 3, 1),
('Do you supply building materials?', 'Yes. In addition to our paint business, we supply selected construction and building materials including cement, blocks, roofing systems, tiles, bonding adhesives, and construction chemicals for projects across Nigeria.', 4, 1),
('Do you supply plumbing materials?', 'Yes. We supply comprehensive plumbing materials including PVC pressure pipes, PPR hot and cold water pipes, HDPE pipes, gate valves, pipe fittings, and plumbing accessories for residential, commercial, and industrial facilities.', 5, 1),
('Can I request a quotation for my project?', 'Absolutely. You can use our online "Request a Quote" feature or quotation builder to select the products and quantities you need. Our team will review your specifications and generate an official reference-coded quotation (#SKG-2026-XXXX).', 6, 1),
('Do you handle bulk and project orders?', 'Yes. We cater to large-scale procurement for building contractors, offshore operators, industrial plants, real estate developers, and government projects with flexible logistics support.', 7, 1);
