"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
  label: string;
  href: string;
  setIsMenuOpen: (value: boolean) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href, setIsMenuOpen }) => (
  <Link href={href} onClick={() => setIsMenuOpen(false)}>
    <div className="self-stretch my-auto">{label}</div>
  </Link>
);

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "About", "Contact"];

  return (
    <nav className="flex relative justify-between items-center px-12 py-9 w-full min-h-[103px] max-md:px-5 max-md:max-w-full">
      <Link href="/pages/PageIndisponible">
        <div className="z-0 self-stretch my-auto text-2xl text-teal-600 uppercase hidden lg:block">
          se connecter {/* par la suite ajouter une variable pour savoir si connecté ou déconnecté */}
        </div>
      </Link>
      <div className="flex z-0 gap-10 items-center self-stretch my-auto text-2xl text-emerald-900 uppercase min-w-[240px] max-md:hidden">
        {navLinks.map((link, index) => (
          <NavLink key={index} label={link} href={index === 0 ? '/' : index === 1 ? '/pages/PageIndisponible' : '/pages/PageIndisponible'} setIsMenuOpen={setIsMenuOpen} />
        ))}
      </div>
      <div className="flex absolute right-4 max-md:flex max-md:items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 top-full bg-[#F8F9E9] shadow-lg p-4 max-md:flex flex-col w-full text-center text-2xl gap-3 z-50">
          {navLinks.map((link, index) => (
            <NavLink key={index} label={link} href={index === 0 ? '/' : index === 1 ? '/pages/PageIndisponible' : '/pages/PageIndisponible'} setIsMenuOpen={setIsMenuOpen} />
          ))}
          <NavLink label="Se connecter" href="/pages/PageIndisponible" setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
      <div className="flex absolute left-2/4 z-0 gap-6 items-center self-start -translate-x-2/4 bottom-[22px] min-w-[240px] translate-y-[0%]">
        <Link href="/">
          <Image
            src="/logo-carnicru-vert.svg"
            alt="logo carnicru"
            width={200}
            height={200}
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;

