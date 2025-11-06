import { Linkedin, Mail, Phone } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

import teamData from "../data/team.json";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  description: string[];
};

const Team = () => {
  const teamMembers = teamData as TeamMember[];

  const handleHubungiKami = () => {
    const whatsappUrl = "https://wa.me/6281234567890";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-32">
      <ScrollToTop />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tim Ahli Kami
            </h1>
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
                    className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-300"
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
                  <p
                    className="font-semibold mb-3"
                    style={{ color: "#02A345" }}
                  >
                    {member.position}
                  </p>
                  <div className="mt-4 space-y-3">
                    {member.description.map((point, idx) => (
                      <div key={idx} className="flex items-start">
                        <div
                          className="w-1 h-full min-h-6 rounded-full mr-3 mt-1 flex-shrink-0"
                          style={{ backgroundColor: "#02A345" }}
                        ></div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="text-white px-8 py-4 rounded-lg hover:opacity-90 transition-colors text-lg font-semibold"
              style={{ backgroundColor: "#02A345" }}
              onClick={handleHubungiKami}
            >
              Konsultasi dengan Tim Kami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
