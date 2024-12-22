import React from 'react'
import {

  ArrowRight,
} from "lucide-react";
import Link from 'next/link';

const Rooms = () => {
  return (
    <section
      id="accommodation"
      className=" flex justify-center items-center flex-col"
    >
      <div className="max-w-6xl flex sm:flex-row flex-col justify-center items-center  sm:p-6 p-3 bg-white">
        <div className="grid  md:grid-cols-2 gap-12">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl uppercase font-bold tracking-tight mb-4">
                Accommodation in the Zádiel valley
              </h1>
              <p className="text-gray-700">
                Accommodation in Turisticka Ubytovna Zádiel includes a garden,
                free private parking and a terrace. There is also a wardrobe and
                bed linen
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
            <br />
            <Link
              href={
                "https://www.booking.com/hotel/sk/turisticka-ubytovna-zadiel-turistaszallo-szadelo.sk.html?aid=304142&label=gen173nr-1FCAEoggI46AdIIlgEaM0BiAEBmAEiuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKemJy7BsACAdICJGI3MGUwZjU2LWQ2MmItNGNhYy05MTEwLTA0ZWE2ZjEyMDliY9gCBeACAQ&sid=4e31bd7b6e9259ef598e194aa0cf0025&dest_id=13138054&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1734806576&srpvid=ccce839538c90521&type=total&ucfs=1&#availability"
              }
              target="_blank"
            >
              <button className="flex uppercase items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                <span>I want to book</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Right content */}
          <div className="relative ">
            <div className="flex gap-4 flex-col justify-center sm:flex-row  ">
              <div className="relative">
                <div className="absolute sm:text-[18px] text-[14px] uppercase text-center sm:rotate-12 sm:-left-2 -top-8 bg-gray-900 text-white lg:p-4 p-3 rounded-full z-10 font-medium">
                  from <span className="sm:text-[22px] text-[16x]"> 30€</span>
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
  );
}

export default Rooms
