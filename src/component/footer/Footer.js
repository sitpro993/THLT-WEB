import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="footer2">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-4 col-xs-6 hei2 pdr pdl">
                <span className="logo-footer">
                  <a className="navbar-brand" href="/">
                    <img
                      className="img-responsive"
                      src="/media/images_v2018/logo-unica.png"
                    />
                  </a>
                </span>
                <ul>
                  <li>
                    <i aria-hidden="true" className="fa fa-map-marker" />
                    <span style={{ color: "white" }}>
                      {" "}
                      247 Cầu Giấy, Hà Nội
                    </span>
                  </li>
                  <li>
                    <i aria-hidden="true" className="fa fa-map-marker" />
                    <span style={{ color: "white" }}>
                      {" "}
                      P503, 20 Phan Đình Giót, P.2, Q. Tân Bình
                    </span>
                  </li>
                  <li>
                    <i aria-hidden="true" className="fa fa-phone" />
                    <a
                      href="tel:19001568"
                      rel="nofollow"
                      style={{ fontSize: "20px" }}
                    >
                      {" "}
                      19001568
                    </a>
                  </li>
                  <li>
                    <i aria-hidden="true" className="fa fa-phone" />
                    <a href="tel:0904886095" rel="nofollow">
                      {" "}
                      090 488 6095
                    </a>
                  </li>
                  <li>
                    <i aria-hidden="true" className="fa fa-envelope-o" />
                    <span style={{ color: "white" }}> cskh@unica.vn </span>
                  </li>
                  <li>
                    <i aria-hidden="true" className="fa fa-clock-o" />
                    <span style={{ color: "white" }}> 8:00 - 22:00 </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-4 col-xs-6 hei2 pdr pdm des-unica">
                <h4>Về Unica</h4>
                <ul>
                  <li>
                    <a href="/gioi-thieu" rel="nofollow">
                      Giới thiệu về Unica
                    </a>
                  </li>
                  <li>
                    <a href="/faq" rel="nofollow">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a href="/dieu-khoan-dich-vu.html" rel="nofollow">
                      Điều khoản dịch vụ
                    </a>
                  </li>
                  <li>
                    <a href="/huong-dan-thanh-toan.html" rel="nofollow">
                      Hướng dẫn thanh toán
                    </a>
                  </li>
                  <li>
                    <a href="/kichhoat" rel="nofollow">
                      Kích hoạt khóa học
                    </a>
                  </li>
                  <li>
                    <a href="/blog">Góc chia sẻ</a>
                  </li>
                  <li>
                    <a href="/chinh-sach-bao-mat.html" rel="nofollow">
                      Chính sách bảo mật
                    </a>
                  </li>
                  {/*<li><a href="/chinh-sach-doi-tra-the-hoc.html" rel="nofollow">Chính sách thẻ học</a></li>*/}
                </ul>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 hei2 pdr pdm des-unica">
                <h4>Hợp tác liên kết</h4>
                <ul>
                  <li>
                    <a href="/teacher" rel="nofollow">
                      Đăng ký giảng viên
                    </a>
                  </li>
                  {/*                        <li><a href="/daily">Đăng ký đại lý</a></li>*/}
                  <li>
                    <a
                      href="https://edubit.vn?ref=unica"
                      rel="nofollow"
                      target="_blank"
                    >
                      Giải pháp e-learning
                    </a>
                  </li>
                  <li>
                    <a href="https://acabiz.vn?ref=unica" target="_blank">
                      Đào tạo doanh nghiệp
                    </a>
                  </li>
                  {/* <li><a href="https://unica.vn/live" >Zoom & Livestream</a></li>
                         <li><a href="/the" rel="nofollow">Thẻ học online</a></li>*/}
                  <li>
                    <a href="/affiliate" rel="nofollow">
                      Affiliate
                    </a>
                  </li>
                  <li>
                    <a href="/agency" rel="nofollow">
                      Agency
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 hei2 pdr app-unica">
                <span className="app-connect">
                  <h4>Tải app Unica</h4>
                  <ul>
                    <li>
                      <a
                        href="https://itunes.apple.com/us/app/unica-online-learning/id1230853725?ls=1&mt=8"
                        rel="nofollow"
                      >
                        <img
                          alt="Unica on App Store"
                          src="/media/images_v2018/appstore.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.inet.Learning"
                        rel="nofollow"
                      >
                        <img
                          alt="Unica on Google Play"
                          src="/media/images_v2018/playstore.png"
                        />
                      </a>
                    </li>
                  </ul>
                </span>
                <span className="social-connect">
                  <p>Kết nối với Unica</p>
                  <ul>
                    <li>
                      <a
                        data-bg-color="#3B5998"
                        href="https://www.facebook.com/Unica.vn"
                        rel="nofollow"
                        style={{ background: "rgb(59, 89, 152) !important" }}
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        data-bg-color="#C22E2A"
                        href="https://www.youtube.com/channel/UCrQoGDajCBs91atwgV8H6gw"
                        rel="nofollow"
                        style={{ background: "rgb(194, 46, 42) !important" }}
                      >
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="footer3">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <p>
                  © Công ty cổ phần đào tạo trực tuyến Unica - ĐKKD: 0107695756
                  - Khóa học trực tuyến dành cho người đi làm
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <a
                  href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=27171"
                  rel="nofollow"
                  target="_blank"
                >
                  <img src="https://unica.vn/media/images_v2017/bct.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
