"use client";
import { useState } from "react";
import HeaderN from "../../components/ngodashboard/HeaderN"; // Check the path
import SidebarN from "../../components/ngodashboard/SidebarN"; // Check the path
import HomeN from "../../components/ngodashboard/HomeN"; // Check the path

function Dashboardn() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // Function to toggle the sidebar visibility
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex h-screen">
      {/* Pass the openSidebarToggle state and OpenSidebar function as props to SidebarN */}
      <SidebarN openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <div className="flex-1 flex flex-col">
        {/* Pass the OpenSidebar function to HeaderN */}
        <HeaderN OpenSidebar={OpenSidebar} />

        <div className="flex-1 overflow-auto p-4">
          {/* Content for the main dashboard section */}
          <HomeN />
        </div>
      </div>
    </div>
  );
}

export default Dashboardn;
