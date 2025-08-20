import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";

const initialContact = {
  heroImage: "/assets/cong-cong-ty2.jpg",
  logo: "/assets/logo-npfood_xanh-01.png",
  address: "23A, đường số 45, ấp Tân Thạnh, xã Tân Thông Hội, huyện Củ Chi, TPHCM, Việt Nam",
  office: "Văn phòng giao dịch : 362 Hòa Hảo, Phường 5, Quận 10, TPHCM",
  phone: "028.39225005",
  email: "info@npfood.com.vn",
  website: "www.npfood.com.vn",
  tax: "031 229 1509",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.900413953876!2d106.48561804473825!3d10.965251677121687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298444e335f9%3A0x82ac1778244492b3!2sC%C3%B4ng%20Ty%20Tnhh%20Npfood%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1752592985053!5m2!1svi!2s"
};

const ManagementContactPage: React.FC = () => {
  const [contact, setContact] = useState({ ...initialContact });

  // Xử lý upload ảnh hero
  const handleHeroImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setContact((prev) => ({ ...prev, heroImage: result }));
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
  };
  const handleRemoveHeroImage = () => {
    setContact((prev) => ({ ...prev, heroImage: "" }));
  };

  // Xử lý upload logo
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setContact((prev) => ({ ...prev, logo: result }));
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
  };
  const handleRemoveLogo = () => {
    setContact((prev) => ({ ...prev, logo: "" }));
  };

  // Cập nhật thông tin
  const handleChange = (field: string, value: string) => {
    setContact({ ...contact, [field]: value });
  };

  // Lưu (giả lập)
  const handleSave = () => {
    alert("Đã lưu thông tin liên hệ (giả lập, cần tích hợp API thực tế)");
  };

  return (
    <>
      <HeaderAdmin />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 space-y-6 md:space-y-10">
        <h1 className="text-4xl font-extrabold text-[#77b843] mt-6 mb-6 text-center">QUẢN LÝ LIÊN HỆ</h1>
        <section className="bg-gray-50 rounded-lg shadow p-2 sm:p-4 mb-6 md:mb-8">
          <h2 className="text-lg font-semibold mb-4">Ảnh nền trang liên hệ (Hero Background)</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
            {contact.heroImage ? (
              <div className="relative w-full max-w-xs sm:w-64 sm:h-40 h-40 border rounded overflow-hidden group flex-shrink-0">
                <img
                  src={contact.heroImage}
                  alt="Contact Hero"
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-80 hover:opacity-100"
                  onClick={handleRemoveHeroImage}
                  title="Xóa ảnh"
                >
                  <DeleteOutlined />
                </button>
              </div>
            ) : null}
            <div className="flex flex-col gap-2">
              {!contact.heroImage && (
                <label className="bg-[#77b843] text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer hover:bg-green-700">
                  <PlusOutlined /> Thêm ảnh
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleHeroImageChange}
                  />
                </label>
              )}
              {contact.heroImage && (
                <label className="bg-[#77b843] text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer hover:bg-green-700">
                  <PlusOutlined /> Đổi ảnh
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleHeroImageChange}
                  />
                </label>
              )}
            </div>
          </div>
        </section>
        <section className="bg-gray-50 rounded-lg shadow p-2 sm:p-4 mb-6 md:mb-8">
          <h2 className="text-lg font-semibold mb-4">Logo công ty</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
            {contact.logo ? (
              <div className="relative w-full max-w-xs sm:w-40 sm:h-24 h-24 border rounded overflow-hidden group flex-shrink-0 bg-white">
                <img
                  src={contact.logo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-80 hover:opacity-100"
                  onClick={handleRemoveLogo}
                  title="Xóa logo"
                >
                  <DeleteOutlined />
                </button>
              </div>
            ) : null}
            <div className="flex flex-col gap-2">
              {!contact.logo && (
                <label className="bg-[#77b843] text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer hover:bg-green-700">
                  <PlusOutlined /> Thêm logo
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                </label>
              )}
              {contact.logo && (
                <label className="bg-[#77b843] text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer hover:bg-green-700">
                  <PlusOutlined /> Đổi logo
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                </label>
              )}
            </div>
          </div>
        </section>
        <section className="bg-gray-50 rounded-lg shadow p-2 sm:p-4 mb-6 md:mb-8">
          <h2 className="text-lg font-semibold mb-4">Thông tin liên hệ</h2>
          <div className="text-xs text-gray-500 mb-2">Các trường dưới đây sẽ cập nhật trực tiếp thông tin hiển thị trên trang Liên hệ (Contact) của website.</div>
          <div className="space-y-3">
            <div>
              <label className="block font-medium mb-1">Địa chỉ nhà máy:</label>
              <input
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={contact.address}
                onChange={e => handleChange("address", e.target.value)}
                placeholder="Địa chỉ nhà máy"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Văn phòng giao dịch (hiển thị ở trang liên hệ):</label>
              <input
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={contact.office}
                onChange={e => handleChange("office", e.target.value)}
                placeholder="Văn phòng giao dịch"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Điện thoại (hiển thị ở trang liên hệ):</label>
              <input
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={contact.phone}
                onChange={e => handleChange("phone", e.target.value)}
                placeholder="Số điện thoại"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email (hiển thị ở trang liên hệ):</label>
              <input
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={contact.email}
                onChange={e => handleChange("email", e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Website:</label>
              <input
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={contact.website}
                onChange={e => handleChange("website", e.target.value)}
                placeholder="Website"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Mã số thuế:</label>
              <input
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={contact.tax}
                onChange={e => handleChange("tax", e.target.value)}
                placeholder="Mã số thuế"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Google Map (iframe src):</label>
              <input
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={contact.map}
                onChange={e => handleChange("map", e.target.value)}
                placeholder="Google Map iframe src"
              />
            </div>
          </div>
        </section>
        {/* Nút lưu */}
        <div className="flex justify-end pb-4">
          <button
            className="bg-[#77b843] hover:bg-green-700 text-white px-6 py-2 rounded flex items-center gap-2 font-semibold"
            onClick={handleSave}
          >
            <SaveOutlined /> Lưu thay đổi
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManagementContactPage;
