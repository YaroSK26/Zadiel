"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "./UseTranslation";



// Updated Language Switcher Component
const LanguageSwitcher = ({ isMobile = false }) => {
  const [language, setLanguage] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("language") || "sk"
      : "sk";
  });

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "sk";
    setLanguage(storedLanguage);
    loadTranslations(storedLanguage);
  }, []);

  const loadTranslations = async (lang) => {
    try {
      const response = await fetch(`/locales/${lang}.json`);
      const data = await response.json();
      window.dispatchEvent(
        new CustomEvent("languageChange", {
          detail: { translations: data },
        })
      );
    } catch (error) {
      console.error("Error loading translations:", error);
    }
  };

  const handleLanguageChange = async (e) => {
    const lang = e.target.value;
    localStorage.setItem("language", lang);
    setLanguage(lang);
    await loadTranslations(lang);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className={`bg-[#111827] text-white border-2 border-white text-start   rounded p-1 ${
        isMobile ? " text-center" : "absolute right-24 top-[18px]"
      }`}
    >
      <option value="sk">Slovenčina</option>
      <option value="en">English</option>
      <option value="hu">Magyar</option>
    </select>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const translations = useTranslations();

  const navItems = translations?.nav
    ? [
        { label: translations.nav.about, href: "/#about" },
        { label: translations.nav.accommodation, href: "/#accommodation" },
        { label: translations.nav.gallery, href: "/#gallery" },
        { label: translations.nav.contact, href: "/#contact" },
      ]
    : [];

  useEffect(() => {
    setIsWideScreen(window.innerWidth > 768);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (window.innerWidth > 768) {
        setHasScrolled(scrollPosition > 50);
      } else {
        setHasScrolled(true);
      }
    };

    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
      if (window.innerWidth <= 768) {
        setHasScrolled(true);
      } else {
        setHasScrolled(window.scrollY > 50);
      }
    };

    handleScroll();
    handleResize();

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
        hasScrolled ? "bg-[#111827] border-b-white border-b-2" : ""
      }`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-0">
        {/* Mobile Brand/Logo */}
        <motion.div
          className="flex-shrink-0 lg:hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#"
            className="text-xl uppercase font-bold mx-auto text-white"
          >
            <img src="./zadiel.png" className="w-32 h-16" alt="logo zadiel" />
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden lg:flex items-center justify-center -mr-20 space-x-12 text-white flex-grow 5 relative"
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
            className="flex-shrink-0 flex justify-center items-center mx-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#" className="text-xl uppercase font-bold text-white">
              <img src="./zadiel.png" className="w-32 h-16" alt="logo zadiel" />
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

          {/* Desktop Language Switcher */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          className="lg:hidden bg-[#111827]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium text-white `}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
            {/* Mobile Language Switcher */}
            <div className="px-3 py-2">
              <LanguageSwitcher isMobile={true} />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Header;
