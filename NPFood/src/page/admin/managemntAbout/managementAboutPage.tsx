import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import HeaderAdmin from "../../../components/HeaderAdmin";
import Footer from "../../../components/Footer";

// Dữ liệu mẫu ban đầu (có thể lấy từ API hoặc props)
const initialAbout = {
  title: "Đôi nét về",
  company: "NPFOOD",
  aboutImage: "/assets/cong-cong-ty2.jpg", // Ảnh đúng với About.tsx
  description1:
    "Công ty TNHH NPFOOD Việt Nam được thành lập từ năm 2015 chuyên sản xuất các sản phẩm thực phẩm tiêu dùng hàng ngày. Hiện công ty đang sản xuất các dòng sản phẩm Kimchi Hàn Quốc thương hiệu MR LEE, Rau Củ Quả muối chua thương hiệu NGỌC PHÚ, Trà các loại thương hiệu Tân Long, Bánh Tráng các loại thương hiệu Kim's\n\nCác sản phẩm công ty được sản xuất tại 2 nhà máy của công ty tại huyện Củ Chi, Thành Phố Hồ Chí Minh.",
  factory1: "Nhà máy 1 : 23A đường 45, ấp Tân Thạnh, xã Tân Thông Hội, huyện Củ Chi, TPHCM. Đây là nhà máy chuyên sản xuất các dòng sản phẩm khô như Bánh Tráng các loại...",
  factory2: "Nhà máy 2 : 40 đường Bàu Tre, ấp Bàu Tre 1, xã Tân An Hội, huyện Củ Chi, TPHCM. Đây là nhà máy chuyên sản xuất các dòng sản phẩm Kimchi, Rau Củ Quả...",
  description3:
    "Với mong muốn đưa ra thị trường các sản phẩm có chất lượng tốt, NPFOOD Việt Nam luôn nghiêm túc chọn lọc, kiểm tra nguyên liệu đầu vào và các sản phẩm đầu ra để phục vụ tốt nhất người tiêu dùng. NPFOOD rất mong nhận được sự tin nhiệm và tin cậy của khách hàng để công ty ngày càng có nhiều sản phẩm phục vụ khách hàng hơn.\n\nTrân trọng!",
};

const ManagementAboutPage: React.FC = () => {
  const [about, setAbout] = useState({ ...initialAbout });

  // Xử lý upload ảnh about
  const handleAboutImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const result = ev.target?.result as string;
        setAbout((prev) => ({ ...prev, aboutImage: result }));
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
  };
  const handleRemoveAboutImage = () => {
    setAbout((prev) => ({ ...prev, aboutImage: "" }));
  };

  // Cập nhật about
  const handleAboutChange = (field: string, value: string) => {
    setAbout({ ...about, [field]: value });
  };


  // Lưu (giả lập)
  const handleSave = () => {
    alert("Đã lưu thông tin giới thiệu (giả lập, cần tích hợp API thực tế)");
  };

  return (
    <>
      <HeaderAdmin />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 space-y-6 md:space-y-10">
        <h1 className="text-4xl font-extrabold text-[#77b843] mt-6 mb-6 text-center">QUẢN LÝ GIỚI THIỆU</h1>
        <section className="bg-gray-50 rounded-lg shadow p-2 sm:p-4 mb-6 md:mb-8">
          <h2 className="text-lg font-semibold mb-4">Nội dung giới thiệu (About)</h2>
          <div className="space-y-4">
            {/* Ảnh đại diện section About */}
            <div>
              <label className="block font-medium mb-1">Ảnh nền section giới thiệu (Hero Background):</label>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {about.aboutImage ? (
                  <div className="relative w-full max-w-xs sm:w-64 sm:h-40 h-40 border rounded overflow-hidden group flex-shrink-0">
                    <img
                      src={about.aboutImage}
                      alt="About Hero"
                      className="w-full h-full object-cover"
                    />
                    <button
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-80 hover:opacity-100"
                      onClick={handleRemoveAboutImage}
                      title="Xóa ảnh"
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                ) : null}
                <div className="flex flex-col gap-2">
                  {!about.aboutImage && (
                    <label className="bg-[#77b843] text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer hover:bg-green-700">
                      <PlusOutlined /> Thêm ảnh
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAboutImageChange}
                      />
                    </label>
                  )}
                  {about.aboutImage && (
                    <label className="bg-[#77b843] text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer hover:bg-green-700">
                      <PlusOutlined /> Đổi ảnh
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAboutImageChange}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Mô tả giới thiệu công ty, sản phẩm, thương hiệu:</label>
              <textarea
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={about.description1}
                onChange={e => handleAboutChange("description1", e.target.value)}
                placeholder="Mô tả giới thiệu công ty, sản phẩm, thương hiệu..."
                rows={5}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Nhà máy 1:</label>
              <textarea
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={about.factory1 || ''}
                onChange={e => handleAboutChange("factory1", e.target.value)}
                placeholder="Nhà máy 1: Địa chỉ và mô tả"
                rows={3}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Nhà máy 2:</label>
              <textarea
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={about.factory2 || ''}
                onChange={e => handleAboutChange("factory2", e.target.value)}
                placeholder="Nhà máy 2: Địa chỉ và mô tả"
                rows={3}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Mô tả cuối (cam kết, lời chào, ... ):</label>
              <textarea
                className="border rounded px-2 py-1 w-full text-sm md:text-base"
                value={about.description3}
                onChange={e => handleAboutChange("description3", e.target.value)}
                placeholder="Mô tả cuối (cam kết, lời chào, ... )"
                rows={3}
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

export default ManagementAboutPage;
