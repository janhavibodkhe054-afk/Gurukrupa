import React from "react";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="relative w-full bg-[#07111F] overflow-hidden py-[90px] md:py-[130px]">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-[-200px] left-[-120px] w-[420px] h-[420px] bg-[#4F8CC9]/20 blur-[140px]" />

      <div className="absolute bottom-[-200px] right-[-120px] w-[420px] h-[420px] bg-[#F28C28]/20 blur-[140px]" />

      {/* GRID LINES */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-[18px] sm:px-[25px] lg:px-[45px]">

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-[70px] lg:gap-[120px]">

          {/* VISION SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* BIG BG TEXT */}
            <div className="absolute top-[-40px] left-0 text-[90px] sm:text-[140px] md:text-[170px] font-bold text-white/[0.03] leading-none select-none">
              VISION
            </div>

            {/* SMALL LINE */}
            <div className="w-[90px] h-[4px] bg-gradient-to-r from-[#4F8CC9] to-[#F28C28] rounded-full" />

            {/* TITLE */}
            <h2 className="text-white text-[38px] sm:text-[52px] md:text-[64px] font-bold leading-[1.05] mt-[26px]">
              Our Vision
            </h2>

            {/* CONTENT */}
            <div className="mt-[40px] space-y-[26px]">

              <p className="text-white/70 text-[15px] sm:text-[17px] leading-[34px]">
                To become a trusted leader in the electrical and lighting
                industry by delivering innovative, reliable, and future-ready
                solutions that elevate modern living and commercial spaces.
              </p>

              <p className="text-white/70 text-[15px] sm:text-[17px] leading-[34px]">
                We envision creating smarter and safer environments through
                advanced electrical technologies, energy-efficient systems, and
                premium lighting solutions that combine performance with design.
              </p>

              <p className="text-white/70 text-[15px] sm:text-[17px] leading-[34px]">
                Our goal is to build long-term trust through uncompromising
                quality, customer satisfaction, and continuous innovation while
                evolving with changing market needs and technology.
              </p>

            </div>

            {/* SIDE ACCENT */}
            <div className="absolute left-[-20px] top-[120px] hidden lg:block w-[2px] h-[220px] bg-gradient-to-b from-[#4F8CC9] to-transparent" />

          </motion.div>

          {/* MISSION SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* BIG BG TEXT */}
            <div className="absolute top-[-40px] left-0 text-[90px] sm:text-[140px] md:text-[170px] font-bold text-white/[0.03] leading-none select-none">
              MISSION
            </div>

            {/* SMALL LINE */}
            <div className="w-[90px] h-[4px] bg-gradient-to-r from-[#F28C28] to-[#4F8CC9] rounded-full" />

            {/* TITLE */}
            <h2 className="text-white text-[38px] sm:text-[52px] md:text-[64px] font-bold leading-[1.05] mt-[26px]">
              Our Mission
            </h2>

            {/* CONTENT */}
            <div className="mt-[40px] space-y-[26px]">

              <p className="text-white/70 text-[15px] sm:text-[17px] leading-[34px]">
                To provide high-quality electrical products, decorative
                lighting, and dependable solutions that meet the evolving needs
                of residential, commercial, and industrial customers.
              </p>

              <p className="text-white/70 text-[15px] sm:text-[17px] leading-[34px]">
                We are committed to delivering exceptional service, trusted
                branded products, and expert support while maintaining the
                highest standards of professionalism, integrity, and
                affordability.
              </p>

              <p className="text-white/70 text-[15px] sm:text-[17px] leading-[34px]">
                Through innovation, ethical business practices, and customer-
                focused solutions, we aim to contribute toward efficient,
                sustainable, and modern electrical infrastructure.
              </p>

            </div>

            {/* SIDE ACCENT */}
            <div className="absolute right-[-20px] top-[120px] hidden lg:block w-[2px] h-[220px] bg-gradient-to-b from-[#F28C28] to-transparent" />

          </motion.div>

        </div>
      </div>
    </section>
  );
}