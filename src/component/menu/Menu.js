import { Component } from "react";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }
    render() {
        return (
          <nav className="category">
            <h3 className="category__heading">Danh mục</h3>
            <ul className="category-list">
              <li className="category-item category-item-active">
                <a className="category-item_link" href>
                  <i className="fa fa-language" />
                  Ngoại ngữ
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fa fa-desktop" />
                  Tin học văn phòng
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fas fa-chart-line" />
                  Marketing
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fa fa-paint-brush" />
                  Thiết kế
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fa fa-rocket" />
                  Kinh doanh khởi nghiệp
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fa fa-child" />
                  Nuôi dạy con
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fa fa-shopping-cart" />
                  Sales, bán hàng
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fa fa-code" />
                  Công nghệ thông tin
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fa fa-heartbeat" />
                  Sức khoẻ giới tính
                </a>
              </li>
              <li className="category-item">
                <a className="category-item_link" href>
                  <i className="fa fa-camera" />
                  Nhiếp ảnh, dựng phim
                </a>
              </li>
            </ul>
          </nav>
        );
    }
}


export default Menu;