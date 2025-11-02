"use client";
import { useState, useEffect } from "react";
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
import ScrollToTop from "@/components/ScrollToTop";

// 1. Define Article type
type Article = {
  id: number | string;
  title: string;
  category: string;
  date: string;
  author: string;
  image?: string;
  excerpt?: string;
  content: string;
};

const NewsDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [allArticles, setAllArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data: Article[]) => {
        setAllArticles(data);
        const found = data.find((item) => String(item.id) === String(id));
        setArticle(found || null);
      });
  }, [id]);

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

  const relatedArticles = allArticles
    .filter((item) => String(item.id) !== String(id))
    .slice(0, 2);

  return (
    <div className="pt-32">
      <ScrollToTop />
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
              style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}
            >
              {article.content}
            </div>
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
              {relatedArticles.map((relatedArticle) => (
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
