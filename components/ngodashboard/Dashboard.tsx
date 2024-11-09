"use client";
import { useState } from 'react';
import HeaderN from '../../components/ngodashboard/HeaderN';
import SidebarN from '../../components/ngodashboard/SidebarN';
import HomeN from '../../components/ngodashboard/HomeN';

function Dashboardn() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // Function to toggle the sidebar
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Define a function for onPostMessageClick
  const handlePostMessageClick = () => {
    console.log("Post message clicked");
  };

  return (
    <div className="flex h-screen">
      <SidebarN
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        onPostMessageClick={handlePostMessageClick}  // Ensure this is passed to SidebarN
      />
      <div className="flex-1 flex flex-col">
        <HeaderN OpenSidebar={OpenSidebar} onPostMessageClick={handlePostMessageClick} />  {/* Pass to HeaderN */}
        <div className="flex-1 overflow-auto p-4">
          <HomeN />
        </div>
      </div>
    </div>
  );
}

export default Dashboardn;
