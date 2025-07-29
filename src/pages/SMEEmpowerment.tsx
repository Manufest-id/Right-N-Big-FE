import { Link } from "react-router-dom";
import { ArrowLeft, Users, Clock } from "lucide-react";

const SMEEmpowerment = () => {
  const programs = [
    {
      id: "umkm-intensive",
      title: "UMKM INTENSIVE TRAINING & COACHING PROGRAM",
      description:
        "Pelatihan bagi para pelaku UMKM menuju UMKM Naik Kelas dengan sebuah kombinasi program pelatihan dan pendampingan bisnis yang terarah dan terukur.",
      image: "/images/sme/umkm-intensive.jpg",
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
    },
    {
      id: "mentor-umkm",
      title: "MENTOR UMKM TRAINING & COACHING",
      description:
        "Sebuah pelatihan yang ditujukan bagi pelaku usaha UMKM yang sudah naik kelas dan memiliki kerinduan untuk menjadi penolong sebagai mentor bagi pelaku-pelaku UMKM lainnya agar semakin banyak UMKM yang naik kelas.",
      image: "/images/sme/mentor-umkm.jpg",
      details: [
        {
          label: "Peserta",
          value:
            "Para pelaku UMKM yang sudah naik kelas dan lolos uji kelayakan sebagai pelaku UMKM yang layak menjadi mentor UMKM di kemudian hari",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "3 hari 2 malam (menginap)",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
      ],
    },
  ];

  return (
    <div className="pt-32">
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

          {/* Hero Section for SME Empowerment */}
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

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-gray-900 mb-6">
              Bersifat Umum Untuk Siapapun, Waktu Pengerjaan Dibebaskan
            </p>
            <Link
              to="/contact"
              className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
              style={{ backgroundColor: "#02A345" }}
            >
              Konsultasi Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMEEmpowerment;
