import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function PremiumNavbar() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentPath = window.location.pathname;

  const products = [
    { name: "Electrical Wires & Cables", link: "/electrical" },
    { name: "Switches & Modular Accessories", link: "/switches" },
    { name: "LED Lights", link: "/led-lights" },
    { name: "Fancy Lighting", link: "/fancy-lighting" },
    { name: "Industrial Electrical Materials", link: "/industrial" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => currentPath === path;

  const SocialIcons = () => (
    <div className="hidden lg:flex items-center gap-3">
      <a
        href="https://www.facebook.com/share/1SbUNzQERm/"
        target="_blank"
        className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition"
      >
        <FaFacebookF size={14} />
      </a>

      <a
        href="https://www.instagram.com/gurukrupa_electricals?igsh=MWE5M3E4bWk0MzU1cw=="
        target="_blank"
        className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white flex items-center justify-center hover:scale-110 transition"
      >
        <FaInstagram size={14} />
      </a>

      
    </div>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.12)]"
          : "bg-white shadow-[0_6px_25px_rgba(0,0,0,0.08)]"
      }`}
    >
      {/* TOP BAR */}
      <div className="bg-[#071426] border-b border-[#16345C] overflow-hidden">
        <div className="flex animate-[marquee_22s_linear_infinite] whitespace-nowrap py-3">
          <div className="flex items-center gap-16 min-w-max text-white text-sm font-medium tracking-wide">
            <span>• Premium Electrical Materials</span>
            <span>• High Quality LED Lighting</span>
            <span>• Decorative Fancy Lights</span>
            <span>• Industrial Grade Solutions</span>
            <span>• Trusted Electrical Brand</span>

            <span>• Premium Electrical Materials</span>
            <span>• High Quality LED Lighting</span>
            <span>• Decorative Fancy Lights</span>
            <span>• Industrial Grade Solutions</span>
            <span>• Trusted Electrical Brand</span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="max-w-[1500px] mx-auto px-5 lg:px-10">
        <div className="h-[88px] flex items-center justify-between">
          {/* LOGO */}
          <a href="/">
            <img
              src="/logo.png"
              className="w-[90px] hover:scale-105 transition"
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            <a
              href="/"
              className={`font-semibold pb-1 border-b-2 ${
                isActive("/")
                  ? "border-orange-500 text-black"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Home
            </a>

            <a
              href="/about"
              className={`font-semibold pb-1 border-b-2 ${
                isActive("/about")
                  ? "border-orange-500 text-black"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              About Us
            </a>

            {/* PRODUCTS */}
            <div className="relative group">
              <button className="flex items-center font-semibold text-gray-700 hover:text-black">
                Products <ChevronDown size={16} />
              </button>

              <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-[360px] bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 p-3 z-50">
                {products.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex justify-between px-4 py-3 hover:bg-orange-50 rounded-xl"
                  >
                    {item.name}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/brands"
              className={`font-semibold pb-1 border-b-2 ${
                isActive("/brands")
                  ? "border-orange-500 text-black"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Brands
            </a>

            <a
              href="/gallery"
              className={`font-semibold pb-1 border-b-2 ${
                isActive("/gallery")
                  ? "border-orange-500 text-black"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Gallery
            </a>

            <a
              href="/contact"
              className={`font-semibold pb-1 border-b-2 ${
                isActive("/contact")
                  ? "border-orange-500 text-black"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              Contact
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">
            <SocialIcons />

            <a
              href="https://wa.me/919923686402"
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                className="w-5 h-5 bg-white rounded-full"
              />
              Chat With Us
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU FIXED */}
      <div
        className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-500 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          <a href="/">Home</a>
          <a href="/about">About Us</a>

          {/* MOBILE PRODUCTS FIX */}
          <button
            onClick={() => setProductOpen(!productOpen)}
            className="flex justify-between items-center font-semibold"
          >
            Products
            <ChevronDown
              className={`${productOpen ? "rotate-180" : ""} transition`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              productOpen ? "max-h-60 mt-2" : "max-h-0"
            }`}
          >
            <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-2">
              {products.map((p, i) => (
                <a
                  key={i}
                  href={p.link}
                  className="text-sm text-gray-700 py-2 border-b last:border-none"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          <a href="/brands">Brands</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>

          <a
            href="https://wa.me/919923686402"
            className="bg-green-500 text-white py-3 rounded-xl text-center font-semibold mt-3"
          >
            Chat With Us
          </a>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-[marquee_22s_linear_infinite] {
          animation: marquee 22s linear infinite;
        }
      `}</style>
    </header>
  );
}
