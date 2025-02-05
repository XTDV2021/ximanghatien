import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="main">
      <div className="section py-4">
        <div className="mx-auto my-0 w-full">
          <div className="content-wrapper flex text-black">
            <div className="mx-auto w-1/2">
              <p className="text-lg md:text-3xl lg:text-5xl">
                <span className="text-sm md:text-lg lg:text-2xl">
                  XI MĂNG CAO CẤP TỪ
                </span>
                <br />
                ĐỘI NGŨ CHUYÊN GIA
              </p>
            </div>
            <div className="section-right w-1/2">
              <h1 className="text-lg md:text-3xl lg:text-5xl">
                XÂY DỰNG <br />
                TƯƠNG LAI
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-200 w-full border-t border-gray-600">
        <div className="container mx-auto">
          <div className="content-wrapper">
            <ul className="flex justify-between text-gray-800 font-bold text-xs md:text-md lg:text-lg">
              <li className="section-item text-center">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2 text-left" />
                </span>
                CHẤT LƯỢNG CAO CẤP
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                GIAO HÀNG NHANH
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                THÂN THIỆN MÔI TRƯỜNG
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                ĐƠN HÀNG SỐ LƯỢNG LỚN
              </li>
              <li className="section-item">
                <span>
                  <FontAwesomeIcon icon={faStar} className="mr-2" />
                </span>
                TƯ VẤN CHUYÊN NGHIỆP
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="section py-8 bg-black text-white">
        <div className="content-wrapper border-b border-gray-600 pb-2">
          <div className="container mx-auto">
            <h1 className="section-label font-bold text-[35px]">
              <span className="text-[20px] text-gray-400">GIỚI THIỆU</span>
              <br />
              TẦM NHÌN CÔNG TY
            </h1>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="content-wrapper flex flex-wrap">
            <div className="content-left w-1/2">
              <img
                className="relative h-50 w-50 object-cover pt-10 pl-7 pb-20"
                alt="Nhà máy xi măng"
                src="/api/placeholder/400/320"
              />
            </div>
            <div className="content-right w-1/2 items-center flex">
              <div className="content-wrapper border border-gray-600 rounded-lg">
                <div className="content-item border-b border-gray-600 p-6">
                  <h3 className="font-bold text-2xl leading-tight mb-2 pb-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="mr-2 text-blue-300"
                    />
                    Chúng tôi là ai?
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Công ty Xi măng của chúng tôi là nhà sản xuất và phân phối
                    xi măng hàng đầu với hơn 20 năm kinh nghiệm. Chúng tôi cam
                    kết mang đến những sản phẩm chất lượng cao nhất cho các công
                    trình xây dựng của bạn.
                  </p>
                </div>
                <div className="content-item p-6">
                  <h3 className="font-bold text-2xl leading-tight mb-2 pb-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="mr-2 text-blue-300"
                    />
                    Điều gì tạo nên sự khác biệt?
                  </h3>
                  <p className="leading-relaxed">
                    Với công nghệ sản xuất hiện đại và đội ngũ chuyên gia giàu
                    kinh nghiệm, chúng tôi tự hào cung cấp các sản phẩm xi măng
                    đạt tiêu chuẩn quốc tế. Chúng tôi không ngừng đổi mới và cải
                    tiến để đáp ứng mọi nhu cầu của khách hàng.
                    <br />
                    <br />
                    <span className="text-gray-400">
                      Đội ngũ Xi măng Việt Nam
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8 bg-gray-100">
        <div className="container mx-auto">
          <div className="content-wrapper border-b border-gray-600 pb-2">
            <h1 className="section-label font-bold text-[35px]">
              <span className="text-[20px] text-gray-600">DỊCH VỤ</span>
              <br />
              SẢN PHẨM CỦA CHÚNG TÔI
            </h1>
          </div>
          <div className="content-wrapper flex flex-wrap mt-10">
            <div className="content-left w-[37%] flex items-center">
              <div className="mt-10 md:mt-20 md:mr-5">
                <p className="font-bold text-4xl mb-5">
                  XI MĂNG CHẤT LƯỢNG CAO
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Chúng tôi cung cấp đa dạng các loại xi măng phù hợp với mọi
                  nhu cầu xây dựng: - Xi măng Portland - Xi măng hỗn hợp - Xi
                  măng bền sunfat - Xi măng ít tỏa nhiệt Với công nghệ sản xuất
                  tiên tiến và kiểm soát chất lượng nghiêm ngặt, chúng tôi đảm
                  bảo mỗi sản phẩm đều đạt tiêu chuẩn cao nhất.
                </p>
              </div>
            </div>
            <div className="content-right w-[63%]">
              <img
                className="h-45 w-full object-cover"
                alt="Sản phẩm xi măng"
                src="/api/placeholder/400/320"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8">
        <div className="container mx-auto">
          <div className="content-wrapper flex flex-wrap">
            <div className="section-left w-1/2 flex justify-center flex-wrap">
              <div className="content-box w-[70%] py-[30px]">
                <h1 className="text-2xl font-bold text-blue-600">
                  THÔNG SỐ KỸ THUẬT:
                </h1>
                <br />
                <p className="font-bold">CƯỜNG ĐỘ NÉN:</p>
                <p className="text-gray-600">
                  Đạt tiêu chuẩn TCVN với độ bền cao, phù hợp cho mọi công trình
                  xây dựng.
                </p>
                <br />
                <p className="font-bold">THỜI GIAN ĐÔNG KẾT:</p>
                <p className="text-gray-600">
                  Thời gian đông kết ban đầu và kết thúc phù hợp với tiêu chuẩn.
                </p>
                <br />
                <p className="font-bold">ĐỘ MỊN:</p>
                <p className="text-gray-600">
                  Độ mịn cao giúp tăng khả năng liên kết và độ bền của bê tông.
                </p>
              </div>
            </div>
            <div className="section-right w-1/2 flex justify-center flex-wrap">
              <div className="content-box w-[70%] py-[30px]">
                <h1 className="text-2xl font-bold text-blue-600">ỨNG DỤNG:</h1>
                <br />
                <p className="font-bold">XÂY DỰNG DÂN DỤNG:</p>
                <p className="text-gray-600">
                  Phù hợp cho nhà ở, chung cư, văn phòng và các công trình dân
                  dụng khác.
                </p>
                <br />
                <p className="font-bold">CÔNG TRÌNH CÔNG NGHIỆP:</p>
                <p className="text-gray-600">
                  Đáp ứng yêu cầu cho nhà xưởng, nhà máy và các công trình công
                  nghiệp.
                </p>
                <br />
                <p className="font-bold">CẦU ĐƯỜNG:</p>
                <p className="text-gray-600">
                  Chất lượng cao phù hợp cho các công trình cầu đường, hạ tầng
                  giao thông.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-8">
        <div className="container mx-auto">
          <div className="content-wrapper border-b border-gray-600 pb-2">
            <h1 className="section-label font-medium text-3xl text-black pb-5">
              <span className="text-xl text-gray-600">ĐÁNH GIÁ</span>
              <br />
              KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI
            </h1>
            <p className="font-bold text-2xl text-black pb-5">
              <span className="text-base text-gray-600">Tổng số đánh giá</span>
              <br />
              323
            </p>
          </div>

          <div className="content-wrapper mt-10">
            <ul className="review flex flex-wrap justify-between">
              <li className="review-item w-[30%]">
                <img
                  className="relative w-full h-50 object-cover rounded-md"
                  alt="Đánh giá khách hàng"
                  src="/api/placeholder/400/320"
                />
              </li>
              <li className="review-item w-[30%]">
                <img
                  className="relative w-full h-50 object-cover rounded-md"
                  alt="Đánh giá khách hàng"
                  src="/api/placeholder/400/320"
                />
              </li>
              <li className="review-item w-[30%]">
                <img
                  className="relative w-full h-50 object-cover rounded-md"
                  alt="Đánh giá khách hàng"
                  src="/api/placeholder/400/320"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end py-[50px] pr-28">
          <img
            className="relative h-30 w-40 object-cover"
            alt="Logo công ty"
            src="/api/placeholder/400/320"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
