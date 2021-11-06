import { Component } from "react";

class TeacherItem extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
          <div className="item shadow-sm p-3 mb-5 bg-body ">
            <div className="card" style={{ width: "18rem" }}>
              <img
                alt="..."
                className="card-img-top"
                src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-30-480x600.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">Tiến sĩ NGuyễn Văn </h5>
                <p className="card-text">Luật sư - diễn giả</p>
                <a className="btn btn-primary" href="#">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
    }
}


export default TeacherItem;