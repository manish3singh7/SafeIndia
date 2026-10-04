import Link from "next/link";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="border-t-2 border-slate-800 bg-slate-950 text-slate-200 print:hidden"
    >
      {/* Official Disclaimer Strip */}
      <div className="border-b border-slate-800 bg-slate-900/90 px-4 py-4 text-center text-xs sm:text-sm text-slate-300">
        <p className="max-w-4xl mx-auto leading-relaxed">
          <strong className="text-yellow-300">Official Warning:</strong> SafeIndia is an independent educational initiative. During active disasters, immediately follow evacuation and safety orders issued by District Magistrates, IMD, and NDMA. In life-threatening emergencies, call <strong className="text-white underline">112</strong> immediately.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-xl font-black text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white font-black text-sm shadow">
                SI
              </span>
              <span>
                Safe<span className="text-orange-400">India</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              National citizen disaster readiness and emergency survival portal for Indian families and local communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-orange-400 mb-3">
              Preparedness Tools
            </h3>
            <ul className="space-y-1">
              {[
                { href: "/check-area", label: "Check My Area Risk" },
                { href: "/guides", label: "Disaster Action Guides" },
                { href: "/family-plan", label: "Family Emergency Plan" },
                { href: "/contacts", label: "Emergency Helplines Directory" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-xs sm:text-sm text-slate-200 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Helplines (One-Tap Dial) */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-orange-400 mb-3">
              Key Toll-Free Numbers
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="tel:112"
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-red-700 px-3 py-1 text-white font-extrabold shadow hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>📞 112</span>
                  <span className="font-normal text-xs text-red-100">(National Emergency)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:1078"
                  className="inline-flex min-h-[36px] items-center text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded py-1"
                >
                  <strong className="text-orange-400 mr-1.5">1078:</strong> NDMA Disaster Control
                </a>
              </li>
              <li>
                <a
                  href="tel:108"
                  className="inline-flex min-h-[36px] items-center text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded py-1"
                >
                  <strong className="text-orange-400 mr-1.5">108:</strong> Emergency Ambulance
                </a>
              </li>
              <li>
                <a
                  href="tel:101"
                  className="inline-flex min-h-[36px] items-center text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded py-1"
                >
                  <strong className="text-orange-400 mr-1.5">101:</strong> Fire & Rescue Brigade
                </a>
              </li>
            </ul>
          </div>

          {/* Attribution & About */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-orange-400 mb-3">
              Official Data Sources
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Guidelines are synthesized from published manuals of the National Disaster Management Authority (NDMA) and IMD India.
            </p>
            <div className="mt-3">
              <Link
                href="/about"
                className="inline-flex min-h-[44px] items-center text-xs font-bold text-orange-300 hover:text-orange-200 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded"
              >
                Read data methodology & disclaimer →
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-400 font-medium">
          © {new Date().getFullYear()} SafeIndia. Public safety portal. No tracking, no login required.
        </div>
      </div>
    </footer>
  );
}