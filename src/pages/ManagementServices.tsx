import { Link } from "react-router-dom";
import { FileText, Clock, ArrowLeft } from "lucide-react";

const ManagementServices = () => {
  const salesMarketingDetails = {
    title: "SALES & MARKETING MANAGEMENT SERVICES",
    subtitle:
      "Strategic partner to manage and empower your sales & marketing team",
    description:
      "Pelayanan manajemen berbasis kemitraan yang membantu pemilik bisnis dalam mengelola divisi sales & marketing dengan metode terlengkap dan terpadu yang terdiri dari:",
    leftColumn: [
      "Blueprint sales & marketing",
      "Sales & Marketing Strategy",
      "Perencanaan (action plan)",
      "Rekrutmen, seleksi dan orientasi",
      "Penetapan target",
      "Sales & Marketing funneling & progress",
      "Pemantauan kinerja sales",
    ],
    rightColumn: [
      "Sistem laporan harian",
      "Customer Relationship Management",
      "Sales & marketing support",
      "Skema remunerasi",
      "KPI dan reward & punishment",
      "Pembagian insentif",
    ],
    contract: "kontrak minimal 12 bulan",
    duration:
      "6 mandays per bulan di 3 bulan pertama, 4 mandays per bulan ke 4 dst.",
  };

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

          {/* Hero Section for Management Services */}
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

          {/* Sales & Marketing Management Services Section */}
          <div
            id="sales-marketing-management"
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {salesMarketingDetails.title}
                  </h2>
                  <img
                    src="/images/management-services/best-seller.png"
                    alt="Best Seller"
                    className="w-24 h-auto -rotate-6"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700">
                  {salesMarketingDetails.subtitle}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {salesMarketingDetails.description}
                </p>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-gray-800 text-lg">
                  <ul className="list-disc list-inside space-y-2">
                    {salesMarketingDetails.leftColumn.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    {salesMarketingDetails.rightColumn.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <FileText size={20} style={{ color: "#02A345" }} />
                    <span>
                      <span className="font-semibold">Kontrak Minimal:</span>{" "}
                      {salesMarketingDetails.contract}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Clock size={20} style={{ color: "#02A345" }} />
                    <span>
                      <span className="font-semibold">Durasi:</span>{" "}
                      {salesMarketingDetails.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/images/management-services/sales-and-marketing.jpg"
                  alt={salesMarketingDetails.title}
                  className="w-full h-72 object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>

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
              Konsultasi Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementServices;
