"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [closeDropdownTimer, setCloseDropdownTimer] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Tim", href: "/team" },
    { name: "Berita", href: "/news" },
    { name: "Kontak", href: "/contact" },
  ];

  const serviceItems = [
    { name: "Training Modules", href: "/services#training-modules" },
    { name: "Coaching Sessions", href: "/services#coaching-sessions" },
    { name: "UMKM Naik Kelas", href: "/services#umkm-naik-kelas" },
    { name: "Personal Mapping", href: "/services#personal-mapping" },
    { name: "Business Mapping", href: "/services#business-mapping" },
    { name: "Konsultasi Strategis", href: "/services#konsultasi-strategis" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return location.pathname === "/services";
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
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

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className={`font-medium transition-colors flex items-center space-x-1 ${
                  isServicesActive()
                    ? "border-b-2"
                    : "text-gray-700 hover:text-green-600"
                }`}
                style={
                  isServicesActive()
                    ? { color: "#02A345", borderColor: "#02A345" }
                    : {}
                }
                onMouseEnter={() => {
                  if (closeDropdownTimer) {
                    clearTimeout(closeDropdownTimer);
                    setCloseDropdownTimer(null);
                  }
                  setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  const timer = setTimeout(() => {
                    setIsServicesOpen(false);
                    setCloseDropdownTimer(null);
                  }, 200);
                  setCloseDropdownTimer(timer);
                }}
              >
                <span>Layanan</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => {
                    if (closeDropdownTimer) {
                      clearTimeout(closeDropdownTimer);
                      setCloseDropdownTimer(null);
                    }
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timer = setTimeout(() => {
                      setIsServicesOpen(false);
                      setCloseDropdownTimer(null);
                    }, 200);
                    setCloseDropdownTimer(timer);
                  }}
                >
                  {serviceItems.map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block px-4 py-3 text-gray-700 hover:text-white hover:bg-green-600 transition-colors"
                      onClick={handleServiceClick}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  className={`font-medium transition-colors flex items-center space-x-1 w-full text-left ${
                    isServicesActive()
                      ? ""
                      : "text-gray-700 hover:text-green-600"
                  }`}
                  style={isServicesActive() ? { color: "#02A345" } : {}}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Layanan</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown Items */}
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceItems.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block py-2 text-gray-600 hover:text-green-600 transition-colors text-sm"
                        onClick={handleServiceClick}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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
