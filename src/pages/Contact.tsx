"use client";

import type React from "react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with WhatsApp or email service
    const whatsappMessage = `Halo RightNBig, saya ${formData.name} dari ${formData.company}. Saya tertarik dengan layanan ${formData.service}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-32">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-600">
              Siap memulai transformasi bisnis Anda? Mari diskusikan kebutuhan
              Anda dengan tim ahli kami
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin
                      style={{ color: "#02A345" }}
                      className="mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Alamat Kantor
                      </h4>
                      <p className="text-gray-600">
                        Jl. Sudirman No. 123, Lantai 15
                        <br />
                        Jakarta Pusat 10220
                        <br />
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone
                      style={{ color: "#02A345" }}
                      className="mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Telepon
                      </h4>
                      <p className="text-gray-600">+62 21 1234 5678</p>
                      <p className="text-gray-600">
                        +62 812 3456 7890 (WhatsApp)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail
                      style={{ color: "#02A345" }}
                      className="mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">info@rightnbig.id</p>
                      <p className="text-gray-600">coaching@rightnbig.id</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock
                      style={{ color: "#02A345" }}
                      className="mt-1 flex-shrink-0"
                      size={24}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Jam Operasional
                      </h4>
                      <p className="text-gray-600">
                        Senin - Jumat: 09:00 - 18:00
                      </p>
                      <p className="text-gray-600">Sabtu: 09:00 - 15:00</p>
                      <p className="text-gray-600">Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">
                  Kontak Cepat
                </h4>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors flex items-center justify-center space-x-2"
                    style={{ backgroundColor: "#02A345" }}
                  >
                    <Mail size={20} />
                    <span>Email Kami</span>
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Ikuti Kami
                </h4>
                <div className="flex items-center space-x-8 mb-7 mt-7 overflow-visible">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 text-4xl hover:text-green-600 transition-colors flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/rightnbig/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 text-4xl hover:text-green-600 transition-colors flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC-lJKRE33fFOhGAZguIFsIQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 text-4xl hover:text-green-600 transition-colors flex items-center justify-center"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube fa-lg"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 text-4xl hover:text-green-600 transition-colors flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Follow us on social media untuk konten terbaru!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={
                        { "--tw-ring-color": "#02A345" } as React.CSSProperties
                      }
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={
                        { "--tw-ring-color": "#02A345" } as React.CSSProperties
                      }
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={
                        { "--tw-ring-color": "#02A345" } as React.CSSProperties
                      }
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                      style={
                        { "--tw-ring-color": "#02A345" } as React.CSSProperties
                      }
                      placeholder="PT. Nama Perusahaan"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Layanan yang Diminati *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={
                      { "--tw-ring-color": "#02A345" } as React.CSSProperties
                    }
                  >
                    <option value="">Pilih layanan</option>
                    <option value="Training Modules">Training Modules</option>
                    <option value="Coaching Sessions">Coaching Sessions</option>
                    <option value="UMKM Naik Kelas">UMKM Naik Kelas</option>
                    <option value="Personal Mapping">Personal Mapping</option>
                    <option value="Business Mapping">Business Mapping</option>
                    <option value="Konsultasi Strategis">
                      Konsultasi Strategis
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={
                      { "--tw-ring-color": "#02A345" } as React.CSSProperties
                    }
                    placeholder="Ceritakan kebutuhan atau tantangan yang ingin Anda selesaikan..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
                  style={{ backgroundColor: "#02A345" }}
                >
                  <Send size={20} />
                  <span>Kirim via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-gray-200 h-64 rounded-2xl overflow-hidden flex items-center justify-center">
              <iframe
                title="Lokasi Kantor RightNBig"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8041212603364!2d106.8361743!3d-6.2405536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c09a50f251%3A0x5af4d685e6ce6735!2sBina%20Sentra!5e0!3m2!1sen!2sid!4v1719312345678!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64 rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
