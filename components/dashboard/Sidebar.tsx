import React from 'react';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';

// Define the type for the Sidebar props
interface SidebarProps {
  openSidebarToggle: boolean; // A boolean indicating whether the sidebar is open or not
  OpenSidebar: () => void; // A function to toggle the sidebar state
}

function Sidebar({ openSidebarToggle, OpenSidebar }: SidebarProps) {
  return (
    <aside
      id="sidebar"
      className={`${
        openSidebarToggle ? 'block' : 'hidden'
      } lg:block fixed lg:relative lg:w-64 bg-gray-800 text-white min-h-screen`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center text-lg font-semibold">
          <BsCart3 className="mr-2 text-xl" /> SHOP
        </div>
        <button
          className="text-xl lg:hidden focus:outline-none"
          onClick={OpenSidebar}
        >
          X
        </button>
      </div>

      <ul className="p-4 space-y-4">
        <li className="sidebar-list-item">
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsGrid1X2Fill className="text-lg" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsFillArchiveFill className="text-lg" />
            <span>Products</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsFillGrid3X3GapFill className="text-lg" />
            <span>Categories</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsPeopleFill className="text-lg" />
            <span>Customers</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsListCheck className="text-lg" />
            <span>Inventory</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsMenuButtonWideFill className="text-lg" />
            <span>Reports</span>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsFillGearFill className="text-lg" />
            <span>Setting</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
