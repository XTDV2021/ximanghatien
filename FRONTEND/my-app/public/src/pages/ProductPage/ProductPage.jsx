import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const products = [
    {
      _id: "1",
      name: "PORTLAND HỖN HỢP PCB40",
      image:
        "https://ximanghatienkiengiang.vn/vnt_upload/product/09_2023/Vo_bao_PCB40_xanh.jpg",
      type: "cement",
      background: "/images/building-background.jpg",
    },
    {
      _id: "2",
      name: "XI MĂNG VICEM HÀ TIÊN PC50",
      image:
        "https://ximanghatienkiengiang.vn/vnt_upload/product/09_2023/cement-truck.jpg",
      type: "cement",
      background: "/images/highway-background.jpg",
    },
    {
      _id: "3",
      name: "XI MĂNG VICEM HÀ TIÊN PC40",
      image:
        "https://ximanghatienkiengiang.vn/vnt_upload/product/09_2023/cement-truck.jpg",
      type: "cement",
      background: "/images/coastal-road-background.jpg",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Menu - Using dummy text for demonstration */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 py-4">
            <li className="uppercase text-gray-700 hover:text-blue-600">
              <Link to="/xi-mang">XI MĂNG</Link>
            </li>
            <li className="uppercase text-gray-700 hover:text-blue-600">
              <Link to="/xi-mang-roi">XI MĂNG RỜI</Link>
            </li>
            <li className="uppercase text-gray-700 hover:text-blue-600">
              <Link to="/xi-mang-xuat-khau">XI MĂNG XUẤT KHẨU</Link>
            </li>
            <li className="uppercase text-gray-700 hover:text-blue-600">
              <Link to="/cat-tieu-chuan">CÁT TIÊU CHUẨN</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product._id} className="group relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <img
                  src={product.background}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-white text-xl font-bold mb-4">
                    {product.name}
                  </h3>
                  <Link
                    to={`/product/${product._id}`}
                    className="inline-block border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
