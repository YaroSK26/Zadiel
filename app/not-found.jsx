"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "../components/Navbar";

const Hero = () => {
  const translations = useTranslations();

  return (
    <section id="home" className="relative h-screen">
      <Image
        src="/hero.jpg"
        alt="Zádiel Accommodation"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container px-4 max-w-7xl">
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-6xl uppercase font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {translations?.error?.title}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {translations?.error?.subtitle}
          </motion.p>
          <Link
            href="https://www.booking.com/hotel/sk/turisticka-ubytovna-zadiel-turistaszallo-szadelo.sk.html?aid=304142&label=gen173nr-1FCAEoggI46AdIIlgEaM0BiAEBmAEiuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKemJy7BsACAdICJGI3MGUwZjU2LWQ2MmItNGNhYy05MTEwLTA0ZWE2ZjEyMDliY9gCBeACAQ&sid=4e31bd7b6e9259ef598e194aa0cf0025&dest_id=13138054&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734806576&srpvid=ccce839538c90521&type=total&ucfs=1&#availability"
            target="_blank"
          >
            <motion.button
              className="flex uppercase mx-auto items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full border-none hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{translations?.error?.button}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
