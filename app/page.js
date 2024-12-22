import { Navbar } from "../components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bed,
  Wifi,
  Car,
  MapPin,
  Phone,
  Mail,
  Home,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
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
        <div className="absolute inset-0  flex items-center justify-center text-center">
          <div className="container px-4 max-w-7xl">
            <h1 className="text-4xl md:text-6xl uppercase font-extrabold text-white mb-4">
              Tourist accommodation Zádiel
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              amazing hostel for travelers
            </p>
            <button className="flex uppercase mx-auto items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full border-none hover:bg-gray-800 transition-colors">
              <span>I want to book</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                ducimus. Hic eligendi a ut vitae consectetur porro, rem saepe
                molestiae in modi repellat eveniet! Rerum, enim. Odit at ea
                placeat!
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

      {/* Rooms Section */}
      <section
        id="rooms"
        className="py-20 flex justify-center items-center flex-col"
      >
        <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center  sm:p-6 p-3 bg-white">
          <div className="grid  md:grid-cols-2 gap-12">
            {/* Left content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl uppercase font-bold tracking-tight mb-4">
                  Accommodation in the Zádiel valley
                </h1>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  nisi facilis quasi. Esse nam maiores perferendis, quis
                  voluptatum explicabo .
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-900">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <p>Room with a double bed</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-900">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <p>Quadruple room</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gray-900">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <p>Room with 2 separate beds</p>
                </div>
              </div>

              <button className="flex uppercase items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                <span>I want to book</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right content */}
            <div className="relative ">
              <div className="flex gap-4 flex-col justify-center sm:flex-row  ">
                <div className="relative">
                  <div className="absolute sm:text-[18px] text-[14px] uppercase text-center sm:rotate-12 sm:-left-2 -top-8 bg-gray-900 text-white lg:p-4 p-3 rounded-full z-10 font-medium">
                    from <span className="sm:text-[22px] text-[16x]"> 20€</span>
                    <br />
                    per night
                  </div>
                  <img
                    src="/chodba.jpg"
                    alt="Hotel corridor"
                    className="sm:block hidden min-w-40 w-full h-[402px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <img
                    src="kuchyna.jpg"
                    alt="Modern kitchen"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                  <img
                    src="/izba2.jpg"
                    alt="Hotel room"
                    className="w-full  h-[195px] object-cover rounded-lg shadow-lg " // Increased height
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20  bg-gray-50">
        <div className="flex flex-col max-w-7xl justify-center items-center px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Gallery
          </h2>
          <div className="flex flex-wrap items-center gap-4 justify-center mx-auto">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={`/${i}.jpg`}
                alt={`Gallery image ${i + 1}`}
                className="rounded-lg w-[45%] transition-opacity  mx-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-[#111827]" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      Zádiel 13, 044 02 Zádiel, Slovakia
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-[#111827]" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+421 908 262 669</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-[#111827]" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      info@zadiel-accommodation.sk
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.777857794186!2d20.83038789578703!3d48.61409529024929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f05ef849c2bdb%3A0x400f7d1c69787f0!2s044%2002%20Z%C3%A1diel!5e0!3m2!1ssk!2ssk!4v1734873174608!5m2!1ssk!2ssk"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">
                Tourist Accommodation Zádiel
              </h3>
              <p className="text-gray-400">Your comfortable stay in nature</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 All rights reserved</p>
              <a
                href="https://www.jaroslav.website/"
                target="_blank"
                className="underline"
              >
                Jaroslav Barabáš
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
