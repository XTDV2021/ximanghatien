import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShippingFast,
  faTruck,
  faBox,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import React from "react";
const Contact = () => {
  return (
    <main className="main">
      <div className="section py-4">
        <div className=" mx-auto my-0 w-full">
          <div className="content-wrapper flex text-black">
            <div className="mx-auto w-1/2">
              <span className="text-xs md:text-sm">Liên hệ với chúng tôi</span>
              <br></br>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Chúng tôi cung cấp
                <br></br> xi măng chất lượng cao.<br></br> Uy tín - Bền vững -
                Hiệu quả.
              </p>
              <br></br>
              <span className="text-xs md:text-sm">
                Sản phẩm của chúng tôi đạt tiêu chuẩn chất lượng cao, đảm bảo độ
                bền vững và thân thiện với môi trường. Chúng tôi cam kết cung
                cấp xi măng với giá cả hợp lý và dịch vụ tốt nhất cho khách
                hàng.
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="section py-8">
        <div className="container mx-auto flex">
          <div className="w-1/2 flex justify-end items-center">
            <img
              className="max-w-full h-auto"
              alt="Hero"
              src="https://lh5.googleusercontent.com/p/AF1QipOVq1NJ38l7eB_35Xade2Go0D8nUSoXDpqCvMtT=w408-h306-k-no"
              style={{ maxHeight: "400px", width: "400px" }}
            />
          </div>
          <div className="w-1/3 bg-[#CEF53D] p-8 flex flex-col justify-center items-start">
            <h1 className="text-5xl font-bold mb-2">Về chúng tôi</h1>
            <p className="text-lg">
              Chúng tôi chuyên cung cấp các loại xi măng đạt tiêu chuẩn xây
              dựng, đảm bảo chất lượng và độ bền cho công trình của bạn.
            </p>
            <br></br>
            <a href="#" className="shop-now-btn">
              <strong>Mua ngay &rarr;</strong>
            </a>
          </div>
        </div>
      </section>

      <section className="section py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8 bg-slate-200">
              <div className="px-6 py-4">
                <div className="flex justify-center items-center mb-4">
                  <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
                </div>
                <div className="font-bold text-xl mb-2 text-center">
                  Địa chỉ
                </div>
                <p className="text-gray-700 text-base text-center">
                  153 Hàm Nghi, <br /> TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8 bg-slate-200">
              <div className="px-6 py-4">
                <div className="flex justify-center items-center mb-4">
                  <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                </div>
                <div className="font-bold text-xl mb-2 text-center">
                  Điện thoại
                </div>
                <p className="text-gray-700 text-base text-center">
                  +84 234 567 890
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 bg-[#CFF53E] w-full border-t border-[#4848FF]">
        <div className="container mx-[auto] my-0">
          <div className="content-wrapper">
            <ul className="flex justify-between text-[#4848FF] font-bold text-xs md:text-md lg:text-lg">
              <li className="section-item text-center ">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2 text-left" />
                </span>
                Xi măng chất lượng cao
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                Giao hàng tận nơi
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                Hỗ trợ tư vấn 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
