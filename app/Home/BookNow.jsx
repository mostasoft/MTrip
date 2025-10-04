"use client";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function BookTicketsSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      {/* Title + Button */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
          Book tickets and go now!
        </h2>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          Book now
        </button>
      </div>

      {/* Video Section */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="overflow-hidden rounded-2xl shadow-lg relative bg-black">
          {isVideoOpen ? (
            <video
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-2xl"
              src="/Coastal Calm in the Maldives 🌊(MP4).mp4"
              controls
              autoPlay
              muted
              playsInline
            />
          ) : (
            <>
              <img
                src="/img/istockphoto-1442179368-612x612.jpg"
                alt="Book Tickets"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-2xl"
              />
              {/* Play Button Overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => setIsVideoOpen(true)}
              >
                <span className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                  <FaPlay className="text-blue-600 text-xl ml-1" />
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
