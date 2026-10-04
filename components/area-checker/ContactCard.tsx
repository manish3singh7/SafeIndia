import React from "react";

interface ContactCardProps {
  title: string;
  number: string;
  isPrimary?: boolean;
}

export default function ContactCard({ title, number, isPrimary = false }: ContactCardProps) {
  const dialableNumber = (number || "").split("/")[0].replace(/[^0-9+]/g, "");

  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-4 border-2 transition ${
        isPrimary
          ? "border-red-400 bg-red-50/80 shadow-sm"
          : "border-slate-300 bg-slate-50 hover:bg-slate-100"
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