import React from "react";
import {
  Cable,
  Lightbulb,
  Building2,
  ThumbsUp,
} from "lucide-react";

import { motion } from "framer-motion";

export default function FeatureCards() {

  const cards = [
    {
      icon: Cable,
      title: "Quality Products",
      text: "Premium quality wires, switches, cables, and electrical materials from trusted brands.",
      image:
        "https://scontent.fnag6-3.fna.fbcdn.net/v/t39.30808-6/503201476_677277861883586_1610990751627928955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jrakwBIc1IQQ7kNvwEQ2LR_&_nc_oc=AdqIImqNY2SoWMuhTiw9B46T5Mbo--8lCf6MAlwLRikrPkLGSPhbR4834i-7LRVhx9s&_nc_zt=23&_nc_ht=scontent.fnag6-3.fna&_nc_gid=Mlw92GyOgMApNsPTi2v4KQ&_nc_ss=7b289&oh=00_Af7EdiQ3c5IbwCs20BsnQA_6eVKqOocMZqo9tQml7aYlng&oe=6A1AD9BC",
    },

    {
      icon: Lightbulb,
      title: "Modern Lighting",
      text: "Wide range of LED lights, fancy lighting, decorative lights, and smart lighting solutions.",
      image:
        "https://www.gafencushop.com/wp-content/uploads/2021/07/Gafencu-lighting-design-fixtures-to-transform-any-room-in-the-home-6.jpg",
    },

    {
      icon: Building2,
      title: "Residential & Industrial",
      text: "Complete electrical solutions for homes, offices, commercial projects, and industries.",
      image:
        "https://www.blackpearlsolution.com/assets/img/energy-conservation/Industrial%20LED/ill1.jpg",
    },

    {
      icon: ThumbsUp,
      title: "Trusted Service",
      text: "Reliable support, expert guidance, and customer satisfaction for every project.",
      image:
        "https://apexgroups.in/wp-content/uploads/2023/11/equipment-electricity-electronic-industrial-lamp-technology-led-production-bright-light-generative-ai.jpg",
    },
  ];

  return (
    <section className="w-full pb-14 lg:pb-20 bg-[#F7F9FC] overflow-hidden">

      {/* CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

       

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  h-[360px]
                  rounded-[8px]
                  cursor-pointer
                "
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-[#08163D]/65
                    group-hover:bg-[#08163D]/95
                    transition duration-500
                  "
                />

                {/* DEFAULT CONTENT */}
                <div
                  className="
                    absolute inset-0
                    flex flex-col items-center justify-center
                    text-center
                    px-5
                    transition duration-500
                    group-hover:opacity-0
                  "
                >

                  <h3
                    className="
                      text-white
                      text-[26px]
                      lg:text-[30px]
                      font-bold
                      leading-[1.2]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* ICON BOX */}
                  <div
                    className="
                      absolute bottom-0
                      w-[80px] h-[80px]
                      bg-[#F28C28]
                      flex items-center justify-center
                    "
                  >
                    <Icon size={34} className="text-white" />
                  </div>
                </div>

                {/* HOVER CONTENT */}
                <div
                  className="
                    absolute inset-0
                    flex flex-col items-center justify-center
                    text-center
                    px-7
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                >

                  {/* CORNER DESIGN */}
                  <div
                    className="
                      absolute top-7 left-7
                      w-10 h-10
                      border-l-2 border-t-2
                      border-[#F28C28]
                    "
                  />

                  <div
                    className="
                      absolute top-7 right-7
                      w-10 h-10
                      border-r-2 border-t-2
                      border-[#F28C28]
                    "
                  />

                  {/* TITLE */}
                  <h3
                    className="
                      text-white
                      text-[26px]
                      lg:text-[30px]
                      font-bold
                      leading-[1.2]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p
                    className="
                      text-white/85
                      text-[14px]
                      leading-[28px]
                      mt-5
                    "
                  >
                    {item.text}
                  </p>

                  

                  {/* ICON */}
                  <div
                    className="
                      absolute bottom-0
                      w-[80px] h-[80px]
                      bg-[#F28C28]
                      flex items-center justify-center
                    "
                  >
                    <Icon size={34} className="text-white" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}