import { Link } from "react-router-dom";
import "./Header.css";
import logoBlack from "../assets/icons/logo-black.svg";
import searchIcon from "../assets/icons/search-icon.svg";
import cartIcon from "../assets/icons/cart-icon.svg";
import favoritesIcon from "../assets/icons/favorites-icon.svg";
import userIcon from "../assets/icons/user-icon.svg";

export default function Header() {
  return (
    <header>
      <img src={logoBlack} alt="로고" />
      <div className="input-box">
        <img src={searchIcon} alt="검색" />
        <input className="search" type="text" placeholder="Search" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="icons">
        <img src={favoritesIcon} alt="찜목록" />
        <img src={cartIcon} alt="장바구니" />
        <img src={userIcon} alt="사용자" />
      </div>
    </header>
  );
}
