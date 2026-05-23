import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function FounderMessageSection() {
  return (
    <section className="relative w-full bg-[#F8FAFC] overflow-hidden py-[90px] md:py-[120px]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-180px] right-[-100px] w-[380px] h-[380px] bg-[#4F8CC9]/10 blur-[140px]" />

      <div className="absolute bottom-[-180px] left-[-100px] w-[380px] h-[380px] bg-[#F28C28]/10 blur-[140px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-[18px] sm:px-[25px] lg:px-[40px]">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          <div className="absolute top-[-40px] left-0 text-[70px] sm:text-[120px] md:text-[160px] font-bold text-[#0F172A]/[0.03] leading-none select-none">
            FOUNDER
          </div>

          {/* TOP LINE */}
          <div className="flex items-center gap-[14px]">
            <div className="w-[70px] h-[3px] bg-gradient-to-r from-[#F28C28] to-[#4F8CC9] rounded-full" />

            <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[12px] sm:text-[13px] font-semibold">
              Founder Message
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[#0F172A] text-[36px] sm:text-[52px] md:text-[68px] font-bold leading-[1.05] mt-[24px]">
            Message From
            <br />
            Founder
          </h2>

          {/* MESSAGE BOX */}
          <div className="relative mt-[50px] border-l-[4px] border-[#F28C28] pl-[24px] sm:pl-[35px]">

            {/* QUOTE ICON */}
            <div className="absolute -top-[12px] left-[-18px] w-[42px] h-[42px] rounded-full bg-[#0F172A] flex items-center justify-center shadow-lg">
              <Quote size={18} className="text-[#F28C28]" />
            </div>

            {/* MESSAGE */}
            <p className="text-[#334155] text-[20px] sm:text-[28px] md:text-[34px] leading-[1.7] font-light max-w-[950px]">
              “Our goal is to provide customers with genuine electrical
              products, the latest lighting solutions, and dependable service
              under one roof.”
            </p>

            {/* FOUNDER NAME */}
            <div className="mt-[35px]">
              <h4 className="text-[#0F172A] text-[22px] sm:text-[28px] font-bold">
                — Mr. Hanumant Khandekar
              </h4>

              <p className="text-[#64748B] text-[14px] sm:text-[16px] mt-[6px] tracking-[2px] uppercase">
                Founder • Gurukrupa Electricals & Light House
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}