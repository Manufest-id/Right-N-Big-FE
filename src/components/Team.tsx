import { Linkedin, Mail, Phone } from "lucide-react"

const Team = () => {
  const teamMembers = [
    {
      name: "Tony Chen",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300&text=Tony+Chen",
      description:
        "Praktisi bisnis dengan pengalaman 15+ tahun dalam leadership dan business development. Ahli dalam transformasi organisasi dan pengembangan SDM.",
    },
    {
      name: "Julian Foe",
      position: "Senior Business Coach",
      image: "/placeholder.svg?height=300&width=300&text=Julian+Foe",
      description:
        "Expert dalam strategic planning dan organizational development dengan track record membantu 200+ perusahaan.",
    },
    {
      name: "Fransisca Diwanti",
      position: "Leadership Trainer",
      image: "/placeholder.svg?height=300&width=300&text=Fransisca+Diwanti",
      description: "Spesialis dalam leadership development dan team building dengan sertifikasi internasional.",
    },
    {
      name: "Yayuk Sulistyowati",
      position: "HR Development Specialist",
      image: "/placeholder.svg?height=300&width=300&text=Yayuk+Sulistyowati",
      description:
        "Ahli dalam pengembangan SDM dan talent management dengan pengalaman 12+ tahun di berbagai industri.",
    },
    {
      name: "Amanda Putri",
      position: "Training Coordinator",
      image: "/placeholder.svg?height=300&width=300&text=Amanda+Putri",
      description:
        "Koordinator program training dengan fokus pada customer experience dan program management excellence.",
    },
    {
      name: "Yosephine Lim",
      position: "Business Analyst",
      image: "/placeholder.svg?height=300&width=300&text=Yosephine+Lim",
      description:
        "Spesialis dalam business analysis dan process improvement dengan background IT dan business consulting.",
    },
    {
      name: "Rizki Pratama",
      position: "Konsultan Bisnis",
      image: "/placeholder.svg?height=300&width=300&text=Rizki+Pratama",
      description:
        "Konsultan muda berpengalaman dalam digital transformation dan business innovation untuk era modern.",
    },
    {
      name: "Rudy Handoko",
      position: "Senior Konsultan",
      image: "/placeholder.svg?height=300&width=300&text=Rudy+Handoko",
      description:
        "Expert dalam financial planning dan business strategy dengan pengalaman 20+ tahun di sektor korporat.",
    },
    {
      name: "Gatot Subroto",
      position: "Konsultan UMKM",
      image: "/placeholder.svg?height=300&width=300&text=Gatot+Subroto",
      description:
        "Spesialis dalam pengembangan UMKM dan small business growth dengan fokus pada sustainability dan scalability.",
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Ahli Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bertemu dengan tim profesional yang berpengalaman dan berkomitmen membantu kesuksesan transformasi bisnis
            dan pengembangan diri Anda
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-900 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold">
            Konsultasi dengan Tim Kami
          </button>
        </div>
      </div>
    </section>
  )
}

export default Team
