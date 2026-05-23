import React from "react";
import {
  ShieldCheck,
  Zap,
 Award,
} from "lucide-react";

export default function BrandsSection() {

  const brands = [
    "/f1.jpg",
    "/i1.jpg",
    "/l2.jpg",
    "/f2.jpg",
    "/e1.jpg",
    "/s1.jpg",
    "/e3.jpg",
    "/s2.jpg",
  ];

  return (
    <section className="relative w-full bg-[#F7F9FC] py-[100px] overflow-hidden">

      {/* ORANGE BLUSH */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-orange-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-orange-300/10 blur-[120px] rounded-full" />

      {/* BLUE BLUSH */}
      <div className="absolute top-[20%] right-[10%] w-[280px] h-[280px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

      {/* BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <h1 className="text-[80px] md:text-[160px] lg:text-[220px] font-black text-[#111111]/[0.03] uppercase tracking-[10px]">
          Brands
        </h1>
      </div>

      <div className="relative max-w-[1450px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-[70px] items-center mb-[80px]">

          {/* LEFT */}
          <div>

            <span className="uppercase tracking-[5px] text-[#4F8CC9] text-sm font-semibold">
              Trusted Brands
            </span>

            <h2 className="text-[42px] md:text-[68px] font-bold text-[#111111] leading-[1.05] mt-[18px]">
              Trusted Brands
              <br />
              We Deal In
            </h2>
          </div>

          {/* RIGHT */}
          <div>

            <p className="text-gray-600 text-[18px] leading-[34px]">
              We provide premium electrical and lighting
              products from industry-leading brands known
              for quality, safety, innovation, and reliable
              performance for residential and industrial
              applications.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-[16px] mt-[30px]">

              <div className="flex items-center gap-[10px] bg-white border border-[#E8EEF5] px-[18px] py-[12px] rounded-full shadow-sm">

                <ShieldCheck
                  size={18}
                  className="text-[#4F8CC9]"
                />

                <span className="text-[15px] font-medium text-[#111111]">
                  Genuine Products
                </span>
              </div>

              <div className="flex items-center gap-[10px] bg-white border border-[#E8EEF5] px-[18px] py-[12px] rounded-full shadow-sm">

                <Award
                  size={18}
                  className="text-[#4F8CC9]"
                />

                <span className="text-[15px] font-medium text-[#111111]">
                  Trusted Brands
                </span>
              </div>

              <div className="flex items-center gap-[10px] bg-white border border-[#E8EEF5] px-[18px] py-[12px] rounded-full shadow-sm">

                <Zap
                  size={18}
                  className="text-[#4F8CC9]"
                />

                <span className="text-[15px] font-medium text-[#111111]">
                  Premium Quality
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BRANDS AREA */}
        <div className="relative">

          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 h-full w-[150px] z-10 bg-gradient-to-r from-[#F7F9FC] to-transparent pointer-events-none" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 h-full w-[150px] z-10 bg-gradient-to-l from-[#F7F9FC] to-transparent pointer-events-none" />

          {/* MARQUEE */}
          <div className="overflow-hidden">

            <div className="flex items-center gap-[28px] animate-marquee w-max">

              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="group min-w-[260px] h-[150px] rounded-[32px] bg-white border border-[#EDF2F7] hover:border-[#4F8CC9]/30 hover:shadow-[0_20px_60px_rgba(79,140,201,0.12)] transition-all duration-500 flex items-center justify-center px-[40px] relative overflow-hidden"
                >

                  {/* GLOW */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,140,201,0.08),transparent_65%)] opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* LOGO */}
                  <img
                    src={brand}
                    alt="brand"
                    className="relative z-10 max-h-[60px] object-contain group-hover:grayscale-0 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 26s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}