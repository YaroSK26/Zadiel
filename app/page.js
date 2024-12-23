"use client";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import SurroundingsSection from "@/components/SurroundingsSection";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Page() {
  return (
    <div className="min-h-screen">
     
      <Hero />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <About />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Rooms />
      </motion.div>
       <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
      <SurroundingsSection/>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Gallery />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
}
