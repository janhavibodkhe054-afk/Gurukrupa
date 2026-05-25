import React from "react";
import {
  Cable,
  Lightbulb,
  Building2,
  ThumbsUp,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
      },
    }),
  };

  const cards = [
    {
      icon: Cable,
      title: "Quality Products",
      text: "Premium quality wires, switches, cables, and electrical materials from trusted brands.",
    },

    {
      icon: Lightbulb,
      title: "Modern Lighting",
      text: "Wide collection of LED lights, fancy lighting, decorative lights, and modern lighting solutions.",
    },

    {
      icon: Building2,
      title: "Residential & Industrial",
      text: "Complete electrical solutions for homes, offices, shops, commercial projects, and industries.",
    },

    {
      icon: ThumbsUp,
      title: "Customer Support",
      text: "Friendly service, trusted guidance, and reliable support for every electrical requirement.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#f8fbff] to-white py-14 lg:py-20 overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >

            {/* SMALL TAG */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="inline-block bg-[#4F8CC9]/10 text-[#4F8CC9] px-5 py-2 rounded-full text-sm font-semibold mb-5"
            >
              Trusted Electrical Solutions
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              custom={2}
              className="text-[34px] md:text-[52px] font-black uppercase text-[#16265E] leading-[1.1]"
            >
              Gurukrupa Electricals
              <br />

              <span className="text-[#4F8CC9]">
                & Light House
              </span>
            </motion.h2>

            {/* SUB HEADING */}
            <motion.h4
              variants={fadeUp}
              custom={3}
              className="text-[#F28C28] text-[22px] font-semibold mt-4"
            >
              Complete Electrical & Lighting Solutions
            </motion.h4>

            {/* LINE */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="w-28 h-[4px] rounded-full bg-gradient-to-r from-[#F28C28] via-[#4F8CC9] to-[#16265E] mt-5 mb-7"
            />

            {/* PARAGRAPHS */}
            <div className="space-y-2">

              <motion.p
                variants={fadeUp}
                custom={5}
                className="text-[#555] text-[17px] leading-[32px]"
              >
                Gurukrupa Electricals & Light House offers
                complete electrical solutions for residential,
                commercial, and industrial projects with a
                strong focus on quality, reliability, and
                customer satisfaction.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={6}
                className="text-[#555] text-[17px] leading-[32px]"
              >
                We provide a wide range of electrical
                materials including wires & cables,
                modular switches, LED lights, fancy
                lighting, industrial electrical products,
                MCBs, conduits, accessories, and more.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={7}
                className="text-[#555] text-[17px] leading-[32px]"
              >
                Our goal is to deliver trusted products,
                modern solutions, and professional service
                that help customers find everything they
                need under one roof.
              </motion.p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative group">

              {/* BLUR EFFECT */}
              <div className="absolute -top-10 -right-10 w-[220px] h-[220px] bg-[#4F8CC9]/20 blur-[100px] rounded-full" />

              <div className="absolute -bottom-10 -left-10 w-[220px] h-[220px] bg-[#F28C28]/10 blur-[100px] rounded-full" />

              {/* IMAGE BOX */}
              <div className="overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(22,38,94,0.18)] border border-white">

                <img
                  src="https://media.istockphoto.com/id/598954202/photo/some-led-lamps-blue-light-science-technology-background.jpg?s=612x612&w=0&k=20&c=_c6U3QLgV5wWxipLkTmrRogHogw-9XXWBFItny205k0="
                  alt="Electrical Products"
                  className="w-full max-w-[580px] object-contain group-hover:scale-[1.05] transition duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURE SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="
                  group relative overflow-hidden
                  bg-white
                  rounded-[30px]
                  border border-[#E8EEF9]
                  p-7 lg:p-8
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_20px_60px_rgba(22,38,94,0.14)]
                  transition-all duration-500
                "
              >

                {/* TOP GRADIENT */}
                <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-[#F28C28] via-[#4F8CC9] to-[#16265E]" />

                {/* BG GLOW */}
                <div className="absolute -top-20 -right-20 w-[180px] h-[180px] bg-[#4F8CC9]/5 rounded-full blur-[80px] group-hover:bg-[#F28C28]/10 transition duration-700" />

                {/* ICON */}
                <div className="relative z-10 flex items-center justify-between">

                  <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#4F8CC9]/10 to-[#F28C28]/10 flex items-center justify-center group-hover:rotate-6 transition duration-500">

                    <Icon
                      size={40}
                      className="text-[#4F8CC9] stroke-[1.8]"
                    />
                  </div>

                  <div className="w-11 h-11 rounded-full bg-[#F8FAFF] flex items-center justify-center group-hover:bg-[#4F8CC9] transition duration-500">

                    <ArrowUpRight
                      size={18}
                      className="text-[#16265E] group-hover:text-white transition duration-500"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-7">

                  <h3 className="text-[24px] font-bold text-[#16265E] leading-[1.3]">
                    {item.title}
                  </h3>

                  <p className="text-[#6B7280] text-[16px] leading-[31px] mt-4">
                    {item.text}
                  </p>
                </div>

                {/* HOVER BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-[#F28C28] to-[#4F8CC9] group-hover:w-full transition-all duration-700" />

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}