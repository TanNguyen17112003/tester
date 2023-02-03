import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
// import "./HomeHeader.scss"; import scss tu homepage.js

import logoHome from "../../assets/images/logo.png";
class HomeHeader extends Component {
  handleAboutUs = () => {
    alert("about us");
  };
  render() {
    return (
      <React.Fragment>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">Website đặt</div>
            <div className="title2">vé tốt nhất</div>
            <div className="reser-ticket">
              <div className="row tb">
                <div className="col-md-3 quick-block_border">
                  <div className="quick-book_block position-ralative">
                    <div>
                      <div className="quick-label">Điểm đi</div>
                      <div className="quick-vale">
                        <select>
                          <option>An Giang</option>
                          <option>Bà Rịa – Vũng Tàu</option>
                          <option>Bạc Liêu</option>
                          <option>Bắc Giang</option>
                          <option>Bắc Kạn</option>
                          <option>Bắc Ninh</option>
                          <option>Bến Tre</option>
                          <option>Bình Dương</option>
                          <option>Bình Định</option>
                          <option>Bình Phước</option>
                          <option>Bình Thuận</option>
                          <option>Cà Mau</option>
                          <option>Cao Bằng</option>
                          <option>Cần Thơ</option>
                          <option>Đà Nẵng</option>
                          <option>Đắk Lắk</option>
                          <option>Đắk Nông</option>
                          <option>Điện Biên</option>
                          <option>Đồng Nai</option>
                          <option>Đồng Tháp</option>
                          <option>Gia Lai</option>
                          <option>Hà Giang</option>
                          <option>Hà Nam</option>
                          <option>Hà Nội</option>
                          <option>Hà Tĩnh</option>
                          <option>Hải Dương</option>
                          <option>Hải Phòng</option>
                          <option>Hậu Giang</option>
                          <option>Hòa Bình</option>
                          <option>Hồ Chí Minh</option>
                          <option>Hưng Yên</option>
                          <option>Khánh Hòa</option>
                          <option>Kiên Giang</option>
                          <option>Kon Tum</option>
                          <option>Lai Châu</option>
                          <option>Lạng Sơn</option>
                          <option>Lào Cai</option>
                          <option>Lâm Đồng</option>
                          <option>Long An</option>
                          <option>Nam Định</option>
                          <option>Nghệ An</option>
                          <option>Ninh Bình</option>
                          <option>Ninh Thuận</option>
                          <option>Phú Thọ</option>
                          <option>Phú Yên</option>
                          <option>Quảng Bình</option>
                          <option>Quảng Nam</option>
                          <option>Quảng Ngãi</option>
                          <option>Quảng Ninh</option>
                          <option>Quảng Trị</option>
                          <option>Sóc Trăng</option>
                          <option>Sơn La</option>
                          <option>Tây Ninh</option>
                          <option>Thái Bình</option>
                          <option>Thái Nguyên</option>
                          <option>Thanh Hóa</option>
                          <option>Thừa Thiên Huế</option>
                          <option>Tiền Giang</option>
                          <option>Trà Vinh</option>
                          <option>Tuyên Quang</option>
                          <option>Vĩnh Long</option>
                          <option>Vĩnh Phúc</option>
                          <option>Yên Bái</option>
                        </select>
                      </div>
                    </div>
                    <div className="el-icon--revers">
                      <i className="fas fa-exchange-alt"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 quick-block_border">
                  <div className="quick-book_block position-ralative">
                    <div className="quick-label">Điểm đến</div>
                    <div className="quick-vale">
                      <select>
                        <option>An Giang</option>
                        <option>Bà Rịa – Vũng Tàu</option>
                        <option>Bạc Liêu</option>
                        <option>Bắc Giang</option>
                        <option>Bắc Kạn</option>
                        <option>Bắc Ninh</option>
                        <option>Bến Tre</option>
                        <option>Bình Dương</option>
                        <option>Bình Định</option>
                        <option>Bình Phước</option>
                        <option>Bình Thuận</option>
                        <option>Cà Mau</option>
                        <option>Cao Bằng</option>
                        <option>Cần Thơ</option>
                        <option>Đà Nẵng</option>
                        <option>Đắk Lắk</option>
                        <option>Đắk Nông</option>
                        <option>Điện Biên</option>
                        <option>Đồng Nai</option>
                        <option>Đồng Tháp</option>
                        <option>Gia Lai</option>
                        <option>Hà Giang</option>
                        <option>Hà Nam</option>
                        <option>Hà Nội</option>
                        <option>Hà Tĩnh</option>
                        <option>Hải Dương</option>
                        <option>Hải Phòng</option>
                        <option>Hậu Giang</option>
                        <option>Hòa Bình</option>
                        <option>Hồ Chí Minh</option>
                        <option>Hưng Yên</option>
                        <option>Khánh Hòa</option>
                        <option>Kiên Giang</option>
                        <option>Kon Tum</option>
                        <option>Lai Châu</option>
                        <option>Lạng Sơn</option>
                        <option>Lào Cai</option>
                        <option>Lâm Đồng</option>
                        <option>Long An</option>
                        <option>Nam Định</option>
                        <option>Nghệ An</option>
                        <option>Ninh Bình</option>
                        <option>Ninh Thuận</option>
                        <option>Phú Thọ</option>
                        <option>Phú Yên</option>
                        <option>Quảng Bình</option>
                        <option>Quảng Nam</option>
                        <option>Quảng Ngãi</option>
                        <option>Quảng Ninh</option>
                        <option>Quảng Trị</option>
                        <option>Sóc Trăng</option>
                        <option>Sơn La</option>
                        <option>Tây Ninh</option>
                        <option>Thái Bình</option>
                        <option>Thái Nguyên</option>
                        <option>Thanh Hóa</option>
                        <option>Thừa Thiên Huế</option>
                        <option>Tiền Giang</option>
                        <option>Trà Vinh</option>
                        <option>Tuyên Quang</option>
                        <option>Vĩnh Long</option>
                        <option>Vĩnh Phúc</option>
                        <option>Yên Bái</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 quick-block_border">
                  <div className="quick-label">Ngày đi</div>
                  <div className="dte">
                    <form action="/action_page.php">
                      <input type="date" />
                    </form>
                  </div>
                </div>
                <div className="col-md-2 quick-block_border">
                  <div>
                    <input type="checkbox" name="vehicle1" />
                    <label className="quick-label">Khứ hồi </label>
                    <br />
                  </div>
                  <div>
                    <form action="/action_page.php">
                      <input type="date" />
                    </form>
                  </div>
                </div>
                <div className="col-md-2 quick-block_border">
                  <div>
                    <button className="btn">Tìm kiếm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-down"></div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  //props
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
