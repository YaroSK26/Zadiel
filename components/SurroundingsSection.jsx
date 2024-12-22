"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Plane,
  TrainFront,
  CableCar,
  MapPinCheck,
  Utensils,
} from "lucide-react";
import { useTranslations } from "./Navbar";
import { motion } from "framer-motion";

const SurroundingsSection = () => {
  const translations = useTranslations();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const surroundings = [
    {
      name:
        translations?.surroundings?.nationalPark ||
        "Národný park Slovenský Kras",
      distance: "8 km",
      icon: <MapPinCheck />,
    },
    {
      name:
        translations?.surroundings?.restiFortuna ||
        "Reštaurácia Resti - Fortuna",
      distance: "4,8 km",
      icon: <Utensils />,
    },
    {
      name:
        translations?.surroundings?.gasthofLevanda ||
        "Reštaurácia Gasthof Levanda",
      distance: "15 km",
      icon: <Utensils />,
    },
    {
      name:
        translations?.surroundings?.gyrosBurger || "Reštaurácia Gyros Burger",
      distance: "12 km",
      icon: <Utensils />,
    },
    {
      name: translations?.surroundings?.stosSkiLift || "Štós Ski Lift",
      distance: "14 km",
      icon: <CableCar />,
    },
    {
      name:
        translations?.surroundings?.trainTornanadaska || "Vlak Tornanádaska",
      distance: "10 km",
      icon: <TrainFront />,
    },
    {
      name:
        translations?.surroundings?.kosiceAirport ||
        "Medzinárodné letisko Košice",
      distance: "36 km",
      icon: <Plane />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card
        id="surroundings-section"
        ref={sectionRef}
        className="w-full max-w-3xl mx-auto my-10"
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            {translations?.surroundings?.title || "Čo sa nachádza v okolí"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-1"
            >
              {surroundings.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex justify-between items-center py-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="flex items-center text-gray-700">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </span>
                  <span className="text-gray-500">{item.distance}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SurroundingsSection;