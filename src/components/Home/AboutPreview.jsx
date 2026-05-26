import React from "react";
import {
  Cable,
  Lightbulb,
  Building2,
  ThumbsUp,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {

  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
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
      text: "Wide range of LED lights, fancy lighting, decorative lights, and smart lighting solutions.",
    },
    {
      icon: Building2,
      title: "Residential & Industrial",
      text: "Complete electrical solutions for homes, offices, commercial projects, and industries.",
    },
    {
      icon: ThumbsUp,
      title: "Trusted Service",
      text: "Reliable support, expert guidance, and customer satisfaction for every project.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f7fbff] via-white to-[#f8fbff] py-10 lg:py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#F28C28]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="max-w-2xl"
          >

            {/* TAG */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="inline-flex items-center gap-2 bg-[#4F8CC9]/10 border border-[#4F8CC9]/20 text-[#4F8CC9] px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-md"
            >
              ⚡ Trusted Electrical Solutions
            </motion.div>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              custom={2}
              className="text-[38px] md:text-[64px] font-black uppercase text-[#16265E] leading-[1.02] tracking-tight"
            >
              Gurukrupa
              <br />
              <span className="text-[#4F8CC9]">
                Electricals &
              </span>
              <br />
              <span className="text-[#F28C28]">
                Light House
              </span>
            </motion.h2>

            {/* SUBTITLE */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-[#16265E] text-[20px] md:text-[24px] font-semibold mt-6 leading-[38px]"
            >
              Complete Electrical & Modern Lighting Solutions
              for Residential, Commercial & Industrial Projects.
            </motion.p>

            {/* LINE */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="w-36 h-[5px] rounded-full bg-gradient-to-r from-[#F28C28] via-[#4F8CC9] to-[#16265E] mt-7 mb-8"
            />

            {/* PARAGRAPHS */}
            <div className="">
              {[
                "We provide premium quality wires, cables, switches, MCBs, LED lights, and electrical accessories from trusted brands.",
                "From modern decorative lighting to industrial electrical materials, we deliver complete solutions under one roof.",
                "Our focus is quality products, professional guidance, competitive pricing, and long-term customer trust.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  custom={5 + i}
                  className="text-[#2E2E2E] text-[17px] leading-[33px]"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              custom={8}
              className="flex flex-wrap gap-5 mt-10"
            >
              <button
              onClick={() => navigate("/about")}
              className="px-8 py-4 rounded-2xl bg-[#16265E] hover:bg-[#0f1d4b] text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1">
                Learn More
              </button>

              <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-2xl border border-[#16265E]/20 bg-white hover:bg-[#F8FAFF] text-[#16265E] font-semibold transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 80 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >

            {/* GLOW */}
            <div className="absolute -top-16 -right-16 w-[250px] h-[250px] bg-[#4F8CC9]/20 blur-[120px] rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-[250px] h-[250px] bg-[#F28C28]/15 blur-[120px] rounded-full" />

            {/* IMAGE BOX */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/50 bg-white shadow-[0_30px_80px_rgba(22,38,94,0.18)]">

              {/* TOP BADGE */}
              <div className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg">
                <p className="text-[#16265E] font-bold text-lg">
                  10+ Years
                </p>
                <span className="text-sm text-gray-500">
                  Trusted Experience
                </span>
              </div>

              <img
                src="https://media.istockphoto.com/id/598954202/photo/some-led-lamps-blue-light-science-technology-background.jpg"
                alt="Electrical Products"
                className="w-full max-w-[620px] h-[650px] object-cover hover:scale-105 transition duration-700"
              />

              {/* BOTTOM OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#16265E]/85 to-transparent">
                <h3 className="text-white text-2xl font-bold">
                  Premium Electrical Store
                </h3>
                <p className="text-white/80 mt-2 text-sm">
                  Quality Products • Modern Lighting • Trusted Service
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

  {cards.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -14, rotateX: 4, rotateY: -4 }}
        className="
          relative group perspective-1000
          rounded-[24px]
          p-7
          overflow-hidden

          bg-gradient-to-b from-white via-[#F8FAFF] to-white

          border border-[#E8EEF5]

          shadow-[0_10px_30px_rgba(0,0,0,0.05)]
          hover:shadow-[0_30px_80px_rgba(22,38,94,0.15)]

          transition-all duration-500
        "
      >

        {/* 🌈 COLORED BACKGROUND ORB */}
        <div className="
          absolute -top-16 -right-16 w-[180px] h-[180px]
          bg-[#4F8CC9]/10
          rounded-full blur-[80px]

          group-hover:bg-[#F28C28]/15
          transition duration-700
        " />

        {/* 🌊 LEFT COLOR EDGE */}
        <div className="
          absolute left-0 top-0 w-[3px] h-0
          bg-gradient-to-b from-[#F28C28] via-[#4F8CC9] to-[#16265E]

          group-hover:h-full
          transition-all duration-500
        " />

        {/* HEADER */}
        <div className="flex items-center justify-between relative z-10">

          {/* ICON BLOCK (COLORED SOFT BG) */}
          <div className="
            w-14 h-14
            rounded-xl
            flex items-center justify-center

            bg-gradient-to-br from-[#4F8CC9]/10 to-[#F28C28]/10

            border border-[#E9EEF5]

            group-hover:scale-110 group-hover:rotate-6
            transition duration-500
          ">
            <Icon size={26} className="text-[#4F8CC9]" />
          </div>

          {/* ARROW */}
          <div className="
            relative w-10 h-10
            rounded-full
            flex items-center justify-center

            bg-white
            border border-[#E9EEF5]

            group-hover:bg-[#16265E]
            transition duration-300
            overflow-hidden
          ">

            <ArrowUpRight
              size={16}
              className="
                text-[#16265E]
                absolute
                group-hover:-translate-y-6
                group-hover:opacity-0
                transition-all duration-300
              "
            />

            <ArrowUpRight
              size={16}
              className="
                text-white
                absolute translate-y-6 opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-300
              "
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-6 relative z-10">

          <h3 className="
            text-[19px]
            font-semibold
            text-[#16265E]
          ">
            {item.title}
          </h3>

          <p className="
            text-[#5B6472]
            text-[14px]
            leading-[26px]
            mt-3
          ">
            {item.text}
          </p>
        </div>

        {/* BOTTOM COLOR LINE */}
        <div className="
          absolute bottom-0 left-6 right-6 h-[2px]
          bg-gradient-to-r from-[#F28C28] via-[#4F8CC9] to-[#16265E]
          opacity-60
          group-hover:opacity-100
          transition
        " />

      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}