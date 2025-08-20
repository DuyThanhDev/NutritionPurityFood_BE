import type React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
        {/* Background Image với responsive positioning */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:bg-top md:bg-center z-0"
          style={{
            backgroundImage: "url('/assets/cong-cong-ty2.jpg')",
            backgroundPosition: "center 30%", // Hiển thị phần quan trọng trên mobile
            backgroundSize: "cover",
          }}
        />

        {/* Fallback Image với responsive object positioning */}
        <img
          src="/assets/cong-cong-ty2.jpg"
          alt="NPFOOD Company"
          className="absolute inset-0 w-full h-full object-cover object-center sm:object-top md:object-center lg:object-center z-0"
          style={{
            objectPosition: "center 30%", // Đảm bảo phần quan trọng luôn hiển thị
          }}
          loading="lazy"
        />

        {/* Overlay nhẹ để tăng độ tương phản */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-10" />

        {/* Container cho nội dung overlay nếu cần */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            {/* Có thể thêm title hoặc breadcrumb nếu cần */}
          </div>
        </div>
      </section>

      {/* Header2 */}
      <Header2 />

      {/* Content Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#77b843] mb-8 text-center">
              Giới thiệu
            </h1>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-800 mb-8 drop-shadow-lg">
              NPFOOD - Sản phẩm dinh dưỡng và thuần khiết
            </h4>

            <div className="space-y-6 sm:space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg text-justify">
              <p>
                <span className="font-semibold">Công ty TNHH NPFOOD</span> Việt
                Nam được thành lập từ năm 2015 chuyên sản xuất các sản phẩm thực
                phẩm tiêu dùng hàng ngày. Hiện công ty đang sản xuất các dòng
                sản phẩm Kimchi Hàn Quốc thương hiệu MR LEE, Rau Củ Quả muối
                chua thương hiệu NGỌC PHÚ, Trà các loại thương hiệu Tân Long,
                Bánh Tráng các loại thương hiệu Kim's
              </p>

              <p>
                Các sản phẩm công ty được sản xuất tại 2 nhà máy của công ty tại
                huyện Củ Chi, Thành Phố Hồ Chí Minh.
              </p>

              <p>
                <span className="font-semibold">Nhà máy 1 :</span> 23A đường 45,
                ấp Tân Thạnh, xã Tân Thông Hội, huyện Củ Chi, TPHCM. Đây là nhà
                máy chuyên sản xuất các dòng sản phẩm khô như Bánh Tráng các
                loại...
              </p>

              <p>
                <span className="font-semibold">Nhà máy 2 :</span> 40 đường Bàu
                Tre, ấp Bàu Tre 1, xã Tân An Hội, huyện Củ Chi, TPHCM. Đây là
                nhà máy chuyên sản xuất các dòng sản phẩm Kimchi, Rau Củ Quả...
              </p>

              <p>
                Với mong muốn đưa ra thị trường các sản phẩm có chất lượng tốt,
                NPFOOD Việt Nam luôn nghiêm túc chọn lọc, kiểm tra nguyên liệu
                đầu vào và các sản phẩm đầu ra để phục vụ tốt nhất người tiêu
                dùng. NPFOOD rất mong nhận được sự tin nhiệm và tin cậy của
                khách hàng để công ty ngày càng có nhiều sản phẩm phục vụ khách
                hàng hơn.
              </p>

              <p className="text-lg sm:text-xl font-semibold">Trân trọng!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
