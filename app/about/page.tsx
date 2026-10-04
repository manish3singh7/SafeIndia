import Link from "next/link";

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">

        {/* Hero Section */}
        <header className="space-y-3 text-center sm:text-left border-b border-slate-300 pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black text-orange-950 border border-orange-300">
            <span>🛡️</span> Public Mission
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            About SafeIndia
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl leading-relaxed font-medium">
            An open-access, zero-tracking public portal created to make life-saving disaster protocols intuitive, mobile-ready, and printable for every Indian household.
          </p>
        </header>

        {/* Section 1: Purpose */}
        <section
          aria-labelledby="purpose-heading"
          className="rounded-3xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow-sm space-y-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-white font-black text-sm">
              01
            </span>
            <h2 id="purpose-heading" className="text-lg font-black text-slate-950">
              Purpose of SafeIndia
            </h2>
          </div>
          <p className="text-sm text-slate-800 leading-relaxed font-medium">
            India is vulnerable to severe natural hazards—from coastal cyclones in the Bay of Bengal and Arabian Sea, to Himalayan landslides, heatwaves in the northern plains, and monsoon floods along major river basins.
          </p>
          <p className="text-sm text-slate-800 leading-relaxed font-medium">
            Official guidelines are frequently buried inside lengthy policy reports. SafeIndia transforms these protocols into concise, high-contrast checklists that load rapidly on low-bandwidth 2G/3G mobile networks without logins or tracking cookies.
          </p>
        </section>

        {/* Section 2: Who It Is For */}
        <section
          aria-labelledby="audience-heading"
          className="rounded-3xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow-sm space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-white font-black text-sm">
              02
            </span>
            <h2 id="audience-heading" className="text-lg font-black text-slate-950">
              Who SafeIndia Is For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5">
              <h3 className="font-black text-sm text-slate-950">🏠 Indian Households & Families</h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed font-medium">
                Citizens who need a physical printable emergency plan and designated meeting spot when cellular networks go down.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5">
              <h3 className="font-black text-sm text-slate-950">🌊 Coastal & Mountain Communities</h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed font-medium">
                Residents living in cyclone, flood, and landslide belts who need rapid checklists to protect lives, rations, and livestock.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5">
              <h3 className="font-black text-sm text-slate-950">👵 Vulnerable & Special Needs Groups</h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed font-medium">
                Households with seniors, infants, pregnant persons, or mobility-impaired individuals requiring evacuation plans.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-300 bg-slate-50 p-5">
              <h3 className="font-black text-sm text-slate-950">🏫 RWAs, Schools & Volunteers</h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed font-medium">
                Community coordinators looking for standard citizen emergency manuals to conduct safety drills.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Data Sources */}
        <section
          aria-labelledby="data-heading"
          className="rounded-3xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow-sm space-y-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white font-black text-sm">
              03
            </span>
            <h2 id="data-heading" className="text-lg font-black text-slate-950">
              What Data SafeIndia Uses
            </h2>
          </div>
          <p className="text-sm text-slate-800 leading-relaxed font-medium">
            Hazard classifications and response actions are aligned with published guidelines from official government bodies:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 pl-1 font-medium">
            <li className="flex items-start gap-2">
              <span className="font-black text-emerald-700">✓</span>
              <span>
                <strong>National Disaster Management Authority (NDMA):</strong> SOPs for floods, cyclones, landslides, earthquakes, and domestic fires.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-black text-emerald-700">✓</span>
              <span>
                <strong>India Meteorological Department (IMD / Mausam):</strong> Heatwave and rainfall thresholds, color-coded cyclone alert stages.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-black text-emerald-700">✓</span>
              <span>
                <strong>National Institute of Disaster Management (NIDM):</strong> Seismic hazard zoning and community resilience strategies.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-black text-emerald-700">✓</span>
              <span>
                <strong>ERSS (112):</strong> Single integrated national emergency response system integration.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4: Limitations */}
        <section
          aria-labelledby="limits-heading"
          className="rounded-3xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow-sm space-y-3"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-black text-sm">
              04
            </span>
            <h2 id="limits-heading" className="text-lg font-black text-slate-950">
              Platform Limitations
            </h2>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            <p>
              • <strong>Educational Reference Only:</strong> SafeIndia is designed for preparedness; it does not broadcast real-time Doppler radar telemetry or satellite rainfall alerts.
            </p>
            <p>
              • <strong>No Direct Emergency Dispatch:</strong> SafeIndia does not dispatch ambulances, fire tenders, or rescue boats. Dial <strong>112</strong> immediately for active rescue.
            </p>
            <p>
              • <strong>Zero Data Storage:</strong> No personal or family plan data is saved on our servers. All information remains on your local browser.
            </p>
          </div>
        </section>

        {/* Section 5: Mandatory Emergency Disclaimer */}
        <section
          aria-labelledby="disclaimer-heading"
          className="rounded-3xl border-2 border-red-400 bg-red-50 p-6 sm:p-8 shadow-sm space-y-3"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">⚠️</span>
            <h2 id="disclaimer-heading" className="text-base sm:text-lg font-black text-red-950 uppercase tracking-wide">
              Mandatory Emergency Disclaimer
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-bold text-red-900 leading-relaxed">
            SafeIndia is an independent, non-governmental open-source public service initiative.
          </p>
          <p className="text-xs sm:text-sm font-medium text-red-900 leading-relaxed">
            During any active, imminent, or declared emergency, users <strong>MUST prioritize direct announcements from official authorities</strong>—including District Magistrates, Police, NDRF, SDRF, and IMD weather radar bulletins.
          </p>
          <p className="text-xs sm:text-sm font-black text-red-950 leading-relaxed">
            In any immediate life-safety crisis, dial 112 directly.
          </p>
        </section>

        {/* Action CTAs (Min 48px touch targets) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-300">
          <Link
            href="/check-area"
            className="inline-flex min-h-[48px] items-center rounded-xl bg-orange-600 px-6 py-3 text-sm font-black text-white hover:bg-orange-500 shadow transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
          >
            📍 Check District Hazard Risk
          </Link>
          <Link
            href="/contacts"
            className="inline-flex min-h-[48px] items-center rounded-xl border-2 border-slate-400 bg-white px-6 py-3 text-sm font-black text-slate-900 hover:bg-slate-100 shadow transition focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400"
          >
            📞 View All Emergency Helplines
          </Link>
        </div>

      </div>
    </main>
  );
}