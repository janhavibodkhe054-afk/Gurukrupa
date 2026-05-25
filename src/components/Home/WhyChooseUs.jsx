import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightbulb,
  BadgeCheck,
  Wallet,
  Headphones,
  Boxes,
} from "lucide-react";

export default function WhyChooseUs() {

  const features = [
    {
      icon: <Boxes size={24} />,
      title: "Wide Product Range",
      desc:
        "Complete electrical solutions for residential, commercial, and industrial needs.",
    },

    {
      icon: <ShieldCheck size={24} />,
      title: "Trusted Quality",
      desc:
        "Premium quality electrical materials from trusted brands.",
    },

    {
      icon: <BadgeCheck size={24} />,
      title: "Genuine Products",
      desc:
        "100% original branded electrical products with reliable performance.",
    },

    {
      icon: <Wallet size={24} />,
      title: "Competitive Prices",
      desc:
        "Affordable pricing with excellent quality and value.",
    },

    {
      icon: <Headphones size={24} />,
      title: "Customer Support",
      desc:
        "Professional guidance and friendly customer assistance.",
    },

    {
      icon: <Lightbulb size={24} />,
      title: "Modern Lighting",
      desc:
        "Latest LED lights and decorative lighting collection available.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0E0E0E] py-14 lg:py-16 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('https://i.ytimg.com/vi/cZKZXpgASIE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAat4pDULIICfO9GbU822DtBnJrQA')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* DARK NAVY OVERLAY */}
  <div className="absolute inset-0 bg-[#081120]/40" />

  {/* EXTRA NAVY GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#081120]/95 via-[#0B1E46]/80 to-[#16265E]/55" />

  {/* BACKGROUND TEXT */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

    <h1 className="text-[70px] md:text-[140px] lg:text-[200px] font-black text-white/[0.05] uppercase tracking-[10px] select-none">
      Gurukrupa
    </h1>
  </div>

  {/* GRADIENT */}
  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(79,140,201,0.10),transparent_40%)]" />

  <div className="relative max-w-[1450px] mx-auto px-5 lg:px-10">

    {/* TOP */}
    <div className="grid lg:grid-cols-3 gap-10 items-start">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <span className="uppercase tracking-[4px] text-[#4F8CC9] text-xs font-semibold">
          Why Choose Us
        </span>

        <h2 className="text-[34px] md:text-[46px] font-bold text-white leading-tight mt-4">
          Unmatched
          <br />
          Products.
          <br />
          Trusted Service.
        </h2>

        <p className="text-gray-300 text-[15px] leading-[28px] mt-6 max-w-md">
          Gurukrupa Electricals & Light House delivers
          premium quality electrical materials,
          modern lighting solutions, and trusted
          branded products with professional support.
        </p>
      </motion.div>

      {/* RIGHT GRID */}
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-4 w-full">

        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative border border-white/10 hover:border-[#4F8CC9] bg-white/[0.04] backdrop-blur-md px-5 py-5 transition-all duration-500 w-full"
          >

            {/* NUMBER */}
            <span className="absolute top-3 right-4 text-white/10 text-[24px] font-black">
              0{index + 1}
            </span>

            {/* CONTENT */}
            <div className="flex items-start gap-4">

              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-12 h-12 min-w-[48px] border border-white/10 group-hover:border-[#4F8CC9] rounded-lg flex items-center justify-center text-[#4F8CC9] transition duration-500 bg-[#0B1E46]/60"
              >

                {item.icon}
              </motion.div>

              {/* TEXT */}
              <div className="flex-1">

                {/* TITLE */}
                <h3 className="text-white text-[20px] font-semibold leading-snug">
                  {item.title}
                </h3>

                {/* LINE */}
                <div className="w-10 h-[2px] bg-[#4F8CC9] mt-3 mb-3 group-hover:w-16 transition-all duration-500" />

                {/* DESC */}
                <p className="text-gray-300 leading-[26px] text-[14px]">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}