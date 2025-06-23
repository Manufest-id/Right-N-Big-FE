import { Calendar, User, ArrowRight } from "lucide-react"

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "RightNBig Meluncurkan Program UMKM Naik Kelas 2024",
      excerpt:
        "Program terbaru untuk membantu UMKM Indonesia berkembang menjadi bisnis yang lebih besar dan berkelanjutan.",
      image: "/placeholder.svg?height=300&width=400",
      date: "15 Januari 2024",
      author: "Tony Chen",
      category: "Program Baru",
    },
    {
      id: 2,
      title: "Kesuksesan Workshop Leadership Excellence di Jakarta",
      excerpt:
        "Lebih dari 200 peserta mengikuti workshop leadership yang diselenggarakan di Jakarta Convention Center.",
      image: "/placeholder.svg?height=300&width=400",
      date: "10 Januari 2024",
      author: "Julian Foe",
      category: "Event",
    },
    {
      id: 3,
      title: "Kolaborasi dengan Universitas Terkemuka untuk Program Magang",
      excerpt:
        "RightNBig menjalin kerjasama dengan beberapa universitas untuk program magang mahasiswa di bidang business coaching.",
      image: "/placeholder.svg?height=300&width=400",
      date: "5 Januari 2024",
      author: "Fransisca Diwanti",
      category: "Kerjasama",
    },
    {
      id: 4,
      title: "Pencapaian 500+ Klien Bahagia di Tahun 2023",
      excerpt:
        "RightNBig menutup tahun 2023 dengan pencapaian luar biasa, melayani lebih dari 500 klien dengan tingkat kepuasan 98%.",
      image: "/placeholder.svg?height=300&width=400",
      date: "30 Desember 2023",
      author: "Amanda Putri",
      category: "Pencapaian",
    },
    {
      id: 5,
      title: "Tren Business Coaching di Indonesia 2024",
      excerpt:
        "Analisis mendalam tentang perkembangan industri business coaching di Indonesia dan prediksi untuk tahun 2024.",
      image: "/placeholder.svg?height=300&width=400",
      date: "28 Desember 2023",
      author: "Rudy Handoko",
      category: "Insight",
    },
    {
      id: 6,
      title: "Tips Membangun Personal Brand yang Kuat",
      excerpt: "Panduan lengkap untuk membangun personal brand yang autentik dan berdampak dalam dunia bisnis modern.",
      image: "/placeholder.svg?height=300&width=400",
      date: "25 Desember 2023",
      author: "Yosephine Lim",
      category: "Tips",
    },
  ]

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Berita & Artikel</h2>
          <p className="text-xl text-gray-600">Ikuti perkembangan terbaru, insight, dan cerita sukses dari RightNBig</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={newsItems[0].image || "/placeholder.svg"}
                  alt={newsItems[0].title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {newsItems[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-blue-900 transition-colors cursor-pointer">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{newsItems[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{newsItems[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{newsItems[0].author}</span>
                    </div>
                  </div>
                  <button className="text-blue-900 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-2">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-6">
            {newsItems.slice(1, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-24 h-24 object-cover flex-shrink-0"
                  />
                  <div className="p-4 flex-1">
                    <div className="mb-2">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 hover:text-blue-900 transition-colors cursor-pointer line-clamp-2">
                      {item.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {newsItems.slice(3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-900 transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                  <button className="text-blue-900 font-semibold hover:text-blue-700 transition-colors">Baca →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors text-lg font-semibold">
            Lihat Semua Artikel
          </button>
        </div>
      </div>
    </section>
  )
}

export default News
