import Link from "next/link";
import data from "@/data/indiaDisasterData.json";

export default function Home() {
  // Primary life-safety emergency numbers from static disaster data
  const quickContacts = (data.emergencyNumbers || []).slice(0, 4);

  const guideIcons: Record<string, string> = {
    flood: "🌊",
    cyclone: "🌀",
    earthquake: "🏚️",
    heatwave: "☀️",
    landslide: "⛰️",
    fire: "🔥",
  };

  return (
    <main id="main-content" className="space-y-12 pb-16">
      {/* 1. Hero Section (Calm, Urgent Design) */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-slate-950 text-white border-b-2 border-slate-800 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        {/* Ambient subtle glow background */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(234,88,12,0.18),rgba(2,6,23,0))]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Urgent Readiness Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-950/60 px-4 py-1.5 text-xs sm:text-sm font-extrabold text-orange-300 shadow-sm backdrop-blur-sm mb-6">
            <span
              className="h-2.5 w-2.5 rounded-full bg-orange-400 animate-pulse shrink-0"
              aria-hidden="true"
            />
            <span>National Citizen Disaster Preparedness Portal</span>
          </div>

          {/* Primary Headline */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white"
          >
            Disasters give no warning.{" "}
            <span className="text-orange-500">Preparation saves lives.</span>
          </h1>

          {/* Value Proposition */}
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-medium">
            SafeIndia helps your family stay ahead of extreme events. Assess your district’s natural
            hazard risks, review verified survival checklists, and generate an offline emergency plan
            before lines go down.
          </p>

          {/* Primary Action Button ("Check My Area") & Secondary Plan Builder */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/check-area"
              className="w-full sm:w-auto inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-orange-600 px-8 py-3.5 text-base font-black text-white shadow-lg hover:bg-orange-500 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 transition"
            >
              <span aria-hidden="true">📍</span>
              <span>Check My Area</span>
            </Link>

            <Link
              href="/family-plan"
              className="w-full sm:w-auto inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-slate-700 bg-slate-900 px-7 py-3.5 text-base font-bold text-slate-100 hover:bg-slate-800 hover:text-white hover:border-slate-500 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400 transition"
            >
              <span aria-hidden="true">📋</span>
              <span>Create Family Emergency Plan</span>
            </Link>
          </div>

          {/* Feature Overview Pillars */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="rounded-2xl border-2 border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-2 text-base font-black text-white">
                <span className="text-xl" aria-hidden="true">🗺️</span>
                <span>Local Risk Scores</span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Vulnerability profiles for flood, cyclone, landslide, earthquake, and extreme heatwaves.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-2 text-base font-black text-white">
                <span className="text-xl" aria-hidden="true">📖</span>
                <span>Action Guides</span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                NDMA-aligned Before, During, and After checklists written in plain, accessible language.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-slate-800 bg-slate-900/60 p-5">
              <div className="flex items-center gap-2 text-base font-black text-white">
                <span className="text-xl" aria-hidden="true">🖨️</span>
                <span>Offline Family Plan</span>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Customizable wallet and fridge emergency cards that remain usable when networks fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Priority Emergency Quick Dial Strip */}
      <section
        aria-labelledby="quick-dial-heading"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8"
      >
        <div className="rounded-2xl border-2 border-red-400 bg-red-50 p-5 sm:p-6 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2">
                <span
                  className="h-3.5 w-3.5 rounded-full bg-red-600 animate-pulse shrink-0"
                  aria-hidden="true"
                />
                <h2
                  id="quick-dial-heading"
                  className="text-base sm:text-lg font-black text-red-950 uppercase tracking-wide"
                >
                  Priority Emergency Lines (Tap to Dial)
                </h2>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-red-900 mt-1">
                Toll-free 24/7 assistance across India. Operates without active internet.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {quickContacts.map((c) => (
                <a
                  key={c.number}
                  href={`tel:${c.number}`}
                  aria-label={`Call ${c.name} at toll-free number ${c.number}`}
                  className="flex min-h-[64px] flex-col items-center justify-center rounded-xl bg-red-700 hover:bg-red-800 text-white p-3 text-center shadow transition focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400 active:scale-95"
                >
                  <span className="text-2xl font-black tracking-tight leading-none">
                    {c.number}
                  </span>
                  <span className="text-xs font-black text-red-100 mt-1 truncate max-w-full">
                    {c.name.split(" ")[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Essential Disaster Readiness Tools */}
      <section
        aria-labelledby="essential-tools-heading"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8">
          <h2
            id="essential-tools-heading"
            className="text-2xl sm:text-3xl font-black text-slate-950"
          >
            Essential Disaster Readiness Tools
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-1 font-medium">
            Zero logins, no tracking, built to function rapidly on low-bandwidth networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Check My Area */}
          <article className="rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-slate-400 transition">
            <div>
              <div
                className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-900 text-2xl font-black mb-4"
                aria-hidden="true"
              >
                🗺️
              </div>
              <h3 className="text-lg font-black text-slate-950">
                Check My Area Risk
              </h3>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed font-medium">
                Select your state and district to view known environmental risks, local preparedness advice, and local SDMA control numbers.
              </p>
            </div>
            <Link
              href="/check-area"
              className="mt-6 inline-flex min-h-[44px] items-center text-sm font-black text-blue-800 hover:text-blue-950 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded py-1"
            >
              Select your district →
            </Link>
          </article>

          {/* Card 2: Disaster Guides */}
          <article className="rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-slate-400 transition">
            <div>
              <div
                className="h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-100 text-emerald-900 text-2xl font-black mb-4"
                aria-hidden="true"
              >
                📖
              </div>
              <h3 className="text-lg font-black text-slate-950">
                Disaster Action Guides
              </h3>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed font-medium">
                Standard citizen action checklists for 6 prominent Indian hazards: flood, cyclone, earthquake, heatwave, landslide, and fire.
              </p>
            </div>
            <Link
              href="/guides"
              className="mt-6 inline-flex min-h-[44px] items-center text-sm font-black text-emerald-800 hover:text-emerald-950 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1"
            >
              Read action checklists →
            </Link>
          </article>

          {/* Card 3: Family Emergency Plan */}
          <article className="rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-sm flex flex-col justify-between hover:border-slate-400 transition">
            <div>
              <div
                className="h-12 w-12 flex items-center justify-center rounded-xl bg-amber-100 text-amber-900 text-2xl font-black mb-4"
                aria-hidden="true"
              >
                📝
              </div>
              <h3 className="text-lg font-black text-slate-950">
                Family Emergency Plan
              </h3>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed font-medium">
                Fill in safe meeting points, family contacts, and go-bag checklists. Print or download an offline text/PDF card for your household.
              </p>
            </div>
            <Link
              href="/family-plan"
              className="mt-6 inline-flex min-h-[44px] items-center text-sm font-black text-amber-900 hover:text-amber-950 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded py-1"
            >
              Build your printable plan →
            </Link>
          </article>
        </div>
      </section>

      {/* 4. Common Hazards in India Showcase */}
      <section
        aria-labelledby="hazard-showcase-heading"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border-2 border-slate-300 bg-slate-100 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h2
                id="hazard-showcase-heading"
                className="text-xl sm:text-2xl font-black text-slate-950"
              >
                Common Hazards in India
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-0.5 font-medium">
                Standard citizen operating procedures aligned with NDMA & IMD guidelines
              </p>
            </div>
            <Link
              href="/guides"
              className="inline-flex min-h-[44px] items-center text-sm font-black text-orange-700 hover:text-orange-900 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
            >
              View all 6 detailed guides →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {(data.disasterGuides || []).map((g) => (
              <Link
                key={g.id}
                href="/guides"
                className="flex min-h-[80px] flex-col items-center justify-center rounded-2xl border-2 border-slate-300 bg-white p-3 text-center shadow-sm hover:border-orange-500 hover:bg-orange-50/50 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 transition active:scale-95"
              >
                <span className="text-3xl mb-1" aria-hidden="true">
                  {guideIcons[g.id] || "⚠️"}
                </span>
                <span className="text-xs sm:text-sm font-black text-slate-950 leading-tight">
                  {g.name.split(" ")[0]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Official Protocol & Disclaimer Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <aside
          role="note"
          aria-label="Official emergency authority notice"
          className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 text-xs sm:text-sm text-amber-950 leading-relaxed font-semibold shadow-sm"
        >
          <strong>Official Emergency Advisory:</strong> SafeIndia is an independent public-interest informational platform. In active natural or civil emergencies, always prioritize instructions broadcast by your local District Magistrate, Police, NDRF, and the India Meteorological Department (IMD). Dial <strong>112</strong> for immediate life-safety rescue.
        </aside>
      </section>
    </main>
  );
}