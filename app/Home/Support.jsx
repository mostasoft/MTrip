"use client";
import { MessageCircle } from "lucide-react";

export default function SupportButton() {
  return (
    <a
      href="/support" // change this to your support page or chat link
      className="
        fixed 
        bottom-4 sm:bottom-6 
        left-4 sm:left-6 
        bg-teal-500 
        hover:bg-teal-600 
        text-white 
        p-3 sm:p-4 
        rounded-full 
        shadow-lg 
        flex 
        items-center 
        justify-center 
        transition 
        z-50
        sm:w-auto sm:h-auto
      "
      title="Support"
    >
      <MessageCircle size={20} className="sm:w-6 sm:h-6 w-5 h-5" />
    </a>
  );
}
