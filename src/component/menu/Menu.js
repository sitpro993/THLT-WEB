import { Component } from "react";
import "./menu.css";
class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    var items = [
      {
        classIcon: "fa fa-language",
        itemName: "Ngoại ngữ",
        childItems: [
          "Tất cả Ngoại ngữ",
          "Tiếng Hàn",
          "Tiếng Anh",
          "Tiếng Trung",
          "Tiếng Nhật"
        ],
      },
      {
        classIcon: "fa fa-desktop",
        itemName: "Tin học văn phòng",
        childItems: [
          "Tất cả Marketing",
          "Marketing Online",
          "Seo",
          "Branding",
          "Content Marketing",
          "Video Marketing",
        ],
      },
      {
        classIcon: "fas fa-chart-line",
        itemName: "Marketing",
        childItems: [
          "Tất cả Tin học văn phòng",
          "Excel",
          "Word",
          "PowerPoint",
        ],
      },
      {
        classIcon: "fa fa-paint-brush",
        itemName: "Thiết kế",
        childItems: [
          "Tất cả Thiết kế",
          "Thiết kế quảng cáo",
          "Phần mềm thiết kế",
          "Thiết kế web",
          "Kiến Trúc, Nội Thất",
        ],
      },
      {
        classIcon: "fa fa-rocket",
        itemName: "Kinh doanh khởi nghiệp",
        childItems: [
          "Tất cả Kinh doanh - Khởi nghiệp",
          "Bất động sản",
          "Crypto",
          "Kinh doanh Online",
          "Startup",
          "Kinh doanh Cafe",
          "Kiếm tiền Online",
          "Quản trị doanh nghiệp",
          "Kế toán",
          "Đầu tư forex",
        ],
      },
      {
        classIcon: "fa fa-child",
        itemName: "Nuôi dạy con",
        childItems: [
          "Tất cả Nuôi dạy con",
          "Mang thai",
          "Dạy con thông minh",
          "Chăm sóc bé yêu"
        ],
      },
      {
        classIcon: "fa fa-shopping-cart",
        itemName: "Sales, bán hàng",
        childItems: [
          "Tất cả Sales, bán hàng",
          "Bán hàng Online",
          "Bán hàng livestrem",
          "Chăm sóc khách hàng",
          "Chiến lược kinh doanh",
        ],
      },
      {
        classIcon: "fa fa-code",
        itemName: " Công nghệ thông tin",
        
      },
      {
        classIcon: "fa fa-heartbeat",
        itemName: "Sức khoẻ giới tính",
        
      },
      {
        classIcon: "fa fa-camera",
        itemName: " Nhiếp ảnh, dựng phim",
        
      },
    ];
    return (
      <table className="parent-items d-block w-100 position-relative h-100">
        <tbody className="w-100 d-block">{this.showItems(items)}</tbody>
      </table>
    );
  }
  showItems(items) {
    if (items != null && items.length > 0) {
      return items.map((it, id) => {
        return (
          <tr key={"menu" + id} className="w-100 d-block">
            <td>
              <a className="nav-link">
                <i className={it.classIcon} />
              </a>
            </td>
            <td>
              <a className="nav-link">{it.itemName}</a>
            </td>
            {it.childItems == null ? (
              ""
            ) : (
              <table className="child-items w-2 position-absolute w-100 h-100  p-2">
                <tbody>
                  {it.childItems.map((item, index) => {
                    return (
                      <tr key={"child-item" + id + index}>
                        <td>
                          <a className="nav-link">{item}</a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </tr>
        );
      });
    }
    return "";
  }
}

export default Menu;
