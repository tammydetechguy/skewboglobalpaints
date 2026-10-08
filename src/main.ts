/**
 * Skewbo Global Paint Limited
 * Master Application (Bootstrap 5 Integrated, Modern Minimal & Light Design)
 */

interface Brand {
  id: number;
  name: string;
  slug: string;
  logo_url: string;
  description: string;
  is_active: boolean;
  display_order: number;
}

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  is_active: boolean;
  display_order: number;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  brand_id: number | null;
  category_id: number;
  short_description: string;
  description: string;
  application_use: string;
  specifications: Record<string, string>;
  packaging: string;
  price: number;
  show_price: boolean;
  availability: 'in_stock' | 'pre_order' | 'on_request';
  featured: boolean;
  status: 'active' | 'inactive';
  image_url: string;
}

interface QuoteItem {
  product_id?: number;
  product_name: string;
  quantity: string;
  notes?: string;
}

interface Enquiry {
  id: number;
  reference_no: string;
  full_name: string;
  company_name: string;
  phone: string;
  email: string;
  project_type: string;
  location: string;
  message: string;
  status: 'New' | 'Contacted' | 'Quoted' | 'Completed' | 'Cancelled';
  internal_notes: string;
  created_at: string;
  items: QuoteItem[];
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
  is_read: boolean;
}

interface SiteSettings {
  business_name: string;
  logo_url: string;
  business_address: string;
  phone_number: string;
  whatsapp_number: string;
  whatsapp_default_message: string;
  email_address: string;
  business_hours: string;
  facebook_url: string;
  instagram_url: string;
  linkedin_url: string;
  google_maps_url: string;
  hero_title: string;
  hero_description: string;
  footer_copyright: string;
  seo_title: string;
  seo_description: string;
}

// ---------------------------------------------------------------------------
// INITIAL DATA
// ---------------------------------------------------------------------------

const DEFAULT_SETTINGS: SiteSettings = {
  business_name: "Skewbo Global Paint Limited",
  logo_url: "/assets/images/skewbo-logo.jpg",
  business_address: "50B Hospital Road Port Harcourt Rivers State",
  phone_number: "07050509842",
  whatsapp_number: "2347050509842",
  whatsapp_default_message: "Hello Skewbo Global Paint Limited, I would like to enquire about your products and request a quotation.",
  email_address: "info@skewboglobal.com",
  business_hours: "Monday - Friday: 8:00 AM - 5:30 PM | Saturday: 9:00 AM - 3:00 PM",
  facebook_url: "https://facebook.com/skewboglobal",
  instagram_url: "https://instagram.com/skewboglobal",
  linkedin_url: "https://linkedin.com/company/skewbo-global-paint",
  google_maps_url: "https://maps.google.com/?q=50B+Hospital+Road+Port+Harcourt+Rivers+State",
  hero_title: "Premium Paints, Protective Coatings & Building Materials",
  hero_description: "Leading sales and supply distributor of marine, industrial, architectural paints, certified building materials, and plumbing supplies for projects across Nigeria.",
  footer_copyright: "Skewbo Global Paint Limited. All Rights Reserved.",
  seo_title: "Skewbo Global Paint Limited | Marine, Industrial & Architectural Paints, Building & Plumbing Supplies Nigeria",
  seo_description: "Reliable supplier of premium marine paints, industrial coatings (Jotun, International, Sigma, Hempel), building materials, and plumbing supplies in Nigeria."
};

const DEFAULT_BRANDS: Brand[] = [
  {
    id: 1,
    name: "International Paint",
    slug: "international-paint",
    logo_url: "/assets/images/international-logo.jpg",
    description: "Globally trusted high-performance marine coatings, heavy duty epoxy primers, and protective industrial coatings for offshore and harsh atmospheric environments.",
    is_active: true,
    display_order: 1
  },
  {
    id: 2,
    name: "Sigma Paint",
    slug: "sigma-paint",
    logo_url: "/assets/images/sigma-logo.jpg",
    description: "World-class protective and marine coatings specializing in ballast tank protection, cargo hold linings, anti-fouling systems, and industrial metal steel protection.",
    is_active: true,
    display_order: 2
  },
  {
    id: 3,
    name: "Jotun Paint",
    slug: "jotun-paint",
    logo_url: "/assets/images/jotun-logo.jpg",
    description: "Leading Norwegian protective coatings, marine epoxy coatings, anti-corrosive systems, and decorative exterior architectural finishes engineered for extreme durability.",
    is_active: true,
    display_order: 3
  },
  {
    id: 4,
    name: "Hempel Paint",
    slug: "hempel-paint",
    logo_url: "/assets/images/hempel-logo.jpg",
    description: "Renowned Danish marine coatings, anti-corrosive systems, infrastructure protective paints, and high temperature resistant coatings.",
    is_active: true,
    display_order: 4
  },
  {
    id: 5,
    name: "Other Quality Brands",
    slug: "other-reputable-brands",
    logo_url: "/assets/images/marine-paint-pails.jpg",
    description: "Selected top-quality paint and coating brands available in Nigeria for specialized architectural, automotive, and industrial uses.",
    is_active: true,
    display_order: 5
  }
];

const DEFAULT_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Marine Paints",
    slug: "marine-paints",
    description: "Specialized marine coatings, antifouling paints, ballast tank linings, and boot-top coatings for ships, offshore barges, and marine equipment.",
    image_url: "/assets/images/marine-paint-buckets.jpg",
    is_active: true,
    display_order: 1
  },
  {
    id: 2,
    name: "Industrial & Protective Coatings",
    slug: "industrial-coatings",
    description: "Heavy duty epoxy primers, polyurethane topcoats, and anti-corrosion barrier coatings for steel structures, oil & gas assets, and industrial plants.",
    image_url: "/assets/images/paint-products.jpg",
    is_active: true,
    display_order: 2
  },
  {
    id: 3,
    name: "Building & Decorative Paints",
    slug: "building-paints",
    description: "Premium interior and exterior emulsions, acrylic weather-shield coatings, primers, and satin finishes for residential and commercial structures.",
    image_url: "/assets/images/marine-paint-pails.jpg",
    is_active: true,
    display_order: 3
  },
  {
    id: 4,
    name: "Primers, Thinners & Chemicals",
    slug: "primers-thinners",
    description: "Zinc-rich primers, epoxy thinners, universal retarders, etching solutions, and industrial degreasers.",
    image_url: "/assets/images/paint-products.jpg",
    is_active: true,
    display_order: 4
  },
  {
    id: 5,
    name: "Building Materials",
    slug: "building-materials",
    description: "Quality construction materials including high-grade cement, roofing sheets, ceiling systems, floor tiles, and structural bonding adhesives.",
    image_url: "/assets/images/building-materials.jpg",
    is_active: true,
    display_order: 5
  },
  {
    id: 6,
    name: "Plumbing Materials",
    slug: "plumbing-materials",
    description: "Comprehensive plumbing solutions including pressure PVC pipes, PPR hot and cold pipes, HDPE coils, valves, brass taps, and drainage fittings.",
    image_url: "/assets/images/plumbing-materials.jpg",
    is_active: true,
    display_order: 6
  }
];

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Jotamastic 90 High Solids Epoxy Mastic",
    slug: "jotamastic-90-epoxy-mastic",
    brand_id: 3,
    category_id: 2,
    short_description: "Two-component polyamine cured epoxy mastic coating offering superior surface tolerance and anti-corrosive protection.",
    description: "Jotamastic 90 is designed for maintenance and repair of steel structures where optimum surface preparation is difficult. Provides long-lasting protection in atmospheric and immersed environments.",
    application_use: "Marine hulls, offshore rigs, refinery pipelines, and industrial structural steelwork.",
    specifications: {
      "Volume Solids": "80%",
      "Drying Time": "2.5 Hours",
      "Recommended Thinner": "Jotun Thinner No. 17",
      "Theoretical Coverage": "8 m²/L"
    },
    packaging: "20 Litre Drum (Part A & B)",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/marine-paint-buckets.jpg"
  },
  {
    id: 2,
    name: "Interprotect High Build Epoxy Primer",
    slug: "interprotect-high-build-epoxy-primer",
    brand_id: 1,
    category_id: 1,
    short_description: "Heavy duty two-pack epoxy primer with micaceous iron oxide barrier protection against water ingress and corrosion.",
    description: "Interprotect provides exceptional chemical resistance and osmotic blistering defense for marine hulls, submerged equipment, and marine transport vessels.",
    application_use: "Steel and fiberglass boat hulls, water treatment tanks, marine docks.",
    specifications: {
      "Volume Solids": "65%",
      "Drying Time": "3 Hours",
      "Pot Life": "6 Hours at 25°C",
      "Finish": "Semi-Gloss"
    },
    packaging: "20 Litre Drum, 4 Litre Gallon",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/marine-paint-pails.jpg"
  },
  {
    id: 3,
    name: "SigmaPrime 200 Multi-Purpose Epoxy System",
    slug: "sigmaprime-200-epoxy-system",
    brand_id: 2,
    category_id: 1,
    short_description: "Universal epoxy primer system providing outstanding anti-corrosion performance for all ship areas.",
    description: "SigmaPrime 200 delivers excellent adhesion to steel and shop primers, with superior water resistance and mechanical durability suitable for heavy marine service.",
    application_use: "Vessel topsides, decks, superstructures, and ballast tanks.",
    specifications: {
      "Volume Solids": "57%",
      "Recoat Interval": "Min 4h",
      "Flash Point": "28°C",
      "Application": "Airless Spray / Roller"
    },
    packaging: "20 Litre Set",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/marine-paint-buckets.jpg"
  },
  {
    id: 4,
    name: "Hempadur Quattro 17634 Epoxy Primer",
    slug: "hempadur-quattro-17634",
    brand_id: 4,
    category_id: 2,
    short_description: "Two-component universal epoxy coating which cures to a hard and tough coating with good resistance to abrasion and seawater.",
    description: "Hempadur Quattro is engineered as a year-round universal primer for heavy industrial structures and marine vessels operating in challenging climates.",
    application_use: "Bridges, marine offshore structures, oil storage tank exteriors.",
    specifications: {
      "Volume Solids": "72%",
      "Dry Film Thickness": "125-200 microns",
      "Color": "Grey / Red",
      "Base": "Polyamide Cured"
    },
    packaging: "20 Litre Drum",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/paint-products.jpg"
  },
  {
    id: 5,
    name: "Hardtop XP Polyurethane Topcoat",
    slug: "hardtop-xp-polyurethane-topcoat",
    brand_id: 3,
    category_id: 2,
    short_description: "Two-pack chemically curing aliphatic polyurethane coating with excellent gloss and color retention.",
    description: "Specially formulated as an ultra-durable industrial topcoat resistant to intense marine UV exposure, industrial chemical fallouts, and weather abrasion.",
    application_use: "Exterior marine topsides, oil & gas facilities, commercial architectural facades.",
    specifications: {
      "Gloss Level": "High Gloss",
      "Volume Solids": "63%",
      "UV Resistance": "Superior Class 1",
      "Recoatable": "Yes"
    },
    packaging: "20 Litre Drum, 5 Litre Gallon",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/marine-paint-pails.jpg"
  },
  {
    id: 6,
    name: "Skewbo Heavy Duty Zinc Phosphate Primer",
    slug: "skewbo-zinc-phosphate-primer",
    brand_id: 5,
    category_id: 4,
    short_description: "Fast drying anti-corrosive synthetic alkyd primer for structural steel framing and metal fabrications.",
    description: "Offers robust rust-inhibiting protection on cleaned structural steelwork before final architectural or industrial topcoating.",
    application_use: "Structural steel frames, warehouses, gates, and commercial metal roofing frameworks.",
    specifications: {
      "Drying Time": "30 mins touch dry",
      "Specific Gravity": "1.35",
      "Thinning": "Industrial Mineral Thinner"
    },
    packaging: "20 Litre Drum, 4 Litre Gallon",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/paint-products.jpg"
  },
  {
    id: 7,
    name: "Premium Portland Cement (Grade 42.5R)",
    slug: "premium-portland-cement-425r",
    brand_id: null,
    category_id: 5,
    short_description: "High strength rapid hardening Portland cement for heavy civil and construction works.",
    description: "Quality certified Portland cement delivering exceptional compressive strength for multi-storey structural beams, foundation piling, and concrete blocks.",
    application_use: "Foundations, load-bearing concrete, structural columns, civil bridges.",
    specifications: {
      "Grade": "42.5R High Early Strength",
      "Setting Time": "Initial 75 mins",
      "Compliance": "NIS/BS Standard"
    },
    packaging: "50kg Moisture-Resistant Bag / Bulk Pallets",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/building-materials.jpg"
  },
  {
    id: 8,
    name: "Industrial Construction Chemical & Waterproofing Bonding Agent",
    slug: "construction-waterproofing-bonding-agent",
    brand_id: null,
    category_id: 5,
    short_description: "Polymer modified liquid bonding additive and waterproofing admixture for mortars and screeds.",
    description: "Improves tensile strength, water impermeability, and chemical resistance in concrete, plaster, and floor toppings.",
    application_use: "Water retaining basements, swimming pools, concrete roofs, and tile adhesives.",
    specifications: {
      "Dosage": "5-10% by cement weight",
      "Form": "Milky Liquid",
      "pH": "7.5 - 8.5"
    },
    packaging: "25 Litre Drum / 200 Litre Barrel",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/building-materials.jpg"
  },
  {
    id: 9,
    name: "Heavy Duty Class E PVC Pressure Pipes (PN16)",
    slug: "heavy-duty-class-e-pvc-pressure-pipes",
    brand_id: null,
    category_id: 6,
    short_description: "High density unplasticized polyvinyl chloride pressure pipes for industrial and municipal water supply.",
    description: "Manufactured for high pressure endurance, smooth flow hydraulics, and full resistance to chemical soil corrosion.",
    application_use: "Potable water networks, industrial water cooling pipelines, irrigation mains.",
    specifications: {
      "Pressure Rating": "PN16 / Class E",
      "Diameters": "1/2 inch to 8 inch",
      "Standard Length": "5.8 meters / 6 meters"
    },
    packaging: "Bundles of 10 / Project Lots",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/plumbing-materials.jpg"
  },
  {
    id: 10,
    name: "PPR Hot & Cold Water Piping System & Brass Insert Fittings",
    slug: "ppr-hot-cold-water-piping-system",
    brand_id: null,
    category_id: 6,
    short_description: "High molecular polypropylene random copolymer pipes and fusion fittings for domestic and industrial plumbing.",
    description: "Provides zero corrosion, exceptional heat tolerance up to 95°C, and leak-proof thermal fusion welded joints.",
    application_use: "Hospital hot water lines, residential estates, high-rise building plumbing risers.",
    specifications: {
      "Temperature Tolerance": "Up to 95°C",
      "Working Pressure": "PN20 / PN25",
      "Material": "100% Virgin PPR"
    },
    packaging: "4 Meter Lengths / Assorted Boxes",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: true,
    status: "active",
    image_url: "/assets/images/plumbing-materials.jpg"
  },
  {
    id: 11,
    name: "Industrial Brass & Bronze Gate Valves (PN25)",
    slug: "industrial-brass-bronze-gate-valves",
    brand_id: null,
    category_id: 6,
    short_description: "Heavy pattern full-bore brass and bronze gate valves with solid wedge disc and non-rising stem.",
    description: "Engineered for smooth bi-directional shut-off service in water, oil, and non-corrosive industrial fluids.",
    application_use: "Main water distribution lines, plumbing pump headers, boiler feed setups.",
    specifications: {
      "Nominal Pressure": "25 Bar (PN25)",
      "Connection": "BSPT Female Threaded",
      "Size Range": "1/2 inch to 4 inch"
    },
    packaging: "Single Units / Carton of 24",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: false,
    status: "active",
    image_url: "/assets/images/plumbing-materials.jpg"
  },
  {
    id: 12,
    name: "High-Traffic Porcelain Floor Tiles & Heavy Adhesives",
    slug: "high-traffic-porcelain-floor-tiles",
    brand_id: null,
    category_id: 5,
    short_description: "Vitrified non-porous floor and wall tiles engineered for heavy commercial and industrial pedestrian traffic.",
    description: "Scratch-resistant, chemical-resistant tiles paired with high-polymer tile adhesives for reliable long-term bonding.",
    application_use: "Showrooms, corporate offices, industrial corridors, and residential developments.",
    specifications: {
      "Water Absorption": "< 0.5%",
      "Sizes": "60x60cm, 60x120cm",
      "Surface": "Polished / Matte Anti-Slip"
    },
    packaging: "Boxes / Pallet Quantities",
    price: 0,
    show_price: false,
    availability: "in_stock",
    featured: false,
    status: "active",
    image_url: "/assets/images/building-materials.jpg"
  }
];

const DEFAULT_ENQUIRIES: Enquiry[] = [
  {
    id: 1,
    reference_no: "SKG-2026-0001",
    full_name: "Engr. Babatunde Alabi",
    company_name: "Niger Delta Marine Logistics",
    phone: "+234 803 123 4567",
    email: "balabi@ndmarine.com",
    project_type: "Marine Vessel Maintenance",
    location: "Warri Port, Delta State",
    message: "We require supply of Jotamastic 90 and Interprotect primer for an upcoming 1,500 DWT cargo barge maintenance docking in Warri.",
    status: "Quoted",
    internal_notes: "Formal invoice and delivery schedule sent via email. Awaiting client purchase order.",
    created_at: "2026-10-06 14:22",
    items: [
      { product_name: "Jotamastic 90 High Solids Epoxy Mastic", quantity: "15 x 20L Drums" },
      { product_name: "Interprotect High Build Epoxy Primer", quantity: "10 x 20L Drums" }
    ]
  },
  {
    id: 2,
    reference_no: "SKG-2026-0002",
    full_name: "Arch. Chidiebere Okeke",
    company_name: "Apex Built Construction Ltd",
    phone: "+234 802 987 6543",
    email: "c.okeke@apexbuilt.ng",
    project_type: "Commercial Building Construction",
    location: "Victoria Island, Lagos",
    message: "Please provide quotation for 500 bags of 42.5R Portland cement and PN16 PVC pressure pipe lots for plumbing installations.",
    status: "New",
    internal_notes: "New enquiry received. Sourcing logistics team reviewing delivery schedule to Lagos Island.",
    created_at: "2026-10-07 09:15",
    items: [
      { product_name: "Premium Portland Cement (Grade 42.5R)", quantity: "500 Bags" },
      { product_name: "Heavy Duty Class E PVC Pressure Pipes (PN16)", quantity: "60 Lengths (3 Inch)" }
    ]
  }
];

const DEFAULT_FAQS = [
  {
    q: "Do you supply industrial paints?",
    a: "Yes. Skewbo Global Paint Limited supplies industrial protective coatings, epoxy primers, polyurethane topcoats, and anti-corrosive barrier coatings suitable for manufacturing plants, structural steel, pipelines, and civil infrastructure across Nigeria."
  },
  {
    q: "Do you supply marine paints?",
    a: "Yes. We supply high-performance marine coatings including antifouling paints, high-build epoxy mastic primers, ballast tank linings, and deck finishes from world-renowned brands like Jotun, International Paint, Sigma, and Hempel."
  },
  {
    q: "What paint brands do you sell?",
    a: "We offer supply and distribution of reputable global and local brands including International Paint, Sigma Paint, Jotun Paint, Hempel Paint, as well as other quality architectural and industrial coatings available in Nigeria."
  },
  {
    q: "Do you supply building materials?",
    a: "Yes. In addition to our paint business, we supply selected construction and building materials including cement, blocks, roofing systems, tiles, bonding adhesives, and construction chemicals for projects across Nigeria."
  },
  {
    q: "Do you supply plumbing materials?",
    a: "Yes. We supply comprehensive plumbing materials including PVC pressure pipes, PPR hot and cold water pipes, HDPE pipes, gate valves, pipe fittings, and plumbing accessories for residential, commercial, and industrial facilities."
  },
  {
    q: "Can I request a quotation for my project?",
    a: "Absolutely. You can use our online 'Request a Quote' feature or quotation cart to select the products and quantities you need. Our team will review your specifications and generate an official reference-coded quotation (#SKG-2026-XXXX)."
  },
  {
    q: "Do you handle bulk and project orders?",
    a: "Yes. We cater to large-scale procurement for building contractors, offshore operators, industrial plants, real estate developers, and government projects with flexible logistics support."
  }
];

// ---------------------------------------------------------------------------
// DATA STORE
// ---------------------------------------------------------------------------

function loadFromStorage<T>(key: string, defaultVal: T): T {
  try {
    const raw = localStorage.getItem(`skewbo_${key}`);
    return raw ? JSON.parse(raw) : defaultVal;
  } catch {
    return defaultVal;
  }
}

function saveToStorage<T>(key: string, val: T): void {
  try {
    localStorage.setItem(`skewbo_${key}`, JSON.stringify(val));
  } catch (e) {
    console.error("Storage error:", e);
  }
}

const state = {
  settings: loadFromStorage<SiteSettings>("settings", DEFAULT_SETTINGS),
  brands: loadFromStorage<Brand[]>("brands", DEFAULT_BRANDS),
  categories: loadFromStorage<Category[]>("categories", DEFAULT_CATEGORIES),
  products: loadFromStorage<Product[]>("products", DEFAULT_PRODUCTS),
  enquiries: loadFromStorage<Enquiry[]>("enquiries", DEFAULT_ENQUIRIES),
  contactMessages: loadFromStorage<ContactMessage[]>("contacts", []),
  faqs: loadFromStorage("faqs", DEFAULT_FAQS),
  cart: loadFromStorage<QuoteItem[]>("cart", []),
  isAdmin: loadFromStorage<boolean>("is_admin", false),
  currentView: "home" as "home" | "admin",
  adminTab: "dashboard" as "dashboard" | "products" | "enquiries" | "settings" | "brands" | "categories" | "sql",
  activeCategoryFilter: "all",
  searchQuery: "",
  selectedProduct: null as Product | null
};

// Always ensure official contact address and phone are synced
state.settings.business_address = "50B Hospital Road Port Harcourt Rivers State";
state.settings.phone_number = "07050509842";
state.settings.whatsapp_number = "2347050509842";
state.settings.google_maps_url = "https://maps.google.com/?q=50B+Hospital+Road+Port+Harcourt+Rivers+State";
saveToStorage("settings", state.settings);

const app = document.getElementById("app")!;

function render(): void {
  if (state.currentView === "admin") {
    renderAdminPortal();
  } else {
    renderPublicWebsite();
  }
  attachDynamicEventListeners();
}

// ---------------------------------------------------------------------------
// PUBLIC WEBSITE RENDERER (BOOTSTRAP 5 + MODERN LIGHT MINIMAL)
// ---------------------------------------------------------------------------

function renderPublicWebsite(): void {
  const brandMap = new Map(state.brands.map(b => [b.id, b.name]));
  const categoryMap = new Map(state.categories.map(c => [c.id, c.name]));

  // Filter products
  const filteredProducts = state.products.filter(p => {
    if (p.status !== "active") return false;
    if (state.activeCategoryFilter !== "all") {
      const matchCat = state.categories.find(c => c.slug === state.activeCategoryFilter);
      if (matchCat && p.category_id !== matchCat.id) return false;
    }
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      const brandName = p.brand_id ? (brandMap.get(p.brand_id) || "").toLowerCase() : "";
      const catName = (categoryMap.get(p.category_id) || "").toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.short_description.toLowerCase().includes(q) ||
        brandName.includes(q) ||
        catName.includes(q)
      );
    }
    return true;
  });

  const cartCount = state.cart.reduce((acc, it) => acc + (parseInt(it.quantity) || 1), 0);

  app.innerHTML = `
    <!-- Topbar -->
    <div class="site-topbar">
      <div class="container">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <div class="d-flex flex-wrap align-items-center gap-3 small">
            <span>📍 ${escapeHtml(state.settings.business_address)}</span>
            <span class="d-none d-md-inline">🕒 ${escapeHtml(state.settings.business_hours)}</span>
            <span class="d-none d-lg-inline">✉️ <a href="mailto:${escapeHtml(state.settings.email_address)}">${escapeHtml(state.settings.email_address)}</a></span>
          </div>
          <div>
            <button class="btn btn-sm text-light p-0 border-0 small text-decoration-underline" id="btnSwitchToAdmin">
              🔒 Admin Access (${state.isAdmin ? "Logged In" : "Login"})
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Bootstrap 5 Responsive Navbar -->
    <nav class="navbar navbar-expand-lg site-navbar sticky-top">
      <div class="container">
        <!-- Brand Logo (Maintains exact aspect ratio) -->
        <a class="navbar-brand py-0 me-3 me-xl-4" href="#home">
          <img src="${escapeHtml(state.settings.logo_url)}" alt="Skewbo Global Paint Limited" class="official-logo-img">
        </a>

        <!-- Mobile Toggler -->
        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSkewboNav" aria-controls="navbarSkewboNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links Collapsible -->
        <div class="collapse navbar-collapse" id="navbarSkewboNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active" href="#home">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#brands">Paint Brands</a></li>
            <li class="nav-item"><a class="nav-link" href="#products">Products</a></li>
            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#industries">Industries</a></li>
            <li class="nav-item"><a class="nav-link" href="#why-us">Why Us</a></li>
            <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          </ul>

          <div class="d-flex align-items-center gap-2 pt-2 pt-lg-0">
            <button class="quote-cart-btn" id="btnOpenCartModal">
              <span>Cart</span>
              <span class="quote-badge" id="quoteBadgeCount">${cartCount}</span>
            </button>
            <a href="#quote" class="btn btn-skewbo-primary btn-sm">Request a Quote</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Modern Minimal Light Hero Section -->
    <section id="home" class="hero-light-section">
      <div class="container position-relative">
        <div class="row align-items-center g-5">
          <div class="col-lg-7">
            <div class="hero-tag-pill">
              ✨ Paint Supply, Industrial Coatings & Building Materials
            </div>
            <h1 class="hero-headline">
              ${escapeHtml(state.settings.hero_title)}
            </h1>
            <p class="hero-subtext">
              ${escapeHtml(state.settings.hero_description)}
            </p>

            <div class="d-flex flex-wrap gap-3 mb-4">
              <a href="#products" class="btn btn-skewbo-primary">Explore Products</a>
              <a href="#quote" class="btn btn-skewbo-secondary">Request a Quote</a>
              <a href="#brands" class="btn btn-skewbo-outline">View Paint Brands</a>
            </div>

            <!-- Key Metric Counters -->
            <div class="row g-3 pt-3 border-top">
              <div class="col-4">
                <div class="fw-bold fs-4 text-primary">100%</div>
                <div class="small text-muted">Genuine Formulations</div>
              </div>
              <div class="col-4">
                <div class="fw-bold fs-4 text-primary">Marine Grade</div>
                <div class="small text-muted">Heavy Duty Protection</div>
              </div>
              <div class="col-4">
                <div class="fw-bold fs-4 text-primary">Nationwide</div>
                <div class="small text-muted">Direct Site Supply</div>
              </div>
            </div>
          </div>

          <!-- Right Column: Creative Presentation of Marine Paint Buckets -->
          <div class="col-lg-5">
            <div class="creative-paint-card">
              <div class="creative-paint-img-wrap">
                <img src="/assets/images/marine-paint-buckets.jpg" alt="Vibrant Marine Paint Buckets & Pails" loading="eager">
                <div class="floating-creative-badge">
                  ⚓ <span>Premium Marine</span> & Protective Pails
                </div>
              </div>

              <div class="paint-features-grid">
                <div class="paint-feat-item">
                  <span class="icon">✓</span> Antifouling Marine Barrier
                </div>
                <div class="paint-feat-item">
                  <span class="icon">✓</span> High-Solids Epoxy Mastic
                </div>
                <div class="paint-feat-item">
                  <span class="icon">✓</span> UV Polyurethane Topcoat
                </div>
                <div class="paint-feat-item">
                  <span class="icon">✓</span> 20L Drums & Custom Sets
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Creative Marine Paint Feature Banner (Homepage Highlight) -->
    <section class="py-5 bg-white border-bottom">
      <div class="container">
        <div class="p-4 p-md-5 rounded-4 bg-light border position-relative overflow-hidden">
          <div class="row align-items-center g-4">
            <div class="col-lg-6">
              <span class="badge bg-warning text-dark mb-3 px-3 py-2 fw-bold text-uppercase">Vibrant Marine Chemistry</span>
              <h2 class="fw-bolder text-primary mb-3" style="letter-spacing: -0.02em;">
                Engineered for Harsh Offshore & Coastal Waters
              </h2>
              <p class="text-secondary mb-4" style="line-height: 1.7;">
                From high-build surface-tolerant primers to vibrant, color-retentive topcoats, our marine paint inventory delivers long-term corrosion resistance for vessel hulls, cargo barges, offshore platforms, and coastal steel structures.
              </p>
              <div class="d-flex flex-wrap gap-2">
                <a href="#products" class="btn btn-skewbo-primary btn-sm">Browse Marine Coatings</a>
                <a href="#quote" class="btn btn-skewbo-outline btn-sm">Get Technical Specification</a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="rounded-3 overflow-hidden shadow-sm border">
                <img src="/assets/images/marine-paint-pails.jpg" alt="Colorful Industrial Marine Paint Pails Display" class="img-fluid w-100 object-fit-cover" style="max-height: 320px;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Paint Brands Showcase Section -->
    <section id="brands" class="py-5 bg-light border-bottom">
      <div class="container py-3">
        <div class="text-center mb-5">
          <span class="section-badge-clean">Core Paint Brands</span>
          <h2 class="section-title-clean">World-Class Paint Brands We Supply</h2>
          <p class="section-desc-clean">
            Skewbo Global Paint Limited is an independent sales and supply dealer for globally proven marine, industrial, protective, and architectural coatings in Nigeria.
          </p>
        </div>

        <div class="row g-4">
          ${state.brands.filter(b => b.is_active).map(brand => `
            <div class="col-12 col-sm-6 col-lg-3">
              <div class="brand-box">
                <div class="brand-logo-frame">
                  <img src="${escapeHtml(brand.logo_url)}" alt="${escapeHtml(brand.name)}" loading="lazy">
                </div>
                <h4 class="fw-bold fs-5 text-primary mb-2">${escapeHtml(brand.name)}</h4>
                <p class="small text-muted flex-grow-1 mb-3">${escapeHtml(brand.description)}</p>
                <button class="btn btn-skewbo-outline btn-sm w-100 brand-enquire-btn" data-brand="${escapeHtml(brand.name)}">
                  Request Brand Info
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Supplier notice box -->
        <div class="mt-4 p-3 bg-white rounded border small text-muted">
          <strong>Strategic Supplier Notice:</strong> Skewbo Global Paint Limited operates as a reputable paint sales and supply business/dealer. All trademarks, brand names, and formulations remain the exclusive property of their respective owners.
        </div>
      </div>
    </section>

    <!-- Product Categories Section -->
    <section id="categories" class="py-5 bg-white border-bottom">
      <div class="container py-3">
        <div class="text-center mb-5">
          <span class="section-badge-clean">Inventory Pillars</span>
          <h2 class="section-title-clean">Comprehensive Supply Categories</h2>
          <p class="section-desc-clean">
            Complete building, protective coatings and plumbing inventory under one roof, serving civil contractors, shipyards, oil & gas operators, and private developers.
          </p>
        </div>

        <div class="row g-4">
          <!-- Pillar 1 -->
          <div class="col-12 col-lg-4">
            <div class="category-card-clean">
              <div class="category-card-img">
                <img src="/assets/images/marine-paint-buckets.jpg" alt="Paints & Coatings" loading="lazy">
                <div class="category-card-badge">Paints & Coatings</div>
              </div>
              <div class="p-4 d-flex flex-column flex-grow-1">
                <h4 class="fw-bold text-primary mb-2">Industrial, Marine & Building Paints</h4>
                <p class="text-muted small flex-grow-1 mb-3">High performance protective coatings engineered for harsh Nigerian coastal, industrial and marine atmospheres.</p>
                <ul class="list-unstyled small text-secondary mb-4">
                  <li class="mb-1">✓ Marine vessel & barge coatings</li>
                  <li class="mb-1">✓ Industrial heavy duty epoxy primers</li>
                  <li class="mb-1">✓ Anti-corrosion zinc barrier coatings</li>
                  <li class="mb-1">✓ Exterior weather-shield architectural paints</li>
                </ul>
                <button class="btn btn-skewbo-outline btn-sm w-100 filter-by-cat-btn" data-cat="marine-paints">Explore Paints Catalogue</button>
              </div>
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="col-12 col-lg-4">
            <div class="category-card-clean">
              <div class="category-card-img">
                <img src="/assets/images/building-materials.jpg" alt="Building Materials" loading="lazy">
                <div class="category-card-badge">Building Materials</div>
              </div>
              <div class="p-4 d-flex flex-column flex-grow-1">
                <h4 class="fw-bold text-primary mb-2">Selected Building Materials</h4>
                <p class="text-muted small flex-grow-1 mb-3">Heavy civil construction supplies and structural building materials for commercial and residential developments.</p>
                <ul class="list-unstyled small text-secondary mb-4">
                  <li class="mb-1">✓ Certified Portland cement (Grade 42.5R)</li>
                  <li class="mb-1">✓ Waterproofing admixtures & bonding agents</li>
                  <li class="mb-1">✓ Vitrified non-porous floor & wall tiles</li>
                  <li class="mb-1">✓ Roofing accessories & fasteners</li>
                </ul>
                <button class="btn btn-skewbo-outline btn-sm w-100 filter-by-cat-btn" data-cat="building-materials">Explore Building Materials</button>
              </div>
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="col-12 col-lg-4">
            <div class="category-card-clean">
              <div class="category-card-img">
                <img src="/assets/images/plumbing-materials.jpg" alt="Plumbing Materials" loading="lazy">
                <div class="category-card-badge">Plumbing Solutions</div>
              </div>
              <div class="p-4 d-flex flex-column flex-grow-1">
                <h4 class="fw-bold text-primary mb-2">Plumbing Pipes & Valves</h4>
                <p class="text-muted small flex-grow-1 mb-3">Pressure pipe systems, heavy valves and connectors for municipal, industrial and residential water networks.</p>
                <ul class="list-unstyled small text-secondary mb-4">
                  <li class="mb-1">✓ Heavy duty Class E PVC pressure pipes</li>
                  <li class="mb-1">✓ PPR hot & cold fusion water pipes</li>
                  <li class="mb-1">✓ HDPE coils & compression fittings</li>
                  <li class="mb-1">✓ Heavy pattern PN25 brass gate valves</li>
                </ul>
                <button class="btn btn-skewbo-outline btn-sm w-100 filter-by-cat-btn" data-cat="plumbing-materials">Explore Plumbing Materials</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comprehensive Products Catalogue Section -->
    <section id="products" class="py-5 bg-light border-bottom">
      <div class="container py-3">
        <div class="text-center mb-5">
          <span class="section-badge-clean">Catalogue & Inventory</span>
          <h2 class="section-title-clean">Verified Product Inventory</h2>
          <p class="section-desc-clean">
            Search and filter our verified product inventory. Add items to your quotation cart to receive a prompt official reference-coded invoice.
          </p>
        </div>

        <!-- Filter bar -->
        <div class="card p-3 mb-4 shadow-sm border">
          <div class="row g-3 align-items-center justify-content-between">
            <div class="col-12 col-lg-8">
              <div class="d-flex flex-wrap gap-2">
                <button class="btn btn-sm ${state.activeCategoryFilter === 'all' ? 'btn-skewbo-secondary' : 'btn-outline-secondary'} filter-btn" data-cat="all">All Items</button>
                <button class="btn btn-sm ${state.activeCategoryFilter === 'marine-paints' ? 'btn-skewbo-secondary' : 'btn-outline-secondary'} filter-btn" data-cat="marine-paints">Marine Paints</button>
                <button class="btn btn-sm ${state.activeCategoryFilter === 'industrial-coatings' ? 'btn-skewbo-secondary' : 'btn-outline-secondary'} filter-btn" data-cat="industrial-coatings">Industrial Coatings</button>
                <button class="btn btn-sm ${state.activeCategoryFilter === 'primers-thinners' ? 'btn-skewbo-secondary' : 'btn-outline-secondary'} filter-btn" data-cat="primers-thinners">Primers & Thinners</button>
                <button class="btn btn-sm ${state.activeCategoryFilter === 'building-materials' ? 'btn-skewbo-secondary' : 'btn-outline-secondary'} filter-btn" data-cat="building-materials">Building Materials</button>
                <button class="btn btn-sm ${state.activeCategoryFilter === 'plumbing-materials' ? 'btn-skewbo-secondary' : 'btn-outline-secondary'} filter-btn" data-cat="plumbing-materials">Plumbing Materials</button>
              </div>
            </div>

            <div class="col-12 col-lg-4">
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0">🔍</span>
                <input type="text" id="catalogueSearchInput" class="form-control border-start-0" placeholder="Search products, brands or specs..." value="${escapeHtml(state.searchQuery)}">
              </div>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="row g-4">
          ${filteredProducts.length > 0 ? filteredProducts.map(p => {
            const brand = p.brand_id ? brandMap.get(p.brand_id) : null;
            const category = categoryMap.get(p.category_id) || "General";
            return `
              <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="product-box">
                  <div class="product-box-img">
                    <img src="${escapeHtml(p.image_url)}" alt="${escapeHtml(p.name)}" loading="lazy">
                    ${brand ? `<span class="product-badge-brand">${escapeHtml(brand)}</span>` : ''}
                    <span class="product-badge-stock">${p.availability === 'in_stock' ? 'In Stock' : 'On Request'}</span>
                  </div>
                  <div class="product-box-body">
                    <div class="product-box-cat">${escapeHtml(category)}</div>
                    <h3 class="product-box-title fs-6">${escapeHtml(p.name)}</h3>
                    <p class="product-box-desc">${escapeHtml(p.short_description)}</p>
                    <div class="small text-muted mb-3">
                      <strong>Packaging:</strong> ${escapeHtml(p.packaging)}
                    </div>
                    <div class="product-box-footer">
                      <button class="btn btn-outline-secondary btn-sm flex-fill view-product-details-btn" data-id="${p.id}">Details</button>
                      <button class="btn btn-skewbo-primary btn-sm flex-fill add-to-quote-btn" data-id="${p.id}">+ Quote</button>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('') : `
            <div class="col-12 text-center py-5">
              <div class="p-5 bg-white rounded border">
                <h4 class="text-primary mb-2">No matching products found</h4>
                <p class="text-muted mb-3">Try clearing search terms or selecting another category.</p>
                <button class="btn btn-skewbo-outline btn-sm" id="btnResetFilters">Reset Filter</button>
              </div>
            </div>
          `}
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-5 bg-white border-bottom">
      <div class="container py-3">
        <div class="text-center mb-5">
          <span class="section-badge-clean">Services & Solutions</span>
          <h2 class="section-title-clean">Industrial Supply & Procurement Support</h2>
          <p class="section-desc-clean">
            Tailored supply chain execution for marine shipyards, oil & gas operators, civil engineers, and estate developers.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-box-clean">
              <div class="service-icon-circle">🎨</div>
              <h4 class="fw-bold text-primary mb-2">Paint Sales & Distribution</h4>
              <p class="text-muted small">Wholesale and project supply of certified industrial, marine, and architectural paints with consistent batch color formulation.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-box-clean">
              <div class="service-icon-circle">⚓</div>
              <h4 class="fw-bold text-primary mb-2">Marine & Protective Coatings</h4>
              <p class="text-muted small">Specialized high-durability coatings for vessel drydockings, offshore platforms, water storage tanks, and structural steel.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-box-clean">
              <div class="service-icon-circle">🏗️</div>
              <h4 class="fw-bold text-primary mb-2">Building Materials Supply</h4>
              <p class="text-muted small">Direct site logistics for Portland cement, tile adhesives, water-repellent polymers, and roofing accessories.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-box-clean">
              <div class="service-icon-circle">🚰</div>
              <h4 class="fw-bold text-primary mb-2">Plumbing Reticulation Materials</h4>
              <p class="text-muted small">Complete sets of pressure PVC, PPR hot/cold water fusion lines, HDPE coils, and industrial brass gate valves.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-box-clean">
              <div class="service-icon-circle">📦</div>
              <h4 class="fw-bold text-primary mb-2">Bulk & Project Orders</h4>
              <p class="text-muted small">Scheduled phased deliveries and dedicated account management for large-scale construction works and annual facility maintenance.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="service-box-clean">
              <div class="service-icon-circle">📋</div>
              <h4 class="fw-bold text-primary mb-2">Technical Specification Assistance</h4>
              <p class="text-muted small">Support with Technical Data Sheets (TDS), coating film thickness calculations, surface preparation standards, and BOQ costing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries / Sectors We Serve -->
    <section id="industries" class="py-5 bg-light border-bottom">
      <div class="container py-3">
        <div class="text-center mb-5">
          <span class="section-badge-clean">Sectors Served</span>
          <h2 class="section-title-clean">Industries We Proudly Supply</h2>
          <p class="section-desc-clean">
            Delivering trusted materials to demanding maritime, civil, commercial, and industrial facilities throughout Nigeria.
          </p>
        </div>

        <div class="row g-3">
          ${[
            { name: "Marine & Offshore Companies", icon: "🚢" },
            { name: "Oil & Gas Facilities", icon: "⛽" },
            { name: "Building & Civil Contractors", icon: "🏗️" },
            { name: "Real Estate Developers", icon: "🏢" },
            { name: "Industrial & Manufacturing Plants", icon: "🏭" },
            { name: "Shipyards & Vessel Drydocks", icon: "⚓" },
            { name: "Property Managers & Facilities", icon: "🔑" },
            { name: "Government Civil Projects", icon: "🏛️" },
            { name: "Hotels & Commercial Buildings", icon: "🏨" },
            { name: "Plumbing Contractors", icon: "🔧" },
            { name: "Maintenance & Coating Applicators", icon: "🛠️" },
            { name: "Residential Property Owners", icon: "🏡" }
          ].map(ind => `
            <div class="col-6 col-md-4 col-lg-3">
              <div class="p-3 bg-white border rounded d-flex align-items-center gap-3 h-100 shadow-sm">
                <span class="fs-4">${ind.icon}</span>
                <span class="small fw-bold text-primary">${ind.name}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section id="why-us" class="py-5 bg-white border-bottom">
      <div class="container py-3">
        <div class="text-center mb-5">
          <span class="section-badge-clean">The Skewbo Standard</span>
          <h2 class="section-title-clean">Why Customers Rely On Us</h2>
          <p class="section-desc-clean">
            We bridge the gap between world-renowned material manufacturers and demanding Nigerian project sites with integrity and technical reliability.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="p-4 bg-light rounded border h-100">
              <div class="fw-bold fs-3 text-warning mb-2">01</div>
              <h5 class="fw-bold text-primary mb-2">Product Authenticity</h5>
              <p class="text-muted small mb-0">We supply verified genuine paint batches and certified building materials from reputable domestic and international producers.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="p-4 bg-light rounded border h-100">
              <div class="fw-bold fs-3 text-warning mb-2">02</div>
              <h5 class="fw-bold text-primary mb-2">Multi-Category Sourcing</h5>
              <p class="text-muted small mb-0">Consolidate procurement: paints, protective primers, cement, floor tiles, and plumbing supplies from one reliable partner.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="p-4 bg-light rounded border h-100">
              <div class="fw-bold fs-3 text-warning mb-2">03</div>
              <h5 class="fw-bold text-primary mb-2">Technical Guidance</h5>
              <p class="text-muted small mb-0">Assistance with coating specs, mixing ratios, coverage estimates, and pipe pressure ratings to prevent project errors.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="p-4 bg-light rounded border h-100">
              <div class="fw-bold fs-3 text-warning mb-2">04</div>
              <h5 class="fw-bold text-primary mb-2">Project & Bulk Supply</h5>
              <p class="text-muted small mb-0">Equipped to handle scheduled deliveries for marine drydocks, industrial maintenance shut-downs, and housing developments.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="p-4 bg-light rounded border h-100">
              <div class="fw-bold fs-3 text-warning mb-2">05</div>
              <h5 class="fw-bold text-primary mb-2">Competitive Value</h5>
              <p class="text-muted small mb-0">Direct supply distribution connections allow us to provide transparent, competitive quotation pricing tailored for B2B budgets.</p>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <div class="p-4 bg-light rounded border h-100">
              <div class="fw-bold fs-3 text-warning mb-2">06</div>
              <h5 class="fw-bold text-primary mb-2">Enquiry Tracking</h5>
              <p class="text-muted small mb-0">Every request receives an official reference code (#SKG-2026-XXXX) for rapid tracking from quotation to site delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Request a Quote Section -->
    <section id="quote" class="py-5 bg-light border-bottom">
      <div class="container py-3">
        <div class="text-center mb-5">
          <span class="section-badge-clean">Quotation Engine</span>
          <h2 class="section-title-clean">Request an Official Quotation</h2>
          <p class="section-desc-clean">
            Submit your project details and material quantities below. Our sales engineering team will generate an official quotation reference.
          </p>
        </div>

        <div class="quote-box-wrapper">
          <div class="row g-0">
            <!-- Form Area -->
            <div class="col-lg-8 p-4 p-md-5">
              <form id="quoteRequestForm">
                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-primary" for="q_name">Full Name *</label>
                    <input type="text" id="q_name" class="form-control" placeholder="e.g. Engr. Samuel Adeleke" required>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-primary" for="q_company">Company Name</label>
                    <input type="text" id="q_company" class="form-control" placeholder="e.g. Atlantic Civil & Marine Ltd">
                  </div>
                </div>

                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-primary" for="q_phone">Phone / WhatsApp Number *</label>
                    <input type="tel" id="q_phone" class="form-control" placeholder="+234 800 000 0000" required>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-primary" for="q_email">Email Address *</label>
                    <input type="email" id="q_email" class="form-control" placeholder="name@company.com" required>
                  </div>
                </div>

                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-primary" for="q_project">Project / Application Type</label>
                    <select id="q_project" class="form-select">
                      <option value="Marine Vessel / Docking">Marine Vessel / Docking</option>
                      <option value="Industrial Structural Steel">Industrial Structural Steel</option>
                      <option value="Oil & Gas Facility Maintenance">Oil & Gas Facility Maintenance</option>
                      <option value="Commercial Building Construction">Commercial Building Construction</option>
                      <option value="Plumbing & Water Reticulation">Plumbing & Water Reticulation</option>
                      <option value="Residential Building">Residential Building</option>
                      <option value="Other Project">Other Specialized Project</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label fw-bold small text-primary" for="q_location">Project Location in Nigeria</label>
                    <input type="text" id="q_location" class="form-control" placeholder="e.g. Lagos Port, Warri, Port Harcourt, Abuja">
                  </div>
                </div>

                <!-- Quote Cart Items Selected -->
                <div class="mb-3">
                  <label class="form-label fw-bold small text-primary">Selected Items for Quotation (${state.cart.length} item(s)):</label>
                  <div class="p-3 bg-light rounded border mb-2">
                    ${state.cart.length > 0 ? state.cart.map((item, idx) => `
                      <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <div>
                          <strong>${escapeHtml(item.product_name)}</strong>
                          <span class="small text-muted ms-2">Qty: ${escapeHtml(item.quantity)}</span>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-danger py-0 px-2 remove-from-cart-btn" data-index="${idx}">✕</button>
                      </div>
                    `).join('') : `
                      <div class="text-center text-muted small py-2">
                        No products added from catalogue yet. You can click "+ Add to Quote" on any product, or describe your materials below.
                      </div>
                    `}
                  </div>
                  <a href="#products" class="btn btn-sm btn-outline-secondary">+ Select Products From Catalogue</a>
                </div>

                <div class="mb-4">
                  <label class="form-label fw-bold small text-primary" for="q_message">Material Specifications / Quantities / Special Notes</label>
                  <textarea id="q_message" class="form-control" rows="3" placeholder="Specify paint colors, required drum quantities, pipe diameters, cement bags, or delivery timeline..."></textarea>
                </div>

                <button type="submit" class="btn btn-skewbo-primary w-100 py-3 fs-6">
                  Submit Official Quote Request
                </button>
              </form>
            </div>

            <!-- Sidebar Info Pane -->
            <div class="col-lg-4 quote-sidebar-clean">
              <div>
                <h4 class="fw-bold mb-3">Official Tracking Reference</h4>
                <p class="small text-light opacity-75 mb-3" style="line-height: 1.6;">
                  Every quotation request generated through this system receives a unique, verified tracking code:
                </p>

                <div class="ref-pill-clean">
                  <div class="small text-uppercase text-light opacity-75 mb-1">Generated Format</div>
                  <div class="fw-bolder fs-4 text-warning">#SKG-2026-${String(state.enquiries.length + 1).padStart(4, '0')}</div>
                </div>

                <ul class="list-unstyled small text-light opacity-90 mt-4">
                  <li class="mb-2">✓ Prompt price quotation response</li>
                  <li class="mb-2">✓ Technical Data Sheets (TDS) supplied</li>
                  <li class="mb-2">✓ Bulk order discount review</li>
                  <li class="mb-2">✓ Direct site dispatch support</li>
                </ul>
              </div>

              <div class="pt-4 border-top border-secondary border-opacity-25 mt-4">
                <div class="small text-light opacity-75 mb-2">Need immediate assistance?</div>
                <a href="https://wa.me/${encodeURIComponent(state.settings.whatsapp_number)}?text=${encodeURIComponent(state.settings.whatsapp_default_message)}" target="_blank" class="btn w-100 text-white fw-bold" style="background:#25D366;">
                  Chat Directly on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-5 bg-white border-bottom">
      <div class="container py-3" style="max-width: 860px;">
        <div class="text-center mb-5">
          <span class="section-badge-clean">Answers & FAQs</span>
          <h2 class="section-title-clean">Frequently Asked Questions</h2>
          <p class="section-desc-clean">
            Quick answers regarding our paint brands, building supply lines, procurement terms, and delivery logistics.
          </p>
        </div>

        <div class="accordion" id="accordionFaq">
          ${state.faqs.map((faq, idx) => `
            <div class="accordion-item mb-2 border rounded overflow-hidden">
              <h2 class="accordion-header" id="headingFaq${idx}">
                <button class="accordion-button fw-bold text-primary ${idx !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFaq${idx}" aria-expanded="${idx === 0 ? 'true' : 'false'}" aria-controls="collapseFaq${idx}">
                  ${escapeHtml(faq.q)}
                </button>
              </h2>
              <div id="collapseFaq${idx}" class="accordion-collapse collapse ${idx === 0 ? 'show' : ''}" aria-labelledby="headingFaq${idx}" data-bs-parent="#accordionFaq">
                <div class="accordion-body small text-muted" style="line-height: 1.7;">
                  ${escapeHtml(faq.a)}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5 bg-light border-bottom">
      <div class="container py-3">
        <div class="text-center mb-5">
          <span class="section-badge-clean">Reach Us</span>
          <h2 class="section-title-clean">Contact Skewbo Global Paint Limited</h2>
          <p class="section-desc-clean">
            Reach our customer service and technical sales depot for product availability, logistics coordination, and quotations.
          </p>
        </div>

        <div class="row g-4">
          <!-- Information Card -->
          <div class="col-12 col-lg-5">
            <div class="card p-4 border shadow-sm h-100 bg-white">
              <h4 class="fw-bold text-primary mb-4">Depot & Supply Hub</h4>

              <div class="d-flex gap-3 mb-3">
                <span class="fs-4">📍</span>
                <div>
                  <h6 class="fw-bold text-primary mb-1">Business Address</h6>
                  <p class="small text-muted mb-0">${escapeHtml(state.settings.business_address)}</p>
                </div>
              </div>

              <div class="d-flex gap-3 mb-3">
                <span class="fs-4">📞</span>
                <div>
                  <h6 class="fw-bold text-primary mb-1">Telephone</h6>
                  <p class="small text-muted mb-0"><a href="tel:${escapeHtml(state.settings.phone_number)}">${escapeHtml(state.settings.phone_number)}</a></p>
                </div>
              </div>

              <div class="d-flex gap-3 mb-3">
                <span class="fs-4">💬</span>
                <div>
                  <h6 class="fw-bold text-primary mb-1">WhatsApp Channel</h6>
                  <p class="small text-muted mb-0"><a href="https://wa.me/${encodeURIComponent(state.settings.whatsapp_number)}?text=${encodeURIComponent(state.settings.whatsapp_default_message)}" target="_blank">+${escapeHtml(state.settings.whatsapp_number)} (Direct WhatsApp)</a></p>
                </div>
              </div>

              <div class="d-flex gap-3 mb-3">
                <span class="fs-4">✉️</span>
                <div>
                  <h6 class="fw-bold text-primary mb-1">Email Inquiries</h6>
                  <p class="small text-muted mb-0"><a href="mailto:${escapeHtml(state.settings.email_address)}">${escapeHtml(state.settings.email_address)}</a></p>
                </div>
              </div>

              <div class="d-flex gap-3 mb-3">
                <span class="fs-4">🕒</span>
                <div>
                  <h6 class="fw-bold text-primary mb-1">Business Hours</h6>
                  <p class="small text-muted mb-0">${escapeHtml(state.settings.business_hours)}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-12 col-lg-7">
            <div class="card p-4 border shadow-sm h-100 bg-white">
              <h4 class="fw-bold text-primary mb-2">Send a Direct Message</h4>
              <p class="small text-muted mb-4">Have questions regarding stock availability, delivery times, or technical specs? Write to us directly.</p>

              <form id="contactMessageForm">
                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-primary" for="c_name">Your Name *</label>
                    <input type="text" id="c_name" class="form-control" required placeholder="Full name">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-primary" for="c_email">Email Address *</label>
                    <input type="email" id="c_email" class="form-control" required placeholder="email@address.com">
                  </div>
                </div>

                <div class="row g-3 mb-3">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-primary" for="c_phone">Phone Number</label>
                    <input type="tel" id="c_phone" class="form-control" placeholder="+234 ...">
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-primary" for="c_subject">Subject *</label>
                    <input type="text" id="c_subject" class="form-control" required placeholder="e.g. Paint Availability in Port Harcourt">
                  </div>
                </div>

                <div class="mb-4">
                  <label class="form-label small fw-bold text-primary" for="c_message">Message *</label>
                  <textarea id="c_message" class="form-control" rows="4" required placeholder="Type your message here..."></textarea>
                </div>

                <button type="submit" class="btn btn-skewbo-secondary w-100 py-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/${encodeURIComponent(state.settings.whatsapp_number)}?text=${encodeURIComponent(state.settings.whatsapp_default_message)}" 
       target="_blank" 
       rel="noopener noreferrer" 
       class="whatsapp-float-btn" 
       title="Chat with Skewbo Global Paint Limited on WhatsApp"
       aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32">
        <path d="M16 2.5C8.5 2.5 2.5 8.5 2.5 16c0 2.6 0.7 5.1 2.1 7.2L2.5 29.5l6.5-2.1c2 1.2 4.4 1.9 7 1.9 7.5 0 13.5-6 13.5-13.5S23.5 2.5 16 2.5zm7.8 19.3c-0.3 0.9-1.8 1.8-2.5 1.9-0.7 0.1-1.6 0.2-5.3-1.3-4.5-1.9-7.4-6.4-7.6-6.7-0.2-0.3-1.8-2.4-1.8-4.5s1.1-3.2 1.5-3.6c0.4-0.4 0.9-0.6 1.4-0.6 0.2 0 0.3 0 0.5 0 0.4 0 0.7 0 1 0.7 0.4 0.9 1.3 3.1 1.4 3.3 0.1 0.3 0.2 0.6 0 0.9-0.2 0.3-0.3 0.5-0.5 0.7-0.2 0.2-0.4 0.5-0.6 0.7-0.2 0.2-0.4 0.5-0.2 0.9 0.2 0.4 1 1.7 2.2 2.7 1.5 1.3 2.7 1.8 3.1 2 0.4 0.2 0.6 0.2 0.9-0.1 0.2-0.3 1-1.2 1.3-1.6 0.3-0.4 0.6-0.3 1-0.2 0.4 0.2 2.6 1.2 3.1 1.4 0.4 0.2 0.7 0.4 0.8 0.6 0.1 0.2 0.1 1.2-0.2 2.1z"/>
      </svg>
    </a>

    <!-- Footer -->
    <footer class="site-footer-modern">
      <div class="container">
        <div class="row g-4 mb-5">
          <div class="col-12 col-lg-4">
            <img src="${escapeHtml(state.settings.logo_url)}" alt="Logo" class="official-logo-img mb-3" style="filter: brightness(1.1);">
            <p class="small text-muted" style="line-height: 1.7; max-width: 340px;">
              Sales and supply of premium marine, industrial, protective, architectural, and construction paints, alongside quality building materials and plumbing solutions in Nigeria.
            </p>
          </div>

          <div class="col-6 col-lg-2">
            <h6 class="fw-bold text-white mb-3">Quick Navigation</h6>
            <ul class="list-unstyled small d-flex flex-column gap-2">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#brands">Paint Brands</a></li>
              <li><a href="#products">Products Catalogue</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#quote">Request a Quote</a></li>
            </ul>
          </div>

          <div class="col-6 col-lg-3">
            <h6 class="fw-bold text-white mb-3">Product Lines</h6>
            <ul class="list-unstyled small d-flex flex-column gap-2">
              <li><a href="#products">Marine Vessel Paints</a></li>
              <li><a href="#products">Industrial Epoxy Coatings</a></li>
              <li><a href="#products">Anti-Corrosion Primers</a></li>
              <li><a href="#products">Portland Cement 42.5R</a></li>
              <li><a href="#products">PVC & PPR Pipes</a></li>
              <li><a href="#products">Heavy Duty Gate Valves</a></li>
            </ul>
          </div>

          <div class="col-12 col-lg-3">
            <h6 class="fw-bold text-white mb-3">Contact & Logistics</h6>
            <p class="small text-muted mb-2">📍 ${escapeHtml(state.settings.business_address)}</p>
            <p class="small text-muted mb-2">📞 ${escapeHtml(state.settings.phone_number)}</p>
            <p class="small text-muted mb-3">✉️ ${escapeHtml(state.settings.email_address)}</p>
            <button class="btn btn-skewbo-primary btn-sm" id="btnFooterOpenAdmin">
              Staff Admin Portal
            </button>
          </div>
        </div>

        <div class="pt-4 border-top border-secondary border-opacity-25 d-flex flex-wrap justify-content-between align-items-center gap-2 small">
          <div>© ${new Date().getFullYear()} ${escapeHtml(state.settings.footer_copyright)}</div>
          <div class="d-flex gap-3">
            <a href="#" id="linkPrivacyModal">Privacy Policy</a>
            <a href="#" id="linkTermsModal">Terms & Conditions</a>
            <a href="#" id="linkStandaloneDownload">Standalone PHP / SQL Package</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Product Details Modal (Bootstrap 5 Structure) -->
    <div class="modal fade" id="productDetailsModal" tabindex="-1" aria-labelledby="productDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title fw-bold text-primary" id="productDetailsModalLabel">Product Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4" id="productModalBodyContent">
            <!-- Injected dynamically -->
          </div>
        </div>
      </div>
    </div>

    <!-- Quote Cart Modal (Bootstrap 5 Structure) -->
    <div class="modal fade" id="quoteCartModal" tabindex="-1" aria-labelledby="quoteCartModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold text-primary" id="quoteCartModalLabel">Your Material Quotation Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <div id="cartModalItemsContainer" class="mb-3">
              ${state.cart.length > 0 ? state.cart.map((item, idx) => `
                <div class="d-flex justify-content-between align-items-center py-2 border-bottom">
                  <div>
                    <h6 class="mb-1 text-primary fw-bold">${escapeHtml(item.product_name)}</h6>
                    <div class="d-flex align-items-center gap-2">
                      <span class="small text-muted">Quantity:</span>
                      <input type="text" class="form-control form-control-sm cart-qty-input" data-index="${idx}" value="${escapeHtml(item.quantity)}" style="width: 100px;">
                    </div>
                  </div>
                  <button class="btn btn-sm btn-outline-danger remove-cart-item-btn" data-index="${idx}">Remove</button>
                </div>
              `).join('') : `
                <p class="text-center text-muted py-4 mb-0">Your quotation cart is currently empty.</p>
              `}
            </div>

            <div class="d-flex justify-content-between align-items-center pt-3 border-top">
              <button class="btn btn-skewbo-primary btn-sm" id="btnCartProceedToQuote" data-bs-dismiss="modal">Proceed to Quote Form</button>
              <button class="btn btn-outline-secondary btn-sm" id="btnClearCartBtn">Clear Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Admin Login Modal -->
    <div class="modal fade" id="adminLoginModal" tabindex="-1" aria-labelledby="adminLoginModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0 pb-0">
            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 text-center">
            <img src="${escapeHtml(state.settings.logo_url)}" alt="Logo" style="height: 50px; object-fit: contain;" class="mb-3">
            <h5 class="fw-bold text-primary mb-1">Admin Authentication</h5>
            <p class="small text-muted mb-3">Sign in to manage inventory & quote enquiries.</p>

            <form id="adminLoginForm" class="text-start">
              <div class="mb-3">
                <label class="form-label small fw-bold" for="admin_user">Username</label>
                <input type="text" id="admin_user" class="form-control" value="admin" required>
              </div>
              <div class="mb-3">
                <label class="form-label small fw-bold" for="admin_pass">Password</label>
                <input type="password" id="admin_pass" class="form-control" value="SkewboAdmin2026!" required>
              </div>
              <div class="small text-muted mb-3">
                Default credentials: <code>admin</code> / <code>SkewboAdmin2026!</code>
              </div>
              <button type="submit" class="btn btn-skewbo-primary w-100">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// ADMIN PORTAL RENDERER
// ---------------------------------------------------------------------------

function renderAdminPortal(): void {
  const brandMap = new Map(state.brands.map(b => [b.id, b.name]));
  const categoryMap = new Map(state.categories.map(c => [c.id, c.name]));
  const newQuotes = state.enquiries.filter(e => e.status === "New").length;
  const processedQuotes = state.enquiries.filter(e => e.status === "Quoted" || e.status === "Completed").length;

  app.innerHTML = `
    <div class="min-vh-100 bg-light d-flex flex-column">
      <!-- Admin Navbar -->
      <nav class="navbar navbar-dark bg-dark py-2">
        <div class="container-fluid px-4">
          <div class="d-flex align-items-center gap-3">
            <img src="${escapeHtml(state.settings.logo_url)}" alt="Skewbo Logo" style="height: 38px; object-fit: contain;">
            <span class="navbar-brand mb-0 h1 fs-6 fw-bold">Admin Portal</span>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="btn btn-outline-light btn-sm" id="btnAdminReturnPublic">← View Live Website</button>
            <button class="btn btn-danger btn-sm" id="btnAdminLogout">Sign Out</button>
          </div>
        </div>
      </nav>

      <div class="container-fluid px-4 py-4 flex-grow-1">
        <div class="row g-4">
          <!-- Sidebar Nav -->
          <div class="col-12 col-md-3 col-xl-2">
            <div class="card p-3 shadow-sm border">
              <div class="nav flex-column nav-pills gap-1">
                <button class="nav-link text-start py-2 ${state.adminTab === 'dashboard' ? 'active' : ''}" data-tab="dashboard">📊 Dashboard</button>
                <button class="nav-link text-start py-2 ${state.adminTab === 'products' ? 'active' : ''}" data-tab="products">🎨 Products (${state.products.length})</button>
                <button class="nav-link text-start py-2 ${state.adminTab === 'enquiries' ? 'active' : ''}" data-tab="enquiries">📋 Enquiries (${state.enquiries.length})</button>
                <button class="nav-link text-start py-2 ${state.adminTab === 'brands' ? 'active' : ''}" data-tab="brands">🏷️ Brands (${state.brands.length})</button>
                <button class="nav-link text-start py-2 ${state.adminTab === 'categories' ? 'active' : ''}" data-tab="categories">📂 Categories (${state.categories.length})</button>
                <button class="nav-link text-start py-2 ${state.adminTab === 'settings' ? 'active' : ''}" data-tab="settings">⚙️ CMS Settings</button>
                <button class="nav-link text-start py-2 ${state.adminTab === 'sql' ? 'active' : ''}" data-tab="sql">💾 MySQL / PHP</button>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="col-12 col-md-9 col-xl-10">
            ${state.adminTab === 'dashboard' ? `
              <!-- Stats Row -->
              <div class="row g-3 mb-4">
                <div class="col-6 col-lg-3">
                  <div class="card p-3 border shadow-sm">
                    <div class="small text-muted">Total Products</div>
                    <div class="fs-3 fw-bold text-primary">${state.products.length}</div>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="card p-3 border shadow-sm">
                    <div class="small text-muted">Total Enquiries</div>
                    <div class="fs-3 fw-bold text-primary">${state.enquiries.length}</div>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="card p-3 border shadow-sm">
                    <div class="small text-muted">Pending Quotes</div>
                    <div class="fs-3 fw-bold text-warning">${newQuotes}</div>
                  </div>
                </div>
                <div class="col-6 col-lg-3">
                  <div class="card p-3 border shadow-sm">
                    <div class="small text-muted">Processed</div>
                    <div class="fs-3 fw-bold text-success">${processedQuotes}</div>
                  </div>
                </div>
              </div>

              <!-- Recent Enquiries -->
              <div class="card border shadow-sm">
                <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                  <h6 class="mb-0 fw-bold text-primary">Recent Quotation Requests</h6>
                  <button class="btn btn-sm btn-outline-primary" id="btnAdminGoEnquiries">View All</button>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover align-middle mb-0">
                    <thead class="table-light small">
                      <tr>
                        <th>Reference</th>
                        <th>Customer</th>
                        <th>Phone / Email</th>
                        <th>Project</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody class="small">
                      ${state.enquiries.slice(0, 5).map(e => `
                        <tr>
                          <td><strong>#${escapeHtml(e.reference_no)}</strong></td>
                          <td>${escapeHtml(e.full_name)}<br><span class="text-muted small">${escapeHtml(e.company_name || 'Individual')}</span></td>
                          <td>${escapeHtml(e.phone)}<br><span class="text-muted small">${escapeHtml(e.email)}</span></td>
                          <td>${escapeHtml(e.project_type || 'N/A')}</td>
                          <td><span class="admin-badge-status badge-${e.status.toLowerCase()}">${e.status}</span></td>
                          <td><button class="btn btn-sm btn-outline-secondary admin-view-enquiry-btn" data-id="${e.id}">Details</button></td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            ` : ''}

            ${state.adminTab === 'products' ? `
              <div class="card border shadow-sm">
                <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                  <h6 class="mb-0 fw-bold text-primary">Product Inventory (${state.products.length})</h6>
                  <button class="btn btn-sm btn-skewbo-primary" id="btnOpenAddProductModal">+ Add Product</button>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover align-middle mb-0">
                    <thead class="table-light small">
                      <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Packaging</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody class="small">
                      ${state.products.map(p => `
                        <tr>
                          <td>
                            <div class="d-flex align-items-center gap-2">
                              <img src="${escapeHtml(p.image_url)}" alt="" style="width: 38px; height: 38px; object-fit: cover;" class="rounded border">
                              <div><strong>${escapeHtml(p.name)}</strong></div>
                            </div>
                          </td>
                          <td>${escapeHtml(categoryMap.get(p.category_id) || 'General')}</td>
                          <td>${escapeHtml(p.brand_id ? (brandMap.get(p.brand_id) || 'General') : 'General')}</td>
                          <td>${escapeHtml(p.packaging)}</td>
                          <td><span class="admin-badge-status ${p.status === 'active' ? 'badge-completed' : 'badge-cancelled'}">${p.status}</span></td>
                          <td>
                            <button class="btn btn-sm btn-outline-primary py-0 admin-edit-prod-btn" data-id="${p.id}">Edit</button>
                            <button class="btn btn-sm btn-outline-danger py-0 admin-delete-prod-btn" data-id="${p.id}">Delete</button>
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            ` : ''}

            ${state.adminTab === 'enquiries' ? `
              <div class="card border shadow-sm">
                <div class="card-header bg-white py-3">
                  <h6 class="mb-0 fw-bold text-primary">All Quotation & Project Enquiries</h6>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover align-middle mb-0">
                    <thead class="table-light small">
                      <tr>
                        <th>Reference</th>
                        <th>Client</th>
                        <th>Contact</th>
                        <th>Location</th>
                        <th>Items</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody class="small">
                      ${state.enquiries.map(e => `
                        <tr>
                          <td><strong>#${escapeHtml(e.reference_no)}</strong></td>
                          <td>${escapeHtml(e.full_name)}<br><span class="text-muted small">${escapeHtml(e.company_name || 'Individual')}</span></td>
                          <td>${escapeHtml(e.phone)}<br><span class="text-muted small">${escapeHtml(e.email)}</span></td>
                          <td>${escapeHtml(e.location || 'Nigeria')}</td>
                          <td><span class="badge bg-light text-primary border">${e.items.length} items</span></td>
                          <td>
                            <select class="form-select form-select-sm admin-change-enquiry-status" data-id="${e.id}" style="width: 120px;">
                              <option value="New" ${e.status === 'New' ? 'selected' : ''}>New</option>
                              <option value="Contacted" ${e.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
                              <option value="Quoted" ${e.status === 'Quoted' ? 'selected' : ''}>Quoted</option>
                              <option value="Completed" ${e.status === 'Completed' ? 'selected' : ''}>Completed</option>
                              <option value="Cancelled" ${e.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
                            </select>
                          </td>
                          <td>
                            <button class="btn btn-sm btn-outline-secondary admin-view-enquiry-btn" data-id="${e.id}">Details & Notes</button>
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            ` : ''}

            ${state.adminTab === 'brands' ? `
              <div class="card border shadow-sm">
                <div class="card-header bg-white py-3">
                  <h6 class="mb-0 fw-bold text-primary">Configured Paint Brands</h6>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover align-middle mb-0">
                    <thead class="table-light small">
                      <tr>
                        <th>Brand Name</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody class="small">
                      ${state.brands.map(b => `
                        <tr>
                          <td>
                            <div class="d-flex align-items-center gap-2">
                              <img src="${escapeHtml(b.logo_url)}" alt="" style="width: 40px; height: 30px; object-fit: contain;" class="border p-1 bg-white rounded">
                              <strong>${escapeHtml(b.name)}</strong>
                            </div>
                          </td>
                          <td class="text-muted small">${escapeHtml(b.description)}</td>
                          <td><span class="admin-badge-status badge-completed">Active</span></td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            ` : ''}

            ${state.adminTab === 'categories' ? `
              <div class="card border shadow-sm">
                <div class="card-header bg-white py-3">
                  <h6 class="mb-0 fw-bold text-primary">Product Categories</h6>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover align-middle mb-0">
                    <thead class="table-light small">
                      <tr>
                        <th>Category Name</th>
                        <th>Slug</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody class="small">
                      ${state.categories.map(c => `
                        <tr>
                          <td><strong>${escapeHtml(c.name)}</strong></td>
                          <td><code>${escapeHtml(c.slug)}</code></td>
                          <td class="text-muted small">${escapeHtml(c.description)}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            ` : ''}

            ${state.adminTab === 'settings' ? `
              <div class="card border shadow-sm p-4 bg-white">
                <h6 class="fw-bold text-primary mb-3">Live CMS & Site Configuration</h6>
                <form id="adminSettingsForm">
                  <div class="row g-3 mb-3">
                    <div class="col-md-6">
                      <label class="form-label small fw-bold">Business Name</label>
                      <input type="text" id="as_bname" class="form-control" value="${escapeHtml(state.settings.business_name)}">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label small fw-bold">Official Logo URL</label>
                      <input type="text" id="as_logo" class="form-control" value="${escapeHtml(state.settings.logo_url)}">
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label small fw-bold">Business Address</label>
                    <input type="text" id="as_address" class="form-control" value="${escapeHtml(state.settings.business_address)}">
                  </div>

                  <div class="row g-3 mb-3">
                    <div class="col-md-6">
                      <label class="form-label small fw-bold">Phone Number</label>
                      <input type="text" id="as_phone" class="form-control" value="${escapeHtml(state.settings.phone_number)}">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label small fw-bold">Email Address</label>
                      <input type="email" id="as_email" class="form-control" value="${escapeHtml(state.settings.email_address)}">
                    </div>
                  </div>

                  <div class="row g-3 mb-3">
                    <div class="col-md-6">
                      <label class="form-label small fw-bold">WhatsApp Number (e.g. 2348000000000)</label>
                      <input type="text" id="as_wa_num" class="form-control" value="${escapeHtml(state.settings.whatsapp_number)}">
                    </div>
                    <div class="col-md-6">
                      <label class="form-label small fw-bold">Default WhatsApp Message</label>
                      <input type="text" id="as_wa_msg" class="form-control" value="${escapeHtml(state.settings.whatsapp_default_message)}">
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label small fw-bold">Business Hours</label>
                    <input type="text" id="as_hours" class="form-control" value="${escapeHtml(state.settings.business_hours)}">
                  </div>

                  <div class="mb-3">
                    <label class="form-label small fw-bold">Homepage Hero Title</label>
                    <input type="text" id="as_hero_title" class="form-control" value="${escapeHtml(state.settings.hero_title)}">
                  </div>

                  <div class="mb-4">
                    <label class="form-label small fw-bold">Homepage Hero Subtext</label>
                    <textarea id="as_hero_desc" class="form-control" rows="2">${escapeHtml(state.settings.hero_description)}</textarea>
                  </div>

                  <button type="submit" class="btn btn-skewbo-primary">Save Settings</button>
                </form>
              </div>
            ` : ''}

            ${state.adminTab === 'sql' ? `
              <div class="card border shadow-sm p-4 bg-white">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h6 class="fw-bold text-primary mb-1">Standalone PHP 8+ & MySQL Architecture</h6>
                    <p class="small text-muted mb-0">Production files ready in <code>/skewbo-global</code> for immediate upload to cPanel/Apache/Nginx.</p>
                  </div>
                  <button class="btn btn-sm btn-skewbo-primary" id="btnCopySqlSchema">Copy SQL Schema</button>
                </div>

                <div class="p-3 bg-dark text-light rounded font-monospace small" style="max-height: 380px; overflow-y: auto;">
-- Database schema: /skewbo-global/database/skewbo_global.sql
CREATE DATABASE IF NOT EXISTS skewbo_global;
USE skewbo_global;

-- Tables created:
-- 1. admins (Authentication with password_hash & session tokens)
-- 2. brands (International, Sigma, Jotun, Hempel)
-- 3. categories (Marine Paints, Industrial Coatings, Building Materials, Plumbing Materials)
-- 4. products (Specifications JSON, packaging, availability, images)
-- 5. enquiries (Reference format #SKG-2026-XXXX)
-- 6. enquiry_items (Multi-item quote builder lines)
-- 7. site_settings (Dynamic CMS settings)
-- 8. contact_messages
-- 9. faqs
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>

    <!-- Product Add/Edit Modal (Bootstrap 5) -->
    <div class="modal fade" id="adminProductModal" tabindex="-1" aria-labelledby="adminProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold text-primary" id="adminProductModalTitle">Add Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">
            <form id="adminProductForm">
              <input type="hidden" id="ap_id" value="">
              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Product Name *</label>
                  <input type="text" id="ap_name" class="form-control" required placeholder="e.g. Jotamastic 90 High Solids">
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Category *</label>
                  <select id="ap_category" class="form-select" required>
                    ${state.categories.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('')}
                  </select>
                </div>
              </div>

              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Brand</label>
                  <select id="ap_brand" class="form-select">
                    <option value="">None / General Material</option>
                    ${state.brands.map(b => `<option value="${b.id}">${escapeHtml(b.name)}</option>`).join('')}
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Packaging</label>
                  <input type="text" id="ap_packaging" class="form-control" placeholder="20 Litre Drum, 4 Litre Gallon">
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label small fw-bold">Short Description *</label>
                <input type="text" id="ap_short_desc" class="form-control" required placeholder="Brief commercial summary">
              </div>

              <div class="mb-3">
                <label class="form-label small fw-bold">Full Description</label>
                <textarea id="ap_desc" class="form-control" rows="3" placeholder="Formulation, anti-corrosive performance..."></textarea>
              </div>

              <div class="mb-3">
                <label class="form-label small fw-bold">Application & Use</label>
                <input type="text" id="ap_application" class="form-control" placeholder="e.g. Marine vessel hulls, ballast tanks, pipelines">
              </div>

              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Image Choice</label>
                  <select id="ap_image" class="form-select">
                    <option value="/assets/images/marine-paint-buckets.jpg">Vibrant Marine Paint Buckets</option>
                    <option value="/assets/images/marine-paint-pails.jpg">Colorful Paint Pails Studio</option>
                    <option value="/assets/images/paint-products.jpg">Industrial Steel Drums & Cans</option>
                    <option value="/assets/images/building-materials.jpg">Building Materials Warehouse</option>
                    <option value="/assets/images/plumbing-materials.jpg">Plumbing Pipes & Valves</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Stock Availability</label>
                  <select id="ap_avail" class="form-select">
                    <option value="in_stock">In Stock</option>
                    <option value="on_request">On Project Request</option>
                  </select>
                </div>
              </div>

              <div class="d-flex gap-4 mb-4">
                <div class="form-check">
                  <input type="checkbox" id="ap_featured" class="form-check-input">
                  <label class="form-check-label small" for="ap_featured">Featured on Homepage</label>
                </div>
                <div class="form-check">
                  <input type="checkbox" id="ap_active" class="form-check-input" checked>
                  <label class="form-check-label small" for="ap_active">Active in Catalogue</label>
                </div>
              </div>

              <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-skewbo-primary btn-sm">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------------
// EVENT LISTENERS & MODAL HANDLERS
// ---------------------------------------------------------------------------

function attachDynamicEventListeners(): void {
  // Access Bootstrap from window or global
  const bootstrap = (window as any).bootstrap;

  // Switch to Admin
  const btnSwitchToAdmin = document.getElementById("btnSwitchToAdmin");
  const btnFooterOpenAdmin = document.getElementById("btnFooterOpenAdmin");
  const adminOpenHandler = () => {
    if (state.isAdmin) {
      state.currentView = "admin";
      render();
    } else {
      const modalEl = document.getElementById("adminLoginModal");
      if (modalEl && bootstrap) {
        new bootstrap.Modal(modalEl).show();
      }
    }
  };
  if (btnSwitchToAdmin) btnSwitchToAdmin.addEventListener("click", adminOpenHandler);
  if (btnFooterOpenAdmin) btnFooterOpenAdmin.addEventListener("click", adminOpenHandler);

  // Admin Login
  const adminLoginForm = document.getElementById("adminLoginForm");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = (document.getElementById("admin_user") as HTMLInputElement).value;
      const pass = (document.getElementById("admin_pass") as HTMLInputElement).value;
      if (user === "admin" && pass === "SkewboAdmin2026!") {
        state.isAdmin = true;
        saveToStorage("is_admin", true);
        state.currentView = "admin";
        const modalEl = document.getElementById("adminLoginModal");
        if (modalEl && bootstrap) {
          const m = bootstrap.Modal.getInstance(modalEl);
          if (m) m.hide();
        }
        render();
        showToast("Authenticated successfully. Welcome to Skewbo Admin.");
      } else {
        alert("Invalid credentials. Please use: admin / SkewboAdmin2026!");
      }
    });
  }

  // Admin Logout
  const btnAdminLogout = document.getElementById("btnAdminLogout");
  if (btnAdminLogout) {
    btnAdminLogout.addEventListener("click", () => {
      state.isAdmin = false;
      saveToStorage("is_admin", false);
      state.currentView = "home";
      render();
      showToast("Signed out of Admin Portal.");
    });
  }

  // Admin Return Public
  const btnAdminReturnPublic = document.getElementById("btnAdminReturnPublic");
  if (btnAdminReturnPublic) {
    btnAdminReturnPublic.addEventListener("click", () => {
      state.currentView = "home";
      render();
    });
  }

  // Admin Tab Navigation
  document.querySelectorAll("[data-tab]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const tab = (e.currentTarget as HTMLElement).getAttribute("data-tab") as any;
      if (tab) {
        state.adminTab = tab;
        render();
      }
    });
  });

  // Open Cart Modal
  const btnOpenCartModal = document.getElementById("btnOpenCartModal");
  if (btnOpenCartModal) {
    btnOpenCartModal.addEventListener("click", () => {
      const modalEl = document.getElementById("quoteCartModal");
      if (modalEl && bootstrap) {
        new bootstrap.Modal(modalEl).show();
      }
    });
  }

  // Cart Modal Proceed
  const btnCartProceedToQuote = document.getElementById("btnCartProceedToQuote");
  if (btnCartProceedToQuote) {
    btnCartProceedToQuote.addEventListener("click", () => {
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Clear Cart
  const btnClearCartBtn = document.getElementById("btnClearCartBtn");
  if (btnClearCartBtn) {
    btnClearCartBtn.addEventListener("click", () => {
      state.cart = [];
      saveToStorage("cart", state.cart);
      showToast("Quotation cart cleared.");
      render();
    });
  }

  // Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const cat = (e.currentTarget as HTMLElement).getAttribute("data-cat");
      if (cat) {
        state.activeCategoryFilter = cat;
        render();
      }
    });
  });

  // Category Pillar triggers
  document.querySelectorAll(".filter-by-cat-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const cat = (e.currentTarget as HTMLElement).getAttribute("data-cat");
      if (cat) {
        state.activeCategoryFilter = cat;
        render();
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Reset Filters
  const btnResetFilters = document.getElementById("btnResetFilters");
  if (btnResetFilters) {
    btnResetFilters.addEventListener("click", () => {
      state.activeCategoryFilter = "all";
      state.searchQuery = "";
      render();
    });
  }

  // Live Search
  const catalogueSearchInput = document.getElementById("catalogueSearchInput") as HTMLInputElement;
  if (catalogueSearchInput) {
    catalogueSearchInput.addEventListener("input", (e) => {
      state.searchQuery = (e.target as HTMLInputElement).value;
      render();
    });
  }

  // Brand Enquire Button
  document.querySelectorAll(".brand-enquire-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const brandName = (e.currentTarget as HTMLElement).getAttribute("data-brand");
      if (brandName) {
        state.cart.push({
          product_name: `${brandName} Technical Sourcing & Pricing`,
          quantity: "Project Requirement"
        });
        saveToStorage("cart", state.cart);
        showToast(`Added ${brandName} request to your quotation cart.`);
        render();
        document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add to Quote from Card
  document.querySelectorAll(".add-to-quote-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt((e.currentTarget as HTMLElement).getAttribute("data-id") || "0");
      const prod = state.products.find(p => p.id === id);
      if (prod) {
        state.cart.push({
          product_id: prod.id,
          product_name: prod.name,
          quantity: "1"
        });
        saveToStorage("cart", state.cart);
        showToast(`Added "${prod.name}" to your quotation cart.`);
        render();
      }
    });
  });

  // View Details Modal
  document.querySelectorAll(".view-product-details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt((e.currentTarget as HTMLElement).getAttribute("data-id") || "0");
      const prod = state.products.find(p => p.id === id);
      if (prod) {
        state.selectedProduct = prod;
        const container = document.getElementById("productModalBodyContent");
        if (container) {
          container.innerHTML = `
            <div class="row g-4 align-items-center">
              <div class="col-md-5">
                <img src="${escapeHtml(prod.image_url)}" alt="${escapeHtml(prod.name)}" class="img-fluid rounded border shadow-sm w-100">
              </div>
              <div class="col-md-7">
                <h4 class="fw-bold text-primary mb-2">${escapeHtml(prod.name)}</h4>
                <p class="small text-muted mb-3">${escapeHtml(prod.description)}</p>

                <div class="p-3 bg-light rounded border mb-3 small">
                  <strong>Recommended Applications:</strong>
                  <p class="mb-0 text-dark mt-1">${escapeHtml(prod.application_use)}</p>
                </div>

                <div class="table-responsive mb-3">
                  <table class="table table-sm table-bordered small mb-0">
                    <tbody>
                      ${Object.entries(prod.specifications || {}).map(([k, v]) => `
                        <tr><th class="bg-light text-muted w-50">${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>
                      `).join('')}
                      <tr><th class="bg-light text-muted">Standard Packaging</th><td>${escapeHtml(prod.packaging)}</td></tr>
                    </tbody>
                  </table>
                </div>

                <div class="d-flex gap-2">
                  <button class="btn btn-skewbo-primary btn-sm flex-fill" id="modalAddToCartBtn">
                    + Add to Quotation Cart
                  </button>
                  <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          `;

          // Add to cart from modal
          document.getElementById("modalAddToCartBtn")?.addEventListener("click", () => {
            state.cart.push({
              product_id: prod.id,
              product_name: prod.name,
              quantity: "1"
            });
            saveToStorage("cart", state.cart);
            showToast(`Added "${prod.name}" to quotation cart.`);
            if (bootstrap) {
              const modalEl = document.getElementById("productDetailsModal");
              if (modalEl) bootstrap.Modal.getInstance(modalEl)?.hide();
            }
            render();
          });
        }

        const modalEl = document.getElementById("productDetailsModal");
        if (modalEl && bootstrap) {
          new bootstrap.Modal(modalEl).show();
        }
      }
    });
  });

  // Remove from Cart
  document.querySelectorAll(".remove-from-cart-btn, .remove-cart-item-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt((e.currentTarget as HTMLElement).getAttribute("data-index") || "0");
      state.cart.splice(idx, 1);
      saveToStorage("cart", state.cart);
      render();
    });
  });

  // Cart Qty change
  document.querySelectorAll(".cart-qty-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const idx = parseInt((e.target as HTMLElement).getAttribute("data-index") || "0");
      const val = (e.target as HTMLInputElement).value;
      if (state.cart[idx]) {
        state.cart[idx].quantity = val || "1";
        saveToStorage("cart", state.cart);
      }
    });
  });

  // Quote Request Form
  const quoteRequestForm = document.getElementById("quoteRequestForm");
  if (quoteRequestForm) {
    quoteRequestForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("q_name") as HTMLInputElement).value.trim();
      const company = (document.getElementById("q_company") as HTMLInputElement).value.trim();
      const phone = (document.getElementById("q_phone") as HTMLInputElement).value.trim();
      const email = (document.getElementById("q_email") as HTMLInputElement).value.trim();
      const project = (document.getElementById("q_project") as HTMLSelectElement).value;
      const location = (document.getElementById("q_location") as HTMLInputElement).value.trim();
      const message = (document.getElementById("q_message") as HTMLTextAreaElement).value.trim();

      const year = new Date().getFullYear();
      const refCount = state.enquiries.length + 1;
      const refNo = `SKG-${year}-${String(refCount).padStart(4, "0")}`;

      const items: QuoteItem[] = state.cart.length > 0 ? [...state.cart] : [
        { product_name: "General Materials Supply Enquiry", quantity: "Project Lots" }
      ];

      const newEnquiry: Enquiry = {
        id: Date.now(),
        reference_no: refNo,
        full_name: name,
        company_name: company,
        phone,
        email,
        project_type: project,
        location,
        message,
        status: "New",
        internal_notes: "",
        created_at: new Date().toISOString().replace("T", " ").substring(0, 16),
        items
      };

      state.enquiries.unshift(newEnquiry);
      saveToStorage("enquiries", state.enquiries);
      state.cart = [];
      saveToStorage("cart", state.cart);

      alert(`✓ Quotation Submitted Successfully!\n\nYour Unique Tracking Reference:\n#${refNo}\n\nOur team will review your specifications and supply a formal commercial proposal to ${phone} and ${email}.`);
      render();
    });
  }

  // Contact Form
  const contactMessageForm = document.getElementById("contactMessageForm");
  if (contactMessageForm) {
    contactMessageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("c_name") as HTMLInputElement).value.trim();
      const email = (document.getElementById("c_email") as HTMLInputElement).value.trim();
      const phone = (document.getElementById("c_phone") as HTMLInputElement).value.trim();
      const subject = (document.getElementById("c_subject") as HTMLInputElement).value.trim();
      const message = (document.getElementById("c_message") as HTMLTextAreaElement).value.trim();

      state.contactMessages.unshift({
        id: Date.now(),
        name, email, phone, subject, message,
        created_at: new Date().toISOString().replace("T", " ").substring(0, 16),
        is_read: false
      });
      saveToStorage("contacts", state.contactMessages);

      alert(`Thank you, ${name}. Your message regarding "${subject}" has been delivered.`);
      (e.target as HTMLFormElement).reset();
    });
  }

  // Legal Modals / Alerts
  document.getElementById("linkPrivacyModal")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Skewbo Global Paint Limited - Privacy Policy\n\nAll customer data, project locations, and contact details collected through our quotation and enquiry forms are handled strictly for business procurement, technical support, and invoicing. We do not sell or share customer data.");
  });

  document.getElementById("linkTermsModal")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Skewbo Global Paint Limited - Terms & Conditions\n\n1. Product quotations are subject to stock availability and current material logistics.\n2. Technical Data Sheets (TDS) and safety data are provided per manufacturer guidelines.\n3. Formal purchase orders are confirmed upon quotation approval.");
  });

  document.getElementById("linkStandaloneDownload")?.addEventListener("click", (e) => {
    e.preventDefault();
    state.currentView = "admin";
    state.adminTab = "sql";
    render();
  });

  // Admin Actions
  document.getElementById("btnAdminGoEnquiries")?.addEventListener("click", () => {
    state.adminTab = "enquiries";
    render();
  });

  // Open Add Product Modal
  document.getElementById("btnOpenAddProductModal")?.addEventListener("click", () => {
    const modalEl = document.getElementById("adminProductModal");
    const form = document.getElementById("adminProductForm") as HTMLFormElement;
    if (form) {
      form.reset();
      (document.getElementById("ap_id") as HTMLInputElement).value = "";
    }
    document.getElementById("adminProductModalTitle")!.innerText = "Add New Product";
    if (modalEl && bootstrap) {
      new bootstrap.Modal(modalEl).show();
    }
  });

  // Admin Save Product
  const adminProductForm = document.getElementById("adminProductForm");
  if (adminProductForm) {
    adminProductForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const idStr = (document.getElementById("ap_id") as HTMLInputElement).value;
      const name = (document.getElementById("ap_name") as HTMLInputElement).value.trim();
      const categoryId = parseInt((document.getElementById("ap_category") as HTMLSelectElement).value);
      const brandIdVal = (document.getElementById("ap_brand") as HTMLSelectElement).value;
      const brandId = brandIdVal ? parseInt(brandIdVal) : null;
      const packaging = (document.getElementById("ap_packaging") as HTMLInputElement).value.trim() || "20 Litre Drum";
      const shortDesc = (document.getElementById("ap_short_desc") as HTMLInputElement).value.trim();
      const desc = (document.getElementById("ap_desc") as HTMLTextAreaElement).value.trim();
      const application = (document.getElementById("ap_application") as HTMLInputElement).value.trim();
      const img = (document.getElementById("ap_image") as HTMLSelectElement).value;
      const avail = (document.getElementById("ap_avail") as HTMLSelectElement).value as any;
      const featured = (document.getElementById("ap_featured") as HTMLInputElement).checked;
      const active = (document.getElementById("ap_active") as HTMLInputElement).checked;

      if (idStr) {
        const prod = state.products.find(p => p.id === parseInt(idStr));
        if (prod) {
          prod.name = name;
          prod.category_id = categoryId;
          prod.brand_id = brandId;
          prod.packaging = packaging;
          prod.short_description = shortDesc;
          prod.description = desc;
          prod.application_use = application;
          prod.image_url = img;
          prod.availability = avail;
          prod.featured = featured;
          prod.status = active ? "active" : "inactive";
          showToast(`Product "${name}" updated.`);
        }
      } else {
        state.products.unshift({
          id: Date.now(),
          name,
          slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          category_id: categoryId,
          brand_id: brandId,
          packaging,
          short_description: shortDesc,
          description: desc,
          application_use: application,
          specifications: { "Volume Solids": "Standard", "Packaging": packaging },
          price: 0,
          show_price: false,
          availability: avail,
          featured,
          status: active ? "active" : "inactive",
          image_url: img
        });
        showToast(`Product "${name}" created.`);
      }

      saveToStorage("products", state.products);
      if (bootstrap) {
        const modalEl = document.getElementById("adminProductModal");
        if (modalEl) bootstrap.Modal.getInstance(modalEl)?.hide();
      }
      render();
    });
  }

  // Admin Edit Product
  document.querySelectorAll(".admin-edit-prod-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt((e.currentTarget as HTMLElement).getAttribute("data-id") || "0");
      const prod = state.products.find(p => p.id === id);
      if (prod) {
        (document.getElementById("ap_id") as HTMLInputElement).value = String(prod.id);
        (document.getElementById("ap_name") as HTMLInputElement).value = prod.name;
        (document.getElementById("ap_category") as HTMLSelectElement).value = String(prod.category_id);
        (document.getElementById("ap_brand") as HTMLSelectElement).value = prod.brand_id ? String(prod.brand_id) : "";
        (document.getElementById("ap_packaging") as HTMLInputElement).value = prod.packaging;
        (document.getElementById("ap_short_desc") as HTMLInputElement).value = prod.short_description;
        (document.getElementById("ap_desc") as HTMLTextAreaElement).value = prod.description;
        (document.getElementById("ap_application") as HTMLInputElement).value = prod.application_use;
        (document.getElementById("ap_image") as HTMLSelectElement).value = prod.image_url;
        (document.getElementById("ap_avail") as HTMLSelectElement).value = prod.availability;
        (document.getElementById("ap_featured") as HTMLInputElement).checked = prod.featured;
        (document.getElementById("ap_active") as HTMLInputElement).checked = prod.status === "active";
        document.getElementById("adminProductModalTitle")!.innerText = "Edit Product";

        const modalEl = document.getElementById("adminProductModal");
        if (modalEl && bootstrap) new bootstrap.Modal(modalEl).show();
      }
    });
  });

  // Admin Delete Product
  document.querySelectorAll(".admin-delete-prod-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt((e.currentTarget as HTMLElement).getAttribute("data-id") || "0");
      const prod = state.products.find(p => p.id === id);
      if (prod && confirm(`Delete "${prod.name}"?`)) {
        state.products = state.products.filter(p => p.id !== id);
        saveToStorage("products", state.products);
        showToast(`Product "${prod.name}" removed.`);
        render();
      }
    });
  });

  // Admin Enquiry Status Change
  document.querySelectorAll(".admin-change-enquiry-status").forEach(select => {
    select.addEventListener("change", (e) => {
      const id = parseInt((e.target as HTMLElement).getAttribute("data-id") || "0");
      const val = (e.target as HTMLSelectElement).value as any;
      const enq = state.enquiries.find(item => item.id === id);
      if (enq) {
        enq.status = val;
        saveToStorage("enquiries", state.enquiries);
        showToast(`Enquiry #${enq.reference_no} updated to '${val}'.`);
      }
    });
  });

  // Admin View Enquiry Notes
  document.querySelectorAll(".admin-view-enquiry-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt((e.currentTarget as HTMLElement).getAttribute("data-id") || "0");
      const enq = state.enquiries.find(item => item.id === id);
      if (enq) {
        const notes = prompt(`Enquiry #${enq.reference_no}\nCustomer: ${enq.full_name} (${enq.phone})\nItems: ${enq.items.map(it => it.product_name + ' (' + it.quantity + ')').join(', ')}\n\nEdit Internal Notes:`, enq.internal_notes || "");
        if (notes !== null) {
          enq.internal_notes = notes;
          saveToStorage("enquiries", state.enquiries);
          showToast(`Internal notes saved for #${enq.reference_no}.`);
          render();
        }
      }
    });
  });

  // Admin Settings Submit
  const adminSettingsForm = document.getElementById("adminSettingsForm");
  if (adminSettingsForm) {
    adminSettingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      state.settings.business_name = (document.getElementById("as_bname") as HTMLInputElement).value.trim();
      state.settings.logo_url = (document.getElementById("as_logo") as HTMLInputElement).value.trim();
      state.settings.business_address = (document.getElementById("as_address") as HTMLInputElement).value.trim();
      state.settings.phone_number = (document.getElementById("as_phone") as HTMLInputElement).value.trim();
      state.settings.email_address = (document.getElementById("as_email") as HTMLInputElement).value.trim();
      state.settings.whatsapp_number = (document.getElementById("as_wa_num") as HTMLInputElement).value.trim();
      state.settings.whatsapp_default_message = (document.getElementById("as_wa_msg") as HTMLInputElement).value.trim();
      state.settings.business_hours = (document.getElementById("as_hours") as HTMLInputElement).value.trim();
      state.settings.hero_title = (document.getElementById("as_hero_title") as HTMLInputElement).value.trim();
      state.settings.hero_description = (document.getElementById("as_hero_desc") as HTMLTextAreaElement).value.trim();

      saveToStorage("settings", state.settings);
      showToast("CMS settings updated successfully.");
      render();
    });
  }

  // Copy SQL
  document.getElementById("btnCopySqlSchema")?.addEventListener("click", () => {
    showToast("SQL Schema is in /skewbo-global/database/skewbo_global.sql");
  });
}

// ---------------------------------------------------------------------------
// UTILITY FUNCTIONS
// ---------------------------------------------------------------------------

function escapeHtml(str: string | null | undefined): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(msg: string): void {
  const existing = document.getElementById("skewbo-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "skewbo-toast";
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#0B2F7D";
  toast.style.color = "#FFFFFF";
  toast.style.padding = "10px 22px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  toast.style.zIndex = "3000";
  toast.style.fontSize = "0.875rem";
  toast.style.fontWeight = "600";
  toast.style.border = "1px solid #FF6B00";
  toast.innerText = msg;

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}

// Initial Boot
render();
