import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function PremiumStatsSection() {
  const stats = [
    {
      icon: <BriefcaseBusiness size={28} strokeWidth={1.8} />,
      number: "1.25k",
      label: "Projects",
    },
    {
      icon: <Users size={28} strokeWidth={1.8} />,
      number: "1.24k",
      label: "Clients",
    },
    {
      icon: <Lightbulb size={28} strokeWidth={1.8} />,
      number: "250+",
      label: "Products",
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.8} />,
      number: "100%",
      label: "Quality",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#07111F]">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[10%] w-[260px] h-[260px] bg-[#4F8CC9]/20 blur-[120px]" />

      <div className="absolute bottom-[-120px] right-[10%] w-[260px] h-[260px] bg-[#F28C28]/20 blur-[120px]" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* GRID */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
            }}
            className="group relative flex flex-col items-center justify-center py-[32px] md:py-[40px] px-[10px]"
          >

            {/* DIVIDER */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[45%] bg-white/10" />
            )}

            {/* HOVER BG */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/[0.03]" />

            {/* ICON */}
            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: 6,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="relative z-10 text-[#F28C28] mb-[10px]"
            >
              {item.icon}
            </motion.div>

            {/* NUMBER */}
            <h3 className="relative z-10 text-white text-[24px] sm:text-[32px] md:text-[42px] font-bold leading-none">
              {item.number}
            </h3>

            {/* LABEL */}
            <p className="relative z-10 mt-[8px] text-white/65 text-[10px] sm:text-[12px] uppercase tracking-[2px]">
              {item.label}
            </p>

            {/* ACCENT LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "42px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="h-[2px] mt-[14px] bg-gradient-to-r from-[#F28C28] to-[#4F8CC9]"
            />

          </motion.div>
        ))}
      </div>

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}