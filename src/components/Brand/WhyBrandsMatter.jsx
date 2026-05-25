import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  BatteryCharging,
  Award,
} from "lucide-react";

export default function WhyBrandsMatter() {

  const points = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Better Safety",
      desc:
        "Trusted brands follow high-quality safety standards for reliable electrical performance.",
    },

    {
      icon: <Award size={24} />,
      title: "Long Durability",
      desc:
        "Premium materials ensure longer product life and dependable performance.",
    },

    {
      icon: <Zap size={24} />,
      title: "Energy Efficiency",
      desc:
        "Modern branded electrical products consume less energy and deliver better efficiency.",
    },

    {
      icon: <BatteryCharging size={24} />,
      title: "Reliable Performance",
      desc:
        "Consistent quality and advanced technology provide smooth long-term operation.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-[90px] overflow-hidden">

      {/* BLUR EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] bg-orange-300/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

      {/* BG TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <h1 className="text-[80px] md:text-[160px] lg:text-[220px] font-black text-[#111111]/[0.03] uppercase tracking-[10px]">
          Quality
        </h1>
      </div>

      <div className="relative max-w-[1450px] mx-auto px-[20px] md:px-[40px]">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-[850px] mx-auto"
        >

          <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[13px] font-semibold">
            Why Brands Matter
          </span>

          <h2 className="text-[38px] md:text-[60px] font-bold text-[#1B255A] leading-[1.08] mt-[18px]">
            Trusted Brands Ensure
            <br />
            Better Performance
          </h2>

          <p className="text-gray-500 text-[17px] leading-[34px] mt-[22px]">
            Using trusted electrical brands ensures better
            safety, durability, energy efficiency, and
            long-lasting performance for residential,
            commercial, and industrial applications.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[70px]">

          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group relative bg-[#F8FAFC] border border-[#EDF2F7] rounded-[30px] p-[30px] overflow-hidden hover:shadow-[0_20px_60px_rgba(79,140,201,0.12)] transition-all duration-500"
            >

              {/* TOP LINE */}
              <div className="absolute top-0 left-0 h-[4px] w-full bg-gradient-to-r from-orange-400 via-[#4F8CC9] to-orange-300 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left" />

              {/* ICON */}
              <div className="w-[62px] h-[62px] rounded-[20px] bg-white border border-[#E5ECF5] flex items-center justify-center text-[#4F8CC9] shadow-sm">

                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[24px] font-bold text-[#111111] mt-[24px]">
                {item.title}
              </h3>

              {/* LINE */}
              <div className="w-[45px] h-[3px] bg-[#4F8CC9] rounded-full mt-[16px] mb-[18px] group-hover:w-[80px] transition-all duration-500" />

              {/* DESC */}
              <p className="text-gray-500 text-[15px] leading-[30px]">
                {item.desc}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,140,201,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}