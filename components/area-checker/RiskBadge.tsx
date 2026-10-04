import React from "react";

export type RiskLevel = "Low" | "Moderate" | "High" | "Very High";

interface RiskBadgeProps {
  level: RiskLevel;
}

export default function RiskBadge({ level }: RiskBadgeProps) {
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