"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "../components/UseTranslation";
import { ShimmerButton } from "./magicui/shimmer-button";

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
            {translations?.hero?.title}
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {translations?.hero?.subtitle}
          </motion.p>
          <Link href="/#contact">
            <motion.button
              className="flex uppercase mx-auto items-center gap-2  bg-gray-900 text-white rounded-full border-none hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
               <ShimmerButton className="shadow-2xl">

              {translations?.hero?.bookButton}
              <ArrowRight className="w-4 h-4" />
               </ShimmerButton>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
