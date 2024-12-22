"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "accommodation", href: "#accommodation" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT ", href: "#contact" },
  ];

  useEffect(() => {
    // Set initial window width
    setIsWideScreen(window.innerWidth > 768);

    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setHasScrolled(window.scrollY > 0);
      } else {
        setHasScrolled(false);
      }
    };

    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
      if (window.innerWidth <= 768) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinkStyles =
    "relative transition-colors duration-200 uppercase before:content-[''] before:absolute before:bottom-[-3px] before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-[width] before:duration-500 before:ease-in-out hover:before:w-full";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-[#111827]" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Mobile Brand/Logo */}
        <div className="flex-shrink-0 md:hidden">
          <a href="#" className="text-xl uppercase font-bold text-white">
            ZÁDIEL 
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
            <a key={item.href} href={item.href} className={navLinkStyles}>
              {item.label}
            </a>
          ))}
          <div className="flex-shrink-0 mx-8">
            <a href="#" className="text-xl uppercase font-bold text-white">
              ZÁDIEL
            </a>
          </div>
          {navItems.slice(2).map((item) => (
            <a key={item.href} href={item.href} className={navLinkStyles}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111827]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-white ${navLinkStyles}`}
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

export default Navbar;
