import { Component } from "react";

class Reasons extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
          <div className="list-reason">
            <div className="col-12">
              <h3 style={{ textAlign: "center" }}>LI DO HOC</h3>
              <ul
                className="nav justify-content-between"
                style={{ textAlign: "center" }}
              >
                <li className="nav-item">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Thanh toán 1 lần</h5>
                      <span> Học mãi mãi</span>
                    </div>
                    <img
                      alt="..."
                      className="card-img-top"
                      height="150px"
                      src="img/lido2.png"
                    />
                  </div>
                </li>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Học trực tuyến</h5>
                    <span> Hỗ trợ trực tiếp</span>
                  </div>
                  <img
                    alt="..."
                    className="card-img-top"
                    height="150px"
                    src="img/lido3.png"
                  />
                </div>
                <li className="nav-item">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">Giảng viên uy tín</h5>
                      <span> Bài giảng chất lượng</span>
                    </div>
                    <img
                      alt="..."
                      className="card-img-top"
                      height="150px"
                      src="img/lido2.png"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
    }
}

export default Reasons;