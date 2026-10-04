"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export type LocationType = "hospital" | "shelter" | "police" | "relief";

export interface EmergencyPoint {
  id: string;
  name: string;
  type: LocationType;
  lat: number;
  lng: number;
  address: string;
  phone: string;
}

interface MapInnerProps {
  locations: EmergencyPoint[];
  center: [number, number];
  zoom: number;
}

const TYPE_CONFIG: Record<
  LocationType,
  { label: string; emoji: string; bgClass: string; hex: string }
> = {
  hospital: {
    label: "Hospital",
    emoji: "🏥",
    bgClass: "bg-red-700",
    hex: "#b91c1c",
  },
  shelter: {
    label: "Shelter",
    emoji: "🏕️",
    bgClass: "bg-blue-700",
    hex: "#1d4ed8",
  },
  police: {
    label: "Police Station",
    emoji: "👮",
    bgClass: "bg-indigo-700",
    hex: "#4338ca",
  },
  relief: {
    label: "Relief Centre",
    emoji: "📦",
    bgClass: "bg-emerald-700",
    hex: "#047857",
  },
};

const createCustomIcon = (type: LocationType) => {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.relief;
  return L.divIcon({
    className: "custom-leaflet-marker",
    html: `
      <div style="
        background-color: ${config.hex};
        width: 34px;
        height: 34px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        border: 2px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      ">
        ${config.emoji}
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -20],
  });
};

export default function EmergencyMapInner({
  locations,
  center,
  zoom,
}: MapInnerProps) {
  const [filter, setFilter] = useState<"all" | LocationType>("all");

  const filteredLocations =
    filter === "all"
      ? locations
      : locations.filter((loc) => loc.type === filter);

  return (
    <div className="space-y-4">
      {/* Accessible Filter Pill Bar (Min 44px tap targets) */}
      <div
        role="group"
        aria-label="Filter locations by type"
        className="flex flex-wrap items-center gap-2"
      >
        <span className="font-black text-xs uppercase tracking-wider text-slate-700 mr-1">
          Filter:
        </span>
        <button
          type="button"
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
          className={`inline-flex min-h-[44px] items-center rounded-xl px-3.5 text-xs font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
            filter === "all"
              ? "bg-slate-950 text-white shadow"
              : "bg-slate-200 text-slate-800 hover:bg-slate-300"
          }`}
        >
          All ({locations.length})
        </button>

        {(["hospital", "shelter", "police", "relief"] as LocationType[]).map((t) => {
          const count = locations.filter((l) => l.type === t).length;
          const isSelected = filter === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              aria-pressed={isSelected}
              className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-xl px-3.5 text-xs font-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                isSelected
                  ? "bg-slate-950 text-white shadow"
                  : "bg-slate-200 text-slate-800 hover:bg-slate-300"
              }`}
            >
              <span aria-hidden="true">{TYPE_CONFIG[t].emoji}</span>
              <span>{TYPE_CONFIG[t].label}</span>
              <span className="text-[11px] opacity-75">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Map Container (Responsive mobile height) */}
      <div className="relative h-[360px] sm:h-[460px] w-full overflow-hidden rounded-2xl border-2 border-slate-300 shadow-sm z-0">
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredLocations.map((loc) => {
            const cfg = TYPE_CONFIG[loc.type];
            return (
              <Marker
                key={loc.id}
                position={[loc.lat, loc.lng]}
                icon={createCustomIcon(loc.type)}
              >
                <Popup className="emergency-popup">
                  <div className="p-1 space-y-2 max-w-[240px]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg" aria-hidden="true">{cfg.emoji}</span>
                      <span
                        className={`rounded px-2 py-0.5 text-[11px] font-black text-white ${cfg.bgClass}`}
                      >
                        {cfg.label}
                      </span>
                    </div>

                    <h4 className="text-xs font-black text-slate-950 leading-snug">
                      {loc.name}
                    </h4>

                    <p className="text-xs text-slate-700 leading-tight">
                      📍 {loc.address}
                    </p>

                    <div className="pt-1.5 border-t border-slate-200">
                      <a
                        href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                        className="inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg bg-slate-950 px-3 py-2 text-xs font-black text-white hover:bg-orange-600 transition"
                      >
                        📞 Call: {loc.phone}
                      </a>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>

      {/* Map Legend */}
      <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm text-xs">
        <span className="font-black text-slate-900 block mb-2 uppercase tracking-wide">
          Map Legend:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {(["hospital", "shelter", "police", "relief"] as LocationType[]).map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-xs ${TYPE_CONFIG[t].bgClass}`}
                aria-hidden="true"
              >
                {TYPE_CONFIG[t].emoji}
              </span>
              <span className="text-slate-800 font-bold">
                {TYPE_CONFIG[t].label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}