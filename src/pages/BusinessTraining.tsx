import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Target,
  Briefcase,
  Lightbulb,
  Handshake,
  MessageSquare,
  Award,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";
import * as React from "react";

const BusinessTraining = () => {
  type Program = {
    id: string;
    title: string;
    description: string;
    image: string;
    details: { label: string; value: string; icon: React.JSX.Element }[];
    content: string[];
    subtitle?: string;
    modules?: { name: string; description: string; icon: React.JSX.Element }[];
    acronym?: { letter: string; word: string; description: string }[];
    quote?: string;
    concepts?: { name: string; description: string; icon: React.JSX.Element }[];
    values?: string[];
    programName?: string;
  };
  const programs: Program[] = [
    {
      id: "sales-revolution",
      title: "REVOLUTION SALES",
      description:
        "Pelatihan komprehensif bagi tenaga penjual (salesman) yang berorientasi target dengan pelayanan yang prima.",
      image: "/images/training/business-training.jpg",
      details: [
        {
          label: "Peserta",
          value: "Salesman, sales SPV/manager, customer service & sales admin",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "120 menit per modul",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
      ],
      content: [
        "Pelatihan ini dirancang untuk membekali tenaga penjual dengan strategi dan teknik penjualan mutakhir, fokus pada pencapaian target dan pelayanan pelanggan yang unggul.",
        "Materi meliputi negosiasi, penanganan keberatan, membangun hubungan jangka panjang dengan klien, dan optimalisasi proses penjualan.",
      ],
    },
    {
      id: "leadership",
      title: "MID LEADERSHIP",
      description: "Pelatihan kepemimpinan untuk pemimpin level menengah.",
      image: "/images/training/mid-leadership.jpg",
      details: [
        {
          label: "Peserta",
          value: "Middle level leader (manager, SPV, division head)",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "3 hari (total 24 jam)",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
      ],
      modules: [
        {
          name: "LEADER’S THINK",
          description:
            "Mengubah pola pikir seorang pemimpin dan menanamkan nilai-nilai kepemimpinan yang unggul, membawa dampak positif bagi hidup pribadi dan perusahaan.",
          icon: <Lightbulb size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "LEADER’S TALK",
          description:
            "Melatih para pemimpin agar memiliki kemampuan berkomunikasi yang baik, efektif, membawa dampak positif bagi lingkungan sekitarnya.",
          icon: <MessageSquare size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "LEADER’S ACTION",
          description:
            "Melatih para pemimpin agar mampu mengambil keputusan yang tepat dan mampu menyelesaikan setiap masalah atau tantangan yang dihadapi.",
          icon: <CheckCircle size={24} style={{ color: "#02A345" }} />,
        },
      ],
      content: [],
    },
    {
      id: "moves",
      title: "MOVES",
      description:
        "Sebuah program pelatihan bagi tim kerja sebuah perusahaan atau organisasi dengan konsep outbound dengan tujuan meningkatkan motivasi, kerjasama tim, komunikasi yang terbuka dan efektif di antara departemen dan sub departemen, koordinasi, serta kemauan untuk mau terus belajar meningkatkan diri menjadi lebih baik dari hari ke hari untuk dapat selalu memberikan nilai tambah bagi diri sendiri maupun bagi perusahaan dalam rangka pencapaian target bersama.",
      image: "/images/training/moves.jpg",
      details: [
        {
          label: "Peserta",
          value:
            "Semua level di perusahaan dari level teratas sampai level terbawah",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "3 hari 2 malam",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
      ],
      acronym: [
        {
          letter: "M",
          word: "Motivated",
          description:
            "Setiap peserta termotivasi untuk mau berubah ke arah yang lebih baik. Motivasi menuju perubahan harus berawal dari setiap pribadi dan mendorong perubahan dalam tim perusahaan.",
        },
        {
          letter: "O",
          word: "Open Minded",
          description:
            "Setiap peserta memiliki pola pikir terbuka akan hal-hal baru, memiliki semangat dalam mengembangkan kapasitas pribadi dan perusahaan untuk mencapai tujuan bersama.",
        },
        {
          letter: "V",
          word: "Value Added",
          description:
            "Setiap peserta memiliki pola pikir, pola belajar dan pola kerja yang mampu menghasilkan perilaku memberi nilai tambah dalam setiap aktifitas pekerjaan baik bagi hidup pribadi maupun bagi perusahaan.",
        },
        {
          letter: "E",
          word: "Engaged",
          description:
            "Setiap peserta mampu bekerja selaras dengan dinamika perusahaan serta mampu bekerja sama dan berkoordinasi dalam tim dan antar divisi dalam perusahaan.",
        },
        {
          letter: "S",
          word: "Shifting Up",
          description:
            "Setiap peserta diajak untuk menjadi agen perubahan dan penggerak perusahaan ke arah yang lebih baik (Going to the next level).",
        },
      ],
      content: [],
    },
    {
      id: "communication-public-speaking",
      title: "Communication & Public Speaking Mastery",
      quote: "“If you can SPEAK Better, you can make your own WORLD Better”",
      description:
        "Tujuh Aturan Emas Berbicara di Depan Publik. Lancar & Sempurna Berbicara di Depan Publik. Jadikan orang lain: Menyukai Anda - Menghormati Anda - Mempercayai Anda.",
      image: "/images/training/communication-and-publicspeaking.jpg",
      details: [
        {
          label: "Peserta",
          value: "All Sales Team & Public Relation Officer",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "3 jam per 1 sesi coaching (modul)",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Penilaian",
          value: "3x Tugas praktek, 1x Ujian praktek, Raport & Sertifikat",
          icon: <Award size={20} style={{ color: "#02A345" }} />,
        },
      ],
      concepts: [
        {
          name: "CONTROL / KONTROL",
          description: "bagaimana cara mengesankan dan menginspirasi penonton?",
          icon: <Target size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "CONTENT / KONTEN",
          description: "bagaimana membuat konten yang bagus?",
          icon: <Briefcase size={24} style={{ color: "#02A345" }} />,
        },
        {
          name: "CONTEXT / KONTEKS",
          description: "bagaimana membangun suasana?",
          icon: <MapPin size={24} style={{ color: "#02A345" }} />,
        },
      ],
      content: [],
    },
    {
      id: "employee-to-intrapreneur",
      title: "From Employee to Intrapreneur",
      description:
        "Tujuan: mengubah pola pikir karyawan dari seorang pegawai menjadi seorang intrapreneur dengan menanamkan nilai-nilai utama yang diperlukan untuk menjadi seorang kontributor di dalam perusahaan, tidak hanya menjadi beban perusahaan tetapi sungguh-sungguh mampu memberi sebuah dampak positif bagi divisi tempat kerjanya dan perusahaan pada umumnya.",
      image: "/images/training/employee-to-intrapreneur.jpg",
      details: [
        {
          label: "Peserta",
          value: "Semua level dalam perusahaan terutama staff",
          icon: <Users size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Durasi",
          value: "2 sesi @ 2 jam (total 4 jam)",
          icon: <Clock size={20} style={{ color: "#02A345" }} />,
        },
        {
          label: "Metode",
          value: "training, studi kasus, simulation, and discussion",
          icon: <Handshake size={20} style={{ color: "#02A345" }} />,
        },
      ],
      values: [
        "Tanggung jawab",
        "Disiplin",
        "Ketekunan",
        "Kejujuran",
        "Integritas",
      ],
      programName: "JOY of Working (GRACE)",
      content: [],
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

          {/* Hero Section for Business Training */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              BUSINESS <span style={{ color: "#02A345" }}>TRAINING</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pelatihan bisnis dengan topik manajemen, kepemimpinan, pemasaran,
              keuangan, dan keterampilan teknis lainnya dengan tujuan untuk
              meningkatkan kinerja individu dan tim, sehingga dapat
              berkontribusi lebih efektif terhadap tujuan dan strategi
              organisasi.
            </p>
            <div className="mt-8">
              <img
                src="/images/training/business-training.jpg"
                alt="Business Training Overview"
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

                  {program.content && (
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {program.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {program.modules && (
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {program.modules.map((module, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            {module.icon}
                            <h4 className="text-xl font-bold text-gray-900">
                              {module.name}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {module.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {program.acronym && (
                    <div className="space-y-4 mt-6">
                      {program.acronym.map((item, idx) => (
                        <div key={idx}>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">
                            <span style={{ color: "#02A345" }}>
                              {item.letter}
                            </span>
                            . {item.word}
                          </h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {program.concepts && (
                    <div className="space-y-4 mt-6">
                      {program.concepts.map((concept, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          {concept.icon}
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">
                              {concept.name}
                            </h4>
                            <p className="text-gray-600">
                              {concept.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {program.values && (
                    <div className="mt-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        VALUE
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {program.values.map((value, idx) => (
                          <span
                            key={idx}
                            className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {value}
                          </span>
                        ))}
                      </div>
                      {program.programName && (
                        <p className="text-gray-700 mt-4">
                          Program:{" "}
                          <span
                            className="font-semibold"
                            style={{ color: "#996533" }}
                          >
                            {program.programName}
                          </span>
                        </p>
                      )}
                    </div>
                  )}

                  {program.quote && (
                    <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 text-xl">
                      "{program.quote}"
                    </blockquote>
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
              Konsultasi Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessTraining;
