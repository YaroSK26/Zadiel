"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "./UseTranslation";

const Rooms = () => {
  const translations = useTranslations();

  if (!translations) {
    return null;
  }

  return (
    <section
      id="accommodation"
      className="flex justify-center items-center flex-col"
    >
      <motion.div
        className="max-w-6xl flex sm:flex-row flex-col justify-center items-center sm:p-6 p-3 bg-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <h1 className="text-3xl md:text-4xl uppercase font-bold tracking-tight mb-4">
                {translations.rooms.title}
              </h1>
              <p className="text-gray-700">{translations.rooms.description}</p>
            </div>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="p-2 rounded-full bg-gray-900">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <p>{translations.rooms.types.double}</p>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="p-2 rounded-full bg-gray-900">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <p>{translations.rooms.types.quad}</p>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="p-2 rounded-full bg-gray-900">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <p>{translations.rooms.types.twin}</p>
              </motion.div>
            </div>
            <br />
            <Link href="/#contact">
              <motion.button
                className="flex uppercase items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{translations.rooms.bookButton}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex gap-4 flex-col justify-center sm:flex-row">
              <div className="relative">
                <div className="absolute sm:text-[18px] text-[14px] uppercase text-center sm:rotate-12 sm:-left-2 -top-8 bg-gray-900 text-white lg:p-4 p-3 rounded-full z-10 font-medium">
                  {translations.rooms.priceFrom}
                  <span className="sm:text-[22px] text-[16x]">
                    {translations.rooms.price}
                  </span>
                  <br />
                  {translations.rooms.perNight}
                </div>
                <motion.img
                  src="/chodba.jpg"
                  alt="Hotel corridor"
                  className="sm:block hidden min-w-40 w-full h-[402px] object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
              </div>
              <div className="space-y-4">
                <motion.img
                  src="kuchyna.jpg"
                  alt="Modern kitchen"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
                <motion.img
                  src="/izba2.jpg"
                  alt="Hotel room"
                  className="w-full h-[195px] object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Rooms;
