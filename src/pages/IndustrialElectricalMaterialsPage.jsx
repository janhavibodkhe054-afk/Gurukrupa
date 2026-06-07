import React from "react";
import { motion } from "framer-motion";

import { FiZap, FiCalendar, FiCheckCircle } from "react-icons/fi";

export default function ElectricalWiresPage() {
  const cableTypes = [
    {
      title: "Industrial Cables",
      number: "01",
      desc: "Heavy-duty power and control cables designed for industrial installations and machinery.",
    },
    {
      title: "MCBs & MCCBs",
      number: "02",
      desc: "Reliable circuit protection devices ensuring safety against overloads and short circuits.",
    },
    {
      title: "Control Panels",
      number: "03",
      desc: "Advanced electrical control panels engineered for efficient power distribution and automation.",
    },
    {
      title: "Switchgear Solutions",
      number: "04",
      desc: "High-performance switchgear equipment for safe control and protection of electrical systems.",
    },
    {
      title: "Cable Trays & Accessories",
      number: "05",
      desc: "Durable cable management systems designed for organized and secure installations.",
    },
    {
      title: "Industrial Switches & Relays",
      number: "06",
      desc: "Precision-engineered switches and relays for automation, control, and monitoring applications.",
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
          src="/product5.avif"
          alt="Industrial Electrical Material"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-5">
          <div>
            {/* HEADING */}
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight font-black">
              Industrial Electrical
              <span className="text-[#F28C28]"> Material</span>
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
              Premium Industrial Electrical Material
            </h2>

            <p className="mt-8 text-gray-500 text-base md:text-lg max-w-[720px] leading-relaxed">
              Our industrial electrical materials are sourced from trusted
              manufacturers and engineered to meet the demanding requirements of
              industrial, commercial, and infrastructure projects. Designed for
              safety, efficiency, and reliability, our products ensure seamless
              electrical operations across diverse applications.
            </p>

            <p className="mt-4 text-gray-500 text-base md:text-lg max-w-[720px] leading-relaxed">
              From control panels and circuit protection devices to industrial
              cables, switchgear, and automation components, every product
              undergoes stringent quality standards to deliver superior
              performance, long service life, enhanced safety, and dependable
              operation in challenging environments.
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
                src="/product1.jpg"
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
              Industrial Electrical
              <span className="text-[#F28C28]"> Material</span>
            </h2>

            <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-8">
              Premium Industrial Electrical Material for safety, durability and
              superior performance.
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
