import * as types from "./../constants/ActionsConstants";
var initialState = [
  {
    category: "Tốp bán chạy",
    list: [
      {
        id: 1,
        img: "https://static.unica.vn/upload/images/2019/04/guitar-dem-hat-cung-haketu-nang-cao_m_1555571664.jpg",
        title: "Guitar đệm hát nâng cao cùng Haketu",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 2,
        img: "https://static.unica.vn/upload/images/2019/04/guitar-dem-hat-cung-haketu-nang-cao_m_1555571664.jpg",
        title: "Quản trị cuộc đời - Đường đến thành công",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 3,
        img: "https://static.unica.vn/upload/images/2019/04/khoa-hoc-nhap-mon-chung-khoan_m_1555570756.jpg",
        title: "30 Tuyệt chiêu gia tăng doanh số ngay lập tức",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 4,
        img: "https://static.unica.vn/upload/images/2019/04/tu-do-tai-chinh-cung-chung-khoan_m_1555558460.jpg",
        title: "Quản trị cảm xúc",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
    ],
  },
  {
    category: "Khóa học mới nhất",
    list: [
      {
        id: 1,
        img: "https://static.unica.vn/upload/images/2019/04/fingerstyle-guitar-cho-nguoi-moi-bat-dai_m_1555573300.jpg",
        title: "Guitar đệm hát nâng cao cùng Haketu",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 2,
        img: "https://static.unica.vn/upload/images/2019/07/yoga-cho-thanh-xuan-con-mai_m_1561971215.jpg",
        title: "Quản trị cuộc đời - Đường đến thành công",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 3,
        img: "https://static.unica.vn/upload/images/2020/06/a%CC%89nh-bi%CC%80a_m_1592362677.jpg",
        title: "30 Tuyệt chiêu gia tăng doanh số ngay lập tức",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 4,
        img: "https://static.unica.vn/upload/images/2019/06/bung-no-doanh-so-cung-google-shopping_m_1561514034.jpg",
        title: "Quản trị cảm xúc",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 5,
        img: "https://static.unica.vn/upload/images/2019/04/hoc-quan-tri-cam-xuc_m_1555571029.jpg",
        title: "Quản trị cảm xúc",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 6,
        img: "https://static.unica.vn/upload/images/2019/04/hoc-quan-tri-cam-xuc_m_1555571029.jpg",
        title: "Quản trị cảm xúc",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 7,
        img: "https://static.unica.vn/upload/images/2019/04/hoc-quan-tri-cam-xuc_m_1555571029.jpg",
        title: "Quản trị cảm xúc",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
      {
        id: 8,
        img: "https://static.unica.vn/upload/images/2019/04/hoc-quan-tri-cam-xuc_m_1555571029.jpg",
        title: "Quản trị cảm xúc",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      },
    ],
  },
];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLICK_MORE:
      var s = state;
      s[1].list.push({
        id: 8,
        img: "https://static.unica.vn/upload/images/2019/04/hoc-quan-tri-cam-xuc_m_1555571029.jpg",
        title: "Quản trị cảm xúc",
        price: 299000,
        about:
          "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      });
      return [...s];
    default:
      return state;
  }
};
export default courseReducer;
