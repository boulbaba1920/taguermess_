import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";

class PreLoader extends Component {
  render() {
    return (
      <div id="preloader">
        <div className="jumper">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default PreLoader;
