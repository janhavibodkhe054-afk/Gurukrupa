import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function GalleryPage() {

  // Auto generate 1 → 59 images
  const galleryImages = Array.from({ length: 59 }, (_, i) => 
    `/gallery/${i + 1}.jpg`
  );

  return (
    <section className="py-10 lg:py-16 bg-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* HEADING */}
        <div className="text-left md:text-center mb-10">
          <span className="text-[#F37021] font-semibold uppercase tracking-[3px] text-sm">
            Our Gallery
          </span>

          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-[#16265E]">
            Electrical Projects & Products
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore our premium electrical solutions, lighting systems, industrial products and completed projects.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#16265E]/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* TEXT */}
              <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6 transition duration-500">
                <h3 className="font-semibold text-lg">
                  Electrical Work
                </h3>
                <p className="text-sm text-white/80">
                  Premium Installation
                </p>
              </div>

              {/* ICON */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight size={18} className="text-[#16265E]" />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}