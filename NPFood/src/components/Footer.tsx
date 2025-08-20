import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#77b843] text-white">
      <div className="container mx-auto px-4 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
            Thông tin liên hệ
          </h3>
          <div className="text-sm md:text-base space-y-2">
            <p>
              <span className="font-semibold text-lg md:text-xl">
                CÔNG TY TNHH NPFOOD VIỆT NAM
              </span>
            </p>
            <p className="text-black">
              <span className="font-semibold">Địa chỉ:</span> 23A, đường số 45,
              ấp Tân Thạnh, xã Tân Thông Hội, huyện Củ Chi, TPHCM, Việt Nam
            </p>
            <p className="text-black">
              <span className="font-semibold">Nhà máy sản xuất:</span> 40 Bàu
              Tre, ấp Tân An Hội, huyện Củ Chi, TPHCM, Việt Nam
            </p>
            <p className="text-black">
              <span className="font-semibold">Văn phòng giao dịch:</span> 170
              Kênh 19/5, phường Tây Thạnh, quận Tân Phú, TPHCM, Việt Nam
            </p>
            <p className="text-black">
              <span className="font-semibold">Điện thoại:</span> 028.39225005
            </p>
            <p className="text-black">
              <span className="font-semibold">Email:</span> info@npfood.com.vn
            </p>
            <p className="text-black">
              <span className="font-semibold">Website:</span> www.npfood.com.vn
            </p>
            <p className="text-black">
              <span className="font-semibold">Mã số thuế:</span> 0312291509
            </p>
          </div>
        </div>

        <div className="space-y-3 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Liên kết với
            </span>
            <img
              src="/assets/logo-npfood_xanh-01.png"
              alt="NPFOOD Logo"
              className="h-12 md:h-14 lg:h-16"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="flex justify-center lg:justify-start gap-3 md:gap-5 text-2xl md:text-3xl mt-3">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <svg
                width="32"
                height="32"
                className="md:w-10 md:h-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <svg
                width="32"
                height="32"
                className="md:w-10 md:h-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.382 3.5 12 3.5 12 3.5s-7.382 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.2 0 12 0 12s0 3.8.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.618 20.5 12 20.5 12 20.5s7.382 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.8 24 12 24 12s0-3.8-.502-5.814zM9.545 16.02V7.98l6.545 4.02-6.545 4.02z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Google"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <svg
                width="32"
                height="32"
                className="md:w-10 md:h-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.805 10.023h-9.18v3.955h5.266c-.227 1.21-1.37 3.553-5.266 3.553-3.17 0-5.755-2.624-5.755-5.855s2.585-5.855 5.755-5.855c1.805 0 3.02.77 3.715 1.432l2.54-2.47C17.02 3.64 15.07 2.5 12.625 2.5 7.74 2.5 3.875 6.365 3.875 11.25s3.865 8.75 8.75 8.75c5.045 0 8.375-3.545 8.375-8.545 0-.57-.06-1.01-.13-1.432z"
                  fill="#fff"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <svg
                width="32"
                height="32"
                className="md:w-10 md:h-10"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.567 5.783 2.296 7.149 2.234 8.415 2.176 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.13 4.659.392 3.678 1.373c-.98.98-1.242 2.092-1.3 3.373C2.013 5.668 2 6.077 2 9.337v5.326c0 3.26.013 3.669.072 4.949.058 1.281.32 2.393 1.3 3.373.98.98 2.092 1.242 3.373 1.3 1.28.059 1.689.072 4.949.072s3.669-.013 4.949-.072c1.281-.058 2.393-.32 3.373-1.3.98-.98 1.242-2.092 1.3-3.373.059-1.28.072-1.689.072-4.949V9.337c0-3.26-.013-3.669-.072-4.949-.058-1.281-.32-2.393-1.3-3.373-.98-.98-2.092-1.242-3.373-1.3C15.669.013 15.26 0 12 0z"
                  fill="#fff"
                />
                <path
                  d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-2 mt-4">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-xs md:text-sm text-center lg:text-left">
            &copy; Copyright @NPFOOD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
