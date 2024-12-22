"use client";

import React from "react";
import { Wifi, Car, MapPin, Home } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="justify-center items-center mx-auto py-20 bg-gray-50"
    >
      <motion.div
        className="container px-4 mx-auto max-w-7xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Welcome to Zádiel
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              Discover comfortable accommodation in the heart of Zádielská
              dolina. Ideal for hikers and nature lovers, with easy access to
              hiking trails.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Car className="h-5 w-5 text-[#111827]" />
                <span>Free Parking</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Wifi className="h-5 w-5 text-[#111827]" />
                <span>Free WiFi</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Home className="h-5 w-5 text-[#111827]" />
                <span>Shared Kitchen</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <MapPin className="h-5 w-5 text-[#111827]" />
                <span>Great Location</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.img
            src="/kuchyna2.jpg"
            alt="About Zádiel"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
