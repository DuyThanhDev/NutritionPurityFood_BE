import type React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import {
  getProductById,
  getProductsByCategory,
  type Product,
} from "../../data/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [currentRelatedIndex, setCurrentRelatedIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Auto slide for related products
  useEffect(() => {
    if (relatedProducts.length > 4 && !isUserInteracting) {
      const interval = setInterval(() => {
        setCurrentRelatedIndex((prev) => {
          const nextIndex = prev + 4;
          return nextIndex >= relatedProducts.length ? 0 : nextIndex;
        });
      }, 10000); // 10 seconds

      return () => clearInterval(interval);
    }
  }, [relatedProducts.length, isUserInteracting]);

  // Reset user interaction after 10 seconds of inactivity
  useEffect(() => {
    if (isUserInteracting) {
      const timeout = setTimeout(() => {
        setIsUserInteracting(false);
      }, 10000); // Resume auto-slide after 10 seconds of no interaction

      return () => clearTimeout(timeout);
    }
  }, [isUserInteracting]);

  useEffect(() => {
    // Get product from localStorage or fetch by ID
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      const productData = JSON.parse(savedProduct) as Product;
      setProduct(productData);
      setSelectedImage(productData.mainImage);

      // Get related products
      const related = getProductsByCategory(productData.category)
        .filter((p) => p.id !== productData.id)
        .slice(0, 10);
      setRelatedProducts(related);
    } else if (id) {
      // Fallback to get by ID if no saved product
      const productData = getProductById(id);
      if (productData) {
        setProduct(productData);
        setSelectedImage(productData.mainImage);

        const related = getProductsByCategory(productData.category)
          .filter((p) => p.id !== productData.id)
          .slice(0, 10);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  const handleBuyNow = () => {
    // Navigate to contact page and scroll to top
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const nextRelatedProducts = () => {
    setIsUserInteracting(true); // User clicked, pause auto-slide
    setCurrentRelatedIndex((prev) => {
      const nextIndex = prev + 4;
      return nextIndex >= relatedProducts.length ? 0 : nextIndex;
    });
  };

  const prevRelatedProducts = () => {
    setIsUserInteracting(true); // User clicked, pause auto-slide
    setCurrentRelatedIndex((prev) => {
      const prevIndex = prev - 4;
      return prevIndex < 0
        ? Math.max(0, relatedProducts.length - 4)
        : prevIndex;
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }
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
            backgroundImage: "url('/assets/banner-1-011.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />

        {/* Fallback Image cho compatibility tốt hơn */}
        <img
          src="/assets/banner-1-011.png"
          alt="NPFOOD Product Detail"
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
                Chi tiết sản phẩm
              </h2>
              <p className="text-sm sm:text-base opacity-90">
                Thông tin đầy đủ về sản phẩm NPFOOD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Header2 with Breadcrumb */}
      <Header2
        breadcrumb={{ category: product.category, productName: product.name }}
      />

      {/* Main Product Section - 3 columns */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side (1/2) - Images Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Thumbnail Images - 2/5 of left side */}
              <div className="order-2 sm:order-1 w-full sm:w-1/5 mt-0 sm:mt-6">
                <div className="relative">
                  {/* Up button - Hidden on mobile, visible on tablet+ */}
                  {product.images.length > 4 && (
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) => Math.max(0, prev - 1))
                      }
                      className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#77b843] text-white p-1 rounded-full shadow-lg hover:bg-[#5a8a2f] z-10 disabled:opacity-50 hidden sm:block"
                      style={{ transform: "translate(-50%, 0)" }}
                      disabled={currentImageIndex === 0}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </button>
                  )}

                  {/* Images layout - horizontal on mobile, vertical on tablet+ */}
                  <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
                    {product.images
                      .slice(currentImageIndex, currentImageIndex + 4)
                      .map((image, index) => (
                        <div
                          key={currentImageIndex + index}
                          onClick={() => setSelectedImage(image)}
                          className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 ${
                            selectedImage === image
                              ? "border-[#77b843]"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${
                              currentImageIndex + index + 1
                            }`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                  </div>

                  {/* Down button - Hidden on mobile, visible on tablet+ */}
                  {product.images.length > 4 && (
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          Math.min(product.images.length - 4, prev + 1)
                        )
                      }
                      className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-[#77b843] text-white p-1 rounded-full shadow-lg hover:bg-[#5a8a2f] z-10 disabled:opacity-50 hidden sm:block"
                      style={{ transform: "translate(-50%, 0)" }}
                      disabled={currentImageIndex >= product.images.length - 4}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Main Image - 3/5 of left side */}
              <div className="order-1 sm:order-2 w-full sm:w-4/5 flex items-center justify-center">
                <div className="w-full">
                  <img
                    src={selectedImage || product.mainImage}
                    alt={product.name}
                    className="w-full h-auto object-contain max-h-[20rem] sm:max-h-[32rem]"
                  />
                </div>
              </div>
            </div>

            {/* Right Side (1/2) - Product Info */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#77b843] mb-4 sm:mb-6 uppercase leading-tight">
                  {product.name}
                </h1>
                <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 text-justify">
                  {product.description}
                </p>
                <div className="text-3xl sm:text-4xl font-bold text-[#77b843] mb-6 sm:mb-10">
                  {product.price}
                </div>
                <button
                  onClick={handleBuyNow}
                  className="w-full sm:w-3/5 bg-[#77b843] text-white py-4 sm:py-5 px-6 sm:px-8 rounded-lg text-lg sm:text-xl font-semibold 
                             hover:bg-[#5a8a2f] transform hover:scale-105 transition-all duration-300 
                             shadow-lg hover:shadow-xl active:scale-95"
                >
                  TÔI MUỐN MUA HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green horizontal line above product info */}
      <div className="container mx-auto px-4 md:px-6">
        <hr className="border-t-4 border-[#77b843] mb-8" />
      </div>

      {/* Detailed Product Information */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {product.name}
          </h2>

          <div className="space-y-6 mb-10">
            <div>
              <span className="font-semibold text-gray-700 text-xl">
                Thành phần:{" "}
              </span>
              <span className="text-gray-600 text-xl">
                {product.ingredients}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 text-xl">
                Hình dáng:{" "}
              </span>
              <span className="text-gray-600 text-xl">
                {product.appearance}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 text-xl">
                Chỉ dẫn hương vị:{" "}
              </span>
              <span className="text-gray-600 text-xl">{product.taste}</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {product.category === "Trà"
                ? "Hướng dẫn pha trà"
                : "Hướng dẫn sử dụng"}
            </h3>
            <ul className="space-y-3">
              {product.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="text-gray-600 text-xl leading-relaxed"
                >
                  {index + 1}. {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-[#77b843] text-center mb-12">
            SẢN PHẨM CÙNG LOẠI
          </h2>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevRelatedProducts}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#77b843] text-white p-2 rounded-full shadow-lg hover:bg-[#5a8a2f] z-10 disabled:opacity-50"
              disabled={relatedProducts.length <= 4}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextRelatedProducts}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#77b843] text-white p-2 rounded-full shadow-lg hover:bg-[#5a8a2f] z-10 disabled:opacity-50"
              disabled={relatedProducts.length <= 4}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-12">
              {relatedProducts
                .slice(currentRelatedIndex, currentRelatedIndex + 4)
                .map((relatedProduct, idx) => (
                  <div
                    key={relatedProduct.id}
                    className="flex flex-col items-center justify-center transition-transform duration-700 ease-out animate-fade-in group"
                    style={{
                      animationDelay: `${idx * 100}ms`,
                      animationFillMode: "backwards",
                    }}
                  >
                    <div className="h-80 flex items-center justify-center p-2">
                      <img
                        src={relatedProduct.mainImage}
                        alt={relatedProduct.name}
                        className="max-w-full max-h-full object-contain scale-110 transition-transform duration-300 group-hover:scale-125"
                        style={{ width: "220px", height: "220px" }}
                      />
                    </div>
                    <div className="p-4 w-full flex flex-col items-center">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 h-14 flex items-center text-center">
                        {relatedProduct.name}
                      </h3>
                      <button
                        onClick={() => {
                          localStorage.setItem(
                            "selectedProduct",
                            JSON.stringify(relatedProduct)
                          );
                          window.location.href = `/products/${relatedProduct.id}`;
                        }}
                        className="w-full bg-transparent border-2 border-[#77b843] text-[#77b843] py-2 px-4 rounded-lg font-semibold hover:bg-[#77b843] hover:text-white transition-all duration-300"
                      >
                        XEM CHI TIẾT →
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <style>
          {`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        .group:hover img {
          transform: scale(1.25);
        }
          `}
        </style>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
