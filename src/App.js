import { Component } from "react";
import Banner from "./component/banner/Banner";
import Courses from "./component/course/Courses";
import Footer from "./component/footer/Footer";
import Reasons from "./component/footer/Reasons";
import Header from "./component/header/Header";
import Menu from "./component/menu/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <Header />
        </div>
        <div className="container">
          <div id="content">
            <div className="row">
              <div className="col-3">
                <Menu />
              </div>
              <div className="col-9">
                <Banner />
              </div>
            </div>
          </div>
          <div id="main">
            <Courses />
          </div>
          <div id="reason" className="mt-3">
            <h2 className="w-75 text-center m-auto">
              Bạn chưa tìm thấy khóa học mình quan tâm ?<br /> Unica có hơn
              2.000 khóa học đang chờ bạn khám phá
            </h2>
            <Reasons />
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
