"use client";

import type React from "react";

import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo RightNBig, saya ${formData.name}. Email: ${formData.email}, Phone: ${formData.phone}. Saya ingin konsultasi bisnis.`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="pt-20 pb-0 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden"
    >
      {/* Decorative dots pattern */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
        <div className="grid grid-cols-8 gap-4 p-8">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-green-200 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          <div className="space-y-8 text-gray-900">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Menjadi <span style={{ color: "#02A345" }}>Benar</span>,
                <br />
                Menjadi <span style={{ color: "#02A345" }}>Besar</span>
              </h1>
              <div className="space-y-4 text-lg lg:text-xl">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transformasi bisnis dan personal Anda bersama RightNBig. Kami
                  membantu individu dan organisasi mencapai potensi terbaik
                  melalui coaching dan training berkualitas tinggi.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
                style={{ backgroundColor: "#02A345" }}
              >
                <span>Mulai Transformasi</span>
                <ArrowRight size={20} />
              </button>
              <button
                className="border-2 text-gray-900 px-8 py-4 rounded-lg hover:bg-white hover:text-red-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
                style={{ borderColor: "#996533", color: "#996533" }}
              >
                <Play size={20} />
                <span>Tonton Video</span>
              </button>
            </div>
          </div>

          <div className="relative flex justify-end">
            <img
              src="/images/tony.webp"
              alt="Tony Chen - Founder & CEO RightNBig"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white relative z-20 -mt-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-t-3xl shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 font-medium">
                Mohon diagnosa kesehatan bisnis saya, saya ingin membangun
                bisnis kelas dunia
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama*"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={
                      { "--tw-ring-color": "#02A345" } as React.CSSProperties
                    }
                  />
                </div>
                <div className="md:col-span-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={
                      { "--tw-ring-color": "#02A345" } as React.CSSProperties
                    }
                  />
                </div>
                <div className="md:col-span-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telp*"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={
                      { "--tw-ring-color": "#02A345" } as React.CSSProperties
                    }
                  />
                </div>
                <div className="md:col-span-1">
                  <button
                    type="submit"
                    className="w-full text-white px-8 py-3 rounded-lg hover:opacity-90 transition-colors font-bold"
                    style={{ backgroundColor: "#02A345" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#02A345" }}
                >
                  500+
                </div>
                <div className="text-gray-600">Klien Bahagia</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#02A345" }}
                >
                  50+
                </div>
                <div className="text-gray-600">Program Training</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#02A345" }}
                >
                  15+
                </div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{ color: "#02A345" }}
                >
                  98%
                </div>
                <div className="text-gray-600">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
