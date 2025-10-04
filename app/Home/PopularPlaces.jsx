"use client";

import Image from "next/image";

const places = [
  {
    id: 1,
    name: "SC. Mindanou",
    location: "Mindanao, Philippines",
    img: "/SC. Mindanou.jpg",
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Disneyland Tokyo",
    location: "Tokyo, Japan",
    img: "/Disneyland Tokyo.jpg",
    discount: "25% OFF",
  },
  {
    id: 3,
    name: "Tousand Island",
    location: "Java, Indonesia",
    img: "/Tousand Island.jpg",
    discount: "30% OFF",
  },
  {
    id: 4,
    name: "Basilica Santo",
    location: "Venice, Italy",
    img: "/Basilica Santo.jpg",
    discount: "15% OFF",
  },
];

export default function PopularPlaces() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-40">
      {/* Title Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <h2 className=" font-mono text-3xl md:text-4xl font-bold text-gray-800">
          Popular Places
        </h2>
        <p className="text-gray-500 mt-2 md:mt-0 md:max-w-md text-sm">
          Many places are very famous, beautiful, clean, and will give every
          impression to visitors so that will not make them bored.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {places.map((place) => (
          <div
            key={place.id}
            className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <Image
              src={place.img}
              alt={place.name}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
            />

            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-md">
              {place.discount}
            </span>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {place.name}
              </h3>
              <p className="text-gray-500 text-sm">{place.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
