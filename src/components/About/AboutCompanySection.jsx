import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutCompanySection() {
  return (
    <section
      id="aboutus"
      className="relative w-full bg-white py-10 md:py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-blue-100 blur-[120px] rounded-full opacity-60" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-100 blur-[120px] rounded-full opacity-60" />

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {/* Main Image */}
              <img
                src="/about2.jpg"
                alt="Gurukrupa Electricals"
                className="w-full h-[420px] md:h-[600px] object-cover hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#16265E]/90 via-[#16265E]/10 to-transparent" />

              {/* Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-[#F28C28] to-[#ff9f43] text-white px-5 py-3 rounded-full text-xs font-semibold tracking-[2px] shadow-xl">
                TRUSTED ELECTRICAL PARTNER
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            {/* Subtitle */}
            <span className="uppercase tracking-[4px] text-[#F28C28] text-[13px] font-semibold">
              About Gurukrupa Electricals
            </span>

            {/* Heading */}
            <h2 className="text-[#16265E] text-[28px] md:text-[44px] leading-[1.1] font-bold mt-5">
              Powering Homes, Businesses & Industries
            </h2>

            

            {/* Description */}
            <div className="mt-8 space-y-4">
              <p className="text-gray-900 text-base md:text-lg">
                Gurukrupa Electricals & Light House is a trusted destination for
                premium electrical materials, decorative lighting, switches,
                wires, cables, MCBs and industrial electrical products from
                leading brands.
              </p>

              <p className="text-gray-900 text-base md:text-lg">
                We proudly serve residential, commercial and industrial
                customers by offering high-quality products, expert guidance and
                dependable support under one roof.
              </p>

              <p className="text-gray-900 text-base md:text-lg">
                Our mission is to provide complete electrical solutions that
                combine innovation, safety and long-term performance for every
                project.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919923686402?text=Hello%20Gurukrupa%20Electricals,%20I%20would%20like%20to%20know%20more%20about%20your%20products.",
                  "_blank",
                )
              }
              className="group relative overflow-hidden mt-10 flex items-center gap-3 
  bg-gradient-to-r from-orange-500 via-orange-400 to-orange-200 
  text-[#2b2b2b] px-8 py-4 rounded-xl font-semibold 
  shadow-md hover:shadow-orange-300/40 
  hover:scale-105 transition-all duration-500"
            >
              {/* Shine Effect */}
              <span className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

              {/* Text */}
              <span className="relative z-10">Get in Touch</span>

              {/* Icon */}
              <ArrowRight
                size={18}
                className="relative z-10 text-[#2b2b2b] group-hover:translate-x-1 transition"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
