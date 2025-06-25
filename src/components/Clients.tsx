"use client";

import { useEffect, useState } from "react";

const Clients = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    participants: 0,
    sessions: 0,
    clients: 0,
    satisfaction: 0,
  });

  const finalNumbers = {
    participants: 2000,
    sessions: 100,
    clients: 45,
    satisfaction: 20,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalNumbers).map((key) => {
      const finalValue = finalNumbers[key as keyof typeof finalNumbers];
      const increment = finalValue / steps;

      return setInterval(() => {
        setAnimatedNumbers((prev) => {
          const newValue = Math.min(
            prev[key as keyof typeof prev] + increment,
            finalValue
          );
          return { ...prev, [key]: Math.floor(newValue) };
        });
      }, stepDuration);
    });

    setTimeout(() => {
      intervals.forEach((interval) => clearInterval(interval));
      setAnimatedNumbers(finalNumbers);
    }, duration);

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  const clients = [
    { name: "Bank Sinarmas", logo: "/images/clients/sinarmas-bank.png" },
    { name: "BCA", logo: "/images/clients/bca-logo.png" },
    { name: "Tokopedia", logo: "/images/clients/tokopedia-logo.png" },
    { name: "Mixue Ice Cream", logo: "/images/clients/mixue-logo.png" },
    {
      name: "Bank Mandiri Taspen",
      logo: "/images/clients/mandiri-taspen-logo.png",
    },
    { name: "DBS Bank", logo: "/images/clients/dbs-bank-logo.png" },
    { name: "Allianz", logo: "/images/clients/allianz-logo.png" },
    { name: "Pegadaian", logo: "/images/clients/pegadaian-logo.png" },
    { name: "Manulife", logo: "/images/clients/manulife-logo.png" },
    {
      name: "Binus School Simprug",
      logo: "/images/clients/binus-school-logo.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-xl text-gray-600">
              Angka-angka yang membuktikan komitmen kami terhadap excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "#02A345" }}
              >
                {animatedNumbers.participants.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-semibold">Participants</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "#996533" }}
              >
                {animatedNumbers.sessions}+
              </div>
              <div className="text-gray-600 font-semibold">
                Coaching Session
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "#02A345" }}
              >
                {animatedNumbers.clients}+
              </div>
              <div className="text-gray-600 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
              <div
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: "#996533" }}
              >
                {animatedNumbers.satisfaction}+
              </div>
              <div className="text-gray-600 font-semibold">
                Training Modules
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Klien Kami
            </h2>
            <p className="text-xl text-gray-600">
              Dipercaya oleh perusahaan-perusahaan dan institusi terkemuka di
              Indonesia
            </p>
          </div>

          {/* Scrolling Animation */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex animate-scroll space-x-12">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-24 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-4"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
