import React from "react";
import { motion } from "framer-motion";

export default function ElectricalWiresPage() {
  const galleryImages = [
    "https://www.electricalindia.in/wp-content/uploads/2025/07/electric-wire.jpg",
    "https://www.electricalindia.in/wp-content/uploads/2025/06/power-cables.jpg",
    "https://plus.unsplash.com/premium_photo-1682145728214-dbd62535af3f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZXN8ZW58MHx8MHx8fDA%3D",
    "https://5.imimg.com/data5/ANDROID/Default/2023/3/WO/DK/NB/136185832/product-jpeg-500x500.jpg",
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
          <source src="/vd1.mp4" type="video/mp4" />
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
                  Premium Electrical Wires
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-white text-[48px] sm:text-[72px] lg:text-[105px] font-black leading-[0.9] tracking-[-4px]">
                Electrical
                <br />
                Wires &<span className="text-[#F28C28]"> Cables</span>
              </h1>

              {/* SHORT TEXT */}
              <p className="mt-[28px] text-white/70 text-[15px] sm:text-[17px] leading-[34px] max-w-[560px]">
                Reliable wire solutions designed for safety, durability, and
                uninterrupted power transmission.
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
              Premium Electrical
              <br />
              Wire Solutions
            </h2>

            {/* SINGLE PARAGRAPH */}
            <p className="mt-[40px] text-[#666] text-[16px] sm:text-[18px] leading-[40px] font-light">
              Our electrical wires and cables are designed to deliver safe,
              efficient, and uninterrupted power transmission for residential,
              commercial, and industrial applications. Manufactured using
              premium-grade copper and advanced insulation technology, these
              solutions provide superior conductivity, heat resistance,
              durability, and long-lasting performance even in demanding
              environments. With a strong focus on quality, reliability, and
              safety standards, our cable systems are trusted for modern
              infrastructure projects, ensuring consistent electrical
              performance with minimal maintenance and maximum operational
              efficiency.
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
              Explore premium electrical wire solutions crafted for modern
              infrastructure and industrial systems.
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
                    Smart Wire
                    <br />
                    Technology
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
