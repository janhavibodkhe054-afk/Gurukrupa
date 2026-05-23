import React, { useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductCategories() {
  const sliderRef = useRef(null);
  const currentIndexRef = useRef(0);

  const products = [
    {
      button: "Explore Wires",
      video: "/vd1.mp4",
      path: "/electrical-wires",
    },

    {
      button: "Explore Switches",
      video: "/vd2.mp4",
      path: "/switches-modular-accessories",
    },

    {
      button: "Explore LED Lights",
      video: "/vd3.mp4",
      path: "/led-lights",
    },

    {
      button: "Explore Fancy Lights",
      video: "/vd4.mp4",
      path: "/fancy-lighting",
    },

    {
      button: "Explore Industrial",
      video: "/vd5.mp4",
      path: "/industrial-electrical-materials",
    },
  ];

  const loopProducts = [...products, ...products];

  // RESPONSIVE CARD WIDTH
  const getCardWidth = () => {
    if (window.innerWidth < 640) return window.innerWidth - 50;
    if (window.innerWidth < 1024) return 340;
    return 390;
  };

  const nextSlide = () => {
    const slider = sliderRef.current;
    const cardWidth = getCardWidth() + 26;

    currentIndexRef.current++;

    if (slider) {
      slider.style.transition = "transform 0.9s ease";

      slider.style.transform = `translateX(-${
        currentIndexRef.current * cardWidth
      }px)`;
    }

    if (currentIndexRef.current >= products.length) {
      setTimeout(() => {
        if (slider) {
          slider.style.transition = "none";
          slider.style.transform = `translateX(0px)`;
        }

        currentIndexRef.current = 0;
      }, 900);
    }
  };

  const prevSlide = () => {
    const slider = sliderRef.current;
    const cardWidth = getCardWidth() + 26;

    if (currentIndexRef.current <= 0) return;

    currentIndexRef.current--;

    if (slider) {
      slider.style.transition = "transform 0.9s ease";

      slider.style.transform = `translateX(-${
        currentIndexRef.current * cardWidth
      }px)`;
    }
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#F3F3F3] py-[70px] md:py-[90px] overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-[1600px] mx-auto px-[16px] sm:px-[24px] md:px-[40px] lg:px-[60px]">

        {/* HEADING */}
        <div className="text-center mb-[50px] md:mb-[70px]">

          <h2 className="text-[30px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-light text-[#111111] leading-tight">
            Smart by Design,
            <br className="md:hidden" />
            Thoughtful by Nature
          </h2>

          <p className="text-gray-600 text-[15px] sm:text-[16px] md:text-[18px] mt-[18px] max-w-[900px] mx-auto leading-[30px] md:leading-[34px] px-2">
            Explore our premium range of electrical materials,
            modular accessories, LED lights, fancy lighting,
            and industrial electrical solutions.
          </p>
        </div>

        {/* SLIDER AREA */}
        <div className="relative max-w-[1280px] mx-auto">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-[-15px] lg:left-[-25px] top-1/2 -translate-y-1/2 z-20 w-[50px] h-[50px] lg:w-[58px] lg:h-[58px] rounded-full bg-white shadow-xl items-center justify-center hover:bg-black hover:text-white transition duration-300"
          >
            <ChevronLeft size={28} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-[-15px] lg:right-[-25px] top-1/2 -translate-y-1/2 z-20 w-[50px] h-[50px] lg:w-[58px] lg:h-[58px] rounded-full bg-white shadow-xl items-center justify-center hover:bg-black hover:text-white transition duration-300"
          >
            <ChevronRight size={28} />
          </button>

          {/* SLIDER */}
          <div className="overflow-hidden">

            <div
              ref={sliderRef}
              className="flex gap-[20px] md:gap-[26px]"
            >
              {loopProducts.map((item, index) => (
                <div
                  key={index}
                  className="
                    min-w-[calc(100vw-50px)]
                    sm:min-w-[320px]
                    md:min-w-[340px]
                    lg:min-w-[390px]
                    flex-shrink-0
                  "
                >

                  {/* CARD */}
                  <div className="rounded-[24px] md:rounded-[30px] overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                    {/* VIDEO */}
                    <div className="relative h-[420px] sm:h-[480px] md:h-[540px] lg:h-[560px] overflow-hidden">

                      <video
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover bg-black"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>

                    {/* BUTTON */}
                    <div className="p-[16px] md:p-[20px] flex justify-center bg-[#F3F3F3]">

                      <button
                        onClick={() =>
                          (window.location.href = item.path)
                        }
                        className="bg-[#343B48] hover:bg-black transition px-[22px] md:px-[28px] py-[12px] md:py-[14px] rounded-[14px] md:rounded-[18px] text-white text-[14px] md:text-[16px] font-medium flex items-center gap-[10px]"
                      >
                        {item.button}

                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex md:hidden justify-center gap-4 mt-8">

            <button
              onClick={prevSlide}
              className="w-[48px] h-[48px] rounded-full bg-white shadow-lg flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="w-[48px] h-[48px] rounded-full bg-white shadow-lg flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}