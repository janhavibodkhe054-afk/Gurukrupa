import React from "react";
import { motion } from "framer-motion";

export default function IndustrialElectricalMaterialsPage() {
  const galleryImages = [
    {
      image:
        "https://cdn3.tim-europe.com/websites/ien/typo3temp/assets/_processed_/6/5/csm_48121_218e360c06.jpg",
      subtitle: "Industrial Protection",
      title: "Circuit\nBreakers",
    },

    {
      image:
        "https://indupartscorp.com/wp-content/uploads/2024/05/material-electrico-industrial2.jpg",
      subtitle: "Power Control",
      title: "Control\nPanels",
    },

    {
      image:
        "https://jigoindia.com/wp-content/uploads/2020/08/Electrical-Equipment-Industry.jpg",
      subtitle: "Heavy Duty Systems",
      title: "Industrial\nSwitchgear",
    },

    {
      image:
        "https://www.electricalmaterials.ca/wp-content/uploads/2024/01/Industries-served.jpg",
      subtitle: "Reliable Connections",
      title: "Cable\nAccessories",
    },
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
        <div className="absolute inset-0 bg-black/35" />

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

                <span className="uppercase tracking-[4px] text-white/90 text-[11px] font-semibold">
                  Premium Industrial Solutions
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-white text-[48px] sm:text-[72px] lg:text-[100px] font-black leading-[0.9] tracking-[-4px]">
                Industrial
                <br />
                <span className="text-[#F28C28]">Electrical</span>
                Materials
              </h1>

              {/* SHORT TEXT */}
              <p className="mt-[28px] text-white/90 text-[15px] sm:text-[17px] leading-[34px] max-w-[580px]">
                High-performance industrial electrical materials engineered for
                durability, safety, and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* INFO SECTION */}
      {/* ====================================================== */}
      <div className="relative py-[90px] overflow-hidden bg-[#FCFCFC]">
        {/* BACKGROUND GLOW */}
        <div className="absolute top-[-120px] left-[-150px] w-[420px] h-[420px] bg-[#4F8CC9]/10 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-150px] w-[420px] h-[420px] bg-[#F28C28]/10 blur-[120px]" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* LABEL */}
            <span className="inline-block uppercase tracking-[5px] text-[#4F8CC9] text-[11px] font-semibold border border-[#4F8CC9]/20 px-4 py-2 rounded-full bg-white shadow-sm">
              About Product
            </span>

            {/* HEADING */}
            <h2 className="text-[#16265E] text-[38px] sm:text-[54px] lg:text-[72px] font-bold leading-[1.05] tracking-[-2px] mt-7">
              Reliable Industrial Electrical Systems
            </h2>

            {/* LINE */}
            <div className="w-[180px] h-[5px] rounded-full bg-gradient-to-r from-[#4F8CC9] via-[#2E5B9A] to-[#16265E] mt-8" />

            {/* CONTENT */}
            <div className="mt-12 space-y-2 w-full">
              <p className="text-black text-[17px] sm:text-[19px] leading-[2.1] font-light text-justify w-full">
                Our industrial electrical materials are developed to meet the
                demanding requirements of modern industries, commercial
                infrastructure, manufacturing units, and heavy-duty electrical
                applications. Built using premium-grade materials and advanced
                engineering standards, these systems deliver exceptional safety,
                efficiency, reliability, and long-term operational performance.
              </p>

              <p className="text-black text-[17px] sm:text-[19px] leading-[2.1] font-light text-justify w-full">
                The product range includes control panels, switchgear
                components, industrial switches, connectors, cable accessories,
                power distribution systems, electrical protection devices, and
                advanced industrial electrical solutions designed for continuous
                and stable power management. Every product undergoes strict
                quality testing to ensure durability, heat resistance, and
                dependable performance even in challenging industrial
                environments.
              </p>

              <p className="text-black text-[17px] sm:text-[19px] leading-[2.1] font-light text-justify w-full">
                Our industrial electrical solutions are trusted for factories,
                warehouses, commercial facilities, machinery operations,
                automation systems, and large-scale infrastructure projects
                where uninterrupted electrical performance and operational
                safety are essential. These products are designed to support
                efficient energy distribution while minimizing maintenance
                requirements and improving system reliability.
              </p>

              <p className="text-black text-[17px] sm:text-[19px] leading-[2.1] font-light text-justify w-full">
                With a strong focus on innovation, quality standards, and
                technical excellence, our industrial electrical systems provide
                safe, efficient, and future-ready solutions that help industries
                achieve reliable performance, smooth operations, and
                long-lasting electrical infrastructure support.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* ====================================================== */}
      {/* MINI GALLERY */}
      {/* ====================================================== */}
      <div className="relative pb-[30px]">
        <div className="max-w-[1600px] mx-auto px-[20px] sm:px-[35px] lg:px-[50px]">
          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[30px] mb-[55px]">
            <div>
              

              <h2 className="text-[#1B255A] text-[42px] sm:text-[65px] font-bold leading-[1] mt-[18px]">
                Industrial
                <br />
                Showcase
              </h2>
            </div>

            <p className="text-[#666] text-[16px] leading-[32px] max-w-[420px]">
              Explore premium industrial electrical materials designed for
              modern infrastructure and industrial systems.
            </p>
          </div>

          {/* GALLERY */}
          {/* GALLERY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            {galleryImages.map((item, index) => (
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
                  src={item.image}
                  alt=""
                  className="w-full h-[450px] object-cover group-hover:scale-110 transition duration-[1200ms]"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* GLOW */}
                <div className="absolute inset-0 bg-[#16265E]/0 group-hover:bg-[#16265E]/10 transition duration-700" />

                {/* CONTENT */}
                <div className="absolute bottom-[26px] left-[26px] z-10">
                  <p className="text-[#F28C28] text-[11px] uppercase tracking-[3px] font-semibold">
                    {item.subtitle}
                  </p>

                  <h3 className="text-white text-[28px] font-bold mt-[10px] leading-[1.1] whitespace-pre-line">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA SECTION */}
      {/* ====================================================== */}
      <div className="py-[30px] sm:py-[30px] bg-[#F8FBFF]">
        <div className="max-w-[1550px] mx-auto px-[20px] sm:px-[35px] lg:px-[50px]">
          <div className="relative overflow-hidden rounded-[38px] bg-gradient-to-r from-[#16265E] via-[#1E3A8A] to-[#4F8CC9] px-[28px] sm:px-[45px] lg:px-[65px] py-[40px] sm:py-[52px] shadow-[0_20px_70px_rgba(22,38,94,0.18)]">
            {/* GLOW */}
            <div className="absolute top-[-80px] right-[-80px] w-[240px] h-[240px] bg-white/10 blur-[90px] rounded-full" />

            <div className="absolute bottom-[-80px] left-[-80px] w-[240px] h-[240px] bg-[#93C5FD]/20 blur-[90px] rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-[35px]">
              {/* LEFT */}
              <div className="max-w-[720px]">
                {/* LABEL */}
                <span className="uppercase tracking-[4px] text-white/70 text-[11px] font-semibold">
                  Contact Gurukrupa Electricals
                </span>

                {/* HEADING */}
                <h2 className="text-white text-[32px] sm:text-[48px] lg:text-[58px] font-black leading-[1.05] tracking-[-1px] mt-[16px]">
                  Need Reliable
                  <br />
                  <span className="text-[#BFDBFE]">Electrical Solutions?</span>
                </h2>

                {/* TEXT */}
                <p className="mt-[22px] text-white/75 text-[15px] sm:text-[17px] leading-[34px] max-w-[640px]">
                  Contact us for premium electrical materials, modern lighting
                  products, industrial solutions, and trusted technical support
                  for every project.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-[18px] w-full xl:w-auto">
                {/* CALL BUTTON */}
                <a
                  href="tel:+919923686402"
                  className="
              group
              w-full sm:w-auto
              min-w-[230px]
              flex items-center justify-center gap-[14px]
              bg-white
              hover:bg-[#EAF2FF]
              text-[#16265E]
              px-[28px]
              py-[18px]
              rounded-full
              font-semibold
              transition-all duration-500
              hover:-translate-y-1
            "
                >
                  <div className="w-[46px] h-[46px] rounded-full bg-[#16265E] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h2.28a2 2 0 011.948 1.553l.516 2.323a2 2 0 01-.502 1.86l-1.27 1.27a16 16 0 006.586 6.586l1.27-1.27a2 2 0 011.86-.502l2.323.516A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>

                  <div className="text-left">
                    <p className="text-[11px] uppercase tracking-[2px] text-[#4F8CC9]">
                      Call Now
                    </p>

                    <h4 className="text-[17px] font-bold">+91 99236 86402</h4>
                  </div>
                </a>

                {/* WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/919923686402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
              group
              w-full sm:w-auto
              min-w-[230px]
              flex items-center justify-center gap-[14px]
              bg-white/10
              hover:bg-white/20
              border border-white/15
              backdrop-blur-md
              text-white
              px-[28px]
              py-[18px]
              rounded-full
              font-semibold
              transition-all duration-500
              hover:-translate-y-1
            "
                >
                  <div className="w-[46px] h-[46px] rounded-full bg-white/15 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.65a11.9 11.9 0 005.76 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.44-8.45z" />
                    </svg>
                  </div>

                  <div className="text-left">
                    <p className="text-[11px] uppercase tracking-[2px] text-white/70">
                      WhatsApp
                    </p>

                    <h4 className="text-[17px] font-bold">Chat With Us</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
