import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Clock,
  Briefcase,
  DollarSign,
  BarChart,
  FileText,
  ClipboardList,
  GitPullRequest,
  Lightbulb,
  Building,
  TrendingUp,
  Award,
  UserCheck,
  Zap,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const BusinessConsulting = () => {
  const packages = [
    {
      id: "silver-package",
      title: "SILVER PACKAGE",
      description:
        "Jasa konsultan bisnis untuk menangani satu topik tertentu (khusus) dalam bisnis yang memerlukan perhatian khusus atau membutuhkan solusi dan pemecahan masalah.",
      image: "/images/consulting/silver-package2.jpg",
      consultant: "1 orang Senior Consultant (specialized)",
      duration: "2 mandays per month, 6 jam/day (total 12 hour/ month)",
      topics: [
        {
          name: "Human Capital",
          description:
            "Karena berasal dari luar organisasi, konsultan bisa memberikan pandangan yang lebih objektif tentang masalah SDM, seperti konflik internal, budaya perusahaan yang tidak sehat, atau inefisiensi dalam manajemen tenaga kerja.",
          icon: <Users size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Sales/Marketing",
          description:
            "Konsultan membawa keahlian dalam menyusun strategi pemasaran dan penjualan berdasarkan tren pasar terbaru, perilaku konsumen, dan teknologi baru — sesuatu yang mungkin belum sepenuhnya dikuasai oleh tim internal.",
          icon: <BarChart size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Digital Marketing/Social media/e-commerce",
          description:
            "Konsultan membantu menyusun strategi digital marketing yang lebih spesifik untuk tujuan bisnis tertentu (seperti brand awareness, lead generation, atau penjualan), sehingga perusahaan tidak membuang-buang anggaran di channel yang kurang efektif.",
          icon: <Lightbulb size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Finance/Accounting/Tax",
          description:
            "Konsultan pajak membantu bisnis merencanakan dan mengelola kewajiban pajak agar tidak membayar lebih dari yang seharusnya, menggunakan insentif pajak, potongan, atau skema yang sah sesuai ketentuan.",
          icon: <DollarSign size={24} style={{ color: "#02A345" }} />,
        },
      ],
    },
    {
      id: "gold-package",
      title: "GOLD PACKAGE",
      description:
        "Jasa konsultan bisnis untuk menangani permasalahan dalam perusahaan yang disebabkan ada beberapa fungsi teknis yang belum ada atau belum dijalankan atau belum sempurna sehingga mengganggu proses bisnis secara keseluruhan.",
      image: "/images/consulting/gold-package.jpg",
      consultant:
        "1 orang Master Consultant & 1 orang Senior Consultant (specialized)",
      duration: "4 mandays/month, 6 jam/day (total 24 hour/month)",
      topics: [
        {
          name: "SOP (Standard Operations Procedures) dan Instruksi Kerja",
          description:
            "Konsultan SOP membantu menyusun alur kerja yang jelas, sistematis, dan terdokumentasi. Ini membuat setiap aktivitas bisnis lebih konsisten, mudah diawasi, dan tidak tergantung pada orang per orang.",
          icon: <FileText size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Work Flow dan proses bisnis",
          description:
            "Konsultan workflow menganalisis alur kerja yang ada dan menemukan titik-titik kemacetan, duplikasi pekerjaan, atau langkah yang tidak perlu, lalu memperbaikinya supaya proses lebih cepat dan efisien.",
          icon: <GitPullRequest size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Dokumentasi proses",
          description:
            "Konsultan membantu merekam seluruh langkah-langkah kerja dengan jelas dan sistematis, memastikan tidak ada bagian penting yang terlewat atau dilakukan asal-asalan.",
          icon: <ClipboardList size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "KPI (Key Performance Indicator)",
          description:
            "Konsultan memastikan bahwa setiap KPI di semua level (individu, tim, divisi) mendukung tujuan besar perusahaan, bukan sekadar aktivitas harian tanpa arah.",
          icon: <Award size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Planning & Reporting System",
          description:
            "Konsultan membantu perusahaan menyusun rencana bisnis (business plan) yang realistis, berbasis data, dan sejalan dengan tujuan jangka panjang, bukan sekadar rencana umum tanpa arah yang jelas.",
          icon: <Briefcase size={24} style={{ color: "#02A345" }} />,
        },
      ],
    },
    {
      id: "platinum-package",
      title: "PLATINUM PACKAGE",
      description:
        "Jasa konsultan bisnis untuk menangani hal-hal strategis dalam bisnis dan membutuhkan penanganan yang komprehensif dan menyeluruh.",
      image: "/images/consulting/platinum-package.jpg",
      consultant: "1 orang Senior Consultant (specialized)",
      duration: "2 mandays per month, 6 jam/day (total 12 hour/ month)",
      topics: [
        {
          name: "Human Capital Development",
          description:
            "Konsultan membantu perusahaan melihat karyawan bukan sekadar 'tenaga kerja', tapi sebagai modal manusia yang perlu dikembangkan untuk mendukung pertumbuhan bisnis jangka panjang.",
          icon: <UserCheck size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Strategic Sales & Marketing Management",
          description:
            "Konsultan membantu perusahaan merumuskan strategi branding yang efektif, menciptakan citra merek yang kuat dan konsisten di mata konsumen, serta membantu membangun loyalitas pelanggan.",
          icon: <BarChart size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Leader’s Lifting up & Regeneration",
          description:
            "Program 'lifting up' bertujuan untuk meningkatkan kualitas kepemimpinan di semua level. Konsultan dapat memberikan pelatihan, coaching, dan mentoring untuk membantu para pemimpin memperbaiki keterampilan manajerial mereka, seperti komunikasi, pengambilan keputusan, dan strategi.",
          icon: <TrendingUp size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Business Shifting up",
          description:
            "Dengan merancang strategi yang tepat untuk shifting up, konsultan membantu perusahaan tidak hanya bertahan dalam jangka pendek tetapi juga menumbuhkan profitabilitas dan daya saing di masa depan.",
          icon: <Zap size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Company Culture",
          description:
            "Budaya perusahaan yang sehat menciptakan lingkungan kerja yang mendukung keterlibatan, motivasi, dan kepuasan karyawan. Konsultan dapat membantu merancang budaya yang memfasilitasi komunikasi terbuka, kolaborasi, dan apresiasi terhadap kontribusi karyawan.",
          icon: <Building size={24} style={{ color: "#02A345" }} />,
        },
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

          {/* Hero Section for Business Consulting */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              BUSINESS <span style={{ color: "#02A345" }}>CONSULTING</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mengidentifikasi dan mengatasi tantangan bisnis dengan
              mengembangkan strategi yang inovatif dan efektif, mengoptimalkan
              proses bisnis, serta meningkatkan kinerja untuk mencapai tujuan
              pengembangan bisnis dan pertumbuhan jangka panjang.
            </p>
            <div className="mt-8">
              <img
                src="/images/consulting/business-consulting.jpg"
                alt="Business Consulting Overview"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover h-64"
              />
            </div>
          </div>

          {/* Individual Package Sections */}
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <div
                    className={`w-fit px-8 py-3 rounded-full mb-4 text-xl font-bold flex items-center justify-center
        ${
          pkg.id === "silver-package"
            ? "bg-gradient-to-r from-gray-300 to-gray-500 text-gray-800"
            : ""
        }
        ${
          pkg.id === "gold-package"
            ? "bg-gradient-to-r from-yellow-300 to-yellow-600 text-yellow-900"
            : ""
        }
        ${
          pkg.id === "platinum-package"
            ? "bg-gradient-to-r from-amber-600 to-orange-800 text-white"
            : ""
        }
      `}
                  >
                    {pkg.title}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {pkg.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Users size={20} style={{ color: "#02A345" }} />
                      <span>
                        <span className="font-semibold">Konsultan:</span>{" "}
                        {pkg.consultant}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Clock size={20} style={{ color: "#02A345" }} />
                      <span>
                        <span className="font-semibold">Durasi:</span>{" "}
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6 mt-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Pilihan Topik:
                    </h3>
                    {pkg.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        {topic.icon}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {topic.name}
                          </h4>
                          <p className="text-gray-600">{topic.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-72 object-cover rounded-2xl shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Siap mengoptimalkan bisnis Anda?
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

export default BusinessConsulting;
