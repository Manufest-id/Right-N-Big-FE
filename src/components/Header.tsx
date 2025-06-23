"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/services" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Tim", href: "/team" },
    { name: "Berita", href: "/news" },
    { name: "Kontak", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div
        className="bg-green-600 text-white py-2"
        style={{ backgroundColor: "#02A345" }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+62 21 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@rightnbig.id</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Menjadi Benar, Menjadi Besar</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/rightnbig-logo.png"
              alt="RightNBig Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "border-b-2"
                    : "text-gray-700 hover:text-green-600"
                }`}
                style={
                  isActive(item.href)
                    ? { color: "#02A345", borderColor: "#02A345" }
                    : {}
                }
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors"
              style={{ backgroundColor: "#02A345" }}
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? ""
                      : "text-gray-700 hover:text-green-600"
                  }`}
                  style={isActive(item.href) ? { color: "#02A345" } : {}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors w-fit"
                style={{ backgroundColor: "#02A345" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
