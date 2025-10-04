"use client";

import Image from "next/image";

export default function ExploreMore() {
  const places = [
    {
      name: "Amalfi Coast",
      location: "Amalfi, Italy",
      price: "$148/Person",
      rating: "4.9",
      img: "/img/1.jpg",
    },
    {
      name: "Taj Mahal",
      location: "Agra, India",
      price: "$140/Person",
      rating: "4.8",
      img: "/img/Historia de las 5 mayores cúpulas del mundo.jpg",
    },
    {
      name: "Tanah Gajah",
      location: "Bali, Indonesia",
      price: "$148/Person",
      rating: "4.9",
      img: "/img/tripkeya.jpg",
    },
    {
      name: "Osaka Castle",
      location: "Osaka, Japan",
      price: "$156/Person",
      rating: "4.7",
      img: "/img/✯ Cape Reinga, New Zealand.jpg",
    },
    {
      name: "Cape Reinga",
      location: "Northland, New Zealand",
      price: "$164/Person",
      rating: "4.7",
      img: "/img/GHM Luxury Hotels & Resorts _ Worldwide Luxury & 5-Star Hotel Management.jpg",
    },
    {
      name: "Sorrento, Italy",
      location: "Amalfi, Italy",
      price: "$172/Person",
      rating: "4.9",
      img: "/img/Sunset with Osaka Castle.jpg",
    },
  ];

  const filters = [
    "Popular destination",
    "Islands",
    "Surfing",
    "Nation parks",
    "Lakes",
    "Beach",
    "Camping",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-mono md:text-4xl font-bold text-gray-900">
          Explore more
        </h2>
        <p className="text-gray-500 mt-2">
          All-inclusive vacations and flights to the Caribbean, Indonesia,
          and more than 1,500 destinations worldwide. Let’s explore.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-full border text-sm font-medium ${
              i === 0
                ? "bg-sky-500 text-white border-sky-500"
                : "text-gray-600 hover:bg-sky-100 hover:text-sky-600 border-gray-300"
            } transition`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src={place.img}
                alt={place.name}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              {/* Rating Badge */}
              <span className="absolute top-3 right-3 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow">
                ⭐ {place.rating}
              </span>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                {place.name}
              </h3>
              <p className="text-gray-500 text-sm">{place.location}</p>
              <p className="text-sky-500 font-semibold mt-3">{place.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-12">
        <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium shadow transition">
          Show more
        </button>
      </div>
    </section>
  );
}
