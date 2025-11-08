import { Link } from "react-router-dom";
import { ArrowLeft, Users, Clock, Dot } from "lucide-react";
import type { ReactNode } from "react";
import ScrollToTop from "@/components/ScrollToTop";

type Detail = { label: string; value: string; icon: ReactNode };
type Bullet = { name: string; icon: ReactNode };

const splitAndHighlight = (text: string) => {
  // Split on em-dash or regular hyphen surrounded by spaces
  const parts = text.split(" — ") || text.split(" - ");

  if (parts.length >= 2) {
    const [prefix, ...rest] = parts;
    return (
      <>
        <span className="font-semibold text-gray-900">{prefix}</span>
        <span> — {rest.join(" — ")}</span>
      </>
    );
  }
  return <>{text}</>;
};

const SMEEmpowerment = () => {
  const programs: Array<{
    id: string;
    title: string;
    description: string;
    image: string;
    image2?: string; // second image (UMKM Intensive)
    details?: Detail[];
    topics?: Bullet[]; // UMKM Intensive topics
    module?: Bullet[]; // UMKM Intensive methods
    benefits?: Bullet[]; // Mentor benefits
    diagramChips?: string[]; // Mentor diagram points
  }> = [
    {
      id: "umkm-intensive",
      title: "UMKM INTENSIVE TRAINING & COACHING",
      description:
        "Pelatihan bagi para pelaku UMKM menuju UMKM Naik Kelas dengan sebuah kombinasi program pelatihan dan pendampingan bisnis yang terarah dan terukur.",
      image: "/images/sme/umkm-intensive-1.png",
      image2: "/images/sme/umkm-intensive-2.png",
      details: [
        {
          label: "Peserta",
          value:
            "Pelaku UMKM yang sudah memiliki produk atau jasa yang ditawarkan",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi Pelatihan",
          value: "8 pertemuan (seminggu sekali) @300 menit",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi Coaching/Pendampingan Bisnis",
          value: "1 sesi per minggu @2 jam",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
      ],
      topics: [
        {
          name: "Produk & Jasa — Solusi apa yang ditawarkan kepada pelanggan",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Bisnis Model — Bagaimana bisnis dijalankan sampai menghasilkan profit",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Bisnis Proses — Proses apa saja yang perlu dijalankan",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Manajemen Keuangan — Skema biaya, skema harga, hingga laporan keuangan",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Pemasaran & CRM — Eksistensi di pasar dan pengelolaan CRM",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Penjualan & Saluran Distribusi — Menentukan channel dan mendorong transaksi",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Strategi Pengembangan Bisnis — Menjaga kestabilan omzet & melindungi pelanggan dari kompetitor",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
      ],
      module: [
        {
          name: "Hybrid — Metode fleksibel menyesuaikan kebutuhan mentee",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Mentoring one-on-one melalui WA/Telegram/ZOOM (limited) selama durasi pembelajaran",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Ilmu Terapan — Aplikatif (70% Hard Skills)",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Journal & KPI personal (mingguan & global)",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Penugasan di setiap sesi sesuai materi",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Pendampingan intensif selama masa training & coaching",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
      ],
    },
    {
      id: "mentor-umkm",
      title: "MENTOR UMKM TRAINING & COACHING",
      description:
        "Pelatihan bagi pelaku UMKM yang sudah naik kelas dan ingin menjadi mentor bagi pelaku UMKM lainnya agar semakin banyak UMKM yang naik kelas.",
      image: "/images/sme/mentor-umkm2.jfif",
      details: [
        {
          label: "Peserta",
          value:
            "Pelaku UMKM yang sudah naik kelas dan lolos uji kelayakan untuk menjadi mentor UMKM",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "3 hari 2 malam (menginap)",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
      ],
      benefits: [
        {
          name: "Bisnis/pekerjaan di-mentoring & di-coaching langsung oleh Master Trainer dengan investasi kecil",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Kesempatan melayani sebagai mentor & pendamping bisnis di Marketplace",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "Kesempatan belajar dan berkarier sebagai Konsultan & Trainer",
          icon: <Dot size={24} style={{ color: "#02A345" }} />,
        },
      ],
      diagramChips: [
        "UMKM TRAINING MODUL",
        "PEMETAAN BISNIS",
        "MENTORING YANG EFEKTIF",
        "IDENTIFIKASI MASALAH & SOLUSI",
      ],
    },
  ];

  return (
    <div className="pt-32">
      <ScrollToTop />

      {/* HERO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 mb-12 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Kembali ke Layanan</span>
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              SME <span style={{ color: "#02A345" }}>EMPOWERMENT</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membantu UMKM naik kelas melalui pelatihan dan pendampingan yang
              komprehensif dengan menyediakan program yang terarah, terukur dan
              praktis untuk meningkatkan keterampilan manajerial, memperkuat
              strategi bisnis, dan mendorong inovasi.
            </p>
            <div className="mt-8">
              <img
                src="/images/sme/sme-empowerment.jpg"
                alt="SME Empowerment Overview"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover h-64"
              />
            </div>
          </div>

          {/* PROGRAM CARDS */}
          {programs.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left: text */}
                <div className="order-2 lg:order-1 space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {program.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {program.description}
                  </p>

                  {/* Details */}
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

                  {/* Topics (UMKM Intensive) */}
                  {program.topics && (
                    <div className="space-y-3 pt-4">
                      <h3 className="text-2xl font-bold text-gray-700">
                        Topik Utama:
                      </h3>
                      {program.topics.map((t, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          {t.icon}
                          <span>{splitAndHighlight(t.name)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Methods (UMKM Intensive) */}
                  {program.module && (
                    <div className="space-y-3 pt-6">
                      <h3 className="text-2xl font-bold text-gray-700">
                        Metode Pelatihan & Pendampingan:
                      </h3>
                      {program.module.map((m, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          {m.icon}
                          <span>{splitAndHighlight(m.name)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Benefits (Mentor UMKM) */}
                  {program.benefits && (
                    <div className="space-y-3 pt-4">
                      <h3 className="text-2xl font-bold text-gray-700">
                        Keuntungan Program:
                      </h3>
                      {program.benefits.map((b, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          {b.icon}
                          <span>{b.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Diagram chips (Mentor UMKM) */}
                  {program.diagramChips && (
                    <div className="pt-6">
                      <div className="flex flex-wrap gap-3">
                        {program.diagramChips.map((chip, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-full text-sm font-semibold text-white"
                            style={{
                              backgroundColor: [
                                "#0EA5E9", // blue
                                "#84CC16", // olive/green
                                "#0F766E", // teal/dark
                                "#7C3AED", // violet/alt
                              ][i % 4],
                            }}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right: images */}
                <div className="order-1 lg:order-2 space-y-5">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-[480px] object-cover rounded-2xl shadow-md"
                  />
                  {program.image2 && (
                    <img
                      src={program.image2}
                      alt={`${program.title} – additional`}
                      className="w-full h-[480px] object-cover rounded-2xl shadow-md"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Bersifat Umum Untuk Siapapun, Waktu Pengerjaan Dibebaskan
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

export default SMEEmpowerment;
