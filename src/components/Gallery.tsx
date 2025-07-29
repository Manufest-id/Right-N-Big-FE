"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryItems = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      title: "Leadership Workshop Jakarta",
      description: "Workshop intensif leadership untuk para eksekutif di Jakarta Convention Center",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      title: "UMKM Bootcamp Surabaya",
      description: "Program pengembangan UMKM dengan 100+ peserta di Surabaya",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      title: "Team Building Session",
      description: "Sesi team building untuk meningkatkan kolaborasi tim",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=400&width=600",
      title: "Business Coaching Bandung",
      description: "Sesi coaching bisnis intensif di Bandung Creative Hub",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=400&width=600",
      title: "Corporate Training",
      description: "Program training korporat untuk perusahaan multinasional",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=400&width=600",
      title: "Personal Branding Workshop",
      description: "Workshop personal branding untuk profesional muda",
    },
    {
      id: 7,
      image: "/placeholder.svg?height=400&width=600",
      title: "Digital Transformation Seminar",
      description: "Seminar tentang transformasi digital untuk UMKM",
    },
    {
      id: 8,
      image: "/placeholder.svg?height=400&width=600",
      title: "Networking Event",
      description: "Acara networking untuk mempertemukan para entrepreneur",
    },
  ]

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryItems.length) % galleryItems.length)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeri Kegiatan</h2>
          <p className="text-xl text-gray-600">
            Dokumentasi berbagai kegiatan training, workshop, dan coaching yang telah kami laksanakan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                <X size={32} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={32} />
              </button>

              <div className="bg-white rounded-2xl overflow-hidden">
                <img
                  src={galleryItems[selectedImage].image || "/placeholder.svg"}
                  alt={galleryItems[selectedImage].title}
                  className="w-full max-h-96 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{galleryItems[selectedImage].title}</h3>
                  <p className="text-gray-600">{galleryItems[selectedImage].description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
