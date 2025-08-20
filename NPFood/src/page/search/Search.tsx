import type React from "react";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import { products, type Product } from "../../data/products";

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(12);

  // Decode the search query properly
  const rawQuery = searchParams.get("q") || "";
  const searchQuery = decodeURIComponent(rawQuery);

  useEffect(() => {
    const performSearch = () => {
      setIsLoading(true);

      if (!searchQuery.trim()) {
        setSearchResults([]);
        setIsLoading(false);
        return;
      }

      // Search in product names, descriptions, and ingredients
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.ingredients
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Simulate loading delay
      setTimeout(() => {
        setSearchResults(results);
        setIsLoading(false);
        setCurrentPage(1); // Reset to first page
      }, 300);
    };

    performSearch();
  }, [searchQuery]);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchResults.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(searchResults.length / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Add small delay to ensure state update, then scroll
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleProductClick = (product: Product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/products/${product.id}`);
  };

  const handleBackToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
        {/* Background Image với responsive positioning */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              "url('/assets/banner-san-pham-trang-chinh3-01.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />

        {/* Fallback Image cho compatibility tốt hơn */}
        <img
          src="/assets/banner-san-pham-trang-chinh3-01.jpg"
          alt="NPFOOD Search"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loading="lazy"
        />

        {/* Overlay để tạo độ tương phản */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25 z-5" />

        {/* Optional content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-500">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 max-w-sm sm:max-w-md">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Tìm kiếm sản phẩm
              </h2>
              <p className="text-sm sm:text-base opacity-90">
                Khám phá sản phẩm NPFOOD bạn cần
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Header2 */}
      <Header2 />

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search Info */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#77b843] mb-8 text-center">
              {isLoading
                ? "ĐANG TÌM KIẾM..."
                : searchQuery
                ? `TÌM THẤY ${
                    searchResults.length
                  } SẢN PHẨM CHO TỪ KHÓA "${searchQuery.toUpperCase()}"`
                : "TÌM KIẾM SẢN PHẨM"}
            </h2>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#77b843]"></div>
            </div>
          )}

          {/* No Search Query */}
          {!searchQuery && !isLoading && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">
                Nhập từ khóa để tìm kiếm
              </h3>
              <p className="text-gray-500 mb-8">
                Hãy nhập tên sản phẩm, mô tả hoặc thành phần bạn muốn tìm kiếm
              </p>
              <button
                onClick={handleBackToProducts}
                className="bg-[#77b843] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a8a2f] transition-colors"
              >
                Xem tất cả sản phẩm
              </button>
            </div>
          )}

          {/* No Results */}
          {searchQuery && !isLoading && searchResults.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">
                Không tìm thấy sản phẩm
              </h3>
              <p className="text-gray-500 mb-8">
                Không có sản phẩm nào khớp với từ khóa "{searchQuery}". <br />
                Hãy thử tìm kiếm với từ khóa khác.
              </p>
              <div className="space-y-4">
                <p className="text-gray-600 font-semibold">Gợi ý tìm kiếm:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Trà xanh
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Kimchi
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Bánh tráng
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Rau chua
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    Oolong
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Search Results - Products Grid (giống Products.tsx) */}
          {!isLoading && searchResults.length > 0 && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="flex flex-col items-center p-4 md:p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center mb-4">
                      <img
                        src={product.mainImage}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#77b843] text-center h-12 sm:h-16 flex items-center group-hover:text-[#5a8a2f] transition-colors">
                      {product.name}
                    </h3>
                    <div className="text-center">
                      <button className="bg-[#77b843] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#5a8a2f] transition-colors text-sm sm:text-base font-semibold">
                        Xem chi tiết →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination (giống Products.tsx) */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex gap-2">
                    {/* First page button */}
                    <button
                      onClick={() => handlePageChange(1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      « Đầu
                    </button>

                    {/* Previous button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ‹ Trước
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (pageNumber) => (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-4 py-2 rounded-lg border transition-colors ${
                            currentPage === pageNumber
                              ? "bg-[#77b843] text-white border-[#77b843]"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {pageNumber}
                        </button>
                      )
                    )}

                    {/* Next button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Tiếp ›
                    </button>

                    {/* Last page button */}
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cuối »
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Search;
