import { Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  const whyChooseUs = [
    {
      title: "Pengalaman 10+ Tahun",
      description:
        "Tim berpengalaman dengan track record yang terbukti dalam mengembangkan bisnis dan individu",
    },
    {
      title: "Metodologi Teruji",
      description:
        "Menggunakan metodologi coaching dan training yang telah terbukti efektif secara internasional",
    },
    {
      title: "Pendekatan Personal",
      description:
        "Setiap program disesuaikan dengan kebutuhan spesifik klien untuk hasil yang optimal",
    },
    {
      title: "Hasil Terukur",
      description:
        "Fokus pada pencapaian hasil yang dapat diukur dan berkelanjutan",
    },
  ];

  return (
    <section id="about" className="bg-white">
      {/* Full-width dark background */}
      <div className="w-full bg-gradient-to-b from-slate-800 to-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid lg:grid-cols-3 gap-8 items-start mt-20">
          {/* Left card - Tentang Kami */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 lg:col-span-2">
            <h3 className="text-3xl font-bold text-cyan-700 mb-2">
              Tentang Kami
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-amber-400 mb-6 rounded-full"></div>

            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Perusahaan kami berdiri atas panggilan untuk melayani para pelaku
              usaha dengan
              <span className="text-cyan-700 font-semibold">
                {" "}
                dedikasi penuh
              </span>
              , membantu mereka menghadapi tantangan dan perubahan dalam dunia
              bisnis yang dinamis, serta mendorong pertumbuhan berkelanjutan.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Kami berkomitmen untuk memberikan
              <span className="text-cyan-700 font-semibold">
                {" "}
                dukungan strategis
              </span>{" "}
              dan
              <span className="text-cyan-700 font-semibold">
                {" "}
                solusi inovatif
              </span>{" "}
              agar setiap bisnis yang kami layani dapat terus berkembang menjadi
              lebih baik dari waktu ke waktu.
            </p>

            {/* Tags */}
            <div className="flex gap-3 flex-wrap mt-6">
              <span className="bg-cyan-100 text-cyan-700 font-medium text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>{" "}
                Strategis
              </span>
              <span className="bg-amber-100 text-amber-700 font-medium text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>{" "}
                Inovatif
              </span>
              <span className="bg-sky-100 text-sky-700 font-medium text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>{" "}
                Berkelanjutan
              </span>
            </div>
          </div>

          {/* Right card - Profile */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-12 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-amber-400 p-1 mb-4">
              <div className="w-full h-full rounded-full bg-white p-1">
                <img
                  src="/images/tony-profile.png"
                  alt="Tony Chen"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="bg-amber-400 text-white px-4 py-1.5 rounded-full text-sm font-semibold inline-block mb-2">
              TONY CHEN
            </div>

            <h4 className="text-lg font-bold text-gray-800 mb-1">
              CEO & Founder
            </h4>
            <p className="text-gray-500 text-sm mb-4">
              Right n Big Coaching & Consulting
            </p>

            <div className="flex justify-center gap-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision, Mission, Goal */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Vision */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
            <div className="mb-6">
              <img
                src="/images/vision.jpg"
                alt="Vision"
                className="w-full h-40 object-cover rounded-2xl mb-4"
              />
              <div className="w-16 h-16 bg-orange-400 rounded-2xl mx-auto flex items-center justify-center transform rotate-45">
                <Eye className="text-white transform -rotate-45" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">VISION</h3>
            <p className="text-gray-700 leading-relaxed">
              Pusat pelayanan terlengkap dalam pengembangan bisnis dan
              peningkatan kualitas sumber daya manusia
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
            <div className="mb-6">
              <img
                src="/images/mission.jpg"
                alt="Mission"
                className="w-full h-40 object-cover rounded-2xl mb-4"
              />
              <div className="w-16 h-16 bg-orange-400 rounded-2xl mx-auto flex items-center justify-center transform rotate-45">
                <Target className="text-white transform -rotate-45" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MISSION</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi mitra strategis bagi para pelaku bisnis di Indonesia dalam
              mengembangkan bisnis dan manusia di dalamnya.
            </p>
          </div>

          {/* Goal */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center border border-gray-100">
            <div className="mb-6">
              <img
                src="/images/goal.jpg"
                alt="Goal"
                className="w-full h-40 object-cover rounded-2xl mb-4"
              />
              <div className="w-16 h-16 bg-orange-400 rounded-2xl mx-auto flex items-center justify-center transform rotate-45">
                <CheckCircle
                  className="text-white transform -rotate-45"
                  size={24}
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">GOAL</h3>
            <p className="text-gray-700 leading-relaxed">
              Memberikan solusi untuk keluar dari setiap tantangan dalam dunia
              bisnis serta mengembangkan bisnis ke level yang lebih tinggi
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h3>
            <p className="text-xl text-gray-600">
              Keunggulan yang membuat kami berbeda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              >
                <CheckCircle
                  style={{ color: "#02A345" }}
                  className="mx-auto mb-4"
                  size={48}
                />
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
