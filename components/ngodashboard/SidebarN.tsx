// SidebarN.tsx
import React from 'react';
import Link from 'next/link';
import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsPersonCircle
} from 'react-icons/bs';

interface SidebarProps {
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
  onPostMessageClick: () => void;
}

function SidebarN({ openSidebarToggle, OpenSidebar }: SidebarProps) {
  return (
    <aside
      id="sidebar"
      className={`${
        openSidebarToggle ? 'block' : 'hidden'
      } lg:block fixed lg:relative lg:w-56 bg-gray-800 text-white min-h-screen`}
    >
      <div className="flex items-center gap-3 p-4 border-b border-gray-700">
        <BsPersonCircle className="text-xl cursor-pointer" />
        <p>Ashutosh Dwivedi</p>
        <button
          className="text-xl lg:hidden focus:outline-none"
          onClick={OpenSidebar}
        >
          X
        </button>
      </div>

      <ul className="p-4 space-y-4">
        <li className="sidebar-list-item">
          <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsGrid1X2Fill className="text-lg" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/ngomsg" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsPeopleFill className="text-lg" />
            <span>Post Message</span>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/inventory" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsListCheck className="text-lg" />
            <span>Inventory</span>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/report" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsMenuButtonWideFill className="text-lg" />
            <span>Reports</span>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href="/settings" className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <BsFillGearFill className="text-lg" />
            <span>Setting</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default SidebarN;
