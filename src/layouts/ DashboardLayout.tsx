import type { ReactNode } from "react";
import Sidebar from "../dashboards/Sidebar";
import Topbar from "../dashboards/Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen flex flex-col">
        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;