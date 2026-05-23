import React from "react";
import { motion } from "framer-motion";

export default function BrandsHero() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://t4.ftcdn.net/jpg/02/17/50/89/360_F_217508906_V2kAUPil2oSEYxjnu6Kuv6TIHWKdbWIw.jpg"
        alt="Brands Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* GRADIENT LIGHT */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#4F8CC9]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-orange-400/10 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative h-full max-w-[1450px] mx-auto px-[20px] md:px-[40px] flex items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          {/* SMALL TAG */}
          <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[13px] font-semibold">
            Gurukrupa Electricals
          </span>

          {/* HEADING */}
          <h1 className="text-white text-[44px] md:text-[78px] font-bold leading-[1.05] mt-[18px]">
            Trusted Brands
          </h1>

          {/* SHORT TEXT */}
          <p className="text-white/70 text-[16px] md:text-[18px] leading-[32px] mt-[18px] max-w-[620px]">
            Premium electrical and lighting brands
            known for quality, performance, and
            reliability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}