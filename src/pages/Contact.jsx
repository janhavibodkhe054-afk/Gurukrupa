import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // WHATSAPP SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919923686402";

    const text = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full bg-[#F7F8FA] overflow-hidden">
      {/* TOP HERO */}
      <div className="max-w-[1450px] mx-auto px-[20px] md:px-[35px] pt-[25px]">
        <div className="relative h-[290px] md:h-[380px] rounded-[32px] overflow-hidden">
          {/* IMAGE */}
          <img
            src="/contact.png"
            alt=""
            className="w-full h-full object-cover scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />

          {/* BLUR */}
          <div className="absolute top-[-120px] right-[-80px] w-[320px] h-[320px] bg-orange-400/20 blur-[120px] rounded-full" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-between p-[28px] md:p-[55px]">
            {/* TOP */}
            <div className="flex items-start justify-between">
              <div>
                <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[13px] font-semibold">
                  Gurukrupa Electricals
                </span>

                <h1 className="text-white text-[48px] md:text-[90px] font-light leading-none mt-[14px]">
                  Contact
                </h1>
              </div>

              <div className="hidden md:flex items-center gap-[10px]">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-[20px] py-[11px] rounded-full text-white text-[13px] uppercase tracking-[2px]">
                  Home
                </button>

                <button className="bg-white text-[#111111] px-[20px] py-[11px] rounded-full text-[13px] uppercase tracking-[2px] font-medium">
                  Contact
                </button>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="flex items-end justify-between">
              <p className="text-white/75 text-[15px] md:text-[18px] max-w-[650px] leading-[32px]">
                Premium electrical materials, lighting solutions, modular
                accessories, industrial products, and complete electrical
                support under one roof.
              </p>

              <div className="hidden md:flex w-[58px] h-[58px] rounded-full bg-orange-500 items-center justify-center shadow-2xl">
                <ArrowRight size={24} className="text-white rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="relative max-w-[1450px] mx-auto px-[20px] md:px-[35px] py-[90px]">
        {/* BLUSH */}
        <div className="absolute top-[150px] left-[-120px] w-[320px] h-[320px] bg-[#4F8CC9]/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-[0px] right-[-120px] w-[320px] h-[320px] bg-orange-300/10 blur-[120px] rounded-full" />

        <div className="grid lg:grid-cols-[1fr_540px] gap-[80px] items-start">
          {/* LEFT */}
          <div>
            <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[13px] font-semibold">
              Get In Touch
            </span>

            <h2 className="text-[#16265E] text-[38px] md:text-[62px] font-bold leading-[1.08] mt-[22px] tracking-[-2px]">
              We are always ready to help and answer your questions
            </h2>

            <p className="text-gray-500 text-[16px] leading-[34px] mt-[30px] max-w-[750px]">
              Looking for premium electrical materials, lighting collections,
              modular accessories, industrial products, switches, wires, or
              complete electrical solutions? Our team is always ready to assist
              you with the right products and reliable support.
            </p>

            {/* CONTACT CARDS */}
            <div className="grid md:grid-cols-2 gap-[22px] mt-[55px]">
              {/* CARD */}
              <div className="bg-white rounded-[24px] p-[26px] border border-[#ECECEC] shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
                <div className="w-[58px] h-[58px] rounded-full bg-orange-100 flex items-center justify-center">
                  <Phone size={22} className="text-orange-500" />
                </div>

                <h4 className="text-[#111111] text-[20px] font-semibold mt-[20px]">
                  Call Center
                </h4>

                <p className="text-gray-500 text-[15px] leading-[30px] mt-[12px]">
                  +91 9923686402
                </p>
              </div>

              {/* CARD */}
              <div className="bg-white rounded-[24px] p-[26px] border border-[#ECECEC] shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
                <div className="w-[58px] h-[58px] rounded-full bg-[#4F8CC9]/10 flex items-center justify-center">
                  <MapPin size={22} className="text-[#4F8CC9]" />
                </div>

                <h4 className="text-[#111111] text-[20px] font-semibold mt-[20px]">
                  Our Location
                </h4>

                <p className="text-gray-500 text-[15px] leading-[30px] mt-[12px]">
                  Chhatrapati Shivaji Maharaj Chowk, Walhekarwadi, Chinchwad,
                  Pune – 411033
                </p>
              </div>

              {/* CARD */}
              <div className="bg-white rounded-[24px] p-[26px] border border-[#ECECEC] shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
                <div className="w-[58px] h-[58px] rounded-full bg-orange-100 flex items-center justify-center">
                  <Mail size={22} className="text-orange-500" />
                </div>

                <h4 className="text-[#111111] text-[20px] font-semibold mt-[20px]">
                  Email Address
                </h4>

                <p className="text-gray-500 text-[15px] leading-[30px] mt-[12px]">
                  gurukrupaelc9@gmail.com
                </p>
              </div>

              {/* SOCIAL */}
              <div className="bg-white rounded-[24px] p-[26px] border border-[#ECECEC] shadow-[0_8px_35px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-[12px]">
                  <a
                    href="#"
                    className="w-[48px] h-[48px] rounded-full bg-[#F7F8FA] border border-[#ECECEC] flex items-center justify-center hover:bg-[#4F8CC9] hover:text-white transition"
                  >
                    <FaFacebookF size={15} />
                  </a>

                  <a
                    href="#"
                    className="w-[48px] h-[48px] rounded-full bg-[#F7F8FA] border border-[#ECECEC] flex items-center justify-center hover:bg-[#4F8CC9] hover:text-white transition"
                  >
                    <FaInstagram size={15} />
                  </a>

                  <a
                    href="#"
                    className="w-[48px] h-[48px] rounded-full bg-[#F7F8FA] border border-[#ECECEC] flex items-center justify-center hover:bg-[#4F8CC9] hover:text-white transition"
                  >
                    <FaLinkedinIn size={15} />
                  </a>
                </div>

                <h4 className="text-[#111111] text-[20px] font-semibold mt-[20px]">
                  Social Network
                </h4>

                <p className="text-gray-500 text-[15px] leading-[30px] mt-[12px]">
                  Follow us for latest electrical products and lighting
                  collections.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="relative">
            {/* BLUR */}
            <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-orange-300/20 blur-[100px] rounded-full" />

            <div className="relative bg-white rounded-[32px] p-[35px] md:p-[45px] border border-[#ECECEC] shadow-[0_15px_60px_rgba(0,0,0,0.06)]">
              <span className="uppercase tracking-[4px] text-[#4F8CC9] text-[12px] font-semibold">
                Contact Form
              </span>

              <h3 className="text-[#16265E] text-[38px] md:text-[42px] font-black tracking-[-1px] leading-tight mt-[14px]">
  Let’s Talk
</h3>

              <p className="text-gray-500 text-[15px] leading-[30px] mt-[14px]">
                Fill out your details and our team will contact you shortly
                regarding your electrical requirements.
              </p>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-[35px] space-y-[26px]"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="w-full h-[58px] px-[22px] rounded-full bg-[#F7F8FA] border border-[#ECECEC] outline-none focus:border-[#4F8CC9]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className="w-full h-[58px] px-[22px] rounded-full bg-[#F7F8FA] border border-[#ECECEC] outline-none focus:border-[#4F8CC9]"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  onChange={handleChange}
                  className="w-full h-[58px] px-[22px] rounded-full bg-[#F7F8FA] border border-[#ECECEC] outline-none focus:border-[#4F8CC9]"
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Write your message..."
                  required
                  onChange={handleChange}
                  className="w-full px-[22px] py-[18px] rounded-[24px] bg-[#F7F8FA] border border-[#ECECEC] outline-none resize-none focus:border-[#4F8CC9]"
                />

                <button
                  type="submit"
                  className="group bg-[#111111] hover:bg-[#4F8CC9] transition-all duration-500 px-[30px] py-[17px] rounded-full text-white text-[15px] font-medium flex items-center gap-[12px] shadow-xl"
                >
                  Send Message
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition duration-300"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-[90px] rounded-[34px] overflow-hidden h-[450px] shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-[#ECECEC]">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Chhatrapati%20Shivaji%20Maharaj%20Chowk%20Walhekarwadi%20Chinchwad%20Pune%20411033&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 grayscale"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
