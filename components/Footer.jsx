"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "./Navbar";

const Footer = () => {
  const translations = useTranslations();

  if (!translations) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2">
              {translations.footer.title}
            </h3>
            <p className="text-gray-400">{translations.footer.subtitle}</p>
          </motion.div>

          {/* Centered Logo */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="./zadiel.png" alt="logo zadiel" className="w-32 h-16" />
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400">© 2024 {translations.footer.rights}</p>
            <a
              href="https://www.jaroslav.website/"
              target="_blank"
              className="underline"
            >
              Jaroslav Barabáš
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
