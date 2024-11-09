import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

// Define the type for props
interface HeaderProps {
  OpenSidebar: () => void; // OpenSidebar is a function that takes no arguments and returns nothing
}

function Header1({ OpenSidebar }: HeaderProps) {
  return (
    <header className="grid-area-header h-16 flex items-center justify-between px-8 shadow-md">
      <div className="lg:hidden">
        {/* This icon only shows on small screens for sidebar toggling */}
        <BsJustify className="text-xl cursor-pointer" onClick={OpenSidebar} />
      </div>
      <div className="flex items-center">
        <BsSearch className="text-xl cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
        <BsFillBellFill className="text-xl cursor-pointer" />
        <BsFillEnvelopeFill className="text-xl cursor-pointer" />
        <BsPersonCircle className="text-xl cursor-pointer" />
      </div>
    </header>
  );
}

export default Header1;
