import React from "react";
import {
  Award,
  Package,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Award size={34} />,
      value: "10+",
      title: "Years Experience",
      desc: "Trusted electrical solutions with years of industry expertise.",
    },
    {
      icon: <Package size={34} />,
      value: "5000+",
      title: "Products Delivered",
      desc: "Supplying quality electrical products across various projects.",
    },
    {
      icon: <Users size={34} />,
      value: "2000+",
      title: "Happy Customers",
      desc: "Building long-term customer relationships through quality service.",
    },
    {
      icon: <ShieldCheck size={34} />,
      value: "100+",
      title: "Trusted Brands",
      desc: "Authorized supplier of premium electrical brands.",
    },
  ];

  return (
    <section
      className="
      relative
      py-10 lg:py-18
      bg-fixed
      bg-center
      bg-cover
      overflow-hidden
    "
      style={{
        backgroundImage:
          "url('/stats.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f1f5c]/50" />

      

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[4px] text-blue-800 font-semibold text-sm">
            Our Achievements
          </span>

          <h2 className="mt-4 text-[28px] md:text-[44px] leading-[1.1] font-bold text-white">
            Powering Success Through
            
            Quality & Trust
          </h2>
        </div>

        {/* Timeline */}
        <div className="hidden lg:block absolute top-[270px] left-1/2 -translate-x-1/2 w-[70%] h-[3px] bg-white/15" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group perspective-[1200px]"
            >
              <div
                className="
                relative
                h-[250px]
                transition-all
                duration-700
                preserve-3d
                group-hover:rotate-y-180
              "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* FRONT */}
                <div
                  className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-white/90
                  
                  border
                  border-white/10
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-6
                "
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* Circle */}
                  <div
                    className="
                    absolute
                    -top-7
                    left-1/2
                    -translate-x-1/2
                    w-16
                    h-16
                    rounded-full
                    bg-[#F37021]
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-xl
                  "
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-4xl font-bold text-black mt-6">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-base md:text-lg font-semibold text-black">
                    {item.title}
                  </p>

                  <div className="w-12 h-[3px] bg-[#F37021] mt-4" />
                </div>

                {/* BACK */}
                <div
                  className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-[#F37021]
                  flex
                  items-center
                  justify-center
                  text-center
                  p-8
                "
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div>
                    <h4 className="text-white text-2xl font-bold mb-4">
                      {item.title}
                    </h4>

                    <p className="text-white/90 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .group-hover\\:rotate-y-180:hover{
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}