import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { getTop3BestProducts, type Product } from "../../data/products";

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );
  const navigate = useNavigate();

  // Refs cho các phần tử cần animation
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const featuredTitleRef = useRef<HTMLHeadingElement>(null);
  const featuredProductsRef = useRef<HTMLDivElement>(null);

  const bannerImages = [
    "./assets/banner-8-1920x932-01.png",
    "./assets/banner-12-2.jpg",
    "./assets/cong-cong-ty2.jpg",
  ];

  // Get top 3 best products
  const featuredProducts = getTop3BestProducts();

  // Intersection Observer để theo dõi khi phần tử xuất hiện
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute("data-animation-id");
            if (elementId) {
              setVisibleElements((prev) => new Set([...prev, elementId]));
            }
          }
        });
      },
      {
        threshold: 0.1, // Kích hoạt khi 10% phần tử hiển thị
        rootMargin: "0px 0px -50px 0px", // Offset để animation sớm hơn một chút
      }
    );

    // Đăng ký theo dõi các phần tử
    const elementsToObserve = [
      { ref: aboutImageRef, id: "about-image" },
      { ref: aboutTextRef, id: "about-text" },
      { ref: featuredTitleRef, id: "featured-title" },
      { ref: featuredProductsRef, id: "featured-products" },
    ];

    elementsToObserve.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute("data-animation-id", id);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Handle product click
  const handleProductClick = (product: Product) => {
    // Save product data to localStorage
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    // Navigate to product detail page
    navigate(`/products/${product.id}`);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  // Show scroll to top button when near bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrolledToBottom = scrollTop + windowHeight >= documentHeight - 300;

      setShowScrollTop(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLearnMore = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* CSS cho animation Float In */}
      <style>{`
        .float-in {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .float-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .float-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .float-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .float-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s cubic-bezier(0.45, 0.46, 0.45, 0.94);
        }
        
        .float-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .stagger-children > * {
          transition-delay: calc(var(--stagger-delay, 0) * 0.15s);
        }
      `}</style>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] overflow-hidden">
        {/* Background Image với responsive positioning */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-700"
          style={{
            backgroundImage: `url('${bannerImages[currentSlide]}')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />

        {/* Fallback Image cho compatibility tốt hơn */}
        <img
          src={bannerImages[currentSlide]}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-700"
          loading="lazy"
        />

        {/* Overlay để tăng độ tương phản cho các controls */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-5" />

        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 z-10">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full p-2 sm:p-3 text-gray-800 shadow-lg transition-all duration-300 z-20"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full p-2 sm:p-3 text-gray-800 shadow-lg transition-all duration-300 z-20"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white shadow-md scale-110"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Scroll down button */}
            <button
              onClick={scrollToAbout}
              className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white shadow-lg transition-all duration-300 animate-bounce z-20"
              aria-label="Scroll to next section"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            ref={aboutImageRef}
            className={`relative h-64 sm:h-80 md:h-[25rem] lg:h-[35rem] w-full float-in-left ${
              visibleElements.has("about-image") ? "visible" : ""
            }`}
          >
            <img
              src="./assets/san-xuong-bau-tre-2.jpg"
              alt="NPFOOD Factory"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div
            ref={aboutTextRef}
            className={`space-y-4 md:space-y-6 float-in-right ${
              visibleElements.has("about-text") ? "visible" : ""
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Đôi nét về
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#77b843]">
              NPFOOD
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
              NPFOOD là thương hiệu các sản phẩm của công ty TNHH NPFOOD Việt
              Nam.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
              NP được viết tắt của cụm từ "Nutrition & Purity" với ý nghĩa "Dinh
              dưỡng và thuần khiết" thể hiện sự cam kết của công ty trong việc
              mang đến những sản phẩm chất lượng cao và an toàn cho sức khỏe
              người tiêu dùng. NPFOOD Việt Nam tại thị trường. Hiện tại công ty
              NPFOOD Việt Nam có các dòng sản phẩm mang các thương hiệu sau:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 sm:space-y-3 text-justify text-sm sm:text-base">
              <li>
                <span className="font-semibold">MR LEE:</span> Các sản phẩm
                Kimchi Hàn Quốc
              </li>
              <li>
                <span className="font-semibold">NGỌC PHÚ:</span> Các sản phẩm
                Rau, Củ, Quả, muối chua
              </li>
              <li>
                <span className="font-semibold">Tân Long:</span> Các sản phẩm
                Trà Oolong, Trà Xanh, Trà Lài, Trà Atiso....
              </li>
              <li>
                <span className="font-semibold">Kim's:</span> Các sản phẩm Bánh
                Tráng Nướng, Bánh Tráng Trộn...
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
              NPFOOD Việt Nam luôn mong muốn đem đến những sản phẩm có giá trị
              tốt nhất cho người dùng Việt Nam và rất mong nhận được sự ủng hộ
              của người tiêu dùng.
            </p>
            <button
              onClick={handleLearnMore}
              className="relative bg-[#77b843] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md 
                   hover:scale-105 active:scale-95 
                   transform transition-all duration-300 ease-in-out
                   text-sm sm:text-base font-medium
                   border-2 border-[#77b843] hover:border-white
                   overflow-hidden group flex items-center gap-2"
            >
              {/* Lớp nền chuyển màu từ trái sang phải */}
              <span
                className="absolute inset-0 bg-white transform -translate-x-full 
                      group-hover:translate-x-0 transition-transform duration-500 ease-out"
              ></span>

              {/* Text với hiệu ứng chuyển màu */}
              <span className="relative z-10 group-hover:text-[#77b843] transition-colors duration-500 flex items-center gap-2">
                TÌM HIỂU THÊM
                {/* Ant Design RightOutlined icon */}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {/* import { RightOutlined } from '@ant-design/icons'; ở đầu file */}
                  <RightOutlined />
                </span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20 white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2
            ref={featuredTitleRef}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#77b843] mb-2 float-in ${
              visibleElements.has("featured-title") ? "visible" : ""
            }`}
          >
            SẢN PHẨM NỔI BẬT
          </h2>
          <div
            className={`w-24 h-1 bg-[#77b843] mx-auto mb-8 md:mb-10 float-in ${
              visibleElements.has("featured-title") ? "visible" : ""
            }`}
            style={{ transitionDelay: "0.4s" }}
          />
          <div
            ref={featuredProductsRef}
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 stagger-children float-in ${
              visibleElements.has("featured-products") ? "visible" : ""
            }`}
          >
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="flex flex-col items-center p-4 md:p-6 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="h-60 sm:h-72 md:h-80 flex items-center justify-center mb-4">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#77b843] text-center h-12 flex items-center group-hover:text-[#5a8a2f] transition-colors">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-600 hover:bg-[#77b843] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home;
