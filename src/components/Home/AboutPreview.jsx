import React from "react";
import {
  Cable,
  Lightbulb,
  Building2,
  ThumbsUp,
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

  return (
    <section className="w-full bg-white py-14 lg:py-20 overflow-hidden">

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

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-[34px] md:text-[48px] font-bold uppercase text-[#14213D] leading-[1.15]"
            >
              Gurukrupa Electricals
              <br />
              & Light House
            </motion.h2>

            {/* SUB HEADING */}
            <motion.h4
              variants={fadeUp}
              custom={2}
              className="text-[#4F8CC9] text-[22px] font-semibold mt-3"
            >
              Trusted Electrical Solutions
            </motion.h4>

            {/* LINE */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="w-20 h-[3px] bg-[#D6A23C] mt-5 mb-7"
            />

            {/* PARAGRAPHS */}
            <div className="space-y-4">

              <motion.p
                variants={fadeUp}
                custom={4}
                className="text-[#555] text-[17px] leading-[31px]"
              >
                Gurukrupa Electricals & Light House offers
                complete electrical solutions for residential,
                commercial, and industrial projects with a
                strong focus on quality, reliability, and
                customer satisfaction.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={5}
                className="text-[#555] text-[17px] leading-[31px]"
              >
                We provide a wide range of electrical
                materials including wires & cables,
                modular switches, LED lights, fancy
                lighting, industrial electrical products,
                MCBs, conduits, accessories, and more.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={6}
                className="text-[#555] text-[17px] leading-[31px]"
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
              <div className="absolute -top-10 -right-10 w-[180px] h-[180px] bg-[#4F8CC9]/10 blur-[90px] rounded-full" />

              <img
                src="https://www.switchedelectricians.co.uk/images/wires-bg.jpg"
                alt="Electrical Products"
                className="w-full max-w-[580px] object-contain rounded-[24px] group-hover:scale-[1.03] transition duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* FEATURE SECTION */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-16">

          {/* CARD 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="text-center px-6 lg:px-8 py-8 border-b md:border-b lg:border-b-0 lg:border-r border-[#E5E5E5] transition"
          >

            <div className="flex justify-center mb-5">
              <Cable
                size={65}
                className="text-[#4F8CC9] stroke-[1.5]"
              />
            </div>

            <h3 className="text-[24px] font-semibold text-[#4F8CC9]">
              Quality Products
            </h3>

            <p className="text-[#777] text-[16px] leading-[30px] mt-5">
              Premium quality wires, switches,
              cables, and electrical materials from
              trusted brands.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="text-center px-6 lg:px-8 py-8 border-b md:border-b lg:border-b-0 lg:border-r border-[#E5E5E5] transition"
          >

            <div className="flex justify-center mb-5">
              <Lightbulb
                size={65}
                className="text-[#4F8CC9] stroke-[1.5]"
              />
            </div>

            <h3 className="text-[24px] font-semibold text-[#4F8CC9]">
              Modern Lighting
            </h3>

            <p className="text-[#777] text-[16px] leading-[30px] mt-5">
              Wide collection of LED lights,
              fancy lighting, decorative lights,
              and modern lighting solutions.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="text-center px-6 lg:px-8 py-8 border-b md:border-b-0 lg:border-r border-[#E5E5E5] transition"
          >

            <div className="flex justify-center mb-5">
              <Building2
                size={65}
                className="text-[#4F8CC9] stroke-[1.5]"
              />
            </div>

            <h3 className="text-[24px] font-semibold text-[#4F8CC9]">
              Residential & Industrial
            </h3>

            <p className="text-[#777] text-[16px] leading-[30px] mt-5">
              Complete electrical solutions for
              homes, offices, shops, commercial
              projects, and industries.
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="text-center px-6 lg:px-8 py-8 transition"
          >

            <div className="flex justify-center mb-5">
              <ThumbsUp
                size={65}
                className="text-[#4F8CC9] stroke-[1.5]"
              />
            </div>

            <h3 className="text-[24px] font-semibold text-[#4F8CC9]">
              Customer Support
            </h3>

            <p className="text-[#777] text-[16px] leading-[30px] mt-5">
              Friendly service, trusted guidance,
              and reliable support for every
              electrical requirement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}