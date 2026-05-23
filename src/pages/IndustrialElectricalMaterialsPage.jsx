import React from "react";
import { motion } from "framer-motion";

export default function IndustrialElectricalMaterialsPage() {
  const galleryImages = [
    "https://cdn3.tim-europe.com/websites/ien/typo3temp/assets/_processed_/6/5/csm_48121_218e360c06.jpg",
    "https://indupartscorp.com/wp-content/uploads/2024/05/material-electrico-industrial2.jpg",
    "https://jigoindia.com/wp-content/uploads/2020/08/Electrical-Equipment-Industry.jpg",
    "https://www.electricalmaterials.ca/wp-content/uploads/2024/01/Industries-served.jpg",
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
          <source src="/vd5.mp4" type="video/mp4" />
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
              className="max-w-[760px]"
            >

              {/* TAG */}
              <div className="flex items-center gap-[14px] mb-[28px]">

                <div className="w-[65px] h-[2px] bg-[#F28C28]" />

                <span className="uppercase tracking-[4px] text-white/80 text-[11px] font-semibold">
                  Premium Industrial Solutions
                </span>

              </div>

              {/* TITLE */}
              <h1 className="text-white text-[48px] sm:text-[72px] lg:text-[100px] font-black leading-[0.9] tracking-[-4px]">

                Industrial
                <br />

                <span className="text-[#F28C28]">
                  Electrical
                </span>

                Materials

              </h1>

              {/* SHORT TEXT */}
              <p className="mt-[28px] text-white/70 text-[15px] sm:text-[17px] leading-[34px] max-w-[580px]">
                High-performance industrial electrical materials
                engineered for durability, safety, and reliability.
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
              Reliable Industrial
              <br />
              Electrical Systems
            </h2>

            {/* SINGLE PARAGRAPH */}
            <p className="mt-[40px] text-[#666] text-[16px] sm:text-[18px] leading-[40px] font-light">
              Our industrial electrical materials are designed to
              meet the demanding requirements of modern industrial
              infrastructure and heavy-duty applications. From control
              panels, switchgear components, connectors, and cable
              accessories to advanced electrical systems, every product
              is built with premium-grade materials for maximum safety,
              operational efficiency, and long-term durability. Engineered
              for consistent performance in challenging environments,
              these solutions ensure reliable power management and smooth
              industrial operations across manufacturing units, commercial
              facilities, and large-scale projects.
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
                Industrial
                <br />
                Showcase
              </h2>

            </div>

            <p className="text-[#666] text-[16px] leading-[32px] max-w-[420px]">
              Explore premium industrial electrical materials
              designed for modern infrastructure and industrial systems.
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
                    Industrial
                    <br />
                    Solutions
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