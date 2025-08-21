import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Clock,
  Target,
  Briefcase,
  Shield,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const BusinessCoaching = () => {
  const programs = [
    {
      id: "futurefit-selling",
      title: "FUTUREFIT Selling Mastery Program",
      subtitle: "“From Target to Advocate”",
      description:
        "Program coaching kolaborasi yang efektif antara tim sales & tim marketing untuk bersama-sama mencapai target penjualan.",
      image: "/images/coaching/futurefit2.png",
      details: [
        {
          label: "Peserta",
          value: "All Sales Division & All Marketing division",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "8 minggu (8 sesi coaching 1x seminggu)",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
      ],
      keyPoints: [
        "Menanamkan mindset sales & marketing yang benar.",
        "Menentukan target market yang tepat (TAM-SAM-SOM).",
        "Proses validasi dan analisis intelijen dari database target pelanggan dengan akurat.",
        "Proses menyiapkan senjata marketing, simulasi penjualan sampai implementasi penjualan dengan strategi penjualan yang sudah teruji.",
        "Menganalisa fear factor dan comfort zone untuk meminimalisir resiko kalah dalam proses penjualan dan menghadapi persaingan bisnis.",
      ],
      braveHeartSelling: [
        {
          name: "Target Determination",
          description: "Menentukan target yang jelas dan terukur.",
          icon: <Target size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Locking Target Position",
          description: "Mengunci posisi target di pasar.",
          icon: <Briefcase size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Attack from all Direction",
          description: "Menyerang dari berbagai arah untuk dominasi pasar.",
          icon: <TrendingUp size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Kidnap & Take Many of Prisoners",
          description:
            "Strategi untuk menarik dan mempertahankan banyak pelanggan.",
          icon: <Users size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Build a Fort of Defense",
          description:
            "Membangun benteng pertahanan untuk menjaga kestabilan omzet dan melindungi pelanggan dari serangan kompetitor.",
          icon: <Shield size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Hoist The Flags",
          description:
            "Mengaktifkan dan mengoptimalkan Customer Relationship Management (CRM).",
          icon: <Lightbulb size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Build The Army",
          description:
            "Mentransformasikan data base pelanggan menjadi pasukan penjualan yang melahirkan pelanggan baru dan multiplikasi angka penjualan.",
          icon: <Users size={24} style={{ color: "#02A345" }} />,
        },
      ],
    },
    {
      id: "youngpreneur-coaching",
      title: "Youngpreneur Coaching Program",
      description:
        "Program yang menggabungkan dua metode penting: assessment dan coaching. Metode assessment : diperlukan untuk mengidentifikasi profil kepribadian, gaya belajar, gaya kepemimpinan, potensi, kekuatan-kelemahan, dan area yang perlu diperbaiki dan ditingkatkan untuk dapat mulai berbisnis. Metode coaching : peserta akan mendapatkan bimbingan langsung dari pelatih yang juga praktisi bisnis yang berpengalaman, yang dapat membantu merancang sebuah proposal bisnis sampai blueprint sebuah business sehingga mereka lebih disiapkan untuk masuk ke dalam dunia bisnis.",
      image: "/images/coaching/youngpreneur.jpg",
      details: [
        {
          label: "Peserta",
          value: "Mahasiswa/mahasiswi usia minimal 20 tahun, maksimal 30",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "8x pertemuan (960 menit), 1 sesi coaching = 120 menit",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
      ],
      successJourney: [
        "Ideas Generator",
        "Business Incubator",
        "Success Accelerator",
      ],
    },
  ];

  return (
    <div className="pt-32">
      <ScrollToTop />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 mb-12 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Kembali ke Layanan</span>
          </Link>

          {/* Hero Section for Business Coaching */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              BUSINESS <span style={{ color: "#02A345" }}>COACHING</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pendampingan bisnis yang terukur dan terarah untuk membantu para
              pemilik bisnis menjalankan bisnis dengan lebih efektif, mencapai
              target yang diharapkan, dan mendorong pertumbuhan yang
              berkelanjutan dengan pendekatan yang berfokus pada hasil.
            </p>
            <div className="mt-8">
              <img
                src="/images/coaching/business-coaching.jpg"
                alt="Business Coaching Overview"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover h-64"
              />
            </div>
          </div>

          {/* Individual Program Sections */}
          {programs.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {program.title}
                  </h2>
                  {program.subtitle && (
                    <h3 className="text-2xl font-semibold text-gray-700">
                      {program.subtitle}
                    </h3>
                  )}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {program.description}
                  </p>

                  {program.details && (
                    <div className="space-y-3">
                      {program.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 text-gray-700"
                        >
                          {detail.icon}
                          <span>
                            <span className="font-semibold">
                              {detail.label}:
                            </span>{" "}
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {program.keyPoints && (
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {program.keyPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {program.braveHeartSelling && (
                    <div className="space-y-6 mt-6">
                      <h4 className="text-2xl font-bold text-gray-900">
                        Brave Heart Selling
                      </h4>
                      {program.braveHeartSelling.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          {item.icon}
                          <div>
                            <h5 className="text-xl font-bold text-gray-900">
                              {item.name}
                            </h5>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {program.successJourney && (
                    <div className="mt-6">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        Success Journey
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {program.successJourney.map((step, idx) => (
                          <div
                            key={idx}
                            className="bg-green-50 p-4 rounded-lg text-center"
                          >
                            <p
                              className="font-semibold"
                              style={{ color: "#02A345" }}
                            >
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-72 object-cover rounded-2xl shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Siap meningkatkan kinerja tim Anda?
            </p>
            <Link
              to="/contact"
              className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
              style={{ backgroundColor: "#02A345" }}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCoaching;
