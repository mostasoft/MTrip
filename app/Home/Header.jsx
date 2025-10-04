"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-sky-500">
            MTrip
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-sky-500 transition duration-300">
              Home
            </Link>
            <Link href="/ticket" className="hover:text-sky-500 transition duration-300">
              Ticket
            </Link>
            <Link href="/explore" className="hover:text-sky-500 transition duration-300">
              Explore
            </Link>
            <Link href="/activity" className="hover:text-sky-500 transition duration-300">
              Activity
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-sky-500 transition duration-300">
              Sign in
            </button>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition duration-300">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-sky-500 focus:outline-none transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cross Icon Inside Menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-sky-500 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
          {[
            { href: "/", label: "Home" },
            { href: "/ticket", label: "Ticket" },
            { href: "/explore", label: "Explore" },
            { href: "/activity", label: "Activity" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-sky-500 transition-all duration-300 transform hover:translate-x-2"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}

          <button className="text-gray-600 hover:text-sky-500 transition-all duration-300 transform hover:translate-x-2">
            Sign in
          </button>
          <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:translate-x-2">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
