import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="header_navbar">
        <ul className="header_navbar-list">
          <li className="header_navbar-item header_navbar-item-showNotify">
            <a className="header_navbar-item-link" href>
              <i className="header_navbar-icon fas fa-bell" />
              Thông báo
            </a>
            <div className="header_notify">
              <header className="header_notify-header">
                <h3>Thông báo mới nhận</h3>
              </header>
              <ul className="header_notify-list">
                <li className="header_nitify-item header_nitify-item--viewed">
                  <a className="header_notify-link" href>
                    <img
                      alt=""
                      className="header_notify-img"
                      src="assets/img/batman-the-world-lg.jpg"
                    />
                    <div className="header_notify-info">
                      <span className="header_notify-name">
                        Batman hang chinhs hang gotham xác định nguồn gốc sản
                        phẩm đasadsadasdasdasda{" "}
                      </span>
                      <span className="header_notify-descriotion">
                        Mo ta vat pham hàng trung quốc sadsadasdjasidjasdisjad
                        ạdska;djsa
                      </span>
                    </div>
                  </a>
                </li>
                <li className="header_nitify-item">
                  <a className="header_notify-link" href>
                    <img
                      alt=""
                      className="header_notify-img"
                      src="assets/img/batman-the-world-lg.jpg"
                    />
                    <div className="header_notify-info">
                      <span className="header_notify-name">
                        Batman hang chinhs hang gotham{" "}
                      </span>
                      <span className="header_notify-descriotion">
                        Mo ta vat pham
                      </span>
                    </div>
                  </a>
                </li>
                <li className="header_nitify-item">
                  <a className="header_notify-link" href>
                    <img
                      alt=""
                      className="header_notify-img"
                      src="assets/img/batman-the-world-lg.jpg"
                    />
                    <div className="header_notify-info">
                      <span className="header_notify-name">
                        Batman hang chinhs hang gotham xác định
                        hahahahahhahahahahaha{" "}
                      </span>
                      <span className="header_notify-descriotion">
                        Mo ta vat pham
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
              <footer className="header_notify-footer">
                <a className="header_notify-footer-btn" href>
                  Xem tất cả
                </a>
              </footer>
            </div>
          </li>
          <li className="header_navbar-item">
            <a className="header_navbar-item-link" href>
              <i className="header_navbar-icon fas fa-question-circle" />
              Trợ giúp
            </a>
          </li>
          <li className="header_navbar-item header_navbar-item-bold header_navbar-item--line">
            Đăng ký
          </li>
          <li className="header_navbar-item header_navbar-item-bold">
            Đăng nhập
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
