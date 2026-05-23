import React from "react";
import { motion } from "framer-motion";

export default function AboutCompanySection() {
  return (
    <section
      id="aboutus"
      className="w-full bg-[#F5F3F3] py-[70px] md:py-[100px] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-[16px] sm:px-[20px] lg:px-[40px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[80px] items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white p-[16px] sm:p-[22px] md:p-[30px] shadow-xl">

              {/* MAIN IMAGE */}
              <div className="w-[85%] sm:w-[80%] h-[220px] sm:h-[300px] md:h-[360px] overflow-hidden">
                <img
                  src="https://www.electricalindia.in/wp-content/uploads/2025/07/electric-wire.jpg"
                  alt="Electrical showroom"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* OVERLAY IMAGE */}
              <div
                className="
                absolute 
                bottom-[-40px] sm:bottom-[-60px] md:bottom-[100px]
                right-[10px] sm:right-[20px]
                w-[75%] sm:w-[72%]
                h-[200px] sm:h-[280px] md:h-[420px]
                overflow-hidden border-[6px] sm:border-[8px] md:border-[10px]
                border-white shadow-2xl"
              >
                <img
                  src="https://www.sciencing.com/sciencing/frequency-led-lights-9592/ba24524ae1574a8997eaf5c4432899f4.jpg"
                  alt="Lighting products"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* BADGE */}
              <div className="absolute -top-6 sm:-top-10 md:-top-16 right-3 sm:right-6 bg-[#4F8CC9] text-white px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-xs tracking-widest font-semibold shadow-lg">
                TRUSTED ELECTRICAL BRAND
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* SMALL TITLE */}
            <span className="uppercase tracking-[3px] text-[#F28C28] text-[12px] sm:text-[13px] font-semibold">
              About Gurukrupa Electricals
            </span>

            {/* MAIN TITLE */}
            <h2 className="text-[#111] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[50px] font-bold leading-[1.15] mt-[14px] sm:mt-[18px]">
              One Stop Electrical
              <br />
              Solution Provider
            </h2>

            {/* TAGLINE */}
            <p className="text-[#6F7A86] italic text-[16px] sm:text-[18px] md:text-[20px] mt-[14px] leading-[28px] sm:leading-[34px]">
              Delivering reliable lighting & electrical solutions for every space.
            </p>

            {/* DESCRIPTION */}
            <div className="mt-[30px] sm:mt-[45px] space-y-[14px] sm:space-y-[18px] text-justify">
              <p className="text-[#666] text-[14px] sm:text-[16px] md:text-[17px] leading-[26px] sm:leading-[34px]">
                Gurukrupa Electricals & Light House is a trusted destination for premium
                electrical materials including decorative lighting, switches, wires, cables,
                MCBs, and industrial-grade electrical products.
              </p>

              <p className="text-[#666] text-[14px] sm:text-[16px] md:text-[17px] leading-[26px] sm:leading-[34px]">
                We serve residential, commercial, and industrial projects with a strong focus
                on quality, affordability, and long-term reliability.
              </p>

              <p className="text-[#666] text-[14px] sm:text-[16px] md:text-[17px] leading-[26px] sm:leading-[34px]">
                Our mission is to bring complete electrical solutions under one roof with
                trusted brands and expert support.
              </p>
            </div>

            {/* FOUNDER CARD */}
            <div className="mt-[35px] sm:mt-[50px] bg-white p-[16px] sm:p-[22px] border-l-[4px] sm:border-l-[6px] border-[#F28C28] shadow-md">
              <p className="text-[11px] sm:text-[14px] uppercase tracking-[2px] sm:tracking-[3px] text-[#4F8CC9]">
                Founder Information
              </p>

              <h4 className="text-[18px] sm:text-[22px] font-bold text-[#111] mt-2">
                Mr. Hanumant Khandekar
              </h4>

              <p className="text-[#666] mt-1 text-[14px] sm:text-[16px]">
                Founder – Gurukrupa Electricals & Light House
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}