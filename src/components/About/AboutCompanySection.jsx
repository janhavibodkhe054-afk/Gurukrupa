import React from "react";
import { motion } from "framer-motion";

export default function AboutCompanySection() {
  return (
    <section
      id="aboutus"
      className="w-full bg-white py-[50px] md:py-[80px] overflow-hidden"
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
            <div className="relative bg-white p-[16px] sm:p-[22px] md:p-[30px] rounded-[28px] shadow-[0_15px_50px_rgba(22,38,94,0.08)] border border-[#DCE8FF]">

              {/* BLUE GLOW */}
              <div className="absolute -top-10 -left-10 w-[160px] h-[160px] bg-[#4F8CC9]/10 blur-[80px] rounded-full" />

              {/* MAIN IMAGE */}
              <div className="w-[85%] sm:w-[80%] h-[220px] sm:h-[300px] md:h-[360px] overflow-hidden rounded-[24px]">
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
                overflow-hidden rounded-[24px]
                border-[6px] sm:border-[8px] md:border-[10px]
                border-white shadow-2xl"
              >
                <img
                  src="https://www.sciencing.com/sciencing/frequency-led-lights-9592/ba24524ae1574a8997eaf5c4432899f4.jpg"
                  alt="Lighting products"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* BADGE */}
              <div className="absolute -top-6 sm:-top-10 md:-top-16 right-3 sm:right-6 bg-gradient-to-r from-[#4F8CC9] to-[#16265E] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs tracking-[2px] font-semibold shadow-xl">
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
            <h2 className="text-[#16265E] text-[30px] sm:text-[38px] md:text-[50px] lg:text-[54px] font-black leading-[1.15] mt-[14px] sm:mt-[18px]">
              One Stop Electrical
              <br />
              Solution Provider
            </h2>

            {/* LINE */}
            <div className="w-[110px] h-[4px] rounded-full bg-gradient-to-r from-[#F28C28] to-[#4F8CC9] mt-6" />

            {/* TAGLINE */}
            <p className="text-[#4F8CC9] italic text-[16px] sm:text-[18px] md:text-[20px] mt-[20px] leading-[30px] sm:leading-[36px] font-medium">
              Delivering reliable lighting & electrical solutions for every space.
            </p>

            {/* DESCRIPTION */}
            <div className="mt-[20px] sm:mt-[35px] space-y-[10px] sm:space-y-[10px] text-justify">

              <p className="text-black text-[14px] sm:text-[16px] md:text-[17px] leading-[28px] sm:leading-[34px]">
                Gurukrupa Electricals & Light House is a trusted destination for premium
                electrical materials including decorative lighting, switches, wires, cables,
                MCBs, and industrial-grade electrical products.
              </p>

              <p className="text-black text-[14px] sm:text-[16px] md:text-[17px] leading-[28px] sm:leading-[34px]">
                We serve residential, commercial, and industrial projects with a strong focus
                on quality, affordability, and long-term reliability.
              </p>

              <p className="text-black text-[14px] sm:text-[16px] md:text-[17px] leading-[28px] sm:leading-[34px]">
                Our mission is to bring complete electrical solutions under one roof with
                trusted brands and expert support.
              </p>
            </div>

            {/* FOUNDER CARD */}
            <div className="mt-[35px] sm:mt-[50px] bg-white p-[18px] sm:p-[24px] rounded-[22px] border border-[#DCE8FF] shadow-[0_10px_40px_rgba(22,38,94,0.06)] relative overflow-hidden">

              {/* ORANGE TOP LINE */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#F28C28] to-[#4F8CC9]" />

              <p className="text-[11px] sm:text-[13px] uppercase tracking-[3px] text-[#4F8CC9] font-semibold">
                Founder Information
              </p>

              <h4 className="text-[22px] sm:text-[26px] font-bold text-[#16265E] mt-3">
                Mr. Hanumant Khandekar
              </h4>

              <p className="text-[#666] mt-2 text-[14px] sm:text-[16px]">
                Founder – Gurukrupa Electricals & Light House
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}