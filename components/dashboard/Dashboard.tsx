"use client";
import { useState } from 'react';
import Header1 from './Header1'; 
import Sidebar from './Sidebar';
import Home1 from './Home1';

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header1 OpenSidebar={OpenSidebar} />
        
        {/* Home Content */}
        <div className="flex-1 overflow-auto p-4">
          <Home1 />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
