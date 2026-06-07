import React, { useEffect, useState } from "react";
import { ArrowRight, Quote, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TestimonialSection() {
const naviagte = useNavigate();

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Home Owner",
      text: "Excellent service and premium quality electrical products. Their guidance helped us choose the perfect lighting setup.",
    },
    {
      name: "Priya Deshmukh",
      role: "Interior Designer",
      text: "Outstanding product quality and professional support. Highly recommended.",
    },
    {
      name: "Amit Patil",
      role: "Business Owner",
      text: "Reliable supplier with genuine products and timely delivery.",
    },
    {
      name: "Sneha Joshi",
      role: "Architect",
      text: "Modern lighting collection and amazing customer service.",
    },
    {
      name: "Vikram Kulkarni",
      role: "Contractor",
      text: "Great pricing, excellent stock availability and quick support.",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 bg-gradient-to-t from-white to-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm">
              Testimonials
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              What Our
              <br />
              Customers Say
            </h2>

            <p className="mt-5 text-slate-600 text-base md:text-lg max-w-lg">
              Trusted by hundreds of customers for quality electrical
              products, expert guidance and reliable service.
            </p>

           
          </div>

          {/* RIGHT */}
          <div>
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl p-7 shadow-xl border border-slate-100 overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-orange-500" />

              <Quote
                size={40}
                className="text-blue-500/20 absolute top-5 right-5"
              />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed text-lg min-h-[90px]">
                "{testimonials[active].text}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-slate-900">
                  {testimonials[active].name}
                </h4>
                <p className="text-blue-600 text-sm">
                  {testimonials[active].role}
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {testimonials.slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white flex items-center justify-center font-bold mb-3">
                    {item.name.charAt(0)}
                  </div>

                  <h5 className="font-semibold text-sm text-slate-900 line-clamp-1">
                    {item.name}
                  </h5>

                  <p className="text-xs text-slate-500 mt-1">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i
                      ? "w-8 bg-gradient-to-r from-blue-600 to-orange-500"
                      : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}