import React from "react";
import { motion } from "framer-motion";

export default function SwitchesModularAccessoriesPage() {
  const galleryImages = [
    "https://www.seelecindia.com/cdn/shop/collections/modular-electrical-switch-1526386674-3868530.jpg?v=1710621834",
    "https://cdn.3gee.in/assets/categories/cat_1778060260_750053d7.png",
    "https://www.fybros.com/uploads/product/1702552601_98df0fbf53f90a95c51c.webp",
    "https://www.fybros.com/uploads/images/1702618049_f475dd548080764109bd.webp",
  ];

  return (
    <section className="w-full bg-white overflow-hidden">

      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <div className="relative h-[95vh] min-h-[700px] overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vd2.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-[1600px] mx-auto w-full px-[20px] sm:px-[35px] lg:px-[60px]">

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className="max-w-[720px]"
            >

              {/* TAG */}
              <div className="flex items-center gap-[14px] mb-[28px]">

                <div className="w-[65px] h-[2px] bg-[#F28C28]" />

                <span className="uppercase tracking-[4px] text-white/80 text-[11px] font-semibold">
                  Premium Modular Solutions
                </span>

              </div>

              {/* TITLE */}
              <h1 className="text-white text-[48px] sm:text-[72px] lg:text-[105px] font-black leading-[0.9] tracking-[-4px]">

                Switches &
                <br />

                <span className="text-[#F28C28]">
                  Modular
                </span>

                Accessories

              </h1>

              {/* SHORT TEXT */}
              <p className="mt-[28px] text-white/70 text-[15px] sm:text-[17px] leading-[34px] max-w-[560px]">
                Stylish and durable modular switch solutions
                crafted for modern residential and commercial spaces.
              </p>

            </motion.div>

          </div>

        </div>

      </div>

      {/* ====================================================== */}
      {/* INFO SECTION */}
      {/* ====================================================== */}
      <div className="relative py-[70px] overflow-hidden bg-[#FCFCFC]">

        {/* SOFT BACKGROUND GLOW */}
        <div className="absolute top-[-120px] left-[-150px] w-[420px] h-[420px] bg-[#4F8CC9]/5 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-150px] w-[420px] h-[420px] bg-[#F28C28]/5 blur-[120px]" />

        <div className="relative z-10 max-w-[1050px] mx-auto px-[20px] sm:px-[35px]">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="text-center"
          >

            {/* SMALL LABEL */}
            <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[11px] font-semibold">
              About Product
            </span>

            {/* SIMPLE HEADING */}
            <h2 className="text-[#111111] text-[34px] sm:text-[48px] font-bold leading-[1.1] mt-[18px]">
              Modern Modular
              <br />
              Electrical Solutions
            </h2>

            {/* SINGLE PARAGRAPH */}
            <p className="mt-[40px] text-[#666] text-[16px] sm:text-[18px] leading-[40px] font-light">
              Our premium range of switches and modular accessories
              combines elegant aesthetics with advanced safety and
              long-lasting performance. Designed for modern homes,
              offices, and commercial spaces, these products offer
              smooth operation, stylish finishes, shock-resistant
              materials, and reliable electrical functionality.
              Crafted with precision and quality standards, our
              modular solutions enhance interiors while ensuring
              convenience, durability, and dependable everyday use.
            </p>

          </motion.div>

        </div>

      </div>

      {/* ====================================================== */}
      {/* MINI GALLERY */}
      {/* ====================================================== */}
      <div className="relative pb-[120px]">

        <div className="max-w-[1600px] mx-auto px-[20px] sm:px-[35px] lg:px-[50px]">

          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[30px] mb-[55px]">

            <div>

              <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[11px] font-semibold">
                Gallery
              </span>

              <h2 className="text-[#111111] text-[42px] sm:text-[65px] font-bold leading-[1] mt-[18px]">
                Product
                <br />
                Showcase
              </h2>

            </div>

            <p className="text-[#666] text-[16px] leading-[32px] max-w-[420px]">
              Explore premium modular switches and elegant
              electrical accessories designed for modern interiors.
            </p>

          </div>

          {/* GALLERY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">

            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[34px]"
              >

                {/* IMAGE */}
                <img
                  src={image}
                  alt=""
                  className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-[1200ms]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-[24px] left-[24px]">

                  <p className="text-[#F28C28] text-[11px] uppercase tracking-[3px] font-semibold">
                    Premium Series
                  </p>

                  <h3 className="text-white text-[24px] font-bold mt-[8px] leading-[1.2]">
                    Smart Modular
                    <br />
                    Collection
                  </h3>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}