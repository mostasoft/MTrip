"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Logo + Address */}
        <div>
          <h2 className="text-2xl font-bold  text-cyan-600">MTrip</h2>
          <p className="text-gray-500 mt-3 font-mono text-sm leading-relaxed">
            30 Great Peter St, Westminster, <br />
            London SW1P 2JS, United Kingdom
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-cyan-600">
            <a href="#" className="hover:text-gray-800"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-gray-800"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-gray-800"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-gray-800"><FaYoutube size={18} /></a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold font-mono text-gray-900 mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-cyan-600">About us</a></li>
            <li><a href="#" className="hover:text-cyan-600">Features</a></li>
            <li><a href="#" className="hover:text-cyan-600">News</a></li>
            <li><a href="#" className="hover:text-cyan-600">Plans</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold font-mono text-gray-900 mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-cyan-600">Why Tripco</a></li>
            <li><a href="#" className="hover:text-cyan-600">Partner with us</a></li>
            <li><a href="#" className="hover:text-cyan-600">FAQ</a></li>
            <li><a href="#" className="hover:text-cyan-600">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold font-mono text-gray-900 mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#" className="hover:text-cyan-600">Account</a></li>
            <li><a href="#" className="hover:text-cyan-600">Support center</a></li>
            <li><a href="#" className="hover:text-cyan-600">Feedback</a></li>
            <li><a href="#" className="hover:text-cyan-600">Contact us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold font-mono text-gray-900 mb-3">Newsletter</h3>
          <p className="text-sm  font-mono text-gray-500 mb-3">
            Subscribe our newsletter and get exciting offers
          </p>
          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 text-sm bg-gray-100 focus:outline-none"
            />
            <button className="bg-cyan-600 text-white px-4 py-2 hover:bg-cyan-700 transition">
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
