import React from "react";
import { motion } from "framer-motion";

import { FiZap, FiCalendar, FiCheckCircle } from "react-icons/fi";

export default function ElectricalWiresPage() {
  const cableTypes = [
    {
      title: "Chandeliers",
      number: "01",
      desc: "Elegant decorative chandeliers that add luxury, sophistication, and brilliance to any space.",
    },
    {
      title: "Pendant Lights",
      number: "02",
      desc: "Modern hanging lights designed to create stylish focal points in homes and commercial interiors.",
    },
    {
      title: "Wall Lights",
      number: "03",
      desc: "Decorative wall-mounted fixtures that enhance ambiance while providing functional illumination.",
    },
    {
      title: "Ceiling Lights",
      number: "04",
      desc: "Premium ceiling fixtures offering a perfect combination of aesthetics and performance.",
    },
    {
      title: "Decorative LED Lights",
      number: "05",
      desc: "Contemporary LED lighting solutions designed to elevate modern interior spaces.",
    },
    {
      title: "Crystal Lights",
      number: "06",
      desc: "Luxurious crystal lighting fixtures crafted to create a sparkling and elegant atmosphere.",
    },
  ];

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <div className="relative h-[180px] md:h-[270px] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/product4.jpg"
          alt="Electrical Wires & Cables"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-5">
          <div>
            {/* HEADING */}
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight font-black">
              Fancy
              <span className="text-[#F28C28]"> Lighting</span>
            </h1>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* INFO SECTION */}
      {/* ====================================================== */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="uppercase text-[#d97838] tracking-[2px] text-sm font-semibold">
              About Product
            </span>

            <h2 className="mt-4 text-[#111827] text-[28px] md:text-[44px] leading-[1.1] font-bold max-w-[700px]">
              Premium Fancy Lighting
            </h2>

            <p className="mt-8 text-gray-500 text-base md:text-lg max-w-[720px] leading-relaxed">
              Our fancy lighting collection is thoughtfully designed to blend
              elegance, innovation, and functionality, creating visually
              stunning lighting solutions for homes, hotels, offices, showrooms,
              and luxury commercial spaces.
            </p>

            <p className="mt-4 text-gray-500 text-base md:text-lg max-w-[720px] leading-relaxed">
              Crafted with premium materials and modern lighting technology,
              every fixture undergoes strict quality testing to ensure
              exceptional durability, superior illumination, energy efficiency,
              and timeless aesthetic appeal that enhances every interior.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919923686402?text=Hello%20Gayatri%20Electricals,%20I%20want%20to%20enquire%20about%20your%20products.",
                  "_blank",
                )
              }
              className="mt-8 bg-[#d97838] text-white px-12 py-5 font-semibold text-lg hover:bg-[#c76b30] transition-all duration-300"
            >
              ENQUIRY NOW
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dotted Pattern */}
            <div className="absolute -top-10 right-0 grid grid-cols-8 gap-3 opacity-30">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="w-[5px] h-[5px] rounded-full bg-gray-500"
                />
              ))}
            </div>

            

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src="/product4.jpg"
                alt="Electrical Wire"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* PRODUCT TYPES */}
      {/* ====================================================== */}

      <section className="relative py-10 bg-[#f8f8f8] overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#16265E 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5">
          {/* Heading */}
          <div className="text-left md:text-center mb-10">
            <span className="uppercase tracking-[4px] text-[#F28C28] text-sm font-semibold">
              PRODUCT RANGE
            </span>

            <h2 className="mt-4 text-[#16265E] text-[28px] md:text-[44px] leading-[1.1] font-bold">
              Fancy
              <span className="text-[#F28C28]"> Lighting</span>
            </h2>

            <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-8">
              Premium Fancy Lighting for safety, durability and superior
              performance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {cableTypes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-6 group"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-[#F28C28]/10 flex items-center justify-center">
                    <FiZap className="text-[#F28C28] text-3xl" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[#16265E] text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-base md:text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
