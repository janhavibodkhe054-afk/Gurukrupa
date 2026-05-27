import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

export default function PremiumNavbar() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const products = [
    {
      name: "Electrical Wires & Cables",
      link: "/electrical",
    },
    {
      name: "Switches & Modular Accessories",
      link: "/switches",
    },
    {
      name: "LED Lights",
      link: "/led-lights",
    },
    {
      name: "Fancy Lighting",
      link: "/fancy-lighting",
    },
    {
      name: "Industrial Electrical Materials",
      link: "/industrial",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
          : "bg-white shadow-[0_6px_25px_rgba(0,0,0,0.10)]"
      }`}
    >
      {/* TOP BAR */}
      <div className="bg-[#071426] overflow-hidden border-b border-[#16345C]">
        <div className="relative flex items-center">
          {/* RUNNING TEXT */}
          <div className="marquee whitespace-nowrap py-3">
            <div className="marquee-content flex items-center gap-16">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#F28C28]" />

                  <p className="text-white/90 text-[14px] md:text-[15px] tracking-wide font-medium">
                    Premium Electrical Materials • LED Lighting • Fancy Lights •
                    Industrial Solutions
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919923686402"
            target="_blank"
            rel="noopener noreferrer"
            className="
        hidden lg:flex absolute right-0 top-0 h-full
        items-center gap-3
        bg-gradient-to-r from-[#0B1E36] to-[#12345B]
        px-8 border-l border-[#234B7C]
        hover:from-[#F28C28] hover:to-[#d97706]
        transition-all duration-500 group
      "
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </div>

            <span className="text-white font-semibold tracking-wide">
              Chat With Us
            </span>
          </a>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="max-w-[1500px] mx-auto px-5 lg:px-10">
        <div className="h-[85px] flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="flex items-center group">
            <div className="relative">
              {/* GLOW */}
              <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 group-hover:opacity-40 transition duration-500" />

              <img
                src="/logo.jpeg"
                alt="logo"
                className="relative w-[96px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {/* HOME */}
            <a
              href="/"
              className="relative text-[16px] font-semibold text-black group"
            >
              Home
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 scale-x-100 origin-left" />
            </a>

            {/* ABOUT */}
            <a
              href="/about"
              className="relative text-[16px] font-semibold text-gray-700 hover:text-black transition duration-300 group"
            >
              About Us
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300" />
            </a>

            {/* PRODUCTS */}
            <div className="relative group">
              <button className="flex items-center gap-1 relative text-[16px] font-semibold text-gray-700 hover:text-black transition duration-300">
                Products
                <ChevronDown
                  size={18}
                  className="group-hover:rotate-180 transition duration-300"
                />
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300" />
              </button>

              {/* DROPDOWN */}
              <div className="absolute top-[65px] left-1/2 -translate-x-1/2 w-[390px] bg-white border border-gray-100 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.15)] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 p-4">
                <div className="space-y-2">
                  {products.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-orange-50 transition-all duration-300 group/item"
                    >
                      <span className="text-[15px] font-medium text-gray-700 group-hover/item:text-orange-500 transition">
                        {item.name}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="opacity-0 group-hover/item:opacity-100 translate-y-2 group-hover/item:translate-y-0 transition-all duration-300 text-orange-500"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* BRANDS */}
            <a
              href="/brands"
              className="relative text-[16px] font-semibold text-gray-700 hover:text-black transition duration-300 group"
            >
              Brands
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300" />
            </a>

            {/* GALLERY */}
            <a
              href="/gallery"
              className="relative text-[16px] font-semibold text-gray-700 hover:text-black transition duration-300 group"
            >
              Gallery
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300" />
            </a>

            {/* CONTACT */}
            <a
              href="/contact"
              className="relative text-[16px] font-semibold text-gray-700 hover:text-black transition duration-300 group"
            >
              Contact
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300" />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-12 h-12 rounded-full bg-[#16275F] text-white flex items-center justify-center"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-500 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col">
          {/* HOME */}
          <a href="/" className="py-5 border-b text-[18px] font-semibold">
            Home
          </a>

          {/* ABOUT */}
          <a href="/about" className="py-5 border-b text-[18px] font-semibold">
            About Us
          </a>

          {/* PRODUCTS */}
          <div className="border-b">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="w-full py-5 flex items-center justify-between text-[18px] font-semibold"
            >
              Products
              <ChevronDown
                size={22}
                className={`transition duration-300 ${
                  productOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                productOpen ? "max-h-[500px] pb-4" : "max-h-0"
              }`}
            >
              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                {products.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="block px-6 py-4 text-[15px] border-b last:border-none"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* BRANDS */}
          <a href="/brands" className="py-5 border-b text-[18px] font-semibold">
            Brands
          </a>

          {/* GALLERY */}
          <a
            href="/gallery"
            className="py-5 border-b text-[18px] font-semibold"
          >
            Gallery
          </a>

          {/* CONTACT */}
          <a
            href="/contact"
            className="py-5 border-b text-[18px] font-semibold"
          >
            Contact
          </a>

          {/* MOBILE WHATSAPP */}
          <a
            href="https://wa.me/919923686402"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-2xl py-4 flex items-center justify-center gap-3 font-semibold transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt=""
              className="w-6 h-6 bg-white rounded-full"
            />
            Chat With Us
          </a>
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: inline-flex;
          min-width: 200%;
          animation: marquee 22s linear infinite;
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
    </header>
  );
}
