import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    "https://tiimg.tistatic.com/fp/1/009/532/industrial-led-lights-417.jpg",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092918484-8313b85d5c36?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section className="relative w-full bg-[#030712] overflow-hidden py-[70px] md:py-[50px]">

      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-[-200px] left-[-120px] w-[450px] h-[450px] bg-[#4F8CC9]/20 blur-[150px]" />

      <div className="absolute bottom-[-200px] right-[-120px] w-[450px] h-[450px] bg-[#F28C28]/20 blur-[150px]" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto px-[16px] sm:px-[25px] lg:px-[40px]">

        {/* TOP SECTION */}
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
          className="grid lg:grid-cols-2 gap-[35px] items-end mb-[55px]"
        >

          {/* LEFT */}
          <div>

            {/* TAG */}
            <div className="flex items-center gap-[12px] mb-[20px]">

              <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#F28C28] to-[#4F8CC9]" />

              <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[11px] sm:text-[12px] font-semibold">
                Premium Gallery
              </span>

            </div>

            {/* TITLE */}
            <h1 className="text-white text-[42px] sm:text-[65px] md:text-[90px] lg:text-[110px] font-bold leading-[0.9] tracking-[-4px]">

              Electrical
              <span className="text-[#F28C28]">.</span>

              <br />

              Innovation
              <span className="text-[#4F8CC9]">.</span>

            </h1>

          </div>

          {/* RIGHT */}
          <div className="lg:pb-[18px]">

            <p className="text-white/60 text-[15px] sm:text-[17px] leading-[34px] max-w-[520px]">
              Discover premium electrical installations, smart lighting
              systems, industrial infrastructure, and modern electrical
              solutions crafted with precision and innovation.
            </p>

          </div>

        </motion.div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] auto-rows-[170px]">

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              onClick={() => setSelectedImage(image)}
              className={`
                group relative overflow-hidden rounded-[28px]
                cursor-pointer border border-white/10
                
                ${
                  index === 0
                    ? "sm:col-span-2 row-span-3"
                    : index === 2
                    ? "row-span-2"
                    : index === 3
                    ? "row-span-3"
                    : index === 5
                    ? "sm:col-span-2 row-span-2"
                    : index === 8
                    ? "row-span-3"
                    : "row-span-2"
                }
              `}
            >

              {/* IMAGE */}
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-[1400ms]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

              {/* TOP NUMBER */}
              <div className="absolute top-[18px] left-[18px] z-10">

                <div className="w-[52px] h-[52px] rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">

                  <span className="text-white text-[12px] font-semibold tracking-[2px]">
                    0{index + 1}
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="absolute left-[22px] bottom-[22px] z-10">

                <div className="translate-y-[30px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                  <p className="text-[#F28C28] text-[11px] uppercase tracking-[3px] font-semibold">
                    Electrical Project
                  </p>

                  <h3 className="text-white text-[22px] font-bold mt-[8px] leading-[1.2]">
                    Smart Energy
                    <br />
                    Solution
                  </h3>

                </div>

              </div>

              {/* BUTTON */}
              <div className="absolute right-[20px] bottom-[20px] z-10">

                <button className="w-[56px] h-[56px] rounded-full bg-white text-[#07111F] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition duration-500 hover:bg-[#F28C28] hover:text-white">

                  <ArrowUpRight size={20} />

                </button>

              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-[#4F8CC9]/40 transition duration-500" />

            </motion.div>
          ))}
        </div>

        {/* FULLSCREEN IMAGE VIEWER */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-lg flex items-center justify-center p-[20px]"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-[25px] right-[25px] w-[55px] h-[55px] rounded-full bg-white/10 hover:bg-[#F28C28] transition duration-300 flex items-center justify-center text-white"
              >
                <X size={24} />
              </button>

              {/* IMAGE */}
              <motion.img
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                src={selectedImage}
                alt=""
                className="max-w-full max-h-[92vh] rounded-[24px] object-contain shadow-[0_20px_100px_rgba(0,0,0,0.6)]"
              />

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}