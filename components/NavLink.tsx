import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLinkProps {
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label }) => (
  <div className="self-stretch my-auto">{label}</div>
);

const NavigationBar: React.FC = () => {
  const navLinks = ["Home", "About", "Contact"];

  return (
    <nav className="flex relative justify-between items-center px-12 py-9 w-full min-h-[103px] max-md:px-5 max-md:max-w-full">
      <div className="z-0 self-stretch my-auto text-2xl text-teal-600 uppercase">
        se connecter {/* par la suite ajouter une variable pour savoir si connecté ou déconnecté */}
      </div>
      <div className="flex z-0 gap-10 items-center self-stretch my-auto text-2xl text-emerald-900 uppercase min-w-[240px] max-md:max-w-full">
        {navLinks.map((link, index) => (
          <NavLink key={index} label={link} />
        ))}
      </div>
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
