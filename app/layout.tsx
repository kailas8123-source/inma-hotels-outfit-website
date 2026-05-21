import type { Metadata } from "next";
import { Catamaran, Dosis } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

const dosis = Dosis({
  subsets: ["latin"],
  variable: "--font-dosis",
  display: "swap",
});

const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-catamaran",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "INMA Hotels Outfit LLC | UAE Procurement & B2B Trading",
    template: "%s | INMA Hotels Outfit LLC",
  },
  description:
    "Ajman-based UAE supplier of premium hotel amenities, luxury towels, bedsheets, guest room accessories, lobby accessories, and hygiene products for boutique hotels and 4&5-star properties.",
  keywords: [
    "hotel amenities supplier UAE",
    "hotel linens UAE",
    "luxury towels supplier UAE",
    "hotel toiletries UAE",
    "guest room accessories UAE",
    "Ajman hotel supplier",
  ],
  openGraph: {
    title: "INMA Hotels Outfit LLC",
    description: "Premium hotel amenities, linens, guest room accessories, and hygiene product supply across the UAE.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${catamaran.variable}`}>
        <Header />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
