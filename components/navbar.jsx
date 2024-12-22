"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    { label: "ÚVOD", href: "#uvod" },
    { label: "UBYTOVÁNÍ", href: "#ubytovani" },
    { label: "VYBAVENÍ", href: "#vybaveni" },
    { label: "KONTAKT", href: "#kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setHasScrolled(scrollPercentage > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-[#111827]" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Mobile Brand/Logo */}
        <div className="flex-shrink-0 md:hidden">
          <a href="#" className="text-xl font-bold text-white">
            ZÁDIEL UBYTOVŇA
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-12 text-white flex-grow">
          {navItems.slice(0, 2).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-colors duration-200 uppercase"
            >
              {item.label}
            </a>
          ))}
          <div className="flex-shrink-0 mx-8">
            <a href="#" className="text-xl font-bold text-white">
              ZÁDIEL UBYTOVŇA
            </a>
          </div>
          {navItems.slice(2).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-gray-300 transition-colors duration-200 uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
