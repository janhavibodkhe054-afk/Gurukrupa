import React from "react";
import { motion } from "framer-motion";

export default function FancyLightingPage() {
  const galleryImages = [
    "https://www.homedecorcompany.in/cdn/shop/products/41fJCwk2OSL.jpg?v=1750447364",
    "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/654c6fa295f9ef4a0de97726/img-20231026-wa0016.jpg",
    "https://haroldelectricals.com/cdn/shop/products/61MV1WRjRbL.jpg?v=1647130453",
    "https://m.media-amazon.com/images/I/41wuKrjqckL._AC_UF1000,1000_QL80_.jpg",
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
          <source src="/vd4.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />

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
                  Premium Decorative Lighting
                </span>

              </div>

              {/* TITLE */}
              <h1 className="text-white text-[48px] sm:text-[72px] lg:text-[105px] font-black leading-[0.9] tracking-[-4px]">

                Fancy
                <br />

                <span className="text-[#F28C28]">
                  Lighting
                </span>

              </h1>

              {/* SHORT TEXT */}
              <p className="mt-[28px] text-white/70 text-[15px] sm:text-[17px] leading-[34px] max-w-[560px]">
                Elegant lighting collections crafted to transform
                interiors with style, luxury, and ambience.
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
              Elegant Decorative
              <br />
              Lighting Solutions
            </h2>

            {/* SINGLE PARAGRAPH */}
            <p className="mt-[40px] text-[#666] text-[16px] sm:text-[18px] leading-[40px] font-light">
              Our fancy lighting collection is designed to add
              elegance, warmth, and luxury to every interior space.
              From modern chandeliers and pendant lights to decorative
              wall fixtures and designer ceiling lights, each product
              combines premium craftsmanship with stylish aesthetics.
              Perfect for homes, hotels, showrooms, and commercial
              interiors, these lighting solutions create visually
              stunning spaces with a sophisticated ambience and
              premium finishing touch.
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
                Lighting
                <br />
                Showcase
              </h2>

            </div>

            <p className="text-[#666] text-[16px] leading-[32px] max-w-[420px]">
              Explore luxurious decorative lighting collections
              crafted for premium modern interiors.
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
                    Luxury Light
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