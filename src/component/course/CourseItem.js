import { Component } from "react";

class CourseItem extends Component {
  render() {
    return (
      <div className="col">
            <div className="card h-100">
              <img
                alt="Quản trị cảm xúc - Phạm Thành Long"
                className="img-responsive"
                src="https://static.unica.vn/upload/images/2019/04/hoc-quan-tri-cam-xuc_m_1555571029.jpg"
              />
              <div className="card-body">
                <h2 className="card-title">Quản trị cảm xúc</h2>
                <span className="price-a">
                  299.000<sup>đ</sup>
                </span>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
      
    );
  }
}

export default CourseItem;
