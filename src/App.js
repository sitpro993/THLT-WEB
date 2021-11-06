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
        <Header />
        <main>
          <div className="app">
            <div className="app_container">
              <div className="grid container">
                <div className="grid__row" style={{ display: "flex" }}>
                  <div className="grid__column-2">
                    <Menu />
                  </div>
                  <div className="grid__column-8">
                    <Banner />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="container">
                <div className="row ">
                  <div className="list-course">
                    <Courses />
                  </div>
                  <div className="list-teacher">
                    <Teachers />
                  </div>
                  <div className="list-reason">
                    <Reasons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
