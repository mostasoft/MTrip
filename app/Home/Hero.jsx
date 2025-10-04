"use client";

import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function Hero() {
  const [tab, setTab] = useState("hostelry");

  return (
    <section className="w-full flex justify-center mt-25 px-4 md:px-8">
      <div className="relative w-full max-w-7xl">
        {/* Hero Image */}
        <div
          className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] bg-cover bg-center rounded-3xl overflow-hidden flex items-center justify-center"
          style={{ backgroundImage: "url('/Hero (2).jpg')" }} // replace with your hero image
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Text Content */}
          <div className="relative z-10 text-center text-white max-w-3xl px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug">
              Explore the whole world <br className="hidden sm:block" /> and
              enjoy its beauty
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-100">
              Find and write about your experiences around the world.
            </p>
          </div>
        </div>

        {/* Search Box */}
        {/* On mobile: placed AFTER hero (relative position) */}
        {/* On md+ screens: placed OVER hero (absolute position) */}
        <div
          className="
            relative mt-6 
            md:absolute md:left-1/2 md:-bottom-16 md:transform md:-translate-x-1/2 
            w-full px-2 sm:px-4
          "
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 sm:gap-6 border-b border-gray-200 mb-4 sm:mb-6">
              {["Hostelry", "Flights", "Bus & Shuttle", "Cars"].map((item) => (
                <button
                  key={item}
                  className={`pb-2 sm:pb-3 capitalize text-sm sm:text-base ${
                    tab === item.toLowerCase()
                      ? "border-b-2 border-sky-500 text-sky-500 font-semibold"
                      : "text-gray-500 hover:text-sky-500"
                  }`}
                  onClick={() => setTab(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Destination"
                  className="border rounded-lg pl-3 pr-10 sm:pl-4 sm:pr-12 py-2 sm:py-3 w-full text-sm focus:outline-none"
                />
                <FaMapMarkerAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400" />
              </div>
              <input
                type="date"
                className="border rounded-lg px-3 sm:px-4 py-2 sm:py-3 w-full text-sm"
              />
              <input
                type="date"
                className="border rounded-lg px-3 sm:px-4 py-2 sm:py-3 w-full text-sm"
              />
             <div className="relative">
                <input
                  type="text"
                  placeholder="Room & Guests"
                  className="border rounded-lg pl-3 pr-10 sm:pl-4 sm:pr-12 py-2 sm:py-3 w-full text-sm focus:outline-none"
                />
                <AiFillHome className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-400" />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition w-full"
              >
                <FaSearch /> Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
