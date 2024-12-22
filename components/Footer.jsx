"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-8"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-center md:text-left mb-4 md:mb-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2">
              Tourist Accommodation Zádiel
            </h3>
            <p className="text-gray-400">Your comfortable stay in nature</p>
          </motion.div>
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400">© 2024 All rights reserved</p>
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
