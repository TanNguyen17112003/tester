import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./aboutUs.scss"; // file scss chung cho section
//

//

class AboutUS extends Component {
  render() {
    return (
      <div className="containerr">
        <div className="containerr-up"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUS);
