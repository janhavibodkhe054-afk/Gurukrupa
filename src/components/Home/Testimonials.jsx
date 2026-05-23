import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";

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

  const loopTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame;
    let position = 0;

    const speed = window.innerWidth < 768 ? 0.4 : 0.7;

    const animate = () => {
      position += speed;
      slider.scrollLeft = position;

      if (position >= slider.scrollWidth / 2) {
        position = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative w-full bg-[#F8FAFC] py-14 sm:py-20 overflow-hidden">

      {/* background blur */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] sm:w-[320px] h-[250px] sm:h-[320px] bg-orange-200/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] sm:w-[320px] h-[250px] sm:h-[320px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14">

          <div>
            <span className="text-[#4F8CC9] text-[11px] sm:text-[13px] uppercase tracking-[3px] font-semibold">
              Testimonials
            </span>

            <h2 className="text-[26px] sm:text-[36px] md:text-[46px] font-semibold text-[#111] mt-2 leading-tight">
              What Customers Say
            </h2>
          </div>

          <p className="text-gray-500 text-[14px] sm:text-[16px] leading-[26px] max-w-[520px]">
            Trusted by homeowners, electricians, contractors, and industries for quality electrical materials
            and modern lighting solutions.
          </p>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="flex gap-4 sm:gap-5 md:gap-6 w-max pr-4">

            {loopTestimonials.map((item, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  w-[85vw] sm:w-[320px] md:w-[360px] lg:w-[380px]
                  bg-white border border-[#EDF2F7]
                  rounded-2xl md:rounded-3xl
                  p-5 sm:p-6 md:p-7
                  shadow-sm hover:shadow-lg
                  transition-all duration-300
                "
              >

                {/* stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      fill="#FDBA74"
                      className="text-orange-300"
                    />
                  ))}
                </div>

                {/* text */}
                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-[26px] sm:leading-[28px] whitespace-pre-line">
                  “{item.text}”
                </p>

                <div className="h-[1px] bg-[#EEF2F7] my-5" />

                {/* user */}
                <div className="flex items-center justify-between">

                  <div>
                    <h4 className="text-[15px] sm:text-[17px] font-semibold text-[#111]">
                      {item.name}
                    </h4>
                    <p className="text-[#4F8CC9] text-[11px] uppercase tracking-wide mt-1">
                      Verified Customer
                    </p>
                  </div>

                  <div className="w-2.5 h-2.5 rounded-full bg-orange-300" />
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}