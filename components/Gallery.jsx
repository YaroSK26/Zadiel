"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "./Navbar"; 

const Gallery = () => {
  const translations = useTranslations();

  if (!translations) {
    return null;
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <motion.div
        className="flex flex-col max-w-7xl justify-center items-center px-4 mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {translations.gallery.title}
        </h2>
        <div className="flex flex-wrap flex-col md:flex-row items-center gap-4 justify-center mx-auto">
          {[...Array(9)].map((_, i) => (
            <motion.img
              key={i}
              src={`/${i}.jpg`}
              alt={`${translations.gallery.title} ${i + 1}`}
              className="rounded-lg md:w-[30%] transition-opacity mx-auto shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
