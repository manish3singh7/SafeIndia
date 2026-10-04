"use client";

import { useState } from "react";

interface EmergencyService {
  name: string;
  number: string;
  category: "Primary" | "Medical" | "Safety" | "Welfare";
  description: string;
  isPrimary?: boolean;
}

interface SDMAContact {
  state: string;
  helpline: string;
  altPhone?: string;
  website: string;
}

const nationalContacts: EmergencyService[] = [
  {
    name: "National Emergency Number",
    number: "112",
    category: "Primary",
    description:
      "All-in-one unified emergency response system across India for Police, Fire, and Ambulance.",
    isPrimary: true,
  },
  {
    name: "Police Emergency",
    number: "100",
    category: "Safety",
    description:
      "Immediate crime reporting, civil safety intervention, and law enforcement support.",
  },
  {
    name: "Fire & Rescue Service",
    number: "101",
    category: "Safety",
    description:
      "Domestic and commercial fire accidents, chemical spills, and building collapse rescue.",
  },
  {
    name: "Emergency Ambulance",
    number: "108",
    category: "Medical",
    description:
      "Toll-free emergency medical transit, trauma care, and government hospital dispatch.",
    isPrimary: true,
  },
  {
    name: "Women Helpline",
    number: "1091",
    category: "Welfare",
    description:
      "Dedicated 24/7 emergency response and distress assistance for women in crisis.",
  },
  {
    name: "Child Helpline (Childline)",
    number: "1098",
    category: "Welfare",
    description:
      "National 24-hour toll-free emergency phone service for children in need of protection.",
  },
];

const stateDirectories: SDMAContact[] = [
  {
    state: "Andhra Pradesh (APSDMA)",
    helpline: "1070",
    altPhone: "0863-2377112",
    website: "https://apsdma.ap.gov.in",
  },
  {
    state: "Assam (ASDMA)",
    helpline: "1070",
    altPhone: "0361-2237221",
    website: "https://asdma.assam.gov.in",
  },
  {
    state: "Bihar (BSDMA)",
    helpline: "1070",
    altPhone: "0612-2547232",
    website: "https://bsdma.org",
  },
  {
    state: "Delhi (DDMA)",
    helpline: "1077",
    altPhone: "011-23831077",
    website: "https://ddma.delhi.gov.in",
  },
  {
    state: "Gujarat (GSDMA)",
    helpline: "1070",
    altPhone: "079-23259283",
    website: "https://gsdma.org",
  },
  {
    state: "Himachal Pradesh (HPSDMA)",
    helpline: "1070",
    altPhone: "0177-2629439",
    website: "https://hpsdma.nic.in",
  },
  {
    state: "Karnataka (KSDMA)",
    helpline: "1070",
    altPhone: "080-22032582",
    website: "https://revenue.karnataka.gov.in",
  },
  {
    state: "Kerala (KSDMA)",
    helpline: "1077",
    altPhone: "0471-2364424",
    website: "https://sdma.kerala.gov.in",
  },
  {
    state: "Maharashtra (MSDMA)",
    helpline: "1070",
    altPhone: "022-22027990",
    website: "https://mahasdma.maharashtra.gov.in",
  },
  {
    state: "Odisha (OSDMA)",
    helpline: "1070",
    altPhone: "0674-2395398",
    website: "https://www.osdma.org",
  },
  {
    state: "Punjab (PSDMA)",
    helpline: "1070",
    altPhone: "0172-2740397",
    website: "https://revenue.punjab.gov.in",
  },
  {
    state: "Rajasthan (DMRD)",
    helpline: "1070",
    altPhone: "0141-2227084",
    website: "https://dmr.rajasthan.gov.in",
  },
  {
    state: "Tamil Nadu (TNSDMA)",
    helpline: "1070",
    altPhone: "044-28593990",
    website: "https://tnsdma.tn.gov.in",
  },
  {
    state: "Uttarakhand (USDMA)",
    helpline: "1070",
    altPhone: "0135-2710334",
    website: "https://usdma.uk.gov.in",
  },
  {
    state: "West Bengal (WBDMD)",
    helpline: "1070",
    altPhone: "033-22143526",
    website: "https://wbdmd.gov.in",
  },
];

export default function EmergencyContactsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSDMAs = stateDirectories.filter((item) =>
    item.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main
      id="main-content"
      className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <header className="space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3.5 py-1 text-xs font-black text-red-950 border border-red-300">
            <span>🚨</span> 24/7 Citizen Directory
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Emergency Contacts & Helplines
          </h1>
          <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed font-medium">
            Verified Indian emergency assistance numbers and official disaster response portals.
            All primary numbers are toll-free and accessible from mobile phones and landlines.
          </p>
        </header>

        {/* National Emergency Numbers Grid */}
        <section aria-labelledby="national-numbers-title" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2
              id="national-numbers-title"
              className="text-lg font-black text-slate-900 uppercase tracking-wide"
            >
              National Emergency Helplines
            </h2>
            <span className="text-xs text-slate-600 font-bold">
              One-tap mobile dialing
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nationalContacts.map((contact) => (
              <article
                key={contact.number}
                className={`rounded-2xl border-2 p-5 bg-white shadow-sm flex flex-col justify-between transition ${
                  contact.isPrimary
                    ? "border-red-400 bg-red-50/40 shadow-md ring-1 ring-red-300"
                    : "border-slate-300 hover:border-slate-400"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider border ${
                        contact.isPrimary
                          ? "bg-red-100 text-red-950 border-red-300"
                          : "bg-slate-100 text-slate-800 border-slate-300"
                      }`}
                    >
                      {contact.category}
                    </span>
                    <span className="text-xs font-black text-emerald-800 flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-pulse"
                        aria-hidden="true"
                      />
                      24x7 Free
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-950 mt-1">
                    {contact.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed font-medium">
                    {contact.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-3xl font-black text-slate-950 tracking-tight">
                    {contact.number}
                  </div>
                  <a
                    href={`tel:${contact.number}`}
                    aria-label={`Call ${contact.name} at ${contact.number}`}
                    className={`inline-flex min-h-[48px] min-w-[104px] items-center justify-center rounded-xl px-5 text-sm font-black shadow transition focus:outline-none focus-visible:ring-4 ${
                      contact.isPrimary
                        ? "bg-red-700 text-white hover:bg-red-800 focus-visible:ring-red-400"
                        : "bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-400"
                    }`}
                  >
                    Call Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Official Authority Weather & Disaster Portals */}
        <section aria-labelledby="official-portals-title" className="space-y-4">
          <h2
            id="official-portals-title"
            className="text-lg font-black text-slate-900 uppercase tracking-wide"
          >
            Official Government Portals & Early Warning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* NDMA */}
            <article className="rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex rounded-md bg-blue-100 border border-blue-300 px-2.5 py-1 text-xs font-black text-blue-950 mb-2">
                  Policy & Rescue Coordination
                </span>
                <h3 className="text-lg font-black text-slate-950">
                  NDMA (National Disaster Management Authority)
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-medium">
                  Headed by the Prime Minister of India, NDMA is the apex statutory body for laying down
                  policies, plans, and disaster response guidelines across the country.
                </p>

                <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/70 p-3.5 space-y-2">
                  <div className="text-xs font-bold text-slate-800">
                    Control Room Toll-Free:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="tel:1078"
                      className="inline-flex min-h-[44px] items-center rounded-lg bg-blue-700 px-4 py-1.5 text-xs font-black text-white hover:bg-blue-800 transition"
                    >
                      📞 Call 1078
                    </a>
                    <a
                      href="tel:01126701728"
                      className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-400 bg-white px-3.5 py-1.5 text-xs font-black text-slate-900 hover:bg-slate-100 transition"
                    >
                      📞 011-26701728
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200">
                <a
                  href="https://ndma.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-xs sm:text-sm font-black text-blue-800 hover:text-blue-950 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Visit NDMA Official Website (ndma.gov.in)
                  <span className="text-slate-500" aria-label="opens in new tab">↗</span>
                </a>
              </div>
            </article>

            {/* IMD */}
            <article className="rounded-2xl border-2 border-slate-300 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-flex rounded-md bg-amber-100 border border-amber-300 px-2.5 py-1 text-xs font-black text-amber-950 mb-2">
                  Weather, Cyclone & Radar Alerts
                </span>
                <h3 className="text-lg font-black text-slate-950">
                  IMD (India Meteorological Department / Mausam)
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-medium">
                  The principal government agency responsible for meteorological observations, weather
                  forecasts, Doppler weather radar bulletins, cyclone alerts, and seismology.
                </p>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 space-y-2">
                  <div className="text-xs font-bold text-slate-800">
                    Mausam Weather Helpline (Toll-Free):
                  </div>
                  <a
                    href="tel:18001801717"
                    className="inline-flex min-h-[44px] items-center rounded-lg bg-slate-900 px-4 py-1.5 text-xs font-black text-white hover:bg-slate-800 transition"
                  >
                    📞 Call 1800-180-1717
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200">
                <a
                  href="https://mausam.imd.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-xs sm:text-sm font-black text-blue-800 hover:text-blue-950 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Visit IMD Weather Portal (mausam.imd.gov.in)
                  <span className="text-slate-500" aria-label="opens in new tab">↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* State Disaster Management Authority (SDMA) Directory */}
        <section aria-labelledby="sdma-section-title" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2
                id="sdma-section-title"
                className="text-lg font-black text-slate-900 uppercase tracking-wide"
              >
                State Disaster Management Authorities (SDMA)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Contact State Emergency Operations Centers (SEOC) for district level emergency mobilization.
              </p>
            </div>
            <div className="w-full sm:w-80">
              <label htmlFor="search-sdma" className="sr-only">
                Search state or SDMA directory
              </label>
              <input
                id="search-sdma"
                type="text"
                placeholder="Search state (e.g. Odisha, Kerala)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full min-h-[48px] rounded-xl border-2 border-slate-300 bg-white px-3.5 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSDMAs.length > 0 ? (
              filteredSDMAs.map((sdma) => (
                <article
                  key={sdma.state}
                  className="rounded-2xl border-2 border-slate-300 bg-white p-5 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-black text-sm sm:text-base text-slate-950">
                      {sdma.state}
                    </h3>
                    <div className="mt-3 space-y-1.5 text-xs sm:text-sm">
                      <div className="text-slate-800 font-semibold">
                        <span>State Helpline: </span>
                        <a
                          href={`tel:${sdma.helpline}`}
                          className="font-black text-blue-800 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                        >
                          {sdma.helpline}
                        </a>
                      </div>
                      {sdma.altPhone && (
                        <div className="text-slate-800 font-semibold">
                          <span>Control Room: </span>
                          <a
                            href={`tel:${sdma.altPhone.replace(/[^0-9]/g, "")}`}
                            className="font-black text-slate-950 underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                          >
                            {sdma.altPhone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                    <a
                      href={sdma.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center text-blue-800 hover:text-blue-950 font-bold underline text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      State Portal
                      <span className="text-slate-500 ml-0.5" aria-label="opens in new tab">↗</span>
                    </a>
                    <a
                      href={`tel:${sdma.helpline}`}
                      aria-label={`Call ${sdma.state} helpline at ${sdma.helpline}`}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-slate-900 px-4 text-xs font-black text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 transition"
                    >
                      Call {sdma.helpline}
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center text-sm font-semibold text-slate-600">
                No matching state found for &quot;{searchQuery}&quot;. Please try another state name.
              </div>
            )}
          </div>
        </section>

        {/* Footer Warning Note */}
        <aside
          role="note"
          aria-label="Emergency communication notice"
          className="rounded-2xl border-2 border-red-300 bg-red-50 p-4 sm:p-5 text-xs sm:text-sm text-red-950 leading-relaxed font-semibold shadow-sm"
        >
          <strong>Critical Protocol:</strong> In sudden regional disasters (cloudbursts, flash floods,
          or earthquakes), cellular networks may experience severe voice line congestion. If calls fail,
          send brief SMS text messages with your coordinates, or dial <strong>112</strong> immediately.
        </aside>
      </div>
    </main>
  );
}