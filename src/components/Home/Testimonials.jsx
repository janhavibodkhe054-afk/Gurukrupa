import React, { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      text: `Excellent experience buying electrical materials.
The staff is very knowledgeable and helped us choose the right wiring, switches, and lighting products for our home project with proper guidance.`,
      name: "Rahul Patil",
    },
    {
      text: `Great variety of modular switches, LED lights, and accessories.
Products are reliable and suitable for both residential and commercial use. Pricing is reasonable and service is very fast with proper customer support.`,
      name: "Amit Shah",
    },
    {
      text: `Very reliable supplier for industrial electrical materials.
We regularly purchase cables, wiring, and components for our projects. Always genuine branded products delivered on time with good technical support.`,
      name: "Sanket More",
    },
    {
      text: `Impressive collection of modern decorative lighting products.
Showroom is well organized and easy to explore different options. Staff explains features clearly and helps in selection based on requirement.`,
      name: "Vikas Jadhav",
    },
    {
      text: `Helpful and professional staff with good product knowledge.
They suggested the best electrical solutions within our budget. Quality is never compromised and service is consistent for every purchase.`,
      name: "Rohan Kulkarni",
    },
    {
      text: `Trusted shop for wiring materials, switches, cables, and accessories.
Wide availability of branded electrical products. After-sales support is also very reliable and quick for any assistance.`,
      name: "Pratik Deshmukh",
    },
  ];

  // DUPLICATE FOR INFINITE LOOP
  const loopTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let position = 0;

    // SPEED
    const speed = window.innerWidth < 768 ? 0.5 : 0.8;

    const autoSlide = () => {
      position += speed;

      slider.scrollLeft = position;

      // RESET SMOOTHLY
      if (position >= slider.scrollWidth / 2) {
        position = 0;
        slider.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoSlide);
    };

    autoSlide();

    // PAUSE ON HOVER
    const stopAnimation = () => {
      cancelAnimationFrame(animationFrame);
    };

    const startAnimation = () => {
      autoSlide();
    };

    slider.addEventListener("mouseenter", stopAnimation);
    slider.addEventListener("mouseleave", startAnimation);

    return () => {
      cancelAnimationFrame(animationFrame);

      slider.removeEventListener("mouseenter", stopAnimation);
      slider.removeEventListener("mouseleave", startAnimation);
    };
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#F8FBFF] to-white py-16 sm:py-20 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#16265E]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">

          <div>

            <span className="inline-block bg-[#4F8CC9]/10 text-[#4F8CC9] text-[11px] sm:text-[13px] uppercase tracking-[3px] font-semibold px-5 py-2 rounded-full">
              Testimonials
            </span>

            <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-black text-[#16265E] mt-4 leading-tight">
              What Customers Say
            </h2>

            <div className="w-24 h-[4px] rounded-full bg-gradient-to-r from-[#4F8CC9] to-[#16265E] mt-5" />
          </div>

          <p className="text-gray-900 text-[15px] sm:text-[16px] leading-[30px] max-w-[540px]">
            Trusted by homeowners, electricians, contractors,
            and industries for premium electrical materials and
            modern lighting solutions.
          </p>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            overflow-x-scroll
            scrollbar-hide
            scroll-smooth
            whitespace-nowrap
            select-none
          "
        >

          <div className="flex gap-5 md:gap-7 w-max pr-4">

            {loopTestimonials.map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  flex-shrink-0
                  w-[85vw] sm:w-[340px] md:w-[370px] lg:w-[390px]
                  bg-white
                  border border-[#E8EEF9]
                  rounded-[30px]
                  p-6 sm:p-7
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_20px_60px_rgba(22,38,94,0.12)]
                  transition-all duration-500
                  hover:-translate-y-2
                  overflow-hidden
                "
              >

                {/* TOP BORDER */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4F8CC9] to-[#16265E]" />

                {/* QUOTE ICON */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote size={52} className="text-[#16265E]" />
                </div>

                {/* STARS */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#FDBA74"
                      className="text-orange-300"
                    />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-gray-900 text-[15px] leading-[30px] whitespace-pre-line relative z-10">
                  “{item.text}”
                </p>

                {/* DIVIDER */}
                <div className="h-[1px] bg-[#EEF2F7] my-6" />

                {/* USER */}
                <div className="flex items-center justify-between">

                  <div>
                    <h4 className="text-[18px] font-bold text-[#16265E]">
                      {item.name}
                    </h4>

                    <p className="text-[#4F8CC9] text-[11px] uppercase tracking-[2px] mt-1 font-medium">
                      Verified Customer
                    </p>
                  </div>

                  {/* VERIFIED DOT */}
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#4F8CC9] to-[#16265E]" />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}