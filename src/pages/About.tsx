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
    <div className="pt-32">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Tentang RightNBig
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  RightNBig adalah perusahaan konsultan bisnis dan pengembangan
                  SDM yang berkomitmen membantu individu dan organisasi mencapai
                  potensi terbaik mereka. Dengan motto "Menjadi Benar, Menjadi
                  Besar", kami percaya bahwa kesuksesan sejati dimulai dari
                  fondasi yang benar.
                </p>
                <p>
                  Kami menyediakan layanan coaching, training, dan konsultasi
                  yang dirancang khusus untuk mengembangkan kemampuan
                  leadership, meningkatkan kinerja tim, dan mengakselerasi
                  pertumbuhan bisnis.
                </p>
                <p>
                  Tim ahli kami terdiri dari praktisi berpengalaman yang
                  memiliki rekam jejak sukses dalam berbagai industri, siap
                  membantu Anda mencapai transformasi yang berkelanjutan.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="About RightNBig"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Eye style={{ color: "#02A345" }} className="mr-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi mitra terpercaya dalam transformasi bisnis dan
                pengembangan SDM yang membantu menciptakan pemimpin-pemimpin
                masa depan yang berintegritas dan berdampak positif bagi
                masyarakat.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Target
                  style={{ color: "#996533" }}
                  className="mr-4"
                  size={32}
                />
                <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Memberikan layanan coaching dan training berkualitas tinggi yang
                mengembangkan potensi individu dan organisasi, menciptakan
                budaya kerja yang positif, dan mendorong pertumbuhan bisnis yang
                berkelanjutan.
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
    </div>
  );
};

export default About;
