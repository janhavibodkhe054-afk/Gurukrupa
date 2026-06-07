import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function HeroSlider() {
  const slides = [
    {
      image:
        "/hero1.jpg",
      subtitle: "TRUSTED ELECTRICAL PARTNER",
      title: "Premium Electrical\nProducts & Solutions",
      desc: "Wires, cables, switches, lighting solutions and industrial electrical materials under one roof.",
    },
    {
      image:
        "/hero2.jpg",
      subtitle: "QUALITY YOU CAN TRUST",
      title: "Complete Lighting\nSolutions",
      desc: "Decorative lights, LED fixtures and premium lighting products.",
    },
    {
      image:
        "/hero3.jpg",
      subtitle: "POWERING PROJECTS",
      title: "Industrial Electrical\nSupplies",
      desc: "Reliable electrical products for commercial and industrial projects.",
    },
    {
      image:
        "/hero4.avif",
      subtitle: "EXPERT SUPPORT",
      title: "Electrical Materials\nAt Best Prices",
      desc: "Premium brands, expert guidance and dependable service.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[540px] md:h-[650px] overflow-hidden bg-black">
      {/* Background Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].image}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{
              scale: 1.2,
              x: [0, -20, 20, 0],
              y: [0, -10, 10, 0],
            }}
            transition={{
              duration: 8,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#081B45]/90 via-[#081B45]/75 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 lg:px-8 h-full flex items-center -mt-16 md:-mt-0">
        <div className="max-w-3xl w-full text-center md:text-left">
          <motion.span
            key={current + "sub"}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 uppercase tracking-[3px] text-xs md:text-sm font-semibold"
          >
            {slides[current].subtitle}
          </motion.span>

          <motion.h1
            key={current + "title"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="
              text-white
              text-[34px]
              sm:text-[42px]
              md:text-6xl
              lg:text-6xl
              font-black
              leading-[1.05]
              mt-4
              whitespace-pre-line
            "
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            key={current + "desc"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              text-white/80
              text-sm
              md:text-lg
              mt-5
              leading-7
              max-w-xl
              mx-auto
              md:mx-0
            "
          >
            {slides[current].desc}
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button
              onClick={() => {
                document
                  .getElementById("about-section")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="
                group
                relative
                overflow-hidden
                bg-gradient-to-r
                from-orange-500
                to-orange-600
                text-white
                px-7
                md:px-8
                py-3.5
                rounded-xl
                font-semibold
                flex
                items-center
                gap-2
                shadow-2xl
                hover:scale-105
                transition-all
                duration-500
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-[#16265E]
                  scale-x-0
                  origin-left
                  group-hover:scale-x-100
                  transition-transform
                  duration-500
                "
              />

              <span className="relative z-10 flex items-center gap-2">
                Explore More

                <ArrowRight
                  size={18}
                  className="
                    transition-all
                    duration-500
                    group-hover:translate-x-2
                    group-hover:rotate-12
                  "
                />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Desktop Arrows */}
      <button
        onClick={() =>
          setCurrent(
            current === 0 ? slides.length - 1 : current - 1
          )
        }
        className="
          hidden md:flex
          absolute
          left-6
          top-1/2
          -translate-y-1/2
          z-30
          w-14
          h-14
          rounded-full
          bg-white/10
          backdrop-blur-md
          text-white
          items-center
          justify-center
          hover:bg-orange-500
          transition
        "
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() =>
          setCurrent((current + 1) % slides.length)
        }
        className="
          hidden md:flex
          absolute
          right-6
          top-1/2
          -translate-y-1/2
          z-30
          w-14
          h-14
          rounded-full
          bg-white/10
          backdrop-blur-md
          text-white
          items-center
          justify-center
          hover:bg-orange-500
          transition
        "
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-500 ${
              current === index
                ? "w-8 md:w-10 h-2.5 bg-orange-500"
                : "w-2.5 h-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}