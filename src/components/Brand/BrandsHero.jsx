import React from "react";
import { motion } from "framer-motion";

export default function BrandsHero() {
  return (
    <section className="relative w-full h-[180px] md:h-[270px] overflow-hidden">

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
      <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
            Trusted Brands
          </h1>
        </div>
    </section>
  );
}