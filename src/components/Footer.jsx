import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1018] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <img
          src="/footer.png"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#081019]/95" />

        {/* BLUSH */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-orange-400/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-[1450px] mx-auto px-[20px] md:px-[40px] lg:px-[60px] pt-[90px] pb-[28px]">

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1.2fr_.8fr_1fr_1fr] gap-[55px] pb-[55px] border-b border-white/10">

          {/* COMPANY INFO */}
          <div>

            {/* LOGO */}
            <img
              src="/logo.png"
              alt="logo"
              className="w-[220px] object-contain bg-white"
            />

            {/* DESCRIPTION */}
            <p className="text-white/65 text-[15px] leading-[32px] mt-[26px] max-w-[430px]">
              Gurukrupa Electricals & Light House is
              your trusted destination for premium
              electrical materials, modular accessories,
              LED lighting, decorative lights, and
              industrial electrical products for homes,
              offices, shops, and industries.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-[12px] mt-[30px]">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[46px] h-[46px] rounded-full bg-white/5 border border-white/10 hover:bg-orange-400 transition-all duration-500 flex items-center justify-center"
              >
                <FaFacebookF
                  size={15}
                  className="text-white"
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[46px] h-[46px] rounded-full bg-white/5 border border-white/10 hover:bg-orange-400 transition-all duration-500 flex items-center justify-center"
              >
                <FaInstagram
                  size={17}
                  className="text-white"
                />
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[46px] h-[46px] rounded-full bg-white/5 border border-white/10 hover:bg-green-500 transition-all duration-500 flex items-center justify-center"
              >
                <FaWhatsapp
                  size={17}
                  className="text-white"
                />
              </a>

              <a
                href="/contact"
                className="w-[46px] h-[46px] rounded-full bg-white/5 border border-white/10 hover:bg-[#4F8CC9] transition-all duration-500 flex items-center justify-center"
              >
                <MessageCircle
                  size={18}
                  className="text-white"
                />
              </a>
            </div>
          </div>

          {/* PAGES */}
          <div>

            <h3 className="text-white text-[23px] font-semibold mb-[28px]">
              Pages
            </h3>

            <div className="flex flex-col gap-[18px]">

              {[
                {
                  name: "Home",
                  link: "/",
                },

                {
                  name: "About Us",
                  link: "/about",
                },

                {
                  name: "Products",
                  link: "/products",
                },

                {
                  name: "Brands",
                  link: "/brands",
                },

                {
                  name: "Gallery",
                  link: "/gallery",
                },

                {
                  name: "Contact Us",
                  link: "/contact",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group flex items-center gap-[10px] text-white/65 hover:text-white transition duration-300"
                >

                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition duration-300"
                  />

                  <span className="text-[15px]">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}
          <div>

            <h3 className="text-white text-[23px] font-semibold mb-[28px]">
              Our Products
            </h3>

            <div className="flex flex-col gap-[18px]">

              {[
                {
                  name: "Electrical Wires & Cables",
                  link: "/products/wires-cables",
                },

                {
                  name: "Switches & Modular Accessories",
                  link: "/products/switches",
                },

                {
                  name: "LED Lights",
                  link: "/products/led-lights",
                },

                {
                  name: "Fancy Lighting",
                  link: "/products/fancy-lighting",
                },

                {
                  name: "Industrial Electrical Materials",
                  link: "/products/industrial",
                },

                {
                  name: "MCBs & Distribution Boards",
                  link: "/products/mcb-distribution",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group flex items-start gap-[10px] text-white/65 hover:text-white transition duration-300"
                >

                  <ArrowRight
                    size={15}
                    className="mt-[5px] group-hover:translate-x-1 transition duration-300"
                  />

                  <span className="text-[15px] leading-[28px]">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>

            <h3 className="text-white text-[23px] font-semibold mb-[28px]">
              Contact Info
            </h3>

            <div className="flex flex-col gap-[22px]">

              {/* PHONE */}
              <div className="flex items-start gap-[14px]">

                <div className="w-[46px] h-[46px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">

                  <Phone
                    size={17}
                    className="text-orange-300"
                  />
                </div>

                <div>

                  <p className="text-white/40 text-[13px] mb-[4px]">
                    Phone Number
                  </p>

                  <a
                    href="tel:+919923686402"
                    className="text-white/75 text-[15px] hover:text-white transition"
                  >
                    +91 99236 86402
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-[14px]">

                <div className="w-[46px] h-[46px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">

                  <Mail
                    size={17}
                    className="text-orange-300"
                  />
                </div>

                <div>

                  <p className="text-white/40 text-[13px] mb-[4px]">
                    Email Address
                  </p>

                  <a
                    href="mailto:info@gurukrupaelectricals.com"
                    className="text-white/75 text-[15px] hover:text-white transition break-all"
                  >
                    gurukrupaelc9@gmail.com
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-[14px]">

                <div className="w-[46px] h-[46px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">

                  <MapPin
                    size={17}
                    className="text-orange-300"
                  />
                </div>

                <div>

                  <p className="text-white/40 text-[13px] mb-[4px]">
                    Shop Address
                  </p>

                  <p className="text-white/75 text-[15px] leading-[30px]">
                    Gurukrupa Electricals & Light House,
                    <br />
                    Chhatrapati Shivaji Maharaj Chowk, Walhekarwadi, Chinchwad, Pune – 411033,
                    <br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-[24px] flex flex-col md:flex-row items-center justify-between gap-[12px]">

  <p className="text-white/40 text-[14px] text-center md:text-left">
    © 2026 Gurukrupa Electricals & Light House.
    All Rights Reserved.
  </p>

  <p className="text-white/40 text-[14px] text-center md:text-right">
    Premium Electrical & Lighting Solutions.
  </p>

  {/* DEVELOPED BY */}
  <p className="text-white/40 text-[14px] text-center md:text-right">
    Designed & Developed by{" "}

    <a
      href="https://hashgridtech.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#4F8CC9] hover:text-orange-400 transition duration-300 font-medium"
    >
      Hashgrid Technologies Pvt. Ltd.
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}