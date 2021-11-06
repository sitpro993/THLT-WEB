import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          {/* START-NAVBAR */}
          <nav
            className="
        navbar navbar-expand-lg navbar-light
        bg-dark
        d-block
        pb-0
        shadow
        position-fixed
        w-100
      "
          >
            {/* <div class="container-fluid justify-content-start"> */}
            <div className="row">
              <div className="col-2 border-1 border-danger">
                <ul className="nav">
                  <li className="nav-item w-25">
                    <a className="nav-link" aria-current="page" href="#">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="bars"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="svg-inline--fa fa-bars fa-w-14 fa-fw fa-lg"
                      >
                        <path
                          fill="currentColor"
                          d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                          className
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item w-75">
                    <a className="nav-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="MuiSvgIcon-root jss21"
                        focusable="false"
                        viewBox="0 0 97 31"
                        aria-hidden="true"
                        width="100%"
                        height="100%"
                      >
                        <g>
                          <path
                            fill="currentColor"
                            d="M25.785 6.863a2.701 2.701 0 011.348 2.348v2.059a2.71 2.71 0 01-1.348 2.347l-11.558 6.695a1.034 1.034 0 01-1.032 0l-3.441-1.996a1.027 1.027 0 01-.516-.894v-2.805c0-.566.465-1.031 1.032-1.031.18 0 .355.05.511.14l2.422 1.403c.317.184.707.184 1.031 0l6.887-3.996a1.032 1.032 0 000-1.79zm0 0"
                          />
                          <path
                            fill="currentColor"
                            d="M5.926 26.465c-1.192-.902-.555-4.227-.555-4.227l.027-1.261a1.283 1.283 0 01-.64-1.102v-9.04c0-.366.195-.71.515-.894l7.864-4.558a1.162 1.162 0 011.086-.035l3.132-3.371L15.06.645a2.689 2.689 0 00-2.7 0L1.645 6.863A2.701 2.701 0 00.297 9.211v12.422c0 .972.512 1.867 1.348 2.351zm0 0"
                          />
                          <path
                            fill="currentColor"
                            d="M25.785 6.863L15.062.653a2.67 2.67 0 00-2.699 0l-3.297 1.91-4.23 2.457 1.746-1.012a5.303 5.303 0 015.328 0l3.555 2.058 4.043 2.34 1.617.938c2.676 1.55 2.676 5.422 0 6.972l-1.54.891 6.204-3.598a2.693 2.693 0 001.348-2.347V9.207c0-.965-.516-1.863-1.352-2.344zm0 0"
                          />
                          <path
                            fill="currentColor"
                            d="M10.168 28.918l2.2 1.281a2.67 2.67 0 002.698 0l11.559-6.695c.316-.184.512-.527.512-.895v-2.808c0-.567-.465-1.031-1.032-1.031a1 1 0 00-.511.14l-11.36 6.59c-.32.184-.71.184-1.03 0zm0 0"
                          />
                          <path
                            fill="currentColor"
                            d="M.297 21.633c0 .972.512 1.867 1.348 2.351L12.367 30.2a2.67 2.67 0 002.7 0l11.558-6.695-5.773 3.34a5.307 5.307 0 01-5.32 0l-3.618-2.102-6.266-3.617-2.691-1.563a5.355 5.355 0 01-2.66-4.628zm0 0"
                          />
                          <path d="M43.508 20.73v1.75h-9.035V8.36h9.039v1.75H36.21v3.945h5.824V15.8h-5.824v4.93zm0 0M49.242 20.813a3.27 3.27 0 001.32-.266 3.452 3.452 0 001.797-1.805c.176-.418.27-.867.266-1.32a3.23 3.23 0 00-.266-1.3 3.466 3.466 0 00-1.797-1.806 3.27 3.27 0 00-1.32-.265 3.13 3.13 0 00-1.293.265 3.466 3.466 0 00-1.797 1.805c-.18.41-.27.856-.265 1.3a3.27 3.27 0 00.265 1.321 3.452 3.452 0 001.797 1.805c.406.183.852.277 1.293.277zm5.035-12.454V22.48h-1.652v-1.308a5.63 5.63 0 01-1.594.976c-.57.223-1.18.332-1.789.332a5.045 5.045 0 01-4.637-3.113 5.059 5.059 0 01-.37-1.937c0-2.762 2.265-5.035 5.015-5.035.613 0 1.215.113 1.79.332.585.238 1.116.57 1.593.98v-5.34zm0 0M63.828 12.39v10.09H62.18v-.793c-.7.524-1.551.805-2.422.793a3.874 3.874 0 01-2.863-1.199 4.037 4.037 0 01-1.196-2.89v-6h1.653v5.996c0 .324.062.64.191.937.121.29.297.551.512.778a2.36 2.36 0 002.633.527 2.482 2.482 0 001.292-1.297 2.41 2.41 0 00.192-.937v-6h1.656zm0 0M78.66 13.586a3.936 3.936 0 011.2 2.875v6.02h-1.657v-6.012c0-.324-.062-.64-.191-.938a2.286 2.286 0 00-.524-.765 2.595 2.595 0 00-.777-.516 2.35 2.35 0 00-1.867 0 2.425 2.425 0 00-1.469 2.219v6.011h-1.656V16.47c0-.324-.067-.64-.192-.938-.12-.289-.3-.547-.527-.765a2.466 2.466 0 00-.77-.516 2.36 2.36 0 00-1.87 0 2.418 2.418 0 00-1.465 2.219v6.011h-1.649V12.39h1.652v.797a3.897 3.897 0 012.403-.796 4.004 4.004 0 012.879 1.195c.125.133.25.277.351.426a3.895 3.895 0 013.215-1.625 3.963 3.963 0 012.879 1.199zm0 0M85.578 20.816c.453.008.899-.086 1.317-.265a3.459 3.459 0 001.796-1.801c.18-.422.27-.871.266-1.324.004-.45-.086-.89-.266-1.301a3.466 3.466 0 00-1.796-1.805 3.251 3.251 0 00-1.317-.265 3.147 3.147 0 00-1.297.265 3.466 3.466 0 00-1.797 1.805c-.18.41-.27.855-.265 1.3-.004.454.086.903.265 1.325a3.459 3.459 0 001.797 1.8c.41.18.848.274 1.297.266zm5.031-8.425v10.09h-1.652v-1.305a5.544 5.544 0 01-1.59.972 4.93 4.93 0 01-1.793.332 5.036 5.036 0 01-4.636-3.113 4.99 4.99 0 01-.376-1.937 4.976 4.976 0 011.47-3.559 4.931 4.931 0 013.546-1.476 4.864 4.864 0 011.793.332c.582.238 1.117.57 1.59.98v-1.312zm0 0M93.68 8.355h-1.653V22.48h1.653zm0 0M96.766 8.36h-1.653v14.12h1.653zm0 0" />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width={120} height={31} />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 offset-1 mt-1">
                <div className="justify-content-center">
                  <div className="input-group bg-dark">
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ cursor: "hand" }}
                    >
                      <i className="fa fa-search" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control bg-dark"
                      placeholder="Tìm kiếm điều bạn muốn"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </div>
              </div>
              <div className="col-3">
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-question-circle" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link btn btn-outline border-1 border-info"
                      href="#"
                    >
                      <i className="fa fa-plus-square" aria-hidden="true" />
                      <span> Add</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">
                      <i className="fa fa-user-circle" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </nav>
          {/* END-NAVBAR */}
          <div className="container-fluid">
            {/* START-MAIN */}
            <main>
              <div className="row">
                {/* START-MENU */}
                <div
                  className="col-2"
                  style={{ position: "fixed", left: "-12px" }}
                >
                  <div
                    className="bg-dark"
                    style={{
                      borderRight: "0.5px solid rgb(163, 163, 163)",
                    }}
                  >
                    <div className="avatar" style={{ marginTop: "75px" }}>
                      <ul className="nav flex-column text-center">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <img
                              src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                              alt=""
                              style={{
                                borderRadius: "50%",
                                width: "150px",
                                height: "150px",
                              }}
                            />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <strong> Kênh của bạn</strong>
                          </a>
                          <a className="nav-link">Cuong Cuong</a>
                        </li>
                      </ul>
                    </div>
                    <div className="menu bg-dark scroll-menu">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#">
                            <i className="fa fa-th-large" aria-hidden="true" />
                            <span>Trang tổng quan</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <i
                              className="fa fa-youtube-play"
                              aria-hidden="true"
                            />
                            <span>Nội dung</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <i className="fa fa-list" aria-hidden="true" />
                            <span>Danh sách khóa học</span>
                          </a>
                        </li>
                        <li className="nav-item active">
                          <a className="nav-link">
                            <i className="fa fa-signal" aria-hidden="true" />
                            <span>Số liệu phân tích</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <i className="fa fa-comment" aria-hidden="true" />
                            <span>Bình luận</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <i className="fa fa-money" aria-hidden="true" />
                            <span>Doanh thu</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <i className="fa fa-comment" aria-hidden="true" />
                            <span>Bình luận</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <i className="fa fa-money" aria-hidden="true" />
                            <span>Doanh thu</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <i className="fa fa-comment" aria-hidden="true" />
                            <span>Bình luận</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link">
                            <i className="fa fa-money" aria-hidden="true" />
                            <span>Doanh thu</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="setting fixed-bottom bg-dark">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <i className="fa fa-cogs" aria-hidden="true" />
                            <span>Cài đặt</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <i
                              className="fa fa-sticky-note"
                              aria-hidden="true"
                            />
                            <span>Gửi phản hồi</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* END-MENU */}
                {/* START-CONTENT */}
                <div
                  className="col-10 "
                  style={{
                    position: "absolute",
                    zIndex: -1,
                    right: "12px",
                    height: "auto",
                  }}
                >
                  <div>
                    <div style={{ marginTop: "75px" }}>
                      {/* START-TITLE-CONTENT */}
                      <div className="border-bottom border-1 border-light mb-3">
                        <div>
                          <div className="row" style={{ color: "white" }}>
                            <div className="col-9">
                              <h3 className="pt-3">
                                Số liệu phân tích về kênh của bạn
                              </h3>
                              {/* START-TITLE-TABS */}
                              <ul
                                className="nav nav-tabs"
                                role="tablist"
                                id="myTab"
                              >
                                <li
                                  className="nav-item active"
                                  role="presentation"
                                >
                                  <button
                                    className="nav-link active"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home"
                                    type="button"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                  >
                                    Tổng quan
                                  </button>
                                </li>
                                <li className="nav-item">
                                  <button
                                    className="nav-link"
                                    role="presentation"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    aria-controls="profile"
                                    aria-selected="false"
                                  >
                                    Mức độ xem
                                  </button>
                                </li>
                                <li className="nav-item">
                                  <button
                                    className="nav-link"
                                    role="presentation"
                                    id="contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#contact"
                                    type="button"
                                    aria-controls="contact"
                                    aria-selected="false"
                                  >
                                    Đối tượng xem
                                  </button>
                                </li>
                                <li className="nav-item">
                                  <button
                                    className="nav-link"
                                    role="presentation"
                                    id="phamvi-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#phamvi"
                                    type="button"
                                    aria-controls="phamvi"
                                    aria-selected="false"
                                  >
                                    Phạm vi tiếp cận
                                  </button>
                                </li>
                              </ul>
                              {/* END-TITLE-TABS */}
                            </div>
                            {/* START-DATE-TIME */}
                            <div className="col-3">
                              <h5 className="pt-3 text-center w-75 text-danger mb-3 mt-1">
                                Chế độ nâng cao
                              </h5>
                              <div className="row">
                                <div className="col-7 text-end">
                                  <p>23-29 tháng 10,2021</p>
                                  <h6>7 ngày qua</h6>
                                </div>
                                <div className="col-3" id="date-historu">
                                  <div className="dropdown" id="dr">
                                    <button
                                      className="btn dropdown-toggle w-75"
                                      type="button"
                                      id="triggerId"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    />
                                    <div
                                      className="dropdown-menu"
                                      aria-labelledby="triggerId"
                                    >
                                      <a className="dropdown-item" href="#">
                                        7 ngày qua
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        28 ngày qua
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        90 ngày qua
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        365 ngày qua
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Toàn thời gian
                                      </a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item" href="#">
                                        2021
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        2020
                                      </a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item" href="#">
                                        Tháng 10
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Tháng 9
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Tháng 8
                                      </a>
                                      <div className="dropdown-divider" />
                                      <a className="dropdown-item" href="#">
                                        Tùy chỉnh
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* END-DATE-TIME */}
                          </div>
                        </div>
                      </div>
                      {/* END-TITLE-CONTENT */}
                    </div>
                    <div className="content" style={{ height: "calc(100%)" }}>
                      {/* START-CONTENT-TITLE-TAB */}
                      <div className="graph mt-1 tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div className="row">
                            <div className="col-9">
                              <div className="content-border p-1">
                                <ul
                                  className="nav nav-tabs"
                                  id="myTab1"
                                  role="tablist"
                                >
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link active"
                                      id="so-luot-xem-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#so-luot-xem"
                                      type="button"
                                      role="tab"
                                      aria-controls="so-luot-xem"
                                      aria-selected="false"
                                    >
                                      Số lượt xem
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="thoi-gian-xem"
                                      data-bs-toggle="tab"
                                      data-bs-target="#thoi-gian-xem"
                                      type="button"
                                      role="tab"
                                      aria-controls="thoi-gian-xem"
                                      aria-selected="true"
                                    >
                                      Thời gian xem(giờ)
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="so-nguoi-dang-ky-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#so-nguoi-dang-ky"
                                      type="button"
                                      role="tab"
                                      aria-controls="so-nguoi-dang-ky"
                                      aria-selected="false"
                                    >
                                      Số người đăng ký
                                    </button>
                                  </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                  <div
                                    className="tab-pane fade show active"
                                    id="so-luot-xem"
                                    role="tabpanel"
                                    aria-labelledby="so-luot-xem-tab"
                                  >
                                    <div className="fake">
                                      <img
                                        src="đồ thị.png"
                                        alt=""
                                        className="w-100"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="thoi-gian-xem"
                                    role="tabpanel"
                                    aria-labelledby="thoi-gian-xem-tab"
                                  >
                                    <div className="fake">
                                      <h1>Thoi gian xem</h1>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="so-nguoi-dang-ky"
                                    role="tabpanel"
                                    aria-labelledby="so-nguoi-dang-ky-tab"
                                  >
                                    <div className="fake">
                                      <img
                                        src="đồ thị.png"
                                        alt=""
                                        className="w-100"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-3">
                              <div className="statistics p-2 mt-1 content-border p-1">
                                <ul className="nav flex-column">
                                  <li className="nav-item">
                                    <a className="nav-link" href="#">
                                      Thời gian thực <br />
                                      <span>
                                        Đang cập nhật theo thời gian thực
                                      </span>
                                    </a>
                                  </li>
                                  <div className="dropdown-divider" />
                                  <li className="nav-item">
                                    <a className="nav-link disabled" href="#">
                                      2 <br />
                                      Số người đăng ký
                                    </a>
                                  </li>
                                  <div className="dropdown-divider" />
                                  <li className="nav-item">
                                    <a className="nav-link disabled" href="#">
                                      2000 <br />
                                      Số lượt xem trong 48 giờ qua
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <div id="muc-do-xem-content">
                            <div>
                              <div className="row ">
                                <div className="col-12 mb-4">
                                  <div className="p-1 content-border">
                                    <ul
                                      className="nav nav-tabs"
                                      id="myTab1"
                                      role="tablist"
                                    >
                                      <li
                                        className="nav-item"
                                        role="presentation"
                                      >
                                        <button
                                          className="nav-link active"
                                          id="so-luot-xem-tab"
                                          data-bs-toggle="tab"
                                          data-bs-target="#so-luot-xem"
                                          type="button"
                                          role="tab"
                                          aria-controls="so-luot-xem"
                                          aria-selected="false"
                                        >
                                          Số lượt xem
                                        </button>
                                      </li>
                                      <li
                                        className="nav-item"
                                        role="presentation"
                                      >
                                        <button
                                          className="nav-link"
                                          id="so-nguoi-dang-ky-tab"
                                          data-bs-toggle="tab"
                                          data-bs-target="#so-nguoi-dang-ky"
                                          type="button"
                                          role="tab"
                                          aria-controls="so-nguoi-dang-ky"
                                          aria-selected="false"
                                        >
                                          Số người đăng ký
                                        </button>
                                      </li>
                                    </ul>
                                    <div
                                      className="tab-content"
                                      id="myTabContent"
                                    >
                                      <div
                                        className="tab-pane fade show active"
                                        id="so-luot-xem"
                                        role="tabpanel"
                                        aria-labelledby="so-luot-xem-tab"
                                      >
                                        <div className="fake">
                                          <img
                                            src="đồ thị.png"
                                            alt=""
                                            className="w-100"
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="tab-pane fade"
                                        id="thoi-gian-xem"
                                        role="tabpanel"
                                        aria-labelledby="thoi-gian-xem-tab"
                                      >
                                        <div className="fake">
                                          <h1>Thoi gian xem</h1>
                                        </div>
                                      </div>
                                      <div
                                        className="tab-pane fade"
                                        id="so-nguoi-dang-ky"
                                        role="tabpanel"
                                        aria-labelledby="so-nguoi-dang-ky-tab"
                                      >
                                        <div className="fake">
                                          <img
                                            src="đồ thị.png"
                                            alt=""
                                            className="w-100"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <div className="content-border p-1 mb-2">
                                    <h3>Các video hàng đầu</h3>
                                    <p>
                                      Thời gian xem : 12(giờ) trong 28 ngày qua
                                    </p>
                                    <a href="#">Xem Thêm</a>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="content-border p-1 mb-2">
                                    <h3>Các video hàng đầu</h3>
                                    <p>
                                      Thời gian xem : 12(giờ) trong 28 ngày qua
                                    </p>
                                    <a href="#">Xem Thêm</a>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="content-border p-1 mb-2">
                                    <h3>Các video hàng đầu</h3>
                                    <p>
                                      Thời gian xem : 12(giờ) trong 28 ngày qua
                                    </p>
                                    <a href="#">Xem Thêm</a>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="content-border p-1 mb-2">
                                    <h3>Các video hàng đầu</h3>
                                    <p>
                                      Thời gian xem : 12(giờ) trong 28 ngày qua
                                    </p>
                                    <a href="#">Xem Thêm</a>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="content-border p-1 mb-2">
                                    <h3>Các video hàng đầu</h3>
                                    <p>
                                      Thời gian xem : 12(giờ) trong 28 ngày qua
                                    </p>
                                    <a href="#">Xem Thêm</a>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="content-border p-1 mb-2">
                                    <h3>Các video hàng đầu</h3>
                                    <p>
                                      Thời gian xem : 12(giờ) trong 28 ngày qua
                                    </p>
                                    <a href="#">Xem Thêm</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                        >
                          <h1>gsdggdf</h1>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="phamvi"
                          role="tabpanel"
                          aria-labelledby="phamvi-tab"
                        >
                          <h1>Phamvi</h1>
                        </div>
                      </div>
                      {/* END-CONTENT-TITLE-TAB */}
                    </div>
                  </div>
                </div>
                {/* END-CONTENT */}
              </div>
            </main>
            {/* END-MAIN */}
          </div>
          {/* CONTENT-END */}
        </div>
      </div>
    );
  }
}

export default Home;
