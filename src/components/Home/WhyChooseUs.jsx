import React from "react";
import {
  Boxes,
  ShieldCheck,
  BadgeCheck,
  Wallet,
  Headphones,
  Lightbulb,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Boxes size={24} />,
      title: "Wide Product Range",
      desc: "Complete electrical solutions for residential, commercial and industrial requirements.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Trusted Quality",
      desc: "Premium quality electrical materials sourced from trusted brands.",
    },
    {
      icon: <BadgeCheck size={24} />,
      title: "Genuine Products",
      desc: "100% original branded products ensuring long-term reliability.",
    },
    {
      icon: <Wallet size={24} />,
      title: "Competitive Prices",
      desc: "Affordable pricing with exceptional quality and value.",
    },
    {
      icon: <Headphones size={24} />,
      title: "Customer Support",
      desc: "Professional guidance and dedicated customer assistance.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Modern Lighting",
      desc: "Latest LED and decorative lighting solutions for every space.",
    },
  ];

  return (
    <section className="relative py-14 lg:py-20 bg-white overflow-hidden">
      {/* Background Text */}
      

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="uppercase tracking-[4px] text-[#f37021] font-semibold text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-[28px] md:text-[40px] lg:text-[48px] leading-tight font-bold text-[#16265E]">
            Delivering Quality,
            <br />
            Reliability & Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px_1fr] gap-10 lg:gap-12 items-center">
          {/* LEFT FEATURES */}
          <div className="space-y-8 lg:space-y-12">
            {features.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="
                flex items-start gap-4
                text-left
                lg:text-right
              "
              >
                {/* Icon */}
                <div
                  className="
                  w-14 h-14 lg:w-16 lg:h-16
                  rounded-full
                  border-2 border-[#f37021]/20
                  bg-[#f37021]/5
                  flex items-center justify-center
                  text-[#f37021]
                  flex-shrink-0
                  lg:order-2
                "
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 lg:order-1">
                  <h3 className="font-bold text-lg lg:text-xl text-[#16265E]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-base md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="relative order-first lg:order-none">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#f37021]/10 blur-[80px] rounded-full" />

            <img
              src="/homechoose.avif"
              alt="Electrical Expert"
              className="
                relative
                z-10
                w-full
                max-w-[260px]
                sm:max-w-[320px]
                md:max-w-[380px]
                lg:max-w-[450px]
                mx-auto
                object-contain
              "
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-8 lg:space-y-12">
            {features.slice(3, 6).map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 text-left"
              >
                <div
                  className="
                  w-14 h-14 lg:w-16 lg:h-16
                  rounded-full
                  border-2 border-[#f37021]/20
                  bg-[#f37021]/5
                  flex items-center justify-center
                  text-[#f37021]
                  flex-shrink-0
                "
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-lg lg:text-xl text-[#16265E]">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-base md:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}