import React from "react";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          "url('/ctabg.jpg')",
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-[1350px] mx-auto px-[16px] sm:px-[24px] md:px-[40px] py-[50px] md:py-[70px]">

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[25px] md:gap-[40px]">

          {/* LEFT CONTENT */}
          <div className="max-w-[700px]">

            <span className="text-white text-[12px] sm:text-[14px] md:text-[16px] uppercase tracking-[3px]">
              Gurukrupa Electricals & Light House
            </span>

            <h2 className="text-white text-[22px] sm:text-[28px] md:text-[40px] font-bold leading-tight mt-[10px]">
              Looking for Quality Electrical Materials?
            </h2>

            <p className="text-white/80 text-[13px] sm:text-[15px] md:text-[17px] mt-[10px] max-w-[600px] leading-[26px] md:leading-[30px]">
              Visit our showroom for wires, switches, lighting solutions and more.
            </p>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row w-full sm:w-auto gap-[12px]">

            {/* CALL BUTTON */}
            <a
              href="tel:+919923686402"
              className="group flex items-center justify-between sm:justify-start gap-[12px] bg-white w-full sm:w-auto px-[16px] py-[12px] rounded-full shadow-md hover:shadow-xl transition"
            >
              <div className="w-[36px] h-[36px] rounded-full bg-orange-100 flex items-center justify-center group-hover:scale-110 transition">
                <Phone size={16} className="text-orange-500" />
              </div>

              <div className="leading-tight">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-gray-500">
                  Quick Call
                </p>
                <p className="text-[13px] sm:text-[14px] font-semibold text-black">
                  Call Now
                </p>
              </div>

              <ArrowRight
                size={16}
                className="text-black group-hover:translate-x-1 transition hidden sm:block"
              />
            </a>

            {/* MAP BUTTON */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Gurukrupa+Electricals+and+Light+House,+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between sm:justify-start gap-[12px]
              bg-gradient-to-r from-orange-500 to-orange-600
              w-full sm:w-auto px-[16px] py-[12px] rounded-full
              shadow-md hover:shadow-xl
              hover:from-orange-600 hover:to-orange-700
              transition-all duration-300"
            >
              <div className="w-[36px] h-[36px] rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition">
                <MapPin size={16} className="text-white" />
              </div>

              <div className="leading-tight">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-white/80">
                  Visit Store
                </p>
                <p className="text-[13px] sm:text-[14px] font-semibold text-white">
                  Get Directions
                </p>
              </div>

              <ArrowRight
                size={16}
                className="text-white group-hover:translate-x-1 transition hidden sm:block"
              />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}