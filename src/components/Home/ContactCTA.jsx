import React from "react";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative w-full py-[55px] bg-[#F7F8FA] overflow-hidden">
      {/* LIGHT BLUSH */}
      <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-orange-300/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-[1350px] mx-auto px-[20px] md:px-[40px]">
        {/* MAIN BOX */}
        <div className="relative overflow-hidden rounded-[34px] bg-[#0F1722] px-[28px] md:px-[50px] py-[35px]">
          {/* BACKGROUND GLOW */}
          <div className="absolute top-[-120px] right-[-100px] w-[300px] h-[300px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

          <div className="absolute bottom-[-120px] left-[-100px] w-[300px] h-[300px] bg-orange-400/10 blur-[120px] rounded-full" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-[30px]">
            {/* LEFT CONTENT */}
            <div className="max-w-[760px]">
              <span className="inline-flex items-center gap-[10px] text-[#4F8CC9] text-[13px] uppercase tracking-[3px] font-semibold">
                <div className="w-[35px] h-[1px] bg-[#4F8CC9]" />
                Gurukrupa Electricals & Light House
              </span>

              <h2 className="text-white text-[30px] md:text-[46px] leading-[1.1] font-semibold mt-[16px]">
                Looking for Quality
                <br />
                Electrical Materials?
              </h2>

              <p className="text-white/65 text-[15px] md:text-[17px] leading-[30px] mt-[16px] max-w-[650px]">
                Visit our showroom or contact us for premium electrical
                materials, lighting solutions, modular accessories, wires,
                switches, and industrial electrical products.
              </p>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex flex-wrap items-center gap-[16px]">
              {/* CALL BUTTON */}
              <a
                href="tel:+919923686402"
                className="group flex items-center gap-[14px] bg-white hover:bg-orange-400 transition-all duration-500 px-[18px] py-[16px] rounded-full shadow-xl"
              >
                <div className="w-[46px] h-[46px] rounded-full bg-orange-100 flex items-center justify-center">
                  <Phone size={18} className="text-orange-500" />
                </div>

                <div>
                  <p className="text-[#111111] text-[12px] uppercase tracking-[2px] font-semibold">
                    Quick Support
                  </p>

                  <h4 className="text-[#111111] text-[15px] font-semibold">
                    Call Now
                  </h4>
                </div>

                <ArrowRight
                  size={18}
                  className="text-[#111111] group-hover:translate-x-1 transition duration-300"
                />
              </a>

              {/* MAP BUTTON */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gurukrupa+Electricals+and+Light+House,+Chhatrapati+Shivaji+Maharaj+Chowk,+Walhekarwadi,+Chinchwad,+Pune+411033"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-[14px] bg-[#4F8CC9] hover:bg-[#3B78B7] transition-all duration-500 px-[18px] py-[16px] rounded-full shadow-xl"
              >
                <div className="w-[46px] h-[46px] rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>

                <div>
                  <p className="text-white/70 text-[12px] uppercase tracking-[2px] font-semibold">
                    Visit Store
                  </p>

                  <h4 className="text-white text-[15px] font-semibold">
                    Get Directions
                  </h4>
                </div>

                <ArrowRight
                  size={18}
                  className="text-white group-hover:translate-x-1 transition duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
