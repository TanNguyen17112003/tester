import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
import logoHome from "../../assets/images/logo.png";
import { pressAboutUs } from "../../store/actions";
class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        {/* {console.log("props", this.props)} */}
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <div className="Header-logo">
                <Link to="/homepage">
                  <img src={logoHome}></img>
                </Link>
              </div>
            </div>
            <div className="center-content">
              <div className="child-center-content">
                <div>
                  <span>
                    <Link to="/aboutUs">ABOUT US</Link>
                  </span>
                </div>
              </div>
              <div className="child-center-content">
                <div>
                  <span>
                    <Link to="/datve">hướng dẫn thanh toán</Link>
                  </span>
                </div>
              </div>
              <div className="child-center-content">
                <div>
                  <span>
                    <Link to="/news">Tin tức</Link>
                  </span>
                </div>
              </div>
              <div className="child-center-content">
                <div>
                  <span>
                    <Link to="/feedback">Phản hồi cộng đồng</Link>
                  </span>
                </div>
              </div>
              <div className="child-center-content">
                <div>
                  <span>
                    <Link to="/contact">Liên hệ</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-phone"> 1900 9001</i>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  //props
  return {
    isAboutUs: state.app.isAboutUs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
