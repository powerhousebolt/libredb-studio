import { MonitoringEmbed } from "@/components/admin/tabs/MonitoringEmbed";

export default function AdminMonitoringPage() {
  return (
    // Same centered max-w-7xl column as the other admin sections. The fixed height (viewport minus
    // the admin header and section nav) stays so the dashboard keeps its own pinned controls and
    // scrolls only its tab content.
    <div data-testid="admin-content-monitoring" className="mx-auto h-[calc(100vh-120px)] max-w-7xl px-4 sm:px-6 py-6">
      <MonitoringEmbed />
    </div>
  );
}
