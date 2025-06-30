"use client";

import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();

  const newsArticles = [
    {
      id: "1",
      title: "RightNBig Meluncurkan Program UMKM Naik Kelas 2024",
      excerpt:
        "Program terbaru untuk membantu UMKM Indonesia berkembang menjadi bisnis yang lebih besar dan berkelanjutan.",
      image: "/images/news/umkm.jpg",
      date: "15 Januari 2024",
      author: "Tony Chen",
      category: "Program Baru",
      content: `
        <p>Jakarta, 15 Januari 2024 - RightNBig dengan bangga mengumumkan peluncuran program terbaru "UMKM Naik Kelas 2024", sebuah inisiatif komprehensif yang dirancang khusus untuk membantu Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia berkembang menjadi bisnis yang lebih besar dan berkelanjutan.</p>

        <h3>Latar Belakang Program</h3>
        <p>UMKM merupakan tulang punggung perekonomian Indonesia, menyumbang lebih dari 60% terhadap Produk Domestik Bruto (PDB) dan menyerap sekitar 97% tenaga kerja nasional. Namun, banyak UMKM yang masih menghadapi tantangan dalam hal manajemen, pemasaran, dan pengembangan bisnis yang berkelanjutan.</p>

        <p>"Kami melihat potensi besar UMKM Indonesia, namun mereka membutuhkan bimbingan yang tepat untuk dapat naik kelas dan bersaing di era digital," ujar Tony Chen, CEO & Founder RightNBig.</p>

        <h3>Fitur Program UMKM Naik Kelas 2024</h3>
        <ul>
          <li><strong>Business Mapping & Strategy:</strong> Pemetaan bisnis menyeluruh dan penyusunan strategi pengembangan</li>
          <li><strong>Digital Marketing Training:</strong> Pelatihan pemasaran digital yang praktis dan aplikatif</li>
          <li><strong>Financial Management:</strong> Pengelolaan keuangan bisnis yang profesional</li>
          <li><strong>Leadership Development:</strong> Pengembangan kemampuan kepemimpinan untuk pemilik UMKM</li>
          <li><strong>Networking & Mentoring:</strong> Kesempatan networking dengan sesama entrepreneur dan mentoring berkelanjutan</li>
        </ul>

        <h3>Target dan Manfaat</h3>
        <p>Program ini menargetkan 500 UMKM di seluruh Indonesia pada tahun 2024, dengan fokus pada sektor F&B, fashion, teknologi, dan jasa. Peserta akan mendapatkan:</p>
        <ul>
          <li>Peningkatan omzet hingga 200% dalam 12 bulan</li>
          <li>Sistem manajemen bisnis yang terstruktur</li>
          <li>Akses ke jaringan investor dan partner bisnis</li>
          <li>Sertifikasi business coaching dari RightNBig</li>
        </ul>

        <h3>Pendaftaran dan Informasi</h3>
        <p>Program UMKM Naik Kelas 2024 akan dimulai pada Februari 2024 dengan durasi 12 bulan. Pendaftaran dibuka mulai hari ini hingga 31 Januari 2024. Untuk informasi lebih lanjut dan pendaftaran, silakan hubungi tim RightNBig di info@rightnbig.id atau kunjungi website resmi kami.</p>

        <p><em>"Bersama RightNBig, mari wujudkan impian UMKM Indonesia untuk menjadi benar dan menjadi besar!"</em> - Tony Chen</p>
      `,
    },
    {
      id: "2",
      title: "Kesuksesan Workshop Leadership Excellence di Jakarta",
      excerpt:
        "Lebih dari 200 peserta mengikuti workshop leadership yang diselenggarakan di Jakarta Convention Center.",
      image: "/images/news/leadership.jpg",
      date: "10 Januari 2024",
      author: "Julian Foe",
      category: "Event",
      content: `
        <p>Jakarta, 10 Januari 2024 - Workshop "Leadership Excellence: Memimpin di Era Digital" yang diselenggarakan oleh RightNBig di Jakarta Convention Center telah berhasil diikuti oleh lebih dari 200 peserta dari berbagai kalangan eksekutif dan pemimpin perusahaan.</p>

        <h3>Materi Workshop</h3>
        <p>Workshop yang dipimpin langsung oleh Julian Foe, M.Pd, Senior Director & Leadership Expert RightNBig, membahas berbagai aspek kepemimpinan modern, termasuk:</p>
        <ul>
          <li>Digital Leadership dalam era transformasi</li>
          <li>Emotional Intelligence untuk pemimpin</li>
          <li>Change Management yang efektif</li>
          <li>Building High-Performance Teams</li>
          <li>Strategic Communication Skills</li>
        </ul>

        <h3>Testimoni Peserta</h3>
        <p>"Workshop ini memberikan perspektif baru tentang kepemimpinan di era digital. Materi yang disampaikan sangat praktis dan langsung bisa diterapkan di perusahaan," ujar Sarah Wijaya, HR Director PT Teknologi Maju.</p>

        <p>Ahmad Rizki, CEO startup teknologi, menambahkan: "Sesi tentang building high-performance teams sangat membantu saya dalam mengelola tim yang diverse dan remote working."</p>

        <h3>Hasil dan Dampak</h3>
        <p>Berdasarkan evaluasi post-workshop, 98% peserta menyatakan puas dengan materi dan delivery yang diberikan. Lebih dari 85% peserta menyatakan akan menerapkan pembelajaran dari workshop ini dalam 30 hari ke depan.</p>

        <h3>Workshop Selanjutnya</h3>
        <p>Melihat antusiasme yang tinggi, RightNBig akan mengadakan workshop serupa di Surabaya (25 Januari 2024) dan Bandung (15 Februari 2024). Pendaftaran sudah dibuka dengan early bird discount 25% untuk 50 pendaftar pertama.</p>
      `,
    },
    {
      id: "3",
      title: "Kolaborasi dengan Universitas Terkemuka untuk Program Magang",
      excerpt:
        "RightNBig menjalin kerjasama dengan beberapa universitas untuk program magang mahasiswa di bidang business coaching.",
      image: "/images/news/university.jpg",
      date: "5 Januari 2024",
      author: "Fransisca Diwanti",
      category: "Kerjasama",
      content: `
        <p>Jakarta, 5 Januari 2024 - RightNBig mengumumkan kerjasama strategis dengan lima universitas terkemuka di Indonesia untuk program magang mahasiswa di bidang business coaching dan consulting. Kerjasama ini merupakan bagian dari komitmen RightNBig dalam mengembangkan talenta muda Indonesia.</p>

        <h3>Universitas Partner</h3>
        <p>Lima universitas yang terlibat dalam program ini adalah:</p>
        <ul>
          <li>Universitas Indonesia (UI)</li>
          <li>Institut Teknologi Bandung (ITB)</li>
          <li>Universitas Gadjah Mada (UGM)</li>
          <li>Universitas Airlangga (UNAIR)</li>
          <li>Universitas Mahakarya Asia</li>
        </ul>

        <h3>Program Magang</h3>
        <p>Program magang ini dirancang untuk memberikan pengalaman praktis kepada mahasiswa dalam bidang:</p>
        <ul>
          <li>Business Consulting & Analysis</li>
          <li>Training Program Development</li>
          <li>Digital Marketing & Content Creation</li>
          <li>Research & Development</li>
          <li>Client Relationship Management</li>
        </ul>

        <h3>Manfaat Program</h3>
        <p>"Program ini memberikan win-win solution. Mahasiswa mendapat pengalaman praktis yang valuable, sementara kami mendapat fresh perspective dan energy dari generasi muda," ujar Fransisca Diwanti, Commissioner & Education Leader RightNBig.</p>

        <p>Mahasiswa peserta program akan mendapatkan:</p>
        <ul>
          <li>Mentoring langsung dari senior consultant</li>
          <li>Sertifikat completion dari RightNBig</li>
          <li>Networking dengan profesional industri</li>
          <li>Kesempatan full-time employment</li>
          <li>Portfolio project yang dapat digunakan untuk career development</li>
        </ul>

        <h3>Pendaftaran</h3>
        <p>Program magang akan dimulai pada Maret 2024 dengan durasi 6 bulan. Pendaftaran dibuka untuk mahasiswa semester 6-8 dari jurusan Manajemen, Psikologi, Komunikasi, dan Teknik Industri. Informasi lengkap dapat diperoleh melalui career center masing-masing universitas atau website RightNBig.</p>
      `,
    },
    {
      id: "4",
      title: "Pencapaian 500+ Klien Bahagia di Tahun 2023",
      excerpt:
        "RightNBig menutup tahun 2023 dengan pencapaian luar biasa, melayani lebih dari 500 klien dengan tingkat kepuasan 98%.",
      image: "/images/news/happyclient.jpg",
      date: "30 Desember 2023",
      author: "Amanda Putri",
      category: "Pencapaian",
      content: `
        <p>Jakarta, 30 Desember 2023 - RightNBig menutup tahun 2023 dengan pencapaian yang membanggakan, berhasil melayani lebih dari 500 klien dengan tingkat kepuasan mencapai 98%. Pencapaian ini menandai pertumbuhan signifikan dari tahun sebelumnya yang melayani 350 klien.</p>

        <h3>Breakdown Klien 2023</h3>
        <p>Dari 500+ klien yang dilayani sepanjang 2023, terdistribusi dalam berbagai sektor:</p>
        <ul>
          <li>Perbankan & Keuangan: 35% (175 klien)</li>
          <li>UMKM & Startup: 30% (150 klien)</li>
          <li>Manufaktur & Industri: 20% (100 klien)</li>
          <li>Pendidikan & Non-Profit: 10% (50 klien)</li>
          <li>Teknologi & Digital: 5% (25 klien)</li>
        </ul>

        <h3>Program Paling Populer</h3>
        <p>Berdasarkan data internal, program yang paling diminati klien adalah:</p>
        <ol>
          <li><strong>Leadership Development Program</strong> - 40% dari total klien</li>
          <li><strong>UMKM Naik Kelas</strong> - 25% dari total klien</li>
          <li><strong>Team Building & Coaching</strong> - 20% dari total klien</li>
          <li><strong>Business Mapping & Strategy</strong> - 15% dari total klien</li>
        </ol>

        <h3>Testimoni Klien</h3>
        <p>"RightNBig telah membantu transformasi budaya perusahaan kami. Tim leadership kami menjadi lebih solid dan employee engagement meningkat drastis," ujar Budi Santoso, CEO PT Maju Bersama Teknologi.</p>

        <p>Sari Dewi, owner Dewi Bakery, menambahkan: "Program UMKM Naik Kelas benar-benar mengubah bisnis saya. Dari 1 toko kecil, sekarang sudah berkembang menjadi 5 cabang dengan sistem yang terstruktur."</p>

        <h3>Target 2024</h3>
        <p>Untuk tahun 2024, RightNBig menargetkan melayani 750 klien dengan ekspansi ke kota-kota besar di Indonesia seperti Surabaya, Bandung, dan Medan. Tim juga akan menambah 5 consultant baru untuk mendukung pertumbuhan ini.</p>

        <p>"Pencapaian ini tidak lepas dari kepercayaan klien dan dedikasi seluruh tim RightNBig. Kami berkomitmen untuk terus memberikan service excellence di tahun 2024," tutup Tony Chen, CEO RightNBig.</p>
      `,
    },
    {
      id: "5",
      title: "Tren Business Coaching di Indonesia 2024",
      excerpt:
        "Analisis mendalam tentang perkembangan industri business coaching di Indonesia dan prediksi untuk tahun 2024.",
      image: "/images/news/coaching.jpg",
      date: "28 Desember 2023",
      author: "Rudy Handoko",
      category: "Insight",
      content: `
        <p>Jakarta, 28 Desember 2023 - Industri business coaching di Indonesia mengalami pertumbuhan yang signifikan sepanjang tahun 2023. Berdasarkan riset yang dilakukan RightNBig bersama dengan Asosiasi Konsultan Indonesia, berikut adalah tren dan prediksi untuk tahun 2024.</p>

        <h3>Pertumbuhan Industri 2023</h3>
        <p>Industri business coaching di Indonesia tumbuh 45% dibandingkan tahun 2022, dengan total market size mencapai Rp 2.5 triliun. Pertumbuhan ini didorong oleh:</p>
        <ul>
          <li>Meningkatnya awareness perusahaan tentang pentingnya leadership development</li>
          <li>Transformasi digital yang membutuhkan upskilling karyawan</li>
          <li>Pertumbuhan UMKM yang membutuhkan guidance profesional</li>
          <li>Recovery ekonomi post-pandemic yang mendorong investasi di human capital</li>
        </ul>

        <h3>Tren yang Akan Dominasi 2024</h3>
        <h4>1. Digital-First Coaching</h4>
        <p>Hybrid dan virtual coaching akan menjadi mainstream, dengan 60% sesi coaching dilakukan secara online. Platform digital coaching akan semakin sophisticated dengan AI-powered analytics.</p>

        <h4>2. Micro-Learning Approach</h4>
        <p>Program coaching akan lebih fokus pada bite-sized learning dengan durasi 15-30 menit per sesi, disesuaikan dengan attention span modern professionals.</p>

        <h4>3. Data-Driven Coaching</h4>
        <p>Penggunaan analytics dan metrics untuk mengukur ROI coaching akan menjadi standard. Real-time feedback dan progress tracking akan menjadi fitur wajib.</p>

        <h4>4. Industry-Specific Coaching</h4>
        <p>Coaching akan semakin specialized berdasarkan industri, seperti fintech coaching, healthcare leadership, atau sustainable business coaching.</p>

        <h3>Prediksi Market 2024</h3>
        <ul>
          <li><strong>Market Growth:</strong> Diperkirakan tumbuh 35-40% mencapai Rp 3.4 triliun</li>
          <li><strong>New Players:</strong> 150+ coaching firms baru akan bermunculan</li>
          <li><strong>Corporate Adoption:</strong> 70% perusahaan besar akan memiliki internal coaching program</li>
          <li><strong>UMKM Penetration:</strong> 25% UMKM akan menggunakan coaching services</li>
        </ul>

        <h3>Tantangan dan Peluang</h3>
        <p><strong>Tantangan:</strong></p>
        <ul>
          <li>Standardisasi kualitas coach dan program</li>
          <li>Edukasi market tentang value coaching</li>
          <li>Kompetisi harga yang ketat</li>
        </ul>

        <p><strong>Peluang:</strong></p>
        <ul>
          <li>Ekspansi ke kota tier-2 dan tier-3</li>
          <li>Development coaching untuk generasi Z</li>
          <li>Integration dengan HR tech platforms</li>
          <li>Cross-border coaching untuk Indonesian companies di ASEAN</li>
        </ul>

        <h3>Rekomendasi untuk Businesses</h3>
        <p>"Perusahaan yang ingin tetap kompetitif di 2024 harus mulai investasi di coaching program sekarang. Focus pada digital capability dan leadership agility akan menjadi key differentiator," saran Rudy Handoko, Senior Consultant RightNBig.</p>
      `,
    },
    {
      id: "6",
      title: "Tips Membangun Personal Brand yang Kuat",
      excerpt:
        "Panduan lengkap untuk membangun personal brand yang autentik dan berdampak dalam dunia bisnis modern.",
      image: "/images/news/personalbranding.jpg",
      date: "25 Desember 2023",
      author: "Yosephine Lim",
      category: "Tips",
      content: `
        <p>Jakarta, 25 Desember 2023 - Di era digital saat ini, personal branding bukan lagi pilihan, melainkan keharusan bagi setiap profesional yang ingin sukses. Yosephine Lim, Business Analyst RightNBig, membagikan panduan komprehensif untuk membangun personal brand yang kuat dan autentik.</p>

        <h3>Mengapa Personal Brand Penting?</h3>
        <p>Personal brand adalah persepsi yang orang lain miliki tentang Anda. Dalam dunia bisnis yang kompetitif, personal brand yang kuat dapat:</p>
        <ul>
          <li>Membedakan Anda dari kompetitor</li>
          <li>Meningkatkan kredibilitas dan trust</li>
          <li>Membuka peluang karir dan bisnis baru</li>
          <li>Memperluas network profesional</li>
          <li>Meningkatkan value dan earning potential</li>
        </ul>

        <h3>5 Langkah Membangun Personal Brand</h3>
        
        <h4>1. Define Your Unique Value Proposition</h4>
        <p>Identifikasi apa yang membuat Anda unik. Pertanyaan kunci:</p>
        <ul>
          <li>Apa expertise dan passion Anda?</li>
          <li>Masalah apa yang bisa Anda solve?</li>
          <li>Apa yang membedakan Anda dari yang lain?</li>
          <li>Value apa yang Anda berikan kepada audience?</li>
        </ul>

        <h4>2. Identify Your Target Audience</h4>
        <p>Tentukan siapa yang ingin Anda reach:</p>
        <ul>
          <li>Industry professionals di bidang Anda</li>
          <li>Potential clients atau customers</li>
          <li>Peers dan colleagues</li>
          <li>Media dan influencers</li>
        </ul>

        <h4>3. Create Consistent Content</h4>
        <p>Content adalah jantung personal branding. Tips:</p>
        <ul>
          <li><strong>LinkedIn:</strong> Share industry insights, professional achievements</li>
          <li><strong>Instagram:</strong> Behind-the-scenes, personal side of professional life</li>
          <li><strong>Blog/Medium:</strong> Deep-dive articles tentang expertise Anda</li>
          <li><strong>Speaking:</strong> Webinar, podcast, conference presentations</li>
        </ul>

        <h4>4. Network Strategically</h4>
        <p>Building relationships adalah kunci:</p>
        <ul>
          <li>Attend industry events dan conferences</li>
          <li>Join professional associations</li>
          <li>Engage meaningfully di social media</li>
          <li>Offer help dan value kepada others</li>
          <li>Follow up dan maintain relationships</li>
        </ul>

        <h4>5. Monitor and Evolve</h4>
        <p>Personal brand adalah journey, bukan destination:</p>
        <ul>
          <li>Google yourself regularly</li>
          <li>Ask for feedback dari trusted colleagues</li>
          <li>Track engagement metrics</li>
          <li>Adjust strategy berdasarkan results</li>
          <li>Stay authentic dan true to your values</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li><strong>Being too promotional:</strong> Focus on value, bukan selling</li>
          <li><strong>Inconsistent messaging:</strong> Ensure alignment across all platforms</li>
          <li><strong>Neglecting offline presence:</strong> Digital saja tidak cukup</li>
          <li><strong>Copying others:</strong> Authenticity adalah key</li>
          <li><strong>Impatience:</strong> Personal branding butuh waktu dan consistency</li>
        </ul>

        <h3>Tools dan Resources</h3>
        <p>Beberapa tools yang dapat membantu:</p>
        <ul>
          <li><strong>Design:</strong> Canva, Adobe Creative Suite</li>
          <li><strong>Content Planning:</strong> Hootsuite, Buffer</li>
          <li><strong>Analytics:</strong> Google Analytics, LinkedIn Analytics</li>
          <li><strong>Learning:</strong> Coursera, LinkedIn Learning</li>
        </ul>

        <h3>Kesimpulan</h3>
        <p>"Personal branding adalah investasi jangka panjang untuk karir Anda. Start small, be consistent, dan yang terpenting, be authentic. Your personal brand should reflect who you truly are, not who you think people want you to be," tutup Yosephine Lim.</p>

        <p>Untuk konsultasi personal branding lebih lanjut, RightNBig menyediakan program Personal Mapping yang dapat membantu Anda mengidentifikasi dan mengembangkan personal brand yang kuat.</p>
      `,
    },
  ];

  const article = newsArticles.find((article) => article.id === id);

  if (!article) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <p className="text-gray-600 mb-8">
            Maaf, artikel yang Anda cari tidak dapat ditemukan.
          </p>
          <Link
            to="/news"
            className="text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors"
            style={{ backgroundColor: "#02A345" }}
          >
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32">
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/news"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Kembali ke Berita</span>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span
                className="text-white px-3 py-1 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "#02A345" }}
              >
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>Oleh {article.author}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                lineHeight: "1.8",
              }}
            />
          </div>

          {/* Share Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Share2 size={20} className="text-gray-600" />
                <span className="text-gray-600 font-semibold">
                  Bagikan artikel ini:
                </span>
                <div className="flex space-x-3">
                  <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook size={16} />
                  </button>
                  <button className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors">
                    <Twitter size={16} />
                  </button>
                  <button className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
                    <Linkedin size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Artikel Terkait
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {newsArticles
                .filter((item) => item.id !== id)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/news/${relatedArticle.id}`}
                    className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <div className="mb-2">
                        <span
                          className="text-white px-2 py-1 rounded text-xs font-semibold"
                          style={{ backgroundColor: "#02A345" }}
                        >
                          {relatedArticle.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;
