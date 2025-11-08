import { Link } from "react-router-dom";
import {
  FileText,
  Clock,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

type Track = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSet: string[];
  bestSeller?: boolean;
  leftColumn: string[];
  rightColumn: string[];
  contract: string;
  duration: string;
  problems?: string[];
  solutions?: string[];
};

const ManagementServices = () => {
  const tracks: Track[] = [
    {
      id: "finance-accounting-tax",
      title: "FINANCE, ACCOUNTING & TAX",
      description:
        "Pelayanan manajemen berbasis kemitraan yang membantu pemilik bisnis dalam mengelola finance, accounting, dan tax dengan metode terlengkap dan terbaru yang terdiri dari:",
      imageSet: [
        "/images/management-services/fiat-1.png",
        "/images/management-services/fiat-2.png",
        "/images/management-services/fiat-3.png",
      ],
      leftColumn: [
        "Implementasi Sistem ERP",
        "Implementasi Software Akuntansi",
        "Laporan Keuangan Reguler",
        "Pendampingan Manajemen Arus Kas",
      ],
      rightColumn: [
        "Review & Audit Internal",
        "Tax Review & Due Diligence",
        "Tax Planning",
        "Restrukturisasi Keuangan & Efisiensi Biaya",
      ],
      contract: "kontrak minimal 12 bulan",
      duration:
        "6 mandays per bulan (3 bulan pertama), 4 mandays per bulan (seterusnya)",
      problems: [
        "Pencatatan transaksi tidak rapi (manual/tidak konsisten)",
        "Laporan keuangan tidak tersedia tepat waktu",
        "Kesulitan mengelola arus kas",
        "Kompleksitas pajak (PPN, PPh)",
        "Minim strategi keuangan jangka panjang",
        "Efisiensi biaya belum optimal",
        "Transformasi digital sistem keuangan & akuntansi",
      ],
      solutions: [
        "Implementasi ERP/software akuntansi",
        "Laporan keuangan reguler (bulanan/tahunan)",
        "Pendampingan manajemen arus kas",
        "Review & audit internal untuk kontrol keuangan",
        "Tax review & due diligence",
        "Perencanaan pajak strategis (tax planning)",
        "Restrukturisasi keuangan & efisiensi biaya",
      ],
    },
    {
      id: "sales-marketing-management",
      title: "SALES & MARKETING MANAGEMENT SERVICES",
      subtitle:
        "Strategic partner to manage and empower your sales & marketing team",
      description:
        "Pelayanan manajemen berbasis kemitraan yang membantu pemilik bisnis dalam mengelola divisi sales & marketing dengan metode terlengkap dan terbaru yang terdiri dari:",
      imageSet: [
        "/images/management-services/sales-and-marketing-1.png",
        "/images/management-services/sales-and-marketing-2.png",
        "/images/management-services/sales-and-marketing-3.png",
      ],
      bestSeller: true,
      leftColumn: [
        "Blueprint Sales & Marketing",
        "Strategi Sales & Marketing",
        "Perencanaan Implementasi",
        "Recruitment, Seleksi, & Orientasi",
        "Penetapan Target",
        "Funneling & Progress Sales & Marketing",
        "Pemantauan Kinerja Sales",
      ],
      rightColumn: [
        "Sistem Laporan Harian",
        "Customer Relationship Management",
        "Sales & Marketing Support",
        "Skema Remunerasi",
        "KPI, Reward, & Punishment",
        "Pembagian Insentif",
      ],
      contract: "kontrak minimal 12 bulan",
      duration:
        "6 mandays per bulan (3 bulan pertama), 4 mandays per bulan (seterusnya)",
      problems: [
        "Strategi sales & marketing tidak konsisten",
        "Minim integrasi tim sales & marketing",
        "Target & pipeline tidak jelas/terpantau",
        "Data & analitik kurang dimanfaatkan",
        "Leads & customer journey kurang efektif",
        "Pelaporan & monitoring belum terstruktur",
        "Kualitas SDM sales–marketing rendah",
        "Anggaran pemasaran tidak optimal",
        "Brand positioning & diferensiasi lemah",
        "Inovasi strategi menghadapi tren minim",
      ],
      solutions: [
        "Sales–marketing strategy yang terarah & terukur",
        "Sinkronisasi tim sales & marketing",
        "Target, pipeline & kinerja monitoring",
        "Data & riset pasar untuk keputusan",
        "Optimalisasi leads & customer journey",
        "Reporting & evaluasi berkala",
        "Pelatihan & coaching SDM sales–marketing",
        "Efisiensi anggaran pemasaran",
        "Penguatan brand positioning & diferensiasi",
        "Inovasi strategi sesuai tren & konsumen",
      ],
    },
    {
      id: "human-capital",
      title: "HUMAN CAPITAL",
      description:
        "Pelayanan manajemen berbasis kemitraan yang membantu pemilik bisnis dalam mengelola divisi HR dan staff secara menyeluruh dengan metode terlengkap dan terbaru yang terdiri dari:",
      imageSet: [
        "/images/management-services/human-capital-1.png",
        "/images/management-services/human-capital-2.png",
        "/images/management-services/human-capital-3.png",
      ],
      leftColumn: [
        "Menemukan Kandidat Ideal",
        "Recruitment Process",
        "High Turnover Solution",
        "Pengembangan Karyawan",
        "Penilaian Kinerja Objektif",
      ],
      rightColumn: [
        "Meningkatkan Motivasi & Produktivitas Karyawan",
        "Administrasi HR Efisien",
        "SOP Perusahaan Jelas",
        "Budaya Perusahaan Kuat",
      ],
      contract: "kontrak minimal 12 bulan",
      duration:
        "6 mandays per bulan (3 bulan pertama), 4 mandays per bulan (seterusnya)",
      problems: [
        "Rekrutmen sulit, tidak terstruktur, dan memakan waktu",
        "Turnover tinggi dan loyalitas rendah",
        "Tidak ada pelatihan dan kaderisasi",
        "Skill gap dengan kebutuhan perusahaan",
        "Penilaian kinerja subjektif, tanpa KPI/OKR",
        "Motivasi dan produktivitas rendah",
        "Administrasi HR manual & tidak efisien",
        "SOP, kebijakan, dan budaya perusahaan lemah",
      ],
      solutions: [
        "Sistem rekrutmen terstruktur (job desc, grading, tes & wawancara kompetensi)",
        "Onboarding efektif",
        "Pelatihan & coaching (leadership, komunikasi, technical)",
        "Assessment skill gap & perencanaan karier/succession plan",
        "KPI/OKR objektif & penilaian berbasis data",
        "Program reward & recognition",
        "Digitalisasi HR (payroll, absensi, HRIS)",
        "SOP & kepatuhan ketenagakerjaan; budaya kerja positif",
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

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              MANAGEMENT <span style={{ color: "#02A345" }}>SERVICES</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mengidentifikasi dan mengatasi tantangan bisnis dengan
              mengembangkan strategi yang inovatif dan efektif, mengoptimalkan
              proses bisnis, serta meningkatkan kinerja untuk mencapai tujuan
              pengembangan bisnis dan pertumbuhan jangka panjang.
            </p>
            <div className="mt-8">
              <img
                src="/images/management-services/management-services.jpg"
                alt="Business Management Services Overview"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover h-64"
              />
            </div>
          </div>

          {/* Tracks */}
          {tracks.map((t) => (
            <div
              key={t.id}
              id={t.id}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
            >
              {/* Top grid: text + images */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left text */}
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <h2 className="text-4xl font-bold text-gray-900">
                      {t.title}
                    </h2>
                    {t.bestSeller && (
                      <img
                        src="/images/management-services/best-seller.png"
                        alt="Best Seller"
                        className="w-20 h-auto -rotate-6"
                      />
                    )}
                  </div>
                  {t.subtitle && (
                    <h3 className="text-2xl font-semibold text-gray-700">
                      {t.subtitle}
                    </h3>
                  )}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {t.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-gray-800 text-lg">
                    <ul className="list-disc list-inside space-y-2">
                      {t.leftColumn.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                      {t.rightColumn.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mt-6">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <FileText size={20} style={{ color: "#02A345" }} />
                      <span>
                        <span className="font-semibold">Kontrak Minimal:</span>{" "}
                        {t.contract}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Clock size={20} style={{ color: "#02A345" }} />
                      <span>
                        <span className="font-semibold">Durasi:</span>{" "}
                        {t.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right images: 3 tall cards */}
                <div className="order-1 lg:order-2">
                  <div className="flex flex-wrap justify-center gap-4 w-[90%] mx-auto">
                    {t.imageSet.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${t.title} ${idx + 1}`}
                        className="rounded-2xl shadow-md object-cover w-[30%] h-[380px]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* FULL-WIDTH Problems & Solutions */}
              {(t.problems?.length || t.solutions?.length) && (
                <div className="mt-8 grid lg:grid-cols-2 gap-6">
                  {t.problems && (
                    <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle
                          size={20}
                          className="shrink-0"
                          style={{ color: "#dc2626" }}
                        />
                        <h4 className="font-semibold text-red-700">Problems</h4>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-red-800">
                        {t.problems.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {t.solutions && (
                    <div className="rounded-xl border border-green-100 bg-green-50 p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2
                          size={20}
                          className="shrink-0"
                          style={{ color: "#16a34a" }}
                        />
                        <h4 className="font-semibold text-green-700">
                          Solutions
                        </h4>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-green-800">
                        {t.solutions.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* CTA */}
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

export default ManagementServices;
