import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Wallet,
  Zap,
} from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      number: "01",
      icon: <ShieldCheck size={22} />,
      title: "Trusted Electrical Experts",
      text: "Providing reliable electrical products and professional solutions for residential and commercial projects.",
    },
    {
      number: "02",
      icon: <BadgeCheck size={22} />,
      title: "Premium Quality Products",
      text: "We supply branded switches, wires, lighting systems, and industrial electrical equipment.",
    },
    {
      number: "03",
      icon: <Clock3 size={22} />,
      title: "Fast & Reliable Service",
      text: "Quick response, timely delivery, and dependable customer support for every requirement.",
    },
    {
      number: "04",
      icon: <Wallet size={22} />,
      title: "Affordable Pricing",
      text: "Competitive pricing with the perfect balance of quality, durability, and value.",
    },
    {
      number: "05",
      icon: <Zap size={22} />,
      title: "Modern Lighting Solutions",
      text: "Stylish decorative lighting and energy-efficient solutions designed for modern spaces.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-[70px] md:py-[100px] overflow-hidden">

      <div className="max-w-[1450px] mx-auto px-[16px] sm:px-[20px] lg:px-[40px]">

        <div className="grid lg:grid-cols-2 gap-[50px] lg:gap-[80px] items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* TOP TAG */}
            <div className="inline-flex items-center bg-[#0B1C3D] text-white px-[16px] py-[8px] rounded-full text-[12px] uppercase tracking-[2px] font-semibold">
              Our Expertise
            </div>

            {/* TITLE */}
            <h2 className="text-[#111] text-[30px] sm:text-[40px] md:text-[54px] font-bold leading-[1.1] mt-[22px] max-w-[650px]">
              Smart, Reliable &
              <br />
              Modern Electrical
              <br />
              Solutions
            </h2>

            {/* IMAGE */}
            <div className="relative mt-[35px] overflow-hidden rounded-[24px] shadow-2xl group">

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1621905252472-e8f4f1d7c0e9?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-[320px] sm:h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* FLOATING CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-[20px] left-[20px] bg-white/90 backdrop-blur-md px-[18px] py-[14px] rounded-[18px] shadow-lg"
              >
                <p className="text-[#4F8CC9] text-[13px] font-semibold uppercase tracking-[2px]">
                  Trusted Since Years
                </p>

                <h4 className="text-[#111] text-[24px] font-bold mt-1">
                  100% Quality
                </h4>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-[24px]"
          >

            {features.map((item, index) => (
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
                  x: 8,
                }}
                className="group flex gap-[16px] sm:gap-[22px] border-b border-[#D8DFEA] pb-[22px]"
              >

                {/* NUMBER */}
                <div className="min-w-[42px] text-[#A0A8B8] font-bold text-[14px] tracking-[2px]">
                  {item.number}
                </div>

                {/* ICON */}
                <div className="min-w-[56px] h-[56px] bg-[#0B1C3D] rounded-[16px] flex items-center justify-center text-[#F28C28] shadow-lg group-hover:bg-[#4F8CC9] transition duration-500">
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-[#111] text-[20px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-[#6F7A86] text-[14px] sm:text-[15px] leading-[28px] mt-[6px]">
                    {item.text}
                  </p>
                </div>

              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
}