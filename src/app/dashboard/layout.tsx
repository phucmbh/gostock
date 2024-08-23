"use client";

import { Header } from "@/app/dashboard/components/Header";
import { Sidebar } from "@/app/dashboard/components/Sidebar";
import { useState } from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-semiwhite">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="bg-grey mx-auto max-w-screen-2xl bg-semiwhite p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
