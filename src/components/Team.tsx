import { Linkedin, Mail, Phone } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Tony Chen",
      position: "CEO & Founder",
      image: "/images/team/tony-chen.png",
      description:
        "CEO & Founder Right n Big Coaching & Consultant. Sales Lead Consultant & Senior Trainer QQ Group. Master Trainer – Business Coach & Consultant. Master in Global Business: Operations Management. Sales & Communication Specialist. UMKM Expert.",
    },
    {
      name: "Julian Foe, M.Pd",
      position: "Senior Director & Leadership Expert",
      image: "/images/team/julian-foe.png",
      description:
        "Former Senior Director – Asia Pacific Retail Institute. Country Director – Global Leadership Summit – Indonesia. Founding Member – Master's Hand Foundation. HR Advisor – various national & multinational company. National & International Speaker: Leadership Topic. Master in Education: Educational Technology. Senior Consultant, Trainer.",
    },
    {
      name: "Fransisca Diwanti, SH., MM., CCP.",
      position: "Commissioner & Education Leader",
      image: "/images/team/fransisca-diwanti.png",
      description:
        "Komisaris – PT Theralife Esensia Indonesia. Wakil Rektor III – Universitas Mahakarya Asia. Dosen – STIEBBANK Yogyakarta. Wakil Ketua II – STIEBBANK Yogyakarta. Direktur – Akademi Pariwisata Buana Wisata Yogyakarta. Ketua Dewan Pembina – Asosiasi Manjemen Indonesia BPC DIY. Pengurus – KADIN DIY Bidang Humas. Owner – De Kayon Rasa Resto. President – Lions Club Yogyakarta.",
    },
    {
      name: "Dr. Helena Rahayu (Yayuk)",
      position: "Medical Doctor & Sales Marketing Expert",
      image: "/images/team/helena-rahayu.png",
      description:
        "Medical Doctor. More than 30 years experienced as Sales Marketing Expert in several MNC's such as Pfizer, GSK, Wyeth, Abbott, Mead Johnson and Reckitt Benckiser. Trainer, Life Coach and Licensed Practitioner NLP. Senior Facilitator of MarkPlus Indonesia by Herman Kartajaya.",
    },
    {
      name: "Amanda Setiadi, BSc",
      position: "Accounting & Finance Manager",
      image: "/images/team/amanda-setiadi.png",
      description:
        "Accounting & Finance – Manager Auditor. Senior Audit Consultant – Big 4. Accounting Firm, Ernst & Young Indonesia. Audit Advisor & Manager at Brandmarkable Consulting Management. Accounting – Periplus, Escorindo Forwarding, Astro TV.",
    },
    {
      name: "Yosephine D.M.W.",
      position: "Environmental Management Consultant",
      image: "/images/team/yosephine-dmw.png",
      description:
        "Anggota Komite Teknis 13-07 – Manajemen Lingkungan dan Ekolabel, Pusta. Tim Founder – Asosiasi Profesi LCA & Sustainability ProLCAS. Konsultan dan Trainer – Sistem Manajemen Lingkungan, Mutu, K3, Ekolabel, LCA, RECP, Green Chemistry. 25+ Tahun pengalaman – Konsultansi, Auditing, Pelatihan tentang AMDAL, Manajemen Lingkungan, Mutu dan K3 pada berbagai macam industri / organisasi selama di PT. Sucofindo dan PT. SGS Indonesia.",
    },
    {
      name: "Ir. Ruddy Handoko",
      position: "Insurance & Risk Management Consultant",
      image: "/images/team/ruddy-handoko.png",
      description:
        "Insurance Consultant & Specialist (General, Health, Life). Risk Management Consultant. Agribusiness Consultant.",
    },
    {
      name: "Andreas Gatot Broto, SE., M.Si., Ak, CA",
      position: "Registered Accountant & Business Consultant",
      image: "/images/team/andreas-gatot.png",
      description:
        "REG. ACCOUNTANT: RNA.9405 / AK. CHARTERED ACCOUNTANT: 11.D19510 / CA. Bachelor Degree: Accounting at Diponegoro University. Master: Management Accounting at Diponegoro University. Consulting Business in Operations, Finance / Accounting and Tax Management. Controller at PT Nagita Trans Utama. Lecturer at Faculty of Economics and Business [Sebelas Maret University].",
    },
    {
      name: "Dimas Rizki",
      position: "Senior Creative & Digital Marketing",
      image: "/images/team/dimas-rizki.png",
      description:
        "Senior Tim Creative at Right n Big Coaching & Consulting. Content Creator Trainer & Consultant. Professional Photographer & Videographer. Digital Marketing Consultant. Social Media Specialist.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tim Ahli Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bertemu dengan tim profesional yang berpengalaman dan berkomitmen
            membantu kesuksesan transformasi bisnis dan pengembangan diri Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Linkedin size={20} />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Mail size={20} />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Phone size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="font-semibold mb-3" style={{ color: "#02A345" }}>
                  {member.position}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
            style={{ backgroundColor: "#02A345" }}
          >
            Konsultasi dengan Tim Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
