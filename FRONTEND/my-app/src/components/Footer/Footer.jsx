import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Công Ty Xi Măng Chất Lượng</h3>
        <p className="mb-4 text-gray-300">
          Địa chỉ: 123 Đường ABC, Phường XYZ, Thành Phố
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-white hover:text-red-400">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-red-400">
            Instagram
          </a>
          <a href="#" className="text-white hover:text-red-400">
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © 2024 Công Ty Xi Măng Chất Lượng. Bản quyền được bảo lưu.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
