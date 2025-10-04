"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Tripco?",
    answer:
      "Tripco is a travel booking platform that helps you find and book amazing experiences around the world.",
  },
  {
    question: "How do I book a trip?",
    answer:
      "Simply choose your destination, pick your travel dates, and follow the booking instructions to confirm your trip.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking depending on the cancellation policy of the trip you booked.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our support team is available 24/7 to help you with any queries you may have.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-2 text-gray-600">
          Here are some common questions about our platform.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium focus:outline-none"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
