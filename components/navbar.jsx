"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
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
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-[#111827]" : ""
      }`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Mobile Brand/Logo */}
        <motion.div
          className="flex-shrink-0 md:hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#" className="text-xl  uppercase font-bold text-white">
            <img src="./zadiel.png" className="w-28 h-12" alt="logo zadiel" />
          </a>
        </motion.div>
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center justify-center space-x-12 text-white flex-grow"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {navItems.slice(0, 2).map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={navLinkStyles}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.div
            className="flex-shrink-0 mx-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#" className="text-xl  uppercase font-bold text-white">
              <img src="./zadiel.png" className="w-28 h-12" alt="logo zadiel" />
            </a>
          </motion.div>
          {navItems.slice(2).map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              className={navLinkStyles}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#111827]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-white ${navLinkStyles}`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
