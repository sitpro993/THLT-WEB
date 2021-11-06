import { Component } from "react";
import Banner from "./component/banner/Banner";
import Courses from "./component/course/Courses";
import Footer from "./component/footer/Footer";
import Reasons from "./component/footer/Reasons";
import Header from "./component/header/Header";
import Menu from "./component/menu/Menu";
import Teachers from "./component/teacher/Teachers";

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
                <Menu/>
              </div>
              <div className="col-9">
                <Banner/>
              </div>
            </div>
          </div>
         <div id="main">
           
         </div>
        <div id="footer">
          <Footer/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
