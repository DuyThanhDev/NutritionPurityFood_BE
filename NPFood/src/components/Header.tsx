import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuClick = (category: string) => {
    localStorage.setItem("selectedCategory", category);
    window.dispatchEvent(new Event("storage"));
    scrollToTop();
  };

  return (
    <header className="bg-[#77b843] shadow-sm sticky top-0 z-50">
      {/* Main header */}
      <div className="py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 flex items-center justify-between">
        {/* Logo and brand */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
          <a href="#" className="flex items-center gap-1 sm:gap-2">
            <img
              src="https://npfood.com.vn/uploads/logo/log_np-web3.png"
              alt="NP Food Logo"
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            />
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-sm sm:text-base md:text-lg font-semibold text-white whitespace-nowrap"
            >
              <span className="hidden sm:inline">NP Food Viet Nam</span>
              <span className="sm:hidden">NPFOOD</span>
            </Link>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-0 text-base xl:text-lg font-medium xl:mr-20">
          <Link
            to="/"
            onClick={scrollToTop}
            className="text-white hover:text-green-200 px-2 xl:px-3 py-2"
          >
            TRANG CHỦ
          </Link>
          <Link
            to="/about"
            onClick={scrollToTop}
            className="text-white hover:text-green-200 px-2 xl:px-3 py-2"
          >
            VỀ CHÚNG TÔI
          </Link>
          <div className="relative group">
            <Link
              to="/products"
              onClick={() => {
                localStorage.setItem("selectedCategory", "SẢN PHẨM");
                window.dispatchEvent(new Event("storage"));
                scrollToTop();
              }}
              className="text-white hover:text-green-200 px-2 xl:px-3 py-2"
            >
              SẢN PHẨM
            </Link>
            <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <Link
                  to="/products"
                  onClick={() => {
                    localStorage.setItem("selectedCategory", "TRÀ");
                    window.dispatchEvent(new Event("storage"));
                    scrollToTop();
                  }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#77b843]"
                >
                  Trà
                </Link>
                <Link
                  to="/products"
                  onClick={() => {
                    localStorage.setItem("selectedCategory", "THỰC PHẨM");
                    window.dispatchEvent(new Event("storage"));
                    scrollToTop();
                  }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#77b843]"
                >
                  Kimchi, Rau Chua
                </Link>
                <Link
                  to="/products"
                  onClick={() => {
                    localStorage.setItem("selectedCategory", "BÁNH TRÁNG");
                    window.dispatchEvent(new Event("storage"));
                    scrollToTop();
                  }}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#77b843]"
                >
                  Bánh Tráng
                </Link>
              </div>
            </div>
          </div>
          <a
            href="/news"
            className="text-white hover:text-green-200 px-2 xl:px-3 py-2"
          >
            TIN TỨC
          </a>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="text-white hover:text-green-200 px-2 xl:px-3 py-2"
          >
            LIÊN HỆ
          </Link>
          <div className="flex items-center gap-2 ml-4">
            <button
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              onClick={toggleSearch}
            >
              🔍
            </button>
          </div>
        </nav>

        {/* Mobile menu button and search */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            onClick={toggleSearch}
          >
            🔍
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop search dropdown */}
        {isSearchOpen && (
          <div className="absolute top-full right-3 sm:right-6 mt-2 bg-white shadow-lg rounded-lg p-4 w-[280px] sm:w-[320px] md:w-[360px] z-50">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập nội dung tìm kiếm"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#77b843] text-white rounded-r-md hover:bg-[#5a8a2f] transition-colors"
              >
                🔍
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#77b843] border-t border-white/20">
          <nav className="px-4 py-2 space-y-1">
            <Link
              to="/"
              onClick={scrollToTop}
              className="block text-white hover:text-green-200 py-3 px-2 rounded transition-colors"
            >
              TRANG CHỦ
            </Link>
            <Link
              to="/about"
              onClick={scrollToTop}
              className="block text-white hover:text-green-200 py-3 px-2 rounded transition-colors"
            >
              VỀ CHÚNG TÔI
            </Link>

            {/* Mobile products menu */}
            <div className="py-2">
              <Link
                to="/products"
                onClick={() => handleMobileMenuClick("SẢN PHẨM")}
                className="block text-white hover:text-green-200 py-2 px-2 rounded transition-colors font-semibold"
              >
                SẢN PHẨM
              </Link>
              <div className="ml-4 space-y-1">
                <Link
                  to="/products"
                  onClick={() => handleMobileMenuClick("TRÀ")}
                  className="block text-white/90 hover:text-green-200 py-2 px-2 rounded transition-colors text-sm"
                >
                  • Trà
                </Link>
                <Link
                  to="/products"
                  onClick={() => handleMobileMenuClick("THỰC PHẨM")}
                  className="block text-white/90 hover:text-green-200 py-2 px-2 rounded transition-colors text-sm"
                >
                  • Kimchi, Rau Chua
                </Link>
                <Link
                  to="/products"
                  onClick={() => handleMobileMenuClick("BÁNH TRÁNG")}
                  className="block text-white/90 hover:text-green-200 py-2 px-2 rounded transition-colors text-sm"
                >
                  • Bánh Tráng
                </Link>
              </div>
            </div>

            <a
              href="/news"
              className="block text-white hover:text-green-200 py-3 px-2 rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TIN TỨC
            </a>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="block text-white hover:text-green-200 py-3 px-2 rounded transition-colors"
            >
              LIÊN HỆ
            </Link>

            {/* Mobile search */}
            <div className="pt-3 pb-2">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-[#77b843] rounded-r-md hover:bg-gray-50 transition-colors"
                >
                  🔍
                </button>
              </form>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
