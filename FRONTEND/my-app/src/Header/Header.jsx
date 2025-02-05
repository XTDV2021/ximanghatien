import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useLoginStore } from "../../zustand-store/loginState";
import { useCartStore } from "../../zustand-store/cartState";
import { getToken } from "../../config/http";
import "./Header.css";

const Header = () => {
  const { countCart } = useCartStore((state) => state);
  const { isLogin, login, logout } = useLoginStore();

  const isToken = getToken();
  useEffect(() => {
    if (isToken) {
      login();
    } else {
      logout();
    }
  }, [isToken]);

  return (
    <header className="header">
      {/* Thanh điều hướng */}
      <nav className="header-navigation bg-gray-100 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo và Tên Công Ty (Hiển thị theo kiểu ngang) */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img src="/Logoximang.jpg" alt="Logo Công Ty" className="w-32" />
            </Link>
            <p className="text-xl font-semibold text-yellow-600">
              Công Ty TNHH XI MĂNG Hà Tiên - Sài Gòn
            </p>
          </div>

          {/* Menu */}
          <ul className="flex space-x-6 font-medium text-gray-700">
            <li>
              <NavLink to="/" activeClassName="text-yellow-600 font-bold">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                activeClassName="text-yellow-600 font-bold"
              >
                Sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                activeClassName="text-yellow-600 font-bold"
              >
                Giới Thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" activeClassName="text-yellow-600 font-bold">
                Tin tức
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="text-yellow-600 font-bold"
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>

          {/* Hành động */}
          <div className="flex items-center space-x-4">
            {isLogin ? (
              <Link to="/user" className="text-gray-700 hover:text-yellow-600">
                <FontAwesomeIcon icon={faPhone} className="text-xl" />
              </Link>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-yellow-600">
                Đăng nhập
              </Link>
            )}

            <Link
              to="/contact"
              className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600"
            >
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
              <span>Liên hệ</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
