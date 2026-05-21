import {
  Archive,
  Building2,
  ClipboardCheck,
  ConciergeBell,
  Factory,
  Gem,
  Handshake,
  HeartPulse,
  Hotel,
  Landmark,
  PackageCheck,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Utensils,
  Warehouse,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

export const company = {
  name: "INMA Hotels Outfit LLC",
  shortName: "INMA",
  location: "Ajman, United Arab Emirates",
  phone: "+971 56 735 1095",
  email: "procurement@inmahotelsoutfit.ae",
  whatsapp:
    "https://wa.me/971567351095?text=Hello%20INMA%20Hotels%20Outfit%20LLC%2C%20I%20would%20like%20to%20request%20a%20B2B%20quote.",
  address: "Ajman-based hospitality supplier serving hotels, resorts, and accommodation operators across the UAE.",
};

export const aboutStory = {
  intro:
    "With over a decade of experience in hospitality, INMA HOTELS OUTFIT L.L.C. is a trusted supplier of high-quality amenities, linens, guest room accessories, and hygiene products across the UAE.",
  detail:
    "The company specializes in outfitting 4 and 5-star hotels with premium products including branded toiletries, luxury towels, bedsheets, lobby accessories, guestroom essentials, and more. Located in Ajman, INMA delivers excellence in both product quality and customer service for boutique hotels, luxury resorts, serviced apartments, and hospitality operators.",
  mission:
    "To deliver reliable, affordable, and high-quality hospitality supplies with same-day or 48-hour delivery across the UAE.",
  vision:
    "To become the most recommended hotel supplier in the GCC, known for service, speed, and product variety.",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Catalog", href: "/catalog" },
  { label: "Contact", href: "/contact" },
];

export const megaMenu = [
  {
    title: "Hospitality",
    href: "/hospitality-solutions",
    text: "Hotel outfitting, housekeeping, OS&E, guest supplies, and resort operations support.",
    icon: Hotel,
  },
  {
    title: "Procurement Services",
    href: "/procurement-services",
    text: "Requirement mapping, sourcing, vendor coordination, logistics, and enterprise RFQ support.",
    icon: ClipboardCheck,
  },
  {
    title: "Utility & Commercial",
    href: "/utility-commercial-supply",
    text: "Facility support products, commercial consumables, utility trading, and industrial essentials.",
    icon: Zap,
  },
];

export const heroImages = {
  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=82",
  logistics:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=82",
  interiors:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=82",
  commercial:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=82",
  dining:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=82",
  industrial:
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=82",
  amenities:
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=90",
  towels:
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=90",
  bedding:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=90",
  hygiene:
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=90",
  lobby:
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=90",
};

export const stats = [
  ["10+", "Years in hospitality"],
  ["4&5", "Star hotel outfitting"],
  ["48h", "UAE delivery window"],
  ["Ajman", "Hospitality supply base"],
];

export const industries = [
  { title: "Hotels", icon: Hotel, text: "Rooms, F&B, housekeeping, back-of-house, and opening supply packages." },
  { title: "Resorts", icon: Waves, text: "Guest-facing and operational supply programs for premium resort environments." },
  { title: "Restaurants", icon: Utensils, text: "OS&E, hygiene, serviceware, consumables, and replenishment support." },
  { title: "Commercial Buildings", icon: Building2, text: "Facility products, cleaning systems, washroom supplies, and common-area support." },
  { title: "Facility Management", icon: Wrench, text: "Repeatable procurement for multi-site service teams and operators." },
  { title: "Healthcare", icon: HeartPulse, text: "Hygiene-led supply support for clinics, wellness spaces, and care facilities." },
  { title: "Corporate Offices", icon: Landmark, text: "Pantry, janitorial, reception, utility, and staff support requirements." },
  { title: "Utility Companies", icon: Zap, text: "Commercial supply, safety essentials, storage, and field-operation consumables." },
  { title: "Industrial Operations", icon: Factory, text: "Heavy-use consumables, facility support, PPE-adjacent items, and storage solutions." },
];

export const solutions = [
  { title: "Hotel Outfitting", icon: ConciergeBell, text: "Complete supply programs for boutique hotels, 4-star properties, 5-star hotels, and luxury resorts." },
  { title: "Branded Guest Amenities", icon: Gem, text: "Premium toiletries, amenity kits, bathroom essentials, and guest-facing presentation products." },
  { title: "Luxury Linens & Towels", icon: Sparkles, text: "Hotel-grade towels, bedsheets, duvet support, bath linen, and room-ready textile essentials." },
  { title: "Guest Room Accessories", icon: Archive, text: "Room accessories, operational guest essentials, trays, bins, presentation items, and replenishment products." },
  { title: "Lobby & Public Area Accessories", icon: Landmark, text: "Elegant accessories and support products for reception, lobby, corridors, and guest common areas." },
  { title: "Hygiene Products", icon: ShieldCheck, text: "Reliable hygiene supplies, dispensers, cleaning support, and guest-safe consumables for daily operations." },
  { title: "Same-Day / 48-Hour Delivery", icon: Truck, text: "Responsive UAE delivery support from Ajman for urgent replenishment and opening-stage hotel needs." },
  { title: "Procurement Management", icon: SearchCheck, text: "Product matching, quote handling, substitutions, and consolidated supply coordination for hotel teams." },
];

export const productCategories = [
  {
    title: "Hotel Toiletries & Amenities",
    tag: "Ajman & Dubai hotels",
    image: heroImages.amenities,
    items: ["Branded toiletries", "Amenity kits", "Bathroom essentials"],
  },
  {
    title: "Towels, Bedsheets & Bath Linen",
    tag: "Abu Dhabi resorts",
    image: heroImages.towels,
    items: ["Luxury towels", "Bedsheets", "Bath mats"],
  },
  {
    title: "Guest Room & Lobby Accessories",
    tag: "Sharjah properties",
    image: heroImages.lobby,
    items: ["Room accessories", "Lobby essentials", "Bathroom accessories"],
  },
  {
    title: "Hygiene & Housekeeping Supply",
    tag: "UAE delivery",
    image: heroImages.hygiene,
    items: ["Hygiene products", "Dispensers", "Daily replenishment"],
  },
];

export const workflow = [
  { title: "Requirement Collection", text: "INMA clarifies quantities, performance standards, budget, delivery location, and operating context." },
  { title: "Product Sourcing", text: "The team identifies compliant, durable, commercially suitable products for hospitality and facility use." },
  { title: "Procurement Management", text: "Supplier options, pricing, substitutions, samples, and approvals are coordinated through one B2B desk." },
  { title: "Logistics Coordination", text: "Delivery plans are structured around project schedules, storage constraints, and UAE site access." },
  { title: "Delivery & Support", text: "After delivery, INMA supports replenishment, variations, and ongoing procurement requirements." },
];

export const advantages = [
  "Ajman-based UAE supply",
  "Same-day or 48-hour delivery",
  "Trusted by hospitality buyers",
  "4&5-star hotel outfitting",
  "High-quality product range",
  "Reliable customer service",
  "Affordable premium supply",
  "Wide product variety",
];

export const projects = [
  {
    title: "4&5-Star Hotel Opening Package",
    sector: "Hospitality",
    image: heroImages.amenities,
    text: "Coordinated branded amenities, guest room accessories, linens, towels, and hygiene products for hotel opening requirements.",
  },
  {
    title: "Luxury Resort Linen Replenishment",
    sector: "Resort Operations",
    image: heroImages.towels,
    text: "Premium bath linen, bedsheets, and guest-ready textile supply for resort teams requiring reliable UAE replenishment.",
  },
  {
    title: "Boutique Hotel Hygiene Program",
    sector: "Boutique Hotels",
    image: heroImages.hygiene,
    text: "Daily hygiene products, dispensers, guest supplies, and housekeeping consumables structured around 48-hour delivery.",
  },
];

export const searchIndex = [
  ...navItems.map((item) => ({ title: item.label, href: item.href, type: "Page" })),
  ...megaMenu.map((item) => ({ title: item.title, href: item.href, type: "Solution" })),
  ...solutions.map((item) => ({ title: item.title, href: "/solutions", type: "Capability" })),
  ...industries.map((item) => ({ title: item.title, href: "/industries", type: "Industry" })),
  ...productCategories.map((item) => ({ title: item.title, href: "/products", type: "Product" })),
];

export const trustMarks = [
  { icon: PackageCheck, title: "Premium Hotel Supply", text: "Amenities, linens, guest room accessories, and hygiene products for UAE hospitality operators." },
  { icon: Handshake, title: "Decade of Trust", text: "Over ten years of hospitality supply experience serving boutique hotels and luxury resorts." },
  { icon: Truck, title: "Fast UAE Delivery", text: "Same-day or 48-hour delivery support from Ajman for urgent and recurring hotel requirements." },
];
