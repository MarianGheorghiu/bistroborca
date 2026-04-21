"use client";

import { useState } from "react";
import { Coffee, Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Acasă", href: "#" },
    { name: "Meniu", href: "#meniu" },
    { name: "Recenzii", href: "#recenzii" },
    { name: "Locație", href: "#locatie" }, // Modificat aici
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 lg:px-12">
      {/* Containerul Liquid Glass */}
      <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl md:rounded-full px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-[#3E2723] p-2 rounded-full text-[#FAF6F0] transition-transform group-hover:rotate-12">
              <Coffee size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#3E2723]">
              Bistro <span className="font-light opacity-70">by Rumipet</span>
            </span>
          </div>

          {/* Navigație Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#3E2723]/80 hover:text-[#3E2723] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3E2723] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Buton Contact (Desktop) - Acum cu iconiță de telefon */}
          <div className="hidden md:block">
            <a
              href="tel:+40123456789"
              className="bg-[#3E2723] text-[#FAF6F0] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#5D4037] transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Phone size={16} />
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#3E2723] p-1 cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4 border-t border-white/20 mt-3 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#3E2723] px-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+40123456789"
              className="bg-[#3E2723] text-[#FAF6F0] w-full py-3 rounded-xl font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone size={18} />
              Sună acum
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
