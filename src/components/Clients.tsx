"use client"

import { useEffect, useState } from "react"

const Clients = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    participants: 0,
    sessions: 0,
    clients: 0,
    satisfaction: 0,
  })

  const finalNumbers = {
    participants: 2500,
    sessions: 150,
    clients: 500,
    satisfaction: 98,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalNumbers).map((key) => {
      const finalValue = finalNumbers[key as keyof typeof finalNumbers]
      const increment = finalValue / steps

      return setInterval(() => {
        setAnimatedNumbers((prev) => {
          const newValue = Math.min(prev[key as keyof typeof prev] + increment, finalValue)
          return { ...prev, [key]: Math.floor(newValue) }
        })
      }, stepDuration)
    })

    setTimeout(() => {
      intervals.forEach((interval) => clearInterval(interval))
      setAnimatedNumbers(finalNumbers)
    }, duration)

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [])

  const clients = [
    { name: "PT Bank Central Asia", logo: "/placeholder.svg?height=60&width=120&text=BCA" },
    { name: "PT Telkom Indonesia", logo: "/placeholder.svg?height=60&width=120&text=Telkom" },
    { name: "PT Bank Mandiri", logo: "/placeholder.svg?height=60&width=120&text=Mandiri" },
    { name: "PT Astra International", logo: "/placeholder.svg?height=60&width=120&text=Astra" },
    { name: "PT Unilever Indonesia", logo: "/placeholder.svg?height=60&width=120&text=Unilever" },
    { name: "PT Indofood Sukses Makmur", logo: "/placeholder.svg?height=60&width=120&text=Indofood" },
    { name: "PT Semen Indonesia", logo: "/placeholder.svg?height=60&width=120&text=Semen+Indonesia" },
    { name: "PT Pertamina", logo: "/placeholder.svg?height=60&width=120&text=Pertamina" },
    { name: "PT Garuda Indonesia", logo: "/placeholder.svg?height=60&width=120&text=Garuda" },
    { name: "PT Gudang Garam", logo: "/placeholder.svg?height=60&width=120&text=Gudang+Garam" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pencapaian Kami</h2>
            <p className="text-xl text-gray-600">Angka-angka yang membuktikan komitmen kami terhadap excellence</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: "#02A345" }}>
                {animatedNumbers.participants.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-semibold">Peserta Training</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: "#996533" }}>
                {animatedNumbers.sessions}+
              </div>
              <div className="text-gray-600 font-semibold">Sesi Coaching</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: "#02A345" }}>
                {animatedNumbers.clients}+
              </div>
              <div className="text-gray-600 font-semibold">Klien Bahagia</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl">
              <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: "#996533" }}>
                {animatedNumbers.satisfaction}%
              </div>
              <div className="text-gray-600 font-semibold">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Klien Kami</h2>
            <p className="text-xl text-gray-600">Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
  )
}

export default Clients
