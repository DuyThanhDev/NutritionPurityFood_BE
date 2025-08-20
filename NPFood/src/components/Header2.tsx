import React from "react";
import { useLocation } from "react-router-dom";

interface Header2Props {
  breadcrumb?: {
    category?: string;
    productName?: string;
  };
}

const Header2: React.FC<Header2Props> = ({ breadcrumb }) => {
  const location = useLocation();

  // Map routes to page titles
  const getPageTitle = (pathname: string): string | null => {
    switch (pathname) {
      case "/about":
        return "GIỚI THIỆU";
      case "/products":
        return "SẢN PHẨM";
      case "/contact":
        return "LIÊN HỆ";
      case "/news":
        return "TIN TỨC";
      case "/search":
        return "TÌM KIẾM";
      default:
        return null;
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  const getBreadcrumbText = () => {
    if (breadcrumb) {
      // Khi có breadcrumb (product detail page)
      let text = "SẢN PHẨM";
      if (breadcrumb.category) {
        text += ` > ${breadcrumb.category}`;
      }
      if (breadcrumb.productName) {
        text += ` > ${breadcrumb.productName}`;
      }
      return text;
    }
    // Default cho các trang khác (News, About, Contact...)
    return "SẢN PHẨM";
  };

  return (
    <div className="bg-[#77b843] py-3">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-white text-lg font-medium">
          {breadcrumb ? getBreadcrumbText() : pageTitle}
        </div>
      </div>
    </div>
  );
};

export default Header2;
