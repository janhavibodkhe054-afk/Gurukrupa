import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Award,
} from "lucide-react";

export default function BrandsGrid() {

  const brands = [
    {
      name: "Polycab",
      logo: "e1.jpg",
      category: "Wires & Cables",
      info: "Premium electrical wires and cable solutions.",
    },

    {
      name: "Finolex",
      logo: "e2.jpg",
      category: "Electrical Wires",
      info: "Trusted brand for durable electrical products.",
    },

    {
      name: "KEI Estd.1961",
      logo: "e3.jpg",
      category: "Cables",
      info: "High-performance industrial and residential cables.",
    },

    {
      name: "Havells",
      logo: "e4.jpg",
      category: "Electricals",
      info: "Innovative and reliable electrical solutions.",
    },

    {
      name: "Finolex XCEEDS",
      logo: "e5.jpg",
      category: "Wires",
      info: "Advanced technology and premium quality wiring.",
    },

    {
      name: "KEI Wires",
      logo: "e6.jpg",
      category: "Electrical Cables",
      info: "Safe and efficient electrical cable systems.",
    },

    {
      name: "Finolex Pipes",
      logo: "e7.jpg",
      category: "Pipes & Fittings",
      info: "Durable pipes and fittings for modern infrastructure.",
    },

    {
      name: "Legrand",
      logo: "s1.jpg",
      category: "Switches",
      info: "Stylish modular switches and accessories.",
    },

    {
      name: "GM",
      logo: "s2.jpg",
      category: "Electrical Accessories",
      info: "Modern switches and premium electrical solutions.",
    },

    {
      name: "Schneider",
      logo: "s3.jpg",
      category: "Industrial Electrical",
      info: "Energy-efficient electrical automation products.",
    },

    {
      name: "GreatWhite",
      logo: "s4.jpg",
      category: "Switches",
      info: "Elegant modular switches and accessories.",
    },

    {
      name: "Philips",
      logo: "l1.jpg",
      category: "LED Lighting",
      info: "Energy-saving modern lighting products.",
    },

    {
      name: "SYSKA",
      logo: "l2.jpg",
      category: "LED Lights",
      info: "Smart LED lighting and electrical solutions.",
    },

    {
      name: "Wipro",
      logo: "l3.jpg",
      category: "Lighting",
      info: "Reliable lighting and electrical products.",
    },

    {
      name: "Crompton",
      logo: "l4.jpg",
      category: "Electrical Appliances",
      info: "Trusted lighting and fan solutions.",
    },

    {
      name: "Jaquar",
      logo: "f1.jpg",
      category: "Fancy Lighting",
      info: "Luxury decorative lighting collections.",
    },

    {
      name: "WT",
      logo: "f2.jpg",
      category: "Decorative Lights",
      info: "Modern fancy lighting and decorative products.",
    },

    {
      name: "FOS",
      logo: "f3.jpg",
      category: "Lighting Solutions",
      info: "Premium decorative and indoor lighting.",
    },

    {
      name: "Ankur",
      logo: "f4.jpg",
      category: "Fancy Lights",
      info: "Elegant lighting for homes and interiors.",
    },

    {
      name: "Siemens",
      logo: "i1.jpg",
      category: "Industrial Electrical",
      info: "Advanced industrial electrical systems.",
    },

    {
      name: "ABB",
      logo: "i2.jpg",
      category: "Industrial Solutions",
      info: "Reliable industrial automation products.",
    },

    {
      name: "Hager",
      logo: "i3.jpg",
      category: "Electrical Systems",
      info: "Modern electrical protection solutions.",
    },

    {
      name: "L&T",
      logo: "i4.jpg",
      category: "Industrial Products",
      info: "Trusted industrial electrical materials.",
    },
     {
      name: "AnkurLighting",
      logo: "f5.jpg",
      category: "Fancy Lights",
      info: "Advanced industrial electrical systems.",
    },
  ];

  return (
    <section className="relative w-full bg-[#F8FAFC] py-[60px] overflow-hidden">

      {/* BLURS */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-orange-300/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

      {/* BG TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <h1 className="text-[90px] md:text-[180px] lg:text-[240px] font-black text-[#111111]/[0.03] uppercase tracking-[12px]">
          Brands
        </h1>
      </div>

      <div className="relative max-w-[1450px] mx-auto px-[20px] md:px-[40px]">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-[70px]"
        >

          <span className="uppercase tracking-[5px] text-[#4F8CC9] text-[13px] font-semibold">
            Trusted Electrical Brands
          </span>

          <h2 className="text-[38px] md:text-[60px] font-bold text-[#1B255A] mt-[18px] leading-[1.05]">
            Brands We Deal In
          </h2>

          <p className="text-gray-500 text-[16px] leading-[32px] mt-[18px] max-w-[760px] mx-auto">
            Premium electrical and lighting products from
            industry-leading brands trusted for quality,
            safety, performance, and innovation.
          </p>

          {/* FEATURES */}
          <div className="flex flex-wrap justify-center gap-[16px] mt-[32px]">

            <div className="flex items-center gap-[10px] bg-white px-[18px] py-[12px] rounded-full border border-[#E8EEF5] shadow-sm">
              <ShieldCheck
                size={18}
                className="text-[#4F8CC9]"
              />

              <span className="text-[14px] font-medium">
                Genuine Products
              </span>
            </div>

            <div className="flex items-center gap-[10px] bg-white px-[18px] py-[12px] rounded-full border border-[#E8EEF5] shadow-sm">
              <Award
                size={18}
                className="text-[#4F8CC9]"
              />

              <span className="text-[14px] font-medium">
                Trusted Brands
              </span>
            </div>

            <div className="flex items-center gap-[10px] bg-white px-[18px] py-[12px] rounded-full border border-[#E8EEF5] shadow-sm">
              <Zap
                size={18}
                className="text-[#4F8CC9]"
              />

              <span className="text-[14px] font-medium">
                Premium Quality
              </span>
            </div>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[26px]">

          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative bg-white rounded-[32px] border border-[#EDF2F7] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(79,140,201,0.12)] transition-all duration-500"
            >

              {/* TOP LINE */}
              <div className="h-[4px] w-full bg-gradient-to-r from-orange-400 via-[#4F8CC9] to-orange-300 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left" />

              {/* CONTENT */}
              <div className="p-[28px]">

                {/* CATEGORY */}
                <span className="inline-block text-[11px] uppercase tracking-[2px] text-[#4F8CC9] font-semibold bg-[#4F8CC9]/10 px-[12px] py-[7px] rounded-full">
                  {brand.category}
                </span>

                {/* LOGO */}
                <div className="h-[90px] flex items-center justify-center mt-[25px]">

                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-[65px] object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-[22px] font-bold text-[#111111] text-center mt-[15px]">
                  {brand.name}
                </h3>

                {/* INFO */}
                <p className="text-gray-500 text-[14px] leading-[28px] text-center mt-[14px]">
                  {brand.info}
                </p>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,140,201,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}