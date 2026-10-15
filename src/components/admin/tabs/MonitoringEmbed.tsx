"use client";

import { MonitoringDashboard } from "@/components/monitoring/MonitoringDashboard";

export function MonitoringEmbed() {
  return (
    // The dashboard draws full-bleed header and tab bands for the standalone /monitoring page;
    // framing it as a panel keeps those bands inside the admin content column.
    <div className="h-full overflow-hidden rounded-xl border border-hairline">
      <MonitoringDashboard isEmbedded />
    </div>
  );
}
