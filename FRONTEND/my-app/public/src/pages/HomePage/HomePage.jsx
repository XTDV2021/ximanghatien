import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faIndustry,
  faCheckCircle,
  faStar,
  faBuilding,
  faPaperPlane,
  faChevronLeft,
  faChevronRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = () => {
  const slides = [
    {
      image:
        "https://baogiaothong.mediacdn.vn/603483875699699712/2024/4/10/tinh-chat-xi-mang-1712739502985446151244.jpg",
      title: "Xi Măng Chất Lượng Cao",
      description:
        "Giải pháp xi măng chuyên nghiệp cho các công trình xây dựng",
    },
    {
      image:
        "https://vicem.vn/stores/news_dataimages/vientd/012022/14/14/0126_NM_KIEN_LUONG.jpg",
      title: "Công Trình Tiêu Biểu",
      description: "Ứng dụng xi măng trong các dự án lớn và quan trọng",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.kZEfuj6nstvirFmpZmhSyAHaEK?rs=1&pid=ImgDetMain",
      title: "Quy Trình Sản Xuất Hiện Đại",
      description: "Công nghệ sản xuất tiên tiến, đảm bảo chất lượng tối ưu",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pc6JOB-aQlJyMmQ2zDNbaRVZP2VNYoyCHw&s",
      title: "Hạ Tầng Quốc Gia",
      description:
        "Cung cấp giải pháp xi măng cho các dự án giao thông trọng điểm",
    },
    {
      image: "https://cpxd1369.com.vn/wp-content/uploads/2021/03/5-dd-1.jpg",
      title: "Hệ Thống Phân Phối Rộng Khắp",
      description: "Mạng lưới kho bãi và logistics hiện đại",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {" "}
      {/* Changed height from 700px to 400px */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-[400px]">
            {" "}
            {/* Changed height to match container */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-center justify-center">
              <div className="text-center text-white px-8 max-w-4xl">
                <h2 className="text-3xl font-bold mb-3 tracking-tight">
                  {slide.title}
                </h2>{" "}
                {/* Reduced text size and margin */}
                <p className="text-lg font-light">{slide.description}</p>{" "}
                {/* Reduced text size */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-4 rounded-full hover:bg-black/50 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-4 rounded-full hover:bg-black/50 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {" "}
        {/* Reduced bottom spacing */}
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-amber-400 w-6"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
    <div className="bg-amber-400/10 w-24 h-24 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
      <FontAwesomeIcon
        icon={icon}
        className="text-amber-500 text-4xl group-hover:text-amber-600 transition-colors"
      />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-center text-slate-800">
      {title}
    </h3>
    <p className="text-gray-600 text-center text-lg leading-relaxed">
      {description}
    </p>
  </div>
);

const TestimonialCard = ({ name, company, quote, avatar }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 border border-gray-100">
    <div className="mb-6 relative inline-block">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto border-4 border-amber-400 p-1"
      />
      <div className="absolute -bottom-2 -right-2 bg-amber-400 w-8 h-8 rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={faCheckCircle} className="text-white" />
      </div>
    </div>
    <p className="italic mb-6 text-gray-700 text-lg leading-relaxed">
      "{quote}"
    </p>
    <h4 className="font-bold text-slate-800 text-xl mb-1">{name}</h4>
    <p className="text-amber-600 font-medium">{company}</p>
  </div>
);

const FeatureCard = ({ title }) => (
  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10">
    <FontAwesomeIcon icon={faStar} className="text-amber-400 text-4xl mb-6" />
    <p className="font-semibold text-xl">{title}</p>
  </div>
);

const ContactButton = ({ icon, children, primary = false }) => (
  <button
    className={`${
      primary
        ? "bg-amber-400 text-slate-900 hover:bg-amber-500"
        : "bg-white/10 text-white hover:bg-white/20"
    } px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-lg`}
  >
    <FontAwesomeIcon icon={icon} />
    <span>{children}</span>
  </button>
);

const CementHomePage = () => {
  return (
    <main className="bg-gray-50">
      <section className="relative">
        <ImageSlider />
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16">
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold mb-8 leading-tight">
                Xi Măng <span className="text-amber-400">Chất Lượng Cao</span>
              </h1>
              <p className="text-xl mb-10 text-gray-300 leading-relaxed">
                vicem hà tiên - Nửa thế kỷ xây dựng đất nước - Từ ngày thành lập
                năm 1964 đến nay, Công ty Cổ phần Xi măng VICEM HÀ TIÊN luôn
                đồng hành cùng người xây dựng Việt Nam. Các sản phẩm mang biểu
                tượng Kỳ Lân Xanh nổi tiếng có mặt tại hầu hết các công trình
                dân dụng và công nghiệp trên khắp miền Nam. - Với VICEM HÀ TIÊN
                Nhân - Nghĩa - Trí - Tín là phương châm cho mọi hoạt động tổ
                chức, sản xuất và kinh doanh.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                {/* <button className="bg-amber-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Nhận Báo Giá
                </button>
                <button className="border-2 border-white/80 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-800 transition-all duration-300 transform hover:scale-105 text-lg">
                  Danh Mục Sản Phẩm
                </button> */}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img
                  src="https://ximang.vn/Upload/48/Nam_2013/Thang_12/Ngay_12/news_s301-a1bff.jpg"
                  alt="Bao Xi Măng"
                  className="rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-400 w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-white text-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-20 text-slate-800">
            Dòng Sản Phẩm Xi Măng
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProductCard
              icon={faIndustry}
              title="Xi Măng Công Nghiệp"
              description="Xi măng cường độ cao dành cho các dự án công nghiệp và xây dựng quy mô lớn."
            />
            <ProductCard
              icon={faBuilding}
              title="Xi Măng Dân Dụng"
              description="Xi măng chất lượng cao cho xây dựng nhà ở, sửa chữa và các công trình vừa và nhỏ."
            />
            <ProductCard
              icon={faTruck}
              title="Xi Măng Hạ Tầng"
              description="Xi măng chuyên dụng cho cầu đường, công trình giao thông và hạ tầng quan trọng."
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-32">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-20">
            Tại Sao Chọn Xi Măng Của Chúng Tôi?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Chất Lượng Vượt Trội",
              "Hiệu Quả Ổn Định",
              "Giá Cạnh Tranh",
              "Giao Hàng Toàn Quốc",
            ].map((feature, index) => (
              <FeatureCard key={index} title={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Sẵn Sàng Bắt Đầu Dự Án?</h2>
          <p className="mb-10 text-xl text-gray-200">
            Liên hệ ngay với đội ngũ tư vấn để được hỗ trợ giải pháp xi măng
            chuyên nghiệp!
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-amber-400 text-slate-900 px-9 py-4 rounded-xl font-bold hover:bg-amber-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center shadow-lg hover:shadow-xl">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-3" />
              Liên Hệ Ngay
            </button>
            <button className="border-2 border-white/80 text-white px-9 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-800 transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm">
              Hotline: 0905 442 882
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CementHomePage;
