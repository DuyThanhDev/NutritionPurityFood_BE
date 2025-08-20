import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./page/home/Home";
import About from "./page/about/About";
import Contact from "./page/contact/Contact";
import News from "./page/news/News";
import ProductDetail from "./page/products/ProductDetail";
import Products from "./page/products/Products";
import NewsDetail from "./page/news/NewsDetail";
import Search from "./page/search/Search";
import LoginAdminPage from "./page/admin/loginAdmin/loginAdminPage";
import ManagementHomePage from "./page/admin/managementHome/managementHomePage";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import ManagementAboutPage from "./page/admin/managemntAbout/managementAboutPage";
import ManagementContactPage from "./page/admin/managementContact/managementContactPage";
import ManagementProductsPage from "./page/admin/managementProducts/managementProductsPage";
import ManagementNewsPage from "./page/admin/managementNews/managementNewsPage";


// Component bảo vệ route admin
const RequireAdminAuth: React.FC = () => {
  const isLoggedIn = localStorage.getItem("admin_logged_in") === "true";
  return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<Search />} />

          {/* Route đăng nhập admin */}
          <Route path="/admin/login" element={<LoginAdminPage />} />

          {/* Các route admin cần đăng nhập */}
          <Route path="/admin" element={<RequireAdminAuth />}>
            <Route path="managementHome" element={<ManagementHomePage />} />
            <Route path="managementAbout" element={<ManagementAboutPage />} />
            <Route path="managementContact" element={<ManagementContactPage />} />
            <Route path="managementProducts" element={<ManagementProductsPage />} />
            <Route path="managementNews" element={<ManagementNewsPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
