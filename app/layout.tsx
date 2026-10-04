import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeIndia | Disaster Preparedness & Citizen Safety Portal",
  description:
    "Open-access disaster resilience portal for Indian citizens. Access verified 24/7 helplines (112, 108, 1078), check district hazard risks, study NDMA-aligned survival guides, and generate printable family emergency plans.",
  keywords: [
    "disaster preparedness india",
    "NDMA citizen guidelines",
    "112 emergency india",
    "flood safety checklist",
    "cyclone warning",
    "earthquake survival",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-950 font-sans selection:bg-orange-500 selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}