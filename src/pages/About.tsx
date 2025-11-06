import {
  Target,
  Eye,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import { useRef, useState } from "react";

const About = () => {
  const [currentPorto, setCurrentPorto] = useState("bank");

  const whyChooseUs = [
    {
      title: "Reliable",
      description:
        "Dapat diandalkan dalam memberikan solusi bisnis dan pemecahan masalah.",
    },
    {
      title: "Integrity",
      description:
        "Menjunjung tinggi integritas dan nilai-nilai kebenaran dalam seluruh aspek bisnis.",
    },
    {
      title: "Growing Partner",
      description:
        "Mitra strategis dalam mengembangkan bisnis ke level yang lebih tinggi.",
    },
    {
      title: "Humility",
      description:
        "Mengembangkan bisnis melalui manusia dan mengembangkan manusia melalui bisnis.",
    },
    {
      title: "Trustworthy",
      description:
        "Terpercaya dan menjaga kepercayaan yang diberikan oleh semua stakeholder.",
    },
  ];

  type PortoItem = {
    image: string;
  };

  const bank: PortoItem[] = [
    { image: "/images/portofolio/banknfinance/bcafinance.png" },
    { image: "/images/portofolio/banknfinance/JETS.png" },
    { image: "/images/portofolio/banknfinance/kospin.png" },
    { image: "/images/portofolio/banknfinance/mandiri-taspen-logo.png" },
    { image: "/images/portofolio/banknfinance/permata.png" },
  ];

  const government: PortoItem[] = [
    { image: "/images/portofolio/government/banyumas.png" },
    { image: "/images/portofolio/government/bnpt.png" },
    { image: "/images/portofolio/government/pegadaian-logo.png" },
    { image: "/images/portofolio/government/sucofindo.png" },
    { image: "/images/portofolio/government/tangerang.png" },
    { image: "/images/portofolio/government/yogyakarta.png" },
  ];

  const it: PortoItem[] = [
    { image: "/images/portofolio/it/asani.png" },
    { image: "/images/portofolio/it/axioo.png" },
    { image: "/images/portofolio/it/cbn.png" },
    { image: "/images/portofolio/it/edavos.png" },
    { image: "/images/portofolio/it/fiberstar.png" },
    { image: "/images/portofolio/it/netwave.png" },
    { image: "/images/portofolio/it/sentral.png" },
    { image: "/images/portofolio/it/tdi.jpeg" },
  ];

  const fnb: PortoItem[] = [
    { image: "/images/portofolio/fnb/bagoja.jpg" },
    { image: "/images/portofolio/fnb/mixue-logo.png" },
    { image: "/images/portofolio/fnb/palmes.jpg" },
    { image: "/images/portofolio/fnb/samara.png" },
    { image: "/images/portofolio/fnb/taucy.png" },
    { image: "/images/portofolio/fnb/wedrink.png" },
  ];

  const distribution: PortoItem[] = [
    { image: "/images/portofolio/trading/ario.png" },
    { image: "/images/portofolio/trading/goflow.jpg" },
    { image: "/images/portofolio/trading/wjs.png" },
  ];

  const education: PortoItem[] = [
    { image: "/images/portofolio/education/life-talk.png" },
    { image: "/images/portofolio/education/PCMI.jpg" },
    { image: "/images/portofolio/education/pertanian-bogor.png" },
    { image: "/images/portofolio/education/regina.jpg" },
    { image: "/images/portofolio/education/taruna-bangsa.png" },
  ];

  const insurance: PortoItem[] = [
    { image: "/images/portofolio/insurance/allianz-logo.png" },
    { image: "/images/portofolio/insurance/fwd.png" },
    { image: "/images/portofolio/insurance/manulife-logo.png" },
    { image: "/images/portofolio/insurance/prudential.png" },
  ];

  const manufacture: PortoItem[] = [
    { image: "/images/portofolio/manufacture/dinasira.jpg" },
  ];

  const creative: PortoItem[] = [
    { image: "/images/portofolio/creative/hantam.png" },
  ];

  const hospital: PortoItem[] = [
    { image: "/images/portofolio/hospital/bella.jpg" },
  ];
  const portoData: Record<string, PortoItem[]> = {
    bank,
    government,
    it,
    fnb,
    distribution,
    education,
    insurance,
    manufacture,
    creative,
    hospital,
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  // Fungsi scroll
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handlePorto = (id: string) => {
    setCurrentPorto(id);
  };

  return (
    <section id="about" className="bg-white">
      <ScrollToTop />
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
          </div>

          {/* Right card - Profile */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-12 text-center">
            <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-amber-400 p-1 mb-4">
              <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
                <img
                  src="/images/tony-profile.png"
                  alt="Tony Chen"
                  className="w-full h-full object-cover rounded-full"
                  style={{ transform: "translate(0,10%) scale(1.3)" }}
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
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Portofolio */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-20 text-center">
            Portofolio kami
          </h1>
          <nav className="container mx-auto px-4 py-4 relative">
            {/* Panah kiri */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200 2xl:hidden"
            >
              <ChevronLeft />
            </button>

            {/* List navigasi */}
            <div
              ref={scrollRef}
              className="overflow-x-auto space-x-2 flex justify-start 2xl:justify-center items-center bg-green-50 rounded-xl py-2 whitespace-nowrap scrollbar-hide px-5"
            >
              <div
                className={
                  currentPorto == "bank"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("bank")}
              >
                Bank & Finance
              </div>
              <div
                className={
                  currentPorto == "creative"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("creative")}
              >
                Creative
              </div>
              <div
                className={
                  currentPorto == "education"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("education")}
              >
                Education
              </div>
              <div
                className={
                  currentPorto == "fnb"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("fnb")}
              >
                Food & Beverage
              </div>
              <div
                className={
                  currentPorto == "government"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("government")}
              >
                Government
              </div>
              <div
                className={
                  currentPorto == "hospital"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("hospital")}
              >
                Hospital
              </div>
              <div
                className={
                  currentPorto == "insurance"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("insurance")}
              >
                Insurance
              </div>
              <div
                className={
                  currentPorto == "it"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("it")}
              >
                IT & Technology
              </div>
              <div
                className={
                  currentPorto == "manufacture"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("manufacture")}
              >
                Manufacture
              </div>
              <div
                className={
                  currentPorto == "distribution"
                    ? "font-medium rounded-xl bg-green-600 text-white px-4 py-2 transition duration-200 cursor-pointer"
                    : "font-medium rounded-xl hover:bg-green-600 hover:text-white px-4 py-2 transition duration-200 cursor-pointer"
                }
                onClick={() => handlePorto("distribution")}
              >
                Trading & Distribution
              </div>
            </div>

            {/* Panah kanan */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200 2xl:hidden"
            >
              <ChevronRight />
            </button>
          </nav>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-5 md:py-10">
            {portoData[currentPorto]?.map((item, index) => (
              <div className="flex justify-center items-center">
                <div
                  key={index}
                  className="block bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group h-52 w-52 overflow-hidden"
                >
                  <img
                    className="w-full h-full object-scale-down"
                    src={item.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
