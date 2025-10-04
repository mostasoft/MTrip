"use client";
import Image from "next/image";
import { FaPlane } from "react-icons/fa";

const adventures = [
  {
    id: 1,
    name: "PARIS",
    img: "/PeacePulse_ Daily Affirmations.jpg",
  },
  {
    id: 2,
    name: "NEW YORK",
    img: "/_Majestic Statue of Liberty – Iconic New York Landmark_.jpg",
  },
  {
    id: 3,
    name: "SEOUL",
    img: "/'Seoul Autumn Landscape' Poster, picture, metal print, paint by Mason Scott _ Displate.jpg",
  },
  {
    id: 4,
    name: "BALI",
    img: "/Bali.jpg",
  },
];

export default function AdventureSection() {
  return (
    <section className="py-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Let’s go on an adventure
      </h2>
      <p className="text-gray-500 mt-3 mb-14">
        Find and book a great experience.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {adventures.map((place) => (
          <div
            key={place.id}
            className="relative bg-white rounded-lg border-2 border-dotted border-gray-300 p-4 flex flex-col items-center"
          >
            {/* Blue Airplane Badge */}
            <span className="absolute -top-5 -left-5 bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
              <FaPlane className="text-white text-sm" />
            </span>

            {/* Image */}
            <div className="w-full h-64 relative rounded-md overflow-hidden">
              <Image
                src={place.img}
                alt={place.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-md font-semibold text-gray-700 mt-3 uppercase tracking-wide">
              {place.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-14 gap-3">
        <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
}
