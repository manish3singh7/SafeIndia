"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/check-area", label: "Check My Area" },
    { href: "/guides", label: "Disaster Guides" },
    { href: "/contacts", label: "Emergency Contacts" },
    { href: "/family-plan", label: "Family Plan" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      {/* Skip to Main Content Link for Keyboard / Screen Readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-orange-600 focus:px-4 focus:py-2.5 focus:text-sm focus:font-extrabold focus:text-white focus:outline-none focus:ring-4 focus:ring-white"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-slate-950 text-white shadow-md">
        {/* High-Contrast Immediate Emergency Dial Strip */}
        <aside
          aria-label="Immediate Emergency Hotline"
          className="bg-red-800 border-b border-red-900 px-4 py-2 text-white"
        >
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
            <span className="font-black tracking-wide flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300 animate-pulse" aria-hidden="true" />
              EMERGENCY CALL:
            </span>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:112"
                aria-label="Call National Emergency Number 112"
                className="inline-flex min-h-[36px] items-center rounded-md bg-white px-3 py-1 font-black text-red-900 shadow hover:bg-yellow-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition"
              >
                📞 112 (National)
              </a>
              <a
                href="tel:1078"
                aria-label="Call NDMA Disaster Helpline 1078"
                className="inline-flex min-h-[36px] items-center rounded-md bg-red-950 border border-red-400 px-3 py-1 font-bold text-white hover:bg-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition"
              >
                NDMA: 1078
              </a>
            </div>
          </div>
        </aside>

        {/* Main Navigation Bar */}
        <nav
          aria-label="Main Navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex min-h-[48px] items-center gap-2.5 text-xl font-black tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-lg p-1"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600 font-black text-white text-base shadow">
              SI
            </span>
            <span>
              Safe<span className="text-orange-400">India</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex min-h-[44px] items-center rounded-lg px-3.5 py-2 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                    isActive
                      ? "bg-slate-800 text-orange-400 border border-slate-700 shadow-inner"
                      : "text-slate-100 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button with 48x48px Touch Target */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            id="mobile-nav-menu"
            className="border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 md:hidden shadow-inner"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex min-h-[48px] items-center rounded-xl px-4 text-base font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                      isActive
                        ? "bg-slate-800 text-orange-400 border border-slate-700 font-extrabold"
                        : "text-slate-100 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}