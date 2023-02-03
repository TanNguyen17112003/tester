import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import logoHome from "../../../assets/images/logo.png"
class Infor extends Component {
  render() {
    return (      
    <div class="footer-contain">
          <div class="footer-address">
            <div class="address-icon">
            <img src={logoHome}></img>
              <span>CÔNG TY CỔ PHẦN VTDT - TRAVELBK</span>
            </div>

            <div class="address-main">
              <h3>HỒ CHÍ MINH:</h3>
              <p>Địa chỉ 1: <i>268 Lý Thường Kiệt, Q.10, Tp.HCM</i></p>
              <p>Địa chỉ 2: <i>Khu đô thị Đại học Quốc Gia Tp.HCM, Thủ Đức</i></p>
              <p>Email: contact@travelbk.vn</p>
            </div>
          </div>

          <div class="footer-information">
            <h2>THÔNG TIN KHÁC</h2>
            <ul class="list-information">
              <li>Chính sách bảo mật</li>
              <li>Văn hóa doanh nghiệp</li>
              <li>Cơ hội việc làm</li>
              <li>Dành cho công ty du lịch</li>
            </ul>
          </div>

          <div class="footer-contact">
            <h2>THEO DÕI CHÚNG TÔI</h2>
            <a href="#"><i class="fab fa-facebook-square"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Infor);
