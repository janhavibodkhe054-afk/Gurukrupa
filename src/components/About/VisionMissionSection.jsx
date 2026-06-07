import React from "react";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-[#F7F9FC] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <span className="text-[#F28C28] uppercase tracking-[4px] font-semibold text-sm">
            Our Foundation
          </span>

          <h2 className="text-[#16265E] text-4xl md:text-6xl font-black mt-4">
            Vision & Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 overflow-hidden rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

          {/* VISION CARD */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="bg-[#16265E] p-10 md:p-14 flex items-center"
          >
            <div>
              <span className="text-[#F28C28] uppercase tracking-[3px] text-sm font-semibold">
                Our Vision
              </span>

              <h3 className="text-white text-3xl md:text-5xl font-black mt-4">
                Building Smarter
                <br />
                Electrical Futures
              </h3>

              <p className="text-white/80 leading-8 mt-6">
                To become a trusted leader in electrical and lighting
                solutions by delivering innovation, quality and
                future-ready products that power homes, businesses
                and industries.
              </p>
            </div>
          </motion.div>

          {/* IMAGE 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden min-h-[350px]"
          >
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
              alt="Vision"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden min-h-[350px]"
          >
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              alt="Mission"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* MISSION CARD */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F28C28] p-10 md:p-14 flex items-center"
          >
            <div>
              <span className="text-white uppercase tracking-[3px] text-sm font-semibold">
                Our Mission
              </span>

              <h3 className="text-white text-3xl md:text-5xl font-black mt-4">
                Delivering Quality
                <br />
                With Reliability
              </h3>

              <p className="text-white/90 leading-8 mt-6">
                To provide premium electrical products, lighting
                solutions and expert support while maintaining the
                highest standards of service, trust and customer
                satisfaction.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}