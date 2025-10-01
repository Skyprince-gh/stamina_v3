import React, { ReactNode } from "react";
import SidebarMenu from "@/components/modules/sidebarMenu";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    // make the layout fill the viewport and keep sidebar static while main content scrolls
    <div className="grid grid-cols-12 w-full h-screen select-none">
      <div className="col-span-1 bg-gray-950">
        <SidebarMenu />
      </div>
      <div className="col-span-11 bg-gray-100 h-screen overflow-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;

