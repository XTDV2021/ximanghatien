import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <div className="bg-white_1 px-4 md:px-10 lg:px-60 py-4 text-black!font-poppins">
        <div className="flex flex-col lg:flex-row justify-between items-center py-7 px-4 bg-white">
          <div className="flex flex-col items-start p-6 border-l border-gray_2 w-full lg:w-2/5 mb-6 lg:mb-0">
            <p className="font-medium text-gray-500 pb-8 text-16px">
              Kết nối vững chắc, xây dựng tương lai.
            </p>{" "}
            {/* Slogan */}
            <div className="text-black">
              <p className="font-manjari text-40px leading-tight"></p>{" "}
              {/* Brand Name */}
              <h1 className="font-manjari text-40px leading-tight">
                CÔNG TY CỔ PHẦN XI MĂNG HÀ TIÊN KIÊN GIANG
              </h1>{" "}
              {/* Company Name */}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 font-semibold w-full lg:w-3/5 justify-center border-l lg:border-r border-gray_2">
            <div className="flex flex-col items-start mb-6 lg:mb-0">
              <Link to="/" className="text-left pb-3 text-gray-500">
                Trang Chủ
              </Link>{" "}
              {/* Home */}
              <div className="flex flex-col gap-2 mt-2">
                <Link to="/gioi-thieu" className="btn text-left underline">
                  Giới Thiệu
                </Link>{" "}
                {/* About */}
                <Link to="/san-pham" className="btn text-left underline">
                  Sản Phẩm
                </Link>{" "}
                {/* Products */}
                <Link to="/chung-nhan" className="btn text-left underline">
                  Chứng Nhận
                </Link>{" "}
                {/* Certifications/Testimonials */}
              </div>
            </div>
            <div className="flex flex-col items-start mb-6 lg:mb-0">
              <Link to="/san-pham" className="text-left pb-3 text-gray-500">
                Sản Phẩm
              </Link>{" "}
              {/* Products */}
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  to="/san-pham/xi-mang-pc30"
                  className="btn text-left underline"
                >
                  Xi Măng PC30
                </Link>{" "}
                {/* Example Product */}
                <Link
                  to="/san-pham/xi-mang-pc40"
                  className="btn text-left underline"
                >
                  Xi Măng PC40
                </Link>{" "}
                {/* Example Product */}
                <Link
                  to="/san-pham/xi-mang-khac"
                  className="btn text-left underline"
                >
                  Các Loại Xi Măng Khác
                </Link>{" "}
                {/* Other Products */}
              </div>
            </div>
            <div className="flex flex-col items-start mb-6 lg:mb-0">
              <Link to="/ho-tro" className="text-left pb-3 text-gray-500">
                Hỗ Trợ
              </Link>{" "}
              {/* Support */}
              <div className="flex flex-col gap-2 mt-2">
                <Link to="/ho-tro/hoi-dap" className="btn text-left underline">
                  Hỏi Đáp
                </Link>{" "}
                {/* FAQ */}
                <Link to="/ho-tro/lien-he" className="btn text-left underline">
                  Liên Hệ
                </Link>{" "}
                {/* Contact */}
                <Link
                  to="/ho-tro/giao-hang"
                  className="btn text-left underline"
                >
                  Giao Hàng & Vận Chuyển
                </Link>{" "}
                {/* Delivery */}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <Link to="/lien-he" className="text-left pb-3 text-gray-500">
                Liên Hệ
              </Link>{" "}
              {/* Contact Us */}
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  to="/lien-he/cua-hang"
                  className="btn text-left underline"
                >
                  Cửa Hàng
                </Link>{" "}
                {/* Store */}
                <Link
                  to="/lien-he/so-dien-thoai"
                  className="btn text-left underline"
                >
                  Điện Thoại
                </Link>{" "}
                {/* Phone */}
                <Link to="/lien-he/email" className="btn text-left underline">
                  Email
                </Link>{" "}
                {/* Email */}
                <Link
                  to="/lien-he/tin-nhan"
                  className="btn text-left underline"
                >
                  Tin Nhắn
                </Link>{" "}
                {/* Message */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-10 lg:px-60 py-10 border-t border-gray_2 bg-pink_1">
        <div className="flex gap-6 mb-4 lg:mb-0">
          <Link to="/chinh-sach-bao-mat" className="font-bold">
            Chính Sách Bảo Mật
          </Link>{" "}
          {/* Privacy Policy */}
          <p>|</p>
          <Link to="/dieu-khoan-su-dung" className="font-bold">
            Điều Khoản Sử Dụng
          </Link>{" "}
          {/* Terms of Use */}
        </div>
        <p className="text-green_1 text-center lg:text-left">
          Copyright © 2023 [Tên Công Ty]. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
