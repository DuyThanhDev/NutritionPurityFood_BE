import type React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import {
  getNewsById,
  getLatestNews,
  formatNewsDate,
  type NewsItem,
} from "../../data/news";

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    if (id) {
      const newsItem = getNewsById(id);
      if (newsItem) {
        setNews(newsItem);
        // Get related news (latest 3, excluding current news)
        const latest = getLatestNews(4)
          .filter((item) => item.id !== id)
          .slice(0, 3);
        setRelatedNews(latest);
      } else {
        // News not found, redirect to news page
        navigate("/news");
      }
    }
  }, [id, navigate]);

  if (!news) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Đang tải...
            </h2>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#77b843] mx-auto"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { day, month, year } = formatNewsDate(news.date);

  const handleRelatedNewsClick = (newsItem: NewsItem) => {
    navigate(`/news/${newsItem.id}`);
  };

  const handleBackToNews = () => {
    navigate("/news");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
        <img
          src="/assets/banner-1-011.png"
          alt="NPFOOD News"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </section>

      {/* Header2 */}
      <Header2 />

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button */}
          <div className="mb-8">
            <button
              onClick={handleBackToNews}
              className="flex items-center text-[#77b843] hover:text-[#5a8a2f] transition-colors font-semibold"
            >
              ← Quay lại tin tức
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Article Header */}
              <div className="mb-8">
                {/* Category and Date */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <span className="inline-block bg-[#77b843] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                  <div className="text-gray-500 text-sm">
                    {day}/{month}/{year} • Bởi {news.author}
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                  {news.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 font-medium">
                  {news.excerpt}
                </p>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed text-justify whitespace-pre-line text-sm sm:text-base">
                  {news.content}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Chia sẻ bài viết
                </h3>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    Facebook
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors text-sm sm:text-base">
                    Twitter
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related News */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Tin tức liên quan
                </h3>
                <div className="space-y-6">
                  {relatedNews.map((relatedItem) => {
                    const relatedDate = formatNewsDate(relatedItem.date);
                    return (
                      <article
                        key={relatedItem.id}
                        onClick={() => handleRelatedNewsClick(relatedItem)}
                        className="cursor-pointer group"
                      >
                        <div className="flex gap-4">
                          <img
                            src={relatedItem.image}
                            alt={relatedItem.title}
                            className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-[#77b843] transition-colors mb-2">
                              {relatedItem.title}
                            </h4>
                            <div className="text-xs text-gray-500">
                              {relatedDate.day}/{relatedDate.month}/
                              {relatedDate.year}
                            </div>
                            <span className="inline-block bg-[#77b843] text-white px-2 py-1 rounded text-xs mt-1">
                              {relatedItem.category}
                            </span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* View All News Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleBackToNews}
                    className="w-full bg-[#77b843] text-white py-3 rounded-lg font-semibold hover:bg-[#5a8a2f] transition-colors"
                  >
                    Xem tất cả tin tức
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsDetail;
