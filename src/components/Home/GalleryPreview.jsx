import React from "react";
import {
  ArrowRight,
  Camera,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GalleryPreview() {
const navigate = useNavigate();

  const images = [
    "https://5.imimg.com/data5/SELLER/Default/2024/10/456217883/DZ/LE/PM/231587105/wall-light-for-home-decor-fancy-light-for-bedroom-living-room-kitchen-office-and-etc.jpg",

    "https://www.bria.com.ph/wp-content/uploads/2022/04/Benefits-of-Using-LED-Lights-and-Bulbs.png",

    "https://media.istockphoto.com/id/1130957259/photo/composition-with-tools-and-industrial-material-with-industrial-ship-background.jpg?s=612x612&w=0&k=20&c=XDZNptsfq3TASTKWGsmnDajREC820JuDQf9IyRanCsg=",

    "https://www.shutterstock.com/image-photo/bundle-thick-colorful-electrical-cables-600nw-2734974027.jpg",

    "https://diamondindia.co.in/data/uploads/category/1712316563_0.94110900_1712316563_PLATE_1-min.jpg",
  ];

  return (
    <section className="relative w-full bg-white py-[100px] overflow-hidden">

      {/* BLUSH */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-orange-300/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

      {/* BG TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

        <h1 className="text-[80px] md:text-[170px] lg:text-[240px] font-black text-[#111111]/[0.03] uppercase tracking-[10px]">
          Gallery
        </h1>
      </div>

      <div className="relative max-w-[1450px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-[70px] items-end mb-[75px]">

          {/* LEFT */}
          <div>

            <span className="uppercase tracking-[5px] text-[#4F8CC9] text-sm font-semibold">
              Gallery Preview
            </span>

            <h2 className="text-[42px] md:text-[70px] font-bold text-[#111111] leading-[1.02] mt-[18px]">
              Our Store &
              <br />
              Product Gallery
            </h2>
          </div>

          {/* RIGHT */}
          <div>

            <p className="text-gray-600 text-[18px] leading-[34px]">
              Explore our showroom, premium product
              displays, modern lighting collections,
              decorative lights, modular accessories,
              and electrical material range available at
              Gurukrupa Electricals & Light House.
            </p>
          </div>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px]">

          {/* BIG IMAGE */}
          <div className="col-span-2 row-span-2 relative rounded-[36px] overflow-hidden h-[640px] group shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* PREMIUM BOTTOM GRADIENT */}
            <div className="absolute inset-0">

              {/* MAIN BOTTOM GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* EXTRA SOFT LAYER */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* TOP BADGE */}
            <div className="absolute top-[28px] left-[28px]">

              <div className="flex items-center gap-[10px] bg-white/15 backdrop-blur-md border border-white/20 px-[18px] py-[12px] rounded-full">

                <Camera
                  size={18}
                  className="text-white"
                />

                <span className="text-white text-[14px] font-medium">
                  Gurukrupa Gallery
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-[35px] left-[35px] right-[35px]">

              <h3 className="text-white text-[34px] md:text-[42px] font-semibold leading-tight">
                Explore Our
                <br />
                Premium Collection
              </h3>

              <p className="text-white/80 text-[16px] leading-[30px] mt-[16px] max-w-[520px]">
                Modern lighting solutions, premium
                electrical products, modular accessories,
                showroom displays, and industrial
                electrical materials.
              </p>

              {/* BUTTON */}
              <button
              onClick={() => navigate("/gallery")}
              className="group/btn mt-[28px] bg-white hover:bg-[#4F8CC9] transition-all duration-500 px-[28px] py-[16px] rounded-full text-[#111111] hover:text-white text-[16px] font-medium flex items-center gap-[12px] shadow-xl">

                Explore Gallery

                <ArrowRight
                  size={19}
                  className="group-hover/btn:translate-x-1 transition duration-300"
                />
              </button>
            </div>
          </div>

          {/* SMALL IMAGES */}
          {images.slice(1).map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[30px] group h-[308px] shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            >

              <img
                src={img}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* ICON */}
              <div className="absolute bottom-[18px] left-[18px] w-[50px] h-[50px] rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">

                <ArrowRight
                  size={20}
                  className="text-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}