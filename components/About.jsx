"use client";

import React from "react";
import { Wifi, Car, MapPin, Home,Baby,Dog } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "./UseTranslation";

const About = () => {
  const translations = useTranslations();

  // If translations aren't loaded yet, you might want to show a loading state
  if (!translations) {
    return null;
  }

  const amenities = [
    { icon: Car, text: translations.about.amenities.parking },
    { icon: Wifi, text: translations.about.amenities.wifi },
    { icon: Home, text: translations.about.amenities.kitchen },
    { icon: MapPin, text: translations.about.amenities.location },
    { icon: Baby, text: translations.about.amenities.baby },
    { icon: Dog, text: translations.about.amenities.dog },
  ];

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
          {translations.about.welcome}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              {translations.about.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <amenity.icon className="h-5 w-5 text-[#111827]" />
                  <span>{amenity.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.img
            src="/kuchyna2.jpg"
            alt={translations.about.welcome}
            className="rounded-lg shadow-lg max-h-[400px]"
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
