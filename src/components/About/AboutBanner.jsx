import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutBanner() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F7F8FA] overflow-hidden">
      {/* BANNER WRAPPER */}
      <div className="relative h-[260px] sm:h-[320px] md:h-[450px] lg:h-[520px] overflow-hidden bg-black">
        {/* BACKGROUND IMAGE */}
        <img
          src="https://media.istockphoto.com/id/1130957259/photo/composition-with-tools-and-industrial-material-with-industrial-ship-background.jpg?s=612x612&w=0&k=20&c=XDZNptsfq3TASTKWGsmnDajREC820JuDQf9IyRanCsg="
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

        {/* DECORATIVE ELEMENTS (hidden on mobile for performance + clean UI) */}

        <div className="hidden md:block absolute left-[180px] top-[-110px] w-[220px] h-[220px] border border-[#D6A23C] rounded-full opacity-60" />
        <div className="hidden lg:block absolute right-[140px] top-[-120px] w-[320px] h-[320px] border border-[#D6A23C]/50 rounded-full opacity-40" />

        {/* VERTICAL LINES (hidden on mobile) */}
        <div className="hidden md:block absolute top-0 left-[60%] w-[1px] h-full bg-[#4F8CC9]/40" />
        <div className="hidden lg:block absolute top-0 left-[75%] w-[1px] h-full bg-white/20" />

        {/* DOT */}
        <div className="hidden md:block absolute left-[40px] md:left-[80px] bottom-[40px] md:bottom-[80px] w-[14px] md:w-[20px] h-[14px] md:h-[20px] rounded-full bg-[#D6A23C]" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full px-[18px] sm:px-[25px] md:px-[60px] lg:px-[100px]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* TAG */}
              <div className="flex items-center gap-[10px] mb-[12px] md:mb-[20px]">
                <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] bg-[#D6A23C]" />

                <span className="text-white/80 text-[14px] sm:text-[16px] md:text-[22px] font-light">
                  About
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-white text-[28px] sm:text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] max-w-[850px]">
                Gurukrupa Electricals
                <br />& Light House
              </h1>

              {/* BUTTONS */}
              <div className="flex flex-row flex-nowrap gap-[10px] sm:gap-[18px] mt-[25px] md:mt-[38px]">
                <button
                  onClick={() => {
                    const section = document.getElementById("aboutus");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#2952FF] hover:bg-[#1D3FD6] transition-all duration-500
  px-[12px] sm:px-[30px]
  py-[10px] sm:py-[17px]
  text-white font-semibold
  tracking-[1px] sm:tracking-[2px]
  uppercase
  text-[10px] sm:text-[13px]
  whitespace-nowrap
  shadow-[5px_5px_0px_rgba(255,255,255,0.10)]"
                >
                  About Us
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="group bg-white hover:bg-[#F2F2F2] transition-all duration-500
  px-[12px] sm:px-[30px]
  py-[10px] sm:py-[17px]
  text-[#111]
  font-semibold
  tracking-[1px] sm:tracking-[2px]
  uppercase
  text-[10px] sm:text-[13px]
  whitespace-nowrap
  shadow-[5px_5px_0px_rgba(255,255,255,0.10)]
  flex items-center gap-[6px] sm:gap-[8px]"
                >
                  Contact Us
                  <ArrowRight
                    size={14}
                    className="sm:group-hover:translate-x-1 transition duration-300"
                  />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
