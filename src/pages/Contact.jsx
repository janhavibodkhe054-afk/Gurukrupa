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
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full bg-[#F8FAFC] overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative h-[180px] md:h-[270px] overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/ctabg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">

          

          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Contact Us
          </h1>

          
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="relative max-w-[1400px] mx-auto px-[20px] md:px-[40px] py-[90px]">

        {/* SOFT BACKGROUNDS */}
        <div className="absolute top-[120px] left-[-120px] w-[320px] h-[320px] bg-[#4F8CC9]/10 blur-[120px]" />
        <div className="absolute bottom-[-50px] right-[-120px] w-[320px] h-[320px] bg-orange-200/20 blur-[120px]" />

        <div className="grid lg:grid-cols-[1fr_520px] gap-[70px] items-start">

          {/* LEFT */}
          <div>

            <h2 className="text-[#111827] text-[28px] md:text-[46px] font-bold leading-[1.1]">
              Let’s build something <br /> great together
            </h2>

            <p className="text-gray-600 text-[16px] md:text-[18px] leading-[32px] mt-[18px] max-w-[750px]">
              We provide premium electrical materials, lighting solutions,
              modular accessories, and industrial products. Reach out for
              expert assistance and quick support.
            </p>

            {/* CONTACT INFO */}
            <div className="grid md:grid-cols-2 gap-[20px] mt-[40px]">

              {/* Phone */}
              <div className="p-[22px] bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition">
                <Phone className="text-orange-500" />
                <h4 className="mt-[14px] font-semibold text-[18px]">Call Us</h4>
                <p className="text-gray-600 mt-[8px]">+91 9923686402</p>
              </div>

              {/* Location */}
              <div className="p-[22px] bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition">
                <MapPin className="text-[#4F8CC9]" />
                <h4 className="mt-[14px] font-semibold text-[18px]">Location</h4>
                <p className="text-gray-600 mt-[8px]">
                  Gurukrupa Electricals & Light House,
Chhatrapati Shivaji Maharaj Chowk, Walhekarwadi, Chinchwad, Pune – 411033,
Maharashtra, India
                </p>
              </div>

              {/* Email */}
              <div className="p-[22px] bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition">
                <Mail className="text-orange-500" />
                <h4 className="mt-[14px] font-semibold text-[18px]">Email</h4>
                <p className="text-gray-600 mt-[8px]">
                  gurukrupaelc9@gmail.com
                </p>
              </div>

              {/* Social */}
              <div className="p-[22px] bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex gap-3">
                  <FaFacebookF className="cursor-pointer hover:text-[#4F8CC9]" />
                  <FaInstagram className="cursor-pointer hover:text-[#4F8CC9]" />
                  <FaLinkedinIn className="cursor-pointer hover:text-[#4F8CC9]" />
                </div>

                <h4 className="mt-[14px] font-semibold text-[18px]">
                  Follow Us
                </h4>
                <p className="text-gray-600 mt-[8px]">
                  Stay updated with new products
                </p>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-[26px] p-[35px] border border-gray-100 shadow-lg">

            <h3 className="text-[22px] font-semibold text-[#111827]">
              Send Message
            </h3>

            <p className="text-gray-500 mt-[8px] text-[14px]">
              Fill the form and we’ll contact you soon
            </p>

            <form onSubmit={handleSubmit} className="mt-[30px] space-y-[18px]">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="w-full h-[52px] px-[18px] rounded-[14px] bg-[#F8FAFC] border outline-none focus:border-[#4F8CC9]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="w-full h-[52px] px-[18px] rounded-[14px] bg-[#F8FAFC] border outline-none focus:border-[#4F8CC9]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                onChange={handleChange}
                className="w-full h-[52px] px-[18px] rounded-[14px] bg-[#F8FAFC] border outline-none focus:border-[#4F8CC9]"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Message"
                required
                onChange={handleChange}
                className="w-full px-[18px] py-[14px] rounded-[14px] bg-[#F8FAFC] border outline-none resize-none focus:border-[#4F8CC9]"
              />

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-[14px] rounded-[14px] font-semibold hover:scale-[1.02] transition"
              >
                Send Message
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>

            </form>
          </div>

        </div>

        {/* MAP */}
        <div className="mt-20 overflow-hidden rounded-[20px] border border-gray-200 shadow-md">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Chhatrapati%20Shivaji%20Maharaj%20Chowk%20Walhekarwadi%20Chinchwad%20Pune%20411033&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[320px] md:h-[420px]"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}