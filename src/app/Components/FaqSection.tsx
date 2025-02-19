"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { faqs } from "@/constant/data";

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Pricing FAQs
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq) => (
          <div key={faq.id} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
              className={`w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                activeId === faq.id ? "bg-gray-50" : "bg-white"
              }`}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              <ChevronRight
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  activeId === faq.id ? "rotate-90" : ""
                }`}
              />
            </button>
            {activeId === faq.id && (
              <div className="p-4 bg-gray-50 border-t animate-fade-in">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600">
          Haven&apos;t got your answer? Contact our support
        </p>
      </div>
    </section>
  );
}
