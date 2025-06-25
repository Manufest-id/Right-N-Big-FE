"use client";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/images/rightnbig-logo.png"
                alt="RightNBig Logo"
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Transformasi bisnis dan personal melalui coaching dan training
                berkualitas tinggi untuk mencapai kesuksesan yang berkelanjutan.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-gray-300 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/rightnbig/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-gray-300 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC-lJKRE33fFOhGAZguIFsIQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-gray-300 transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube fa-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-gray-300 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tim
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Training Modules
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Coaching Sessions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  UMKM Naik Kelas
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Personal Mapping
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Business Mapping
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Konsultasi Strategis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin
                  style={{ color: "#02A345" }}
                  className="mt-1 flex-shrink-0"
                  size={20}
                />{" "}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-gray-300 space-y-2">
                      <div>
                        <h1 className="font-bold">Consulting Office:</h1>
                        <p>Gedung Bina Sentra Lantai 3, room 303</p>
                        <p>Kompleks Perkantoran Bidakara,</p>
                        <p>
                          Jl. Gatot Subroto No.8 Kavling 71, RT.8/RW.8, Menteng
                          Dalam, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus
                          Ibukota Jakarta 12870
                        </p>
                      </div>
                      <div>
                        <h1 className="font-bold mt-4">
                          Administration Office:
                        </h1>
                        <p>
                          Jl. Taman Pluit Kencana Blok P No. 28-F
                          <br />
                          Pluit, Penjaringan, Jakarta Utara 14450
                          <br />
                          Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* ...phone and mail blocks... */}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone
                  style={{ color: "#02A345" }}
                  className="flex-shrink-0"
                  size={20}
                />
                <div className="text-gray-300">
                  <p>+62 21 1234 5678</p>
                  <p>+62 812 3456 7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  style={{ color: "#02A345" }}
                  className="flex-shrink-0"
                  size={20}
                />
                <div className="text-gray-300">
                  <p>info@rightnbig.id</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RightNBig. All rights reserved. | Privacy Policy | Terms of
              Service
            </div>
            <button
              onClick={scrollToTop}
              className="text-white p-3 rounded-full hover:opacity-90 transition-colors"
              style={{ backgroundColor: "#02A345" }}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
