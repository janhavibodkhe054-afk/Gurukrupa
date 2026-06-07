import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Award, ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.12,
      },
    }),
  };

  return (
    <section
      id="about-section"
      className="bg-white py-10 lg:py-14 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Label */}
            <motion.span
              variants={fadeUp}
              custom={1}
              className="inline-block text-[#f37021] text-sm font-semibold uppercase tracking-[3px] mb-4"
            >
              About Us
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              custom={2}
              className="text-[28px] md:text-[44px] leading-[1.1] font-bold text-[#111827]"
            >
              Gurukrupa Electricals & Light House
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-gray-600 text-base md:text-lg leading-relaxed mt-4 max-w-xl"
            >
              Complete Electrical & Modern Lighting Solutions for Residential,
              Commercial & Industrial Projects.
            </motion.p>

            {/* Features */}
            <div className="mt-5 space-y-7">
              <motion.div variants={fadeUp} custom={4} className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#f37021]/10 flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-[#f37021]" />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#111827]">
                    Premium Electrical Products
                  </h4>

                  <p className="text-gray-600 mt-1 text-base md:text-lg">
                    Quality wires, cables, switches, MCBs, LED lights and
                    accessories from trusted brands.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={5} className="flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#f37021]/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={24} className="text-[#f37021]" />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#111827]">
                    Trusted Service & Support
                  </h4>

                  <p className="text-gray-600 mt-1 text-base md:text-lg">
                    Expert guidance, fair pricing and complete electrical
                    solutions under one roof.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Button */}
            <motion.div variants={fadeUp} custom={6} className="mt-10">
              <button
                onClick={() => navigate("/about")}
                className="
      group
      relative
      overflow-hidden
      px-8
      py-4
      rounded-xl
      bg-[#16265E]
      text-white
      font-semibold
      tracking-wide
      shadow-[0_10px_30px_rgba(22,38,94,0.25)]
      hover:shadow-[0_20px_40px_rgba(243,112,33,0.35)]
      hover:-translate-y-1
      transition-all
      duration-500
    "
              >
                {/* Animated Background */}
                <span
                  className="
      absolute inset-0
      bg-gradient-to-r
      from-[#f37021]
      to-[#ff9f45]
      scale-x-0
      origin-left
      group-hover:scale-x-100
      transition-transform
      duration-500
    "
                />

                <span className="relative z-10 flex items-center gap-3">
                  KNOW MORE
                  <span
                    className="
        w-9 h-9
        rounded-full
        bg-white/15
        flex items-center justify-center
        group-hover:rotate-45
        transition-all duration-500
      "
                  >
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-all duration-500"
                    />
                  </span>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Shape */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#f37021]/10 rounded-full blur-3xl" />

            {/* Border Frame */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-full h-full border-2 border-[#f37021]/20 z-0" />

            <div className="relative z-10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
              {/* Main Image */}
              <img
                src="/homeabout.jpg"
                alt="Electrical Store"
                className="
        w-full
        h-[380px]
        sm:h-[450px]
        lg:h-[560px]
        object-cover
        transition-all
        duration-700
        hover:scale-105
      "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Store Badge */}
              <div className="absolute top-6 left-6 bg-white px-5 py-3 shadow-xl">
                <p className="text-[#16265E] font-bold text-lg">
                  Gurukrupa Electricals
                </p>
                <span className="text-gray-500 text-sm">
                  Trusted Electrical Partner
                </span>
              </div>

              {/* Experience Card */}
              <div
                className="
      absolute
      bottom-6
      left-6
      bg-white
      shadow-2xl
      p-5
      lg:p-7
      border-l-4
      border-[#f37021]
      max-w-[240px]
    "
              >
                <div className="flex items-center gap-4">
                  <div className="text-[#f37021] text-5xl font-bold leading-none">
                    10+
                  </div>

                  <div>
                    <p className="font-bold text-[#16265E]">Years</p>

                    <p className="text-gray-500 text-sm">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
