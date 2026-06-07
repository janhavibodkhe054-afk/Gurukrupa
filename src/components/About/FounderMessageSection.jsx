import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function FounderSection() {
  const points = [
    "Premium Electrical Products",
    "Trusted Brand Partnerships",
    "Expert Customer Support",
    "Quality & Reliability",
  ];

  return (
    <section className="relative w-full bg-white py-10 md:py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-100 blur-[120px] rounded-full opacity-50" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-100 blur-[120px] rounded-full opacity-50" />

      <div className="relative z-10 max-w-[1250px] mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[#F28C28] uppercase tracking-[4px] text-sm font-semibold">
              Founder Message
            </span>

            <h2 className="text-[#16265E] text-[28px] md:text-[44px] leading-[1.1] font-bold mt-2">
              Building Trust Through Quality & Service
            </h2>

            <div className="w-[90px] h-[5px] rounded-full bg-gradient-to-r from-[#F28C28] to-[#4F8CC9] mt-4" />

            <p className="text-[#555] text-base md:text-lg leading-relaxed mt-2">
              At Gurukrupa Electricals & Light House, our commitment has always
              been to provide premium electrical products, dependable service,
              and long-term customer satisfaction.
            </p>

            {/* POINTS */}
            <div className="grid sm:grid-cols-2 gap-5 mt-4">
              {points.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-[#F28C28]" />
                  <span className="text-[#16265E] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* FOUNDER CARD */}
            <div className="mt-8 bg-[#F8FAFF] border border-[#DCE8FF] rounded-[24px] p-6 flex items-center gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div>
                <h4 className="text-[#16265E] text-[24px] font-bold">
                  Mr. Hanumant Khandekar
                </h4>

                <p className="text-[#777] mt-1">
                  Founder – Gurukrupa Electricals
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE COLLAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* GLOW */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4F8CC9]/20 via-[#F28C28]/20 to-[#4F8CC9]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{
                rotateY: -5,
                rotateX: 2,
                y: -10,
              }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="/founder.jpeg"
                alt="Founder"
                className="w-full h-[450px] md:h-[620px] object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* PREMIUM OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#16265E]/70 via-[#16265E]/10 to-transparent" />

              {/* TOP ACCENT */}
              <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#F28C28] via-[#4F8CC9] to-[#F28C28]" />

              {/* SHINE EFFECT */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-[120%] top-0 w-[60%] h-full bg-white/10 skew-x-[-25deg] group-hover:left-[140%] transition-all duration-[1400ms]" />
              </div>
            </motion.div>

            {/* EXPERIENCE CARD */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="absolute bottom-8 left-8 backdrop-blur-xl bg-white/90 border border-white/60 rounded-[28px] px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >
              <h3 className="text-[52px] font-black leading-none bg-gradient-to-r from-[#4F8CC9] to-[#16265E] bg-clip-text text-transparent">
                10+
              </h3>

              <p className="text-[#16265E] text-lg font-bold mt-2">
                Years Experience
              </p>

              <div className="w-12 h-[3px] rounded-full bg-[#F28C28] mt-3" />
            </motion.div>

            

            {/* DECORATIVE CIRCLE */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border-[20px] border-[#F28C28]/10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
