import { Component } from "react";
import Navbar from "../navbar/Navbar";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="header-with-search container">
            <div className="header-logo">
              <img alt="" src="https://unica.vn/media/img/logo-unica.png" />
            </div>
            <div className="header-search">
              <input
                className="header-search-input"
                placeholder="Tìm kiếm khoá học, giảng viên"
                type="text"
              />
              <button className="header-search-btn">
                <i className="header-search-btn-icon fas fa-search" />
              </button>
            </div>
            <div className="header-cart">
              <i className="header-cart-icon fas fa-shopping-cart" />
            </div>
            <Navbar />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
