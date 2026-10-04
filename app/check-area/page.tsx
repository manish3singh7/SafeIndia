"use client";

import { useState, useId } from "react";
import disasterData from "@/data/indiaDisasterData.json";
import EmergencyMap from "@/components/map/EmergencyMap";
import mapData from "@/data/emergencyLocations.json";
import type { EmergencyPoint } from "@/components/map/EmergencyMapInner";

export type RiskLevel = "Low" | "Moderate" | "High" | "Very High";

function RiskBadge({ level }: { level: RiskLevel }) {
  const badgeConfig: Record<
    RiskLevel,
    { bg: string; text: string; border: string; symbol: string; label: string }
  > = {
    Low: {
      bg: "bg-emerald-100",
      text: "text-emerald-950",
      border: "border-emerald-500",
      symbol: "🟢",
      label: "Low Risk",
    },
    Moderate: {
      bg: "bg-amber-100",
      text: "text-amber-950",
      border: "border-amber-500",
      symbol: "🟡",
      label: "Moderate Risk",
    },
    High: {
      bg: "bg-orange-100",
      text: "text-orange-950",
      border: "border-orange-500",
      symbol: "🟠",
      label: "High Risk",
    },
    "Very High": {
      bg: "bg-red-100",
      text: "text-red-950",
      border: "border-red-600",
      symbol: "🔴",
      label: "Very High Risk",
    },
  };

  const config = badgeConfig[level] || badgeConfig.Moderate;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-black border-2 ${config.bg} ${config.text} ${config.border}`}
      role="status"
      aria-label={`Assessed risk level: ${config.label}`}
    >
      <span aria-hidden="true">{config.symbol}</span>
      {config.label}
    </span>
  );
}

function ContactCard({
  title,
  number,
  isPrimary = false,
}: {
  title: string;
  number: string;
  isPrimary?: boolean;
}) {
  const dialableNumber = (number || "").split("/")[0].replace(/[^0-9+]/g, "");

  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-4 border-2 transition ${
        isPrimary
          ? "border-red-400 bg-red-50/80 shadow-sm"
          : "border-slate-300 bg-slate-50"
      }`}
    >
      <span className="text-xs font-black uppercase tracking-wider text-slate-700">
        {title}
      </span>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-base font-black text-slate-950 truncate">
          {number || "N/A"}
        </span>
        <a
          href={`tel:${dialableNumber}`}
          aria-label={`Call ${title} at ${number}`}
          className={`shrink-0 inline-flex min-h-[44px] min-w-[76px] items-center justify-center rounded-lg px-3.5 text-xs font-black shadow-sm transition focus:outline-none focus-visible:ring-2 ${
            isPrimary
              ? "bg-red-700 text-white hover:bg-red-800 focus-visible:ring-red-400"
              : "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400"
          }`}
        >
          Call
        </a>
      </div>
    </div>
  );
}

interface OfficialSource {
  name: string;
  url: string;
}

interface DistrictContacts {
  controlRoom?: string;
  police?: string;
  ambulance?: string;
  districtDisasterHelpline?: string;
}

interface District {
  id?: string;
  name: string;
  riskLevel: string;
  primaryHazards: string[];
  advice: string | string[];
  contacts?: DistrictContacts;
  localContacts?: {
    police?: string;
    controlRoom?: string;
  };
  officialSources?: OfficialSource[];
}

interface StateData {
  id?: string;
  name: string;
  stateHelpline?: string;
  sdmaHelpline?: string;
  districts: District[];
}

export default function CheckAreaPage() {
  const [selectedStateKey, setSelectedStateKey] = useState<string>("");
  const [selectedDistrictKey, setSelectedDistrictKey] = useState<string>("");

  const stateSelectId = useId();
  const districtSelectId = useId();

  const states = (disasterData.states || []) as StateData[];

  const selectedState = states.find(
    (s) => (s.id || s.name) === selectedStateKey
  );

  const districtList: District[] = selectedState ? selectedState.districts : [];

  const selectedDistrict = districtList.find(
    (d) => (d.id || d.name) === selectedDistrictKey
  );

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStateKey(e.target.value);
    setSelectedDistrictKey("");
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrictKey(e.target.value);
  };

  const handleReset = () => {
    setSelectedStateKey("");
    setSelectedDistrictKey("");
  };

  const adviceList: string[] = selectedDistrict
    ? Array.isArray(selectedDistrict.advice)
      ? selectedDistrict.advice
      : [selectedDistrict.advice]
    : [];

  const helplineSDMA =
    selectedState?.stateHelpline || selectedState?.sdmaHelpline || "1070";
  const contactDisaster =
    selectedDistrict?.contacts?.districtDisasterHelpline || "1077";
  const contactControlRoom =
    selectedDistrict?.contacts?.controlRoom ||
    selectedDistrict?.localContacts?.controlRoom ||
    "1070";
  const contactPolice =
    selectedDistrict?.contacts?.police ||
    selectedDistrict?.localContacts?.police ||
    "112";

  return (
    <main
      id="main-content"
      className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black text-orange-950 border border-orange-300">
            <span>🛡️</span> Hazard Intelligence
          </div>
          <h1 className="text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Check My Area Disaster Risk
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            Select your Indian state and district to view known natural hazards, local preparedness
            checklists, and verified control room contacts.
          </p>
        </header>

        {/* Selection Form */}
        <section
          aria-labelledby="selection-heading"
          className="rounded-2xl border-2 border-slate-300 bg-white p-5 sm:p-6 shadow-sm"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <h2 id="selection-heading" className="text-base font-black text-slate-900">
              Select Your Location
            </h2>
            {(selectedStateKey || selectedDistrictKey) && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex min-h-[44px] items-center text-xs font-black text-red-700 hover:text-red-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg px-2.5 transition"
              >
                ✕ Reset Selection
              </button>
            )}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* State Dropdown */}
            <div>
              <label
                htmlFor={stateSelectId}
                className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2"
              >
                1. Select State <span className="text-red-600">*</span>
              </label>
              <select
                id={stateSelectId}
                value={selectedStateKey}
                onChange={handleStateChange}
                aria-required="true"
                className="w-full min-h-[48px] rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 transition focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <option value="">-- Choose a State --</option>
                {states.map((state) => {
                  const stateVal = state.id || state.name;
                  return (
                    <option key={stateVal} value={stateVal}>
                      {state.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* District Dropdown */}
            <div>
              <label
                htmlFor={districtSelectId}
                className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2"
              >
                2. Select District <span className="text-red-600">*</span>
              </label>
              <select
                id={districtSelectId}
                value={selectedDistrictKey}
                onChange={handleDistrictChange}
                disabled={!selectedStateKey}
                aria-required="true"
                className="w-full min-h-[48px] rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 transition disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                <option value="">
                  {selectedStateKey
                    ? "-- Choose a District --"
                    : "-- Select a State First --"}
                </option>
                {districtList.map((district) => {
                  const districtVal = district.id || district.name;
                  return (
                    <option key={districtVal} value={districtVal}>
                      {district.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </section>

        {/* Dynamic Live Area Status Output */}
        <section aria-live="polite" className="space-y-6">
          {selectedDistrict && selectedState ? (
            <article className="rounded-2xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow space-y-6">
              {/* District & Risk Badge Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    District Hazard Report
                  </span>
                  <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                    {selectedDistrict.name},{" "}
                    <span className="text-slate-700 font-bold">
                      {selectedState.name}
                    </span>
                  </h2>
                </div>
                <div>
                  <RiskBadge level={selectedDistrict.riskLevel as RiskLevel} />
                </div>
              </div>

              {/* Primary Hazards */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2.5">
                  Identified Natural Hazards
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDistrict.primaryHazards.map((hazard) => (
                    <span
                      key={hazard}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 border-2 border-slate-300 px-3.5 py-1.5 text-xs sm:text-sm font-extrabold text-slate-900"
                    >
                      <span aria-hidden="true">⚠️</span> {hazard}
                    </span>
                  ))}
                </div>
              </div>

              {/* Safety Advice Checklist */}
              <div className="rounded-xl border-2 border-blue-200 bg-blue-50/70 p-5">
                <h3 className="text-sm font-black text-blue-950 flex items-center gap-2 mb-3">
                  <span>📋</span> Immediate Safety & Preparedness Advice
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                  {adviceList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span
                        className="font-black text-blue-700 shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Contacts Grid */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3">
                  Local Emergency Helplines (Tap to Call)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <ContactCard
                    title="Disaster Helpline"
                    number={contactDisaster}
                    isPrimary
                  />
                  <ContactCard
                    title="Control Room"
                    number={contactControlRoom}
                  />
                  <ContactCard
                    title="District Police"
                    number={contactPolice}
                  />
                  <ContactCard
                    title="State (SDMA)"
                    number={helplineSDMA}
                  />
                </div>
              </div>

              {/* Official Sources to Follow */}
              {selectedDistrict.officialSources &&
                selectedDistrict.officialSources.length > 0 && (
                  <div className="border-t border-slate-200 pt-5">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2.5">
                      Official Sources to Follow During Crises
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {selectedDistrict.officialSources.map((source, index) => (
                        <li key={index}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-1.5 text-blue-800 hover:text-blue-950 font-bold underline p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                          >
                            <span aria-hidden="true">🔗</span>
                            <span>{source.name}</span>
                            <span
                              className="text-xs text-slate-500"
                              aria-label="opens in new tab"
                            >
                              ↗
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Interactive Emergency Facilities Map */}
              <div className="border-t border-slate-200 pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <span>🗺️</span> Nearby Emergency Facilities Map (Sample: {mapData.city})
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Locate active trauma hospitals, evacuation shelters, and relief distribution points.
                    </p>
                  </div>
                  <span className="self-start sm:self-auto rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-xs font-black text-emerald-950">
                    OpenStreetMap
                  </span>
                </div>

                <EmergencyMap
                  locations={mapData.locations as EmergencyPoint[]}
                  center={mapData.center as [number, number]}
                  zoom={mapData.defaultZoom}
                />
              </div>
            </article>
          ) : (
            /* Empty State Prompt */
            <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-8 text-center sm:p-12">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-3xl"
                aria-hidden="true"
              >
                📍
              </div>
              <h3 className="mt-4 text-base font-black text-slate-900 sm:text-lg">
                No District Selected
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-sm mx-auto font-medium">
                Please pick a state and district above to view live risk scores, local advice, and
                emergency response directories.
              </p>
            </div>
          )}
        </section>

        {/* Global Citizen Disclaimer Banner */}
        <aside
          role="note"
          aria-label="Official authority instructions notice"
          className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium"
        >
          <strong>Official Protocol:</strong> Data shown is compiled from the National Disaster
          Management Authority (NDMA) and State Disaster Management Authorities (SDMAs). In an active
          emergency, prioritize announcements from District Magistrates, local police, and official
          IMD radar bulletins over web apps.
        </aside>
      </div>
    </main>
  );
}