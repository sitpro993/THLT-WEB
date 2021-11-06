import { Component } from "react";
import "./style.css";
class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    var items = [
      { classIcon: "fa fa-language", itemName: "Ngoại ngữ" },
      { classIcon: "fa fa-desktop", itemName: "Tin học văn phòng" },
      { classIcon: "fas fa-chart-line", itemName: "Marketing" },
      { classIcon: "fa fa-paint-brush", itemName: "Thiết kế" },
      { classIcon: "fa fa-rocket", itemName: "Kinh doanh khởi nghiệp" },
      { classIcon: "fa fa-child", itemName: "Nuôi dạy con" },
      { classIcon: "fa fa-shopping-cart", itemName: "Sales, bán hàng" },
      { classIcon: "fa fa-code", itemName: " Công nghệ thông tin" },
      { classIcon: "fa fa-heartbeat", itemName: "Sức khoẻ giới tính" },
      { classIcon: "fa fa-camera", itemName: " Nhiếp ảnh, dựng phim" },
    ];
    return (
      <table className="">
        <tbody>
          {this.showItems(items)}
        </tbody>
      </table>
    );
  }
  showItems(items) {
    if (items != null && items.length > 0) {
      return items.map((it, id) => {
        return (
          <tr key={"menu" + id}>
            <td>
              <a className="nav-link">
                <i className={it.classIcon} />
              </a>
            </td>
            <td>
              <a className="nav-link">{it.itemName}</a>
            </td>
          </tr>
        );
      });
    }
    return "";
  }
}

export default Menu;
