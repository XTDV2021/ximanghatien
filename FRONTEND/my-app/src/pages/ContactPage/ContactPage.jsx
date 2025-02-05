import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">LIÊN HỆ - GÓP Ý</h1>
      <h2 className="text-2xl font-bold text-red-600 text-center mb-2">
        CÔNG TY CỔ PHẦN XI MĂNG HÀ TIÊN KIÊN GIANG
      </h2>
      <p className="text-center mb-4">
        Địa chỉ: số 214 ấp Hòn Chông, xã Bình An, huyện Kiên Lương, tỉnh Kiên Giang
      </p>
      <div className="text-center mb-4">
        <p>Phòng Kinh doanh: 02973 854374 - 3759355 - Email: <a href="mailto:kinhdoanh@ximanghatienkiengiang.vn">kinhdoanh@ximanghatienkiengiang.vn</a></p>
        <p>Bộ phận Kế hoạch: 0297 3854419 - Email: <a href="mailto:kehoach@ximanghatienkiengiang.vn">kehoach@ximanghatienkiengiang.vn</a></p>
        <p>Bộ phận Tổ chức - Hành chính: 0297 3854359 - Email: <a href="mailto:tochuchanhchinh@ximanghatienkiengiang.vn">tochuchanhchinh@ximanghatienkiengiang.vn</a></p>
        <p>Website: <a href="http://www.ximanghatienkiengiang.vn" target="_blank" rel="noopener noreferrer">www.ximanghatienkiengiang.vn</a></p>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Xem bản đồ
        </button>
      </div>
    </div>
  );
};

export default ContactPage; 