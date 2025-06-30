"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

const EventSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "Leadership Excellence Workshop",
      date: "15 Februari 2024",
      location: "Jakarta Convention Center",
      participants: "50 peserta",
      image: "/images/events/leadership-workshop.jpg",
      description:
        "Workshop intensif untuk mengembangkan kemampuan kepemimpinan yang efektif di era digital modern",
    },
    {
      id: 2,
      title: "UMKM Naik Kelas Bootcamp",
      date: "22 Februari 2024",
      location: "Surabaya Business Center",
      participants: "100 peserta",
      image: "/images/events/umkmnaikkelas.jpg",
      description:
        "Program komprehensif untuk mengembangkan UMKM menjadi bisnis yang lebih besar dan berkelanjutan",
    },
    {
      id: 3,
      title: "Personal Branding Masterclass",
      date: "1 Maret 2024",
      location: "Bandung Creative Hub",
      participants: "75 peserta",
      image: "/images/events/personal-branding.jpg",
      description:
        "Membangun personal brand yang kuat untuk kesuksesan karir dan bisnis di era digital",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Event Terdekat
          </h2>
          <p className="text-xl text-gray-600">
            Jangan lewatkan kesempatan untuk bergabung dengan program terbaru
            kami
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event) => (
                <div key={event.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                    <div className="relative h-96 lg:h-full overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    </div>
                    <div className="p-8 lg:p-12 bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col justify-center min-h-[500px]">
                      <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-gray-900">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {event.description}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 text-gray-700">
                            <Calendar style={{ color: "#02A345" }} size={20} />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-700">
                            <MapPin style={{ color: "#02A345" }} size={20} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-gray-700">
                            <Users style={{ color: "#02A345" }} size={20} />
                            <span>{event.participants}</span>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <button
                            className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors font-semibold"
                            style={{ backgroundColor: "#02A345" }}
                          >
                            Daftar Sekarang
                          </button>
                          <button
                            className="border-2 px-6 py-3 rounded-lg hover:text-white transition-colors font-semibold"
                            style={{
                              borderColor: "#996533",
                              color: "#996533",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#996533";
                              e.currentTarget.style.color = "white";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                              e.currentTarget.style.color = "#996533";
                            }}
                          >
                            Pelajari Lebih Lanjut
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronLeft size={24} style={{ color: "#02A345" }} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all"
          >
            <ChevronRight size={24} style={{ color: "#02A345" }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors`}
                style={{
                  backgroundColor:
                    index === currentSlide ? "#02A345" : "#d1d5db",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSlider;
