import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cable,
  Lightbulb,
  ShieldCheck,
  Zap,
  LampDesk,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCategories() {
  const sliderRef = useRef(null);
  const currentIndexRef = useRef(0);

  const products = [
    {
      title: "Electrical Wires & Cables",
      desc: "Premium electrical wires and cables designed for maximum safety, efficient power transmission.",
      image: "/product1.jpg",
      icon: <Cable size={32} />,
      path: "/electrical-wires",
    },
    {
      title: "Switches & Accessories",
      desc: "Modern modular switches and electrical accessories crafted for homes, commercial spaces.",
      image: "/product2.png",
      icon: <Zap size={32} />,
      path: "/switches-modular-accessories",
    },
    {
      title: "LED Lighting",
      desc: "Energy-efficient LED lighting solutions delivering superior brightness..",
      image: "/product3.avif",
      icon: <Lightbulb size={32} />,
      path: "/led-lights",
    },
    {
      title: "Fancy Lighting",
      desc: "Designer decorative lighting collections that enhance luxury interiors and modern spaces.",
      image: "/product4.jpg",
      icon: <LampDesk size={32} />,
      path: "/fancy-lighting",
    },
    {
      title: "Industrial Materials",
      desc: "Heavy-duty industrial electrical products engineered for demanding commercial applications.",
      image: "/product5.avif",
      icon: <ShieldCheck size={32} />,
      path: "/industrial-electrical-materials",
    },
  ];

  const loopProducts = [...products, ...products];

  const getCardWidth = () => {
    if (window.innerWidth < 640) return window.innerWidth - 40;
    if (window.innerWidth < 1024) return 380;

    return (window.innerWidth - 140) / 3;
  };

  const nextSlide = () => {
    const slider = sliderRef.current;
    const cardWidth = getCardWidth() + 24;

    currentIndexRef.current++;

    if (slider) {
      slider.style.transition = "transform .8s ease";
      slider.style.transform = `translateX(-${
        currentIndexRef.current * cardWidth
      }px)`;
    }

    if (currentIndexRef.current >= products.length) {
      setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0px)";
        currentIndexRef.current = 0;
      }, 800);
    }
  };

  const prevSlide = () => {
    if (currentIndexRef.current <= 0) return;

    const slider = sliderRef.current;
    const cardWidth = getCardWidth() + 24;

    currentIndexRef.current--;

    slider.style.transition = "transform .8s ease";
    slider.style.transform = `translateX(-${
      currentIndexRef.current * cardWidth
    }px)`;
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 pb-0 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-left md:text-center mb-5 md:mb-10">
          <span className="inline-block text-[#2146B6] uppercase tracking-[4px] font-semibold">
            OUR PRODUCTS
          </span>

          <h2 className="mt-3 text-[28px] md:text-[44px] leading-[1.1] font-bold text-[#16265E]">
            Premium Electrical Solutions
          </h2>

          <p className="mt-3 text-gray-600 max-w-7xl text-base md:text-lg">
            High-quality electrical products, lighting solutions, wires, cables
            and accessories for every project.
          </p>
        </div>

        <div className="relative">
          {/* Prev */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-[-35px] top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white text-black shadow-xl items-center justify-center hover:bg-[#2146B6] hover:text-white transition-all duration-300"
          >
            <ChevronLeft />
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-[-35px] top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white text-black shadow-xl items-center justify-center hover:bg-[#2146B6] hover:text-white transition-all duration-300"
          >
            <ChevronRight />
          </button>

          <div className="overflow-hidden">
            <div ref={sliderRef} className="flex gap-5">
              {loopProducts.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[calc(100vw-40px)] sm:min-w-[380px] lg:min-w-[31.8%]"
                >
                  <div className="relative h-[650px] group">
                    {/* Image */}
                    <div className="h-[380px] overflow-hidden rounded-t-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content Card */}
                    <div
                      className="
  absolute left-1/2 -translate-x-1/2
  top-[290px]
  w-[88%]
  h-[320px]
  bg-white
  rounded-md
  shadow-[0_15px_50px_rgba(0,0,0,0.12)]
  px-8 pt-16 pb-8
  text-center
  flex flex-col
  transition-all duration-500
  group-hover:-translate-y-3
"
                    >
                      {/* Floating Icon */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                        <motion.div
                          whileHover={{
                            rotateY: 180,
                            scale: 1.12,
                          }}
                          transition={{
                            duration: 0.7,
                            ease: "easeInOut",
                          }}
                          className="
      w-24
      h-24
      rounded-full
      bg-gradient-to-br
      from-[#2146B6]
      to-[#4F8CC9]
      text-white
      flex
      items-center
      justify-center
      shadow-[0_15px_40px_rgba(33,70,182,0.35)]
      cursor-pointer
    "
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div className="transition-all duration-500 group-hover:text-orange-400">
                            {item.icon}
                          </div>
                        </motion.div>
                      </div>

                      <h3 className="text-[20px] font-bold text-black leading-tight min-h-[30px]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-gray-600 leading-7 flex-1 text-base md:text-lg">
                        {item.desc}
                      </p>

                      <div className="mt-auto flex justify-center">
                        <button
                          onClick={() => (window.location.href = item.path)}
                          className="
      group
      relative
      overflow-hidden
      inline-flex
      items-center
      gap-2
      px-5
      py-2.5
      rounded-full
      text-sm
      font-semibold
      text-[#f37021]
      border
      border-[#f37021]/30
      bg-white
      transition-all
      duration-500
      hover:-translate-y-1
      hover:shadow-[0_12px_30px_rgba(243,112,33,0.25)]
    "
                        >
                          {/* Background Animation */}
                          <span
                            className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#f37021]
        to-[#ff9f45]
        scale-x-0
        origin-left
        transition-transform
        duration-500
        group-hover:scale-x-100
      "
                          />

                          <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                            Learn More
                          </span>

                          <span
                            className="
        relative
        z-10
        w-7
        h-7
        rounded-full
        bg-[#f37021]/10
        flex
        items-center
        justify-center
        transition-all
        duration-500
        group-hover:bg-white
        group-hover:rotate-45
      "
                          >
                            <ArrowRight
                              size={14}
                              className="
          text-[#f37021]
          group-hover:translate-x-0.5
          transition-all
          duration-500
        "
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
