"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO",
      company: "PT Maju Bersama Teknologi",
      image: "/placeholder.svg?height=100&width=100&text=Budi+S",
      rating: 5,
      text: "Program coaching dari RightNBig benar-benar mengubah cara pandang saya dalam memimpin perusahaan. Tim kami menjadi lebih solid dan produktivitas meningkat 40% dalam 6 bulan. Ko Tony dan timnya sangat profesional dan berpengalaman.",
      industry: "Teknologi",
      results: "Produktivitas +40%, Turnover -60%",
    },
    {
      name: "Sari Dewi Lestari",
      position: "Founder & Owner",
      company: "Dewi Bakery & Catering",
      image: "/placeholder.svg?height=100&width=100&text=Sari+D",
      rating: 5,
      text: "Sebagai pemilik UMKM, program 'UMKM Naik Kelas' sangat membantu saya mengembangkan bisnis. Omzet naik 3x lipat dan sekarang sudah buka 5 cabang! Terima kasih RightNBig sudah membantu impian saya menjadi kenyataan.",
      industry: "F&B",
      results: "Omzet 3x lipat, 5 cabang baru",
    },
    {
      name: "Ahmad Rahman Hakim",
      position: "Manager HRD",
      company: "PT Teknologi Nusantara",
      image: "/placeholder.svg?height=100&width=100&text=Ahmad+R",
      rating: 5,
      text: "Training leadership yang diberikan sangat aplikatif dan sesuai dengan kondisi perusahaan Indonesia. Karyawan kami menjadi lebih engaged dan tingkat turnover menurun drastis dari 25% menjadi 8%. Highly recommended!",
      industry: "Manufacturing",
      results: "Employee Engagement +70%, Turnover -68%",
    },
    {
      name: "Maya Putri Indah",
      position: "Entrepreneur",
      company: "Maya Fashion & Lifestyle",
      image: "/placeholder.svg?height=100&width=100&text=Maya+P",
      rating: 5,
      text: "Personal mapping session membantu saya menemukan passion yang sebenarnya. Sekarang bisnis fashion saya berkembang pesat karena saya tahu kekuatan dan fokus saya. Business mapping juga membantu strategi ekspansi ke 3 kota besar.",
      industry: "Fashion",
      results: "Revenue +250%, Ekspansi 3 kota",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Testimoni Klien
          </h2>
          <p className="text-xl text-gray-600">
            Dengarkan cerita sukses dari klien-klien kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="absolute top-8 left-8">
              <Quote size={48} className="text-green-200" />
            </div>

            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic mb-4">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#02A345" }}
                >
                  Hasil yang Dicapai:
                </p>
                <p style={{ color: "#996533" }}>
                  {testimonials[currentTestimonial].results}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={
                  testimonials[currentTestimonial].image || "/placeholder.svg"
                }
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-green-200"
              />
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="font-semibold" style={{ color: "#02A345" }}>
                  {testimonials[currentTestimonial].company}
                </p>
                <p className="text-sm text-gray-500">
                  Industri: {testimonials[currentTestimonial].industry}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-90 transition-colors"
              style={{ backgroundColor: "#02A345" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-90 transition-colors"
              style={{ backgroundColor: "#02A345" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors`}
                style={{
                  backgroundColor:
                    index === currentTestimonial ? "#02A345" : "#d1d5db",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
