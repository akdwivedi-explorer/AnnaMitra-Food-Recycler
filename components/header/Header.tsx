"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import { navLinks } from "@/constants/Header/data";

const inter = Inter({ subsets: ["latin"] });

interface NavLink {
  name: string;
  href: string;
}

const Header = () => {
  return (
    <header className="flex items-center justify-between m-5">
      <Image src="/header/Logo.png" alt="AnnaMitra" width={200} height={120} priority />
      
      <nav className="flex-1 max-w-lg bg-black text-white rounded-full overflow-hidden">
        <ul className="flex flex-wrap justify-center gap-8 font-semibold p-5">
          {navLinks?.map((link: NavLink) => (
            <li key={link.name}>
              <Link href={link.href} className="px-3 py-2 hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <button className="rounded-full p-5 font-semibold bg-black text-white" aria-label="Login or Sign up">
        Login/Sign up
      </button>
    </header>
  );
};

export default Header;
