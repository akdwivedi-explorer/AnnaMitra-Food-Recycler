"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { navLinks } from "@/constants/Header/data";
import { Button } from "../ui/moving-border";

// const router = useRouter();


const inter = Inter({ subsets: ["latin"] });

interface NavLink {
  name: string;
  href: string;
}

const Header = () => {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <header className="flex items-center justify-between m-5">
      <Image
        src="/header/Logo.png"
        alt="AnnaMitra"
        width={200}
        height={120}
        priority
      />

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
      <div className="flex items-center gap-4">
        <Button
          borderRadius="1.75rem"
          className="bg-white font-semibold dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          onClick={handleLoginClick}
        >
          Login
        </Button>

        <Button
          borderRadius="1.75rem"
          className="bg-white font-semibold dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          onClick={handleSignupClick}
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
