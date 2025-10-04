"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-500 border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Logo + Address */}
        <div>
          <h2 className="text-2xl font-bold  text-white">MTrip</h2>
          <p className="text-white mt-3 font-mono text-sm leading-relaxed">
            30 Great Peter St, Westminster, <br />
            London SW1P 2JS, United Kingdom
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-white">
            <a href="#" className="hover:text-black "><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-black "><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-black "><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-black "><FaYoutube size={18} /></a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold font-mono text-white mb-3">About</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#" className="hover:text-black ">About us</a></li>
            <li><a href="#" className="hover:text-black ">Features</a></li>
            <li><a href="#" className="hover:text-black ">News</a></li>
            <li><a href="#" className="hover:text-black ">Plans</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold font-mono text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#" className="hover:text-black ">Why Tripco</a></li>
            <li><a href="#" className="hover:text-black ">Partner with us</a></li>
            <li><a href="#" className="hover:text-black ">FAQ</a></li>
            <li><a href="#" className="hover:text-black ">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold font-mono text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#" className="hover:text-black ">Account</a></li>
            <li><a href="#" className="hover:text-black ">Support center</a></li>
            <li><a href="#" className="hover:text-black ">Feedback</a></li>
            <li><a href="#" className="hover:text-black ">Contact us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold font-mono text-white mb-3">Newsletter</h3>
          <p className="text-sm  font-mono text-white mb-3">
            Subscribe our newsletter and get exciting offers
          </p>
          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 text-sm bg-gray-100 focus:outline-none"
            />
            <button className="bg-cyan-600 text-white px-4 py-2 hover:bg-black  transition">
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
