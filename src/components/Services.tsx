import {
  Users,
  Target,
  TrendingUp,
  User,
  Building,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const Services = () => {
  const services = [
    {
      icon: <Users style={{ color: "#02A345" }} size={48} />,
      title: "Business Training",
      description:
        "Program pelatihan komprehensif yang dirancang khusus untuk meningkatkan keterampilan tim dan individu dalam berbagai aspek bisnis.",
      href: "/services/business-training", // Link to dedicated page
      id: "business-training",
    },
    {
      icon: <Target style={{ color: "#02A345" }} size={48} />,
      title: "Business Coaching",
      description:
        "Sesi coaching personal dan grup yang intensif untuk membantu mencapai tujuan bisnis dan pengembangan diri yang optimal.",
      href: "/services/business-coaching", // Updated to dedicated page
      id: "business-coaching",
    },
    {
      icon: <TrendingUp style={{ color: "#02A345" }} size={48} />,
      title: "SME Empowerment",
      description:
        "Program khusus untuk mengembangkan UMKM menjadi bisnis yang lebih besar dan berkelanjutan dengan strategi yang tepat.",
      href: "/services/sme-empowerment", // Updated to dedicated page
      id: "sme-empowerment",
    },
    {
      icon: <User style={{ color: "#02A345" }} size={48} />,
      title: "Personal Mapping",
      description:
        "Analisis mendalam tentang potensi, kekuatan, dan area pengembangan personal untuk mencapai kesuksesan yang berkelanjutan.",
      href: "/services/personal-mapping", // Updated to dedicated page
      id: "personal-mapping",
    },
    {
      icon: <Building style={{ color: "#02A345" }} size={48} />,
      title: "Business Consulting",
      description:
        "Pemetaan strategis bisnis untuk mengidentifikasi peluang, tantangan, dan roadmap menuju pertumbuhan yang berkelanjutan.",
      href: "/services/business-consulting", // Updated to dedicated page
      id: "business-consulting",
    },
    {
      icon: <Briefcase style={{ color: "#02A345" }} size={48} />,
      title: "Management Services",
      description:
        "Layanan konsultasi mendalam untuk membantu organisasi merumuskan strategi bisnis yang efektif dan implementasinya.",
      href: "/services#management-services", // Anchor link
      id: "management-services",
    },
  ];

  return (
    <div className="pt-32">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan profesional untuk membantu
              transformasi bisnis dan pengembangan personal Anda menuju
              kesuksesan yang berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                id={service.id} // Add ID for anchor links
                className="block bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div
                  className="font-semibold hover:opacity-80 transition-colors flex items-center space-x-2"
                  style={{ color: "#02A345" }}
                >
                  <span>Pelajari Lebih Lanjut</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
              style={{ backgroundColor: "#02A345" }}
            >
              Konsultasi Gratis Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
