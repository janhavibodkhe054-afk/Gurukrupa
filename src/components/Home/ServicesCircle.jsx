import React from "react";
import {
  Cable,
  Lightbulb,
  ShieldCheck,
  Zap,
  Wrench,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseServices() {
  const services = [
    {
      icon: <Cable size={24} />,
      label: "Wires",
      className:
        "top-[75%] left-[8%] lg:top-[68%] lg:left-[10%]",
    },
    {
      icon: <ShieldCheck size={24} />,
      label: "Safety",
      className:
        "top-[35%] left-[2%] lg:top-[30%] lg:left-[12%]",
    },
    {
      icon: <Zap size={24} />,
      label: "Switches",
      className:
        "top-[8%] left-[28%] lg:top-[8%] lg:left-[30%]",
    },
    {
      icon: <Lightbulb size={24} />,
      label: "LED",
      className:
        "top-[8%] right-[28%] lg:top-[8%] lg:right-[30%]",
    },
    {
      icon: <Building2 size={24} />,
      label: "Projects",
      className:
        "top-[35%] right-[2%] lg:top-[30%] lg:right-[12%]",
    },
    {
      icon: <Wrench size={24} />,
      label: "Support",
      className:
        "top-[75%] right-[8%] lg:top-[68%] lg:right-[10%]",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-[#fafafa] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-0 top-0 w-72 h-72 bg-[radial-gradient(#2146B6_1px,transparent_1px)] bg-[size:12px_12px]" />
        <div className="absolute right-0 top-0 w-72 h-72 bg-[radial-gradient(#2146B6_1px,transparent_1px)] bg-[size:12px_12px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-3 text-[#2146B6] font-semibold uppercase tracking-[3px] text-sm">
            <span className="w-10 h-[2px] bg-[#2146B6]" />
            Our Services
            <span className="w-10 h-[2px] bg-[#2146B6]" />
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-[#16265E] leading-tight">
            Complete Electrical &
            <br />
            Lighting Solutions
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Premium electrical products, lighting systems and
            expert solutions for residential, commercial and
            industrial projects.
          </p>
        </div>

        {/* Main Layout */}
        <div className="relative flex justify-center items-center min-h-[650px] lg:min-h-[700px]">
          {/* Arc */}
          <div
            className="
              hidden lg:block
              absolute
              w-[900px]
              h-[450px]
              border-[12px]
              border-gray-200
              border-b-0
              rounded-t-full
            "
          />

          {/* Service Circles */}
          {services.map((service, index) => (
            <div
              key={index}
              className={`absolute ${service.className}`}
            >
              <div
                className="
                  group
                  w-20 h-20
                  rounded-full
                  bg-white
                  shadow-xl
                  flex
                  items-center
                  justify-center
                  text-[#2146B6]
                  transition-all
                  duration-500
                  hover:bg-[#2146B6]
                  hover:text-white
                  hover:scale-110
                  cursor-pointer
                "
              >
                {service.icon}
              </div>

              <p className="text-center mt-3 text-sm font-semibold text-[#16265E]">
                {service.label}
              </p>
            </div>
          ))}

          {/* Center Card */}
          <div
            className="
              relative
              z-20
              bg-white
              rounded-3xl
              shadow-[0_25px_70px_rgba(0,0,0,0.08)]
              p-8 lg:p-12
              max-w-xl
              text-center
            "
          >
            <div
              className="
                w-24 h-24
                rounded-3xl
                bg-gradient-to-br
                from-[#2146B6]
                to-[#16265E]
                text-white
                flex
                items-center
                justify-center
                mx-auto
                shadow-xl
              "
            >
              <Zap size={42} />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-[#16265E]">
              Electrical Solutions
            </h3>

            <div className="w-16 h-1 bg-[#F37021] mx-auto mt-4 rounded-full" />

            <p className="mt-6 text-gray-600 leading-8">
              From electrical wires and switches to LED lighting,
              industrial materials and complete project supplies,
              we provide everything under one roof.
            </p>

            <button
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                px-7
                py-3
                rounded-full
                bg-[#2146B6]
                text-white
                font-medium
                hover:bg-[#16265E]
                transition
              "
            >
              Explore Products
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}