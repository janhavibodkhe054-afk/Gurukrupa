import React from "react";
import { Eye, Target, ArrowRight, Zap } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-8 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-center">
          {/* LEFT */}
          <div>
            {/* Tag */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[#2146B6] font-semibold text-sm uppercase tracking-[3px]">
                Our Vision & Mission
              </span>

              <div className="w-14 h-[2px] bg-[#2146B6]" />
            </div>

            {/* Heading */}
            <h2 className="text-[28px] md:text-[44px] leading-[1.1] font-bold text-[#16265E] leading-snug">
              Powering Growth Through Quality Electrical Solutions
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
              We are committed to delivering reliable electrical products,
              innovative lighting solutions and trusted customer service that
              help homes, businesses and industries operate efficiently.
            </p>

            {/* Vision + Mission */}
            <div className="mt-6 relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-20 bottom-20 w-[2px] bg-gray-200" />

              {/* Vision */}
              <div className="flex gap-6 mb-4 relative">
                <div
                  className="
                  w-16 h-16
                  rounded-full
                  border-2 border-gray-200
                  bg-white
                  flex items-center justify-center
                  text-[#2146B6]
                  shadow-sm
                  flex-shrink-0
                "
                >
                  <Eye size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#16265E]">
                    Our Vision
                  </h3>

                  <p className="mt-3 text-gray-600 text-base md:text-lg">
                    To become the most trusted destination for electrical
                    products and modern lighting solutions, delivering
                    innovation, reliability and value to every customer.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex gap-6 relative">
                <div
                  className="
                  w-16 h-16
                  rounded-full
                  border-2 border-gray-200
                  bg-white
                  flex items-center justify-center
                  text-[#F37021]
                  shadow-sm
                  flex-shrink-0
                "
                >
                  <Target size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#16265E]">
                    Our Mission
                  </h3>

                  <p className="mt-3 text-gray-600 text-base md:text-lg">
                    To provide premium quality electrical materials, genuine
                    products and exceptional customer support while building
                    long-term relationships based on trust and service
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            {/* Blue Shape */}
            <div
              className="
              absolute
              top-8
              right-8
              w-56
              h-56
              bg-[#2146B6]
              rounded-3xl
              opacity-10
            "
            />

            {/* Border Frame */}
            <div
              className="
              absolute
              bottom-8
              left-6
              w-[85%]
              h-[85%]
              border-2
              border-gray-100
              rounded-3xl
            "
            />

            {/* Main Image */}
            <img
              src="/vision.jpg"
              alt="Vision Mission"
              className="
                relative
                z-10
                w-full
                max-w-[520px]
                object-contain
                h-[400px]
                md:h-[600px]
              "
            />

            {/* Floating Card */}
            <div
              className="
              absolute
              left-0
              bottom-16
              bg-white
              rounded-2xl
              shadow-xl
              px-6
              py-5
              flex
              items-center
              gap-4
              z-20
            "
            >
              <div
                className="
                w-14 h-14
                rounded-xl
                bg-gradient-to-br
                from-[#2146B6]
                to-[#4F8CC9]
                text-white
                flex items-center justify-center
              "
              >
                <Zap size={24} />
              </div>

              <div>
                <h4 className="text-3xl font-bold text-[#16265E]">10+</h4>

                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
