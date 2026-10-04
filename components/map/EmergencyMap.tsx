"use client";

import dynamic from "next/dynamic";
import type { EmergencyPoint } from "./EmergencyMapInner";

interface EmergencyMapProps {
  locations: EmergencyPoint[];
  center?: [number, number];
  zoom?: number;
}

const DynamicMap = dynamic(() => import("./EmergencyMapInner"), {
  ssr: false,
  loading: () => (
    <div
      role="status"
      aria-live="polite"
      className="flex h-[360px] sm:h-[460px] w-full flex-col items-center justify-center rounded-2xl border-2 border-slate-300 bg-slate-100 p-6 text-center animate-pulse"
    >
      <div className="text-4xl mb-3" aria-hidden="true">🗺️</div>
      <p className="text-base font-black text-slate-900">Loading Disaster Facility Map...</p>
      <p className="text-xs sm:text-sm text-slate-600 mt-1">Initializing OpenStreetMap and shelter markers</p>
    </div>
  ),
});

export default function EmergencyMap({
  locations,
  center = [19.0176, 72.8562],
  zoom = 12,
}: EmergencyMapProps) {
  return <DynamicMap locations={locations} center={center} zoom={zoom} />;
}