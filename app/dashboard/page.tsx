"use client";
import { useState } from 'react';
import Header1 from '../../components/dashboard/Header1';
import Sidebar from '../../components/dashboard/Sidebar';
import Home1 from '../../components/dashboard/Home1';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex h-screen">
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="flex-1 flex flex-col">
        <Header1 OpenSidebar={OpenSidebar} />
        <div className="flex-1 overflow-auto p-4">
          <Home1 />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
