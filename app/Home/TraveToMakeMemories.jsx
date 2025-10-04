"use client";

import Image from "next/image";

export default function Memories() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Travel to make sweet memories
          </h2>
          <p className="text-gray-500 mt-2">
            Find trips that fit a flexible lifestyle
          </p>

          <div className="mt-8 space-y-6">
            {/* Item 1 */}
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-sky-100 text-sky-600 font-semibold px-3 py-1 rounded-full">
                  01
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  Find trips that fit your freedom
                </h3>
              </div>
              <p className="text-gray-500 ml-12">
                Travelling offers freedom and flexibility, solitude and
                spontaneity, and privacy and purpose.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-purple-100 text-purple-600 font-semibold px-3 py-1 rounded-full">
                  02
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  Get back to nature by travel
                </h3>
              </div>
              <p className="text-gray-500 ml-12">
                The world is a playground; you can finally explore Mother
                Nature’s limitless corners.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="flex items-center gap-3">
                <span className="bg-green-100 text-green-600 font-semibold px-3 py-1 rounded-full">
                  03
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  Reignite those travel tastebuds
                </h3>
              </div>
              <p className="text-gray-500 ml-12">
                There are infinite reasons to love travel, one of them being the
                food, glorious food.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-8 font-mono bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition">
            Start your explore
          </button>
        </div>

        {/* Right Side Image with Floating Cards */}
        <div className="relative">
          <Image
            src="/Bali.jpg" // replace with your own image
            alt="Travel"
            width={600}
            height={500}
            className="rounded-2xl shadow-lg object-cover w-full h-[480px]"
          />

          {/* Floating User Card 1 */}
          <div className="absolute top-10 left-6 bg-white shadow-md rounded-full px-3 py-2 flex items-center gap-2">
            <Image
              src="/WhatsApp Image 2025-10-04 at 07.39.26_e6dbc65f.jpg" // replace with your avatar
              alt="User"
              width={28}
              height={28}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Kamelia Diana</span>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">4.9</span>
          </div>

          {/* Floating User Card 2 */}
          <div className="absolute top-20 right-8 bg-white shadow-md rounded-full px-3 py-2 flex items-center gap-2">
            <Image
              src="/WhatsApp Image 2025-10-04 at 07.39.26_e6dbc65f.jpg"
              alt="User"
              width={28}
              height={28}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Hishel Adam</span>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">4.8</span>
          </div>

          {/* Floating User Card 3 */}
          <div className="absolute bottom-10 left-10 bg-white shadow-md rounded-full px-3 py-2 flex items-center gap-2">
            <Image
              src="/WhatsApp Image 2025-10-04 at 07.39.26_e6dbc65f.jpg"
              alt="User"
              width={28}
              height={28}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Joe Zelman</span>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">4.7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
