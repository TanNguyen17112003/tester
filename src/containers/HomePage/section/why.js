import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Why extends Component {
  render() {
    return (
      <div className="section-why">
        <div className="content-up">
          <span>VÌ SAO NÊN CHỌN TRAVELBK?</span>
        </div>
        <div className="content-down">
          <div className="child-content-up">
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
            <div className="txt">
              Tìm chuyến xe với các mức giá phù hợp và dễ dàng
            </div>
          </div>
          <div className="child-content-up">
            <div className="icon">
              <i class="far fa-credit-card"></i>
            </div>
            <div className="txt">Phương thức thanh toán đơn giản</div>
          </div>
          <div className="child-content-up">
            <div className="icon">
              <i class="fas fa-question"></i>
            </div>
            <div className="txt">Trợ giúp và phản hồi nhanh chóng</div>
          </div>
          <div className="child-content-up">
            <div className="icon">
              <i class="fas fa-bolt"></i>
            </div>
            <div className="txt">Xác nhận vé tức thời</div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Why);
