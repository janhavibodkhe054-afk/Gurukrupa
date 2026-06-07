import React from "react";
import { motion } from "framer-motion";

import { FiZap, FiCalendar, FiCheckCircle } from "react-icons/fi";

export default function ElectricalWiresPage() {
  const cableTypes = [
    {
      title: "LED Bulbs",
      number: "01",
      desc: "Energy-efficient LED bulbs offering bright illumination, longer life, and reduced power consumption.",
    },
    {
      title: "LED Tube Lights",
      number: "02",
      desc: "High-performance tube lights designed for homes, offices, and commercial spaces.",
    },
    {
      title: "LED Panel Lights",
      number: "03",
      desc: "Slim and modern panel lights providing uniform brightness and elegant aesthetics.",
    },
    {
      title: "LED Downlights",
      number: "04",
      desc: "Stylish recessed lighting solutions ideal for residential and commercial interiors.",
    },
    {
      title: "LED Flood Lights",
      number: "05",
      desc: "Powerful outdoor lighting designed for security, industrial areas, and large spaces.",
    },
    {
      title: "LED Street Lights",
      number: "06",
      desc: "Durable and weather-resistant lighting solutions for roads, pathways, and public areas.",
    },
    {
      title: "LED High Bay Lights",
      number: "07",
      desc: "Efficient lighting systems engineered for warehouses, factories, and large indoor spaces.",
    },
    {
      title: "LED Strip Lights",
      number: "08",
      desc: "Flexible decorative lighting perfect for accent lighting and modern interior designs.",
    },
    {
      title: "LED Spot Lights",
      number: "09",
      desc: "Focused illumination solutions for highlighting interiors, displays, and architectural features.",
    },
    
  ];

  const galleryImages = [
    {
      image:
        "https://www.electricalindia.in/wp-content/uploads/2025/07/electric-wire.jpg",
      subtitle: "Residential Wiring",
      title: "PVC\nInsulated Wires",
    },

    {
      image:
        "https://www.electricalindia.in/wp-content/uploads/2025/06/power-cables.jpg",
      subtitle: "Heavy Power Supply",
      title: "Armoured\nPower Cables",
    },

    {
      image:
        "https://plus.unsplash.com/premium_photo-1682145728214-dbd62535af3f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZXN8ZW58MHx8MHx8fDA%3D",
      subtitle: "High Flexibility",
      title: "Flexible\nCopper Wires",
    },

    {
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2023/3/WO/DK/NB/136185832/product-jpeg-500x500.jpg",
      subtitle: "Fire Protection",
      title: "FRLS\nSafety Cables",
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
          src="/product3.avif"
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
              LED
              <span className="text-[#F28C28]"> Lights</span>
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
              Premium LED Lights
            </h2>

            <p className="mt-8 text-gray-500 text-base md:text-lg max-w-[720px] leading-relaxed">
              Our LED lighting solutions are designed using advanced technology
              and premium-quality components, delivering bright,
              energy-efficient, and long-lasting illumination for residential,
              commercial, and industrial spaces.
            </p>

            <p className="mt-4 text-gray-500 text-base md:text-lg max-w-[720px] leading-relaxed">
              Engineered for superior performance and durability, every LED
              light undergoes stringent quality testing to ensure consistent
              brightness, reduced energy consumption, enhanced safety, and
              reliable operation throughout its lifespan.
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
                src="/product3.avif"
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
              LED
              <span className="text-[#F28C28]"> Lights</span>
            </h2>

            <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-8">
              Premium LED Lights for safety,
              durability and superior performance.
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
