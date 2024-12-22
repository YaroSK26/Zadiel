import React from 'react'
import {
  Wifi,
  Car,
  MapPin,
  Home,
} from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="  justify-center items-center mx-auto py-20 bg-gray-50"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Welcome to Zádiel
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Discover comfortable accommodation in the heart of Zádielská
              dolina. Ideal for hikers and nature lovers, with easy access to
              hiking trails.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-[#111827]" />
                <span>Free Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-[#111827]" />
                <span>Free WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-[#111827]" />
                <span>Shared Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#111827]" />
                <span>Great Location</span>
              </div>
            </div>
          </div>
          <img
            src="/kuchyna2.jpg"
            alt="About Zádiel"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About
