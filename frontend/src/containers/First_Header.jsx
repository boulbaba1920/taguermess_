import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";

class First_Header extends Component {
  render() {
    return (
      <div className="container-menu-desktop">
  <div className="top-bar">
    <div className="content-topbar flex-sb-m h-full container">
      <div className="left-top-bar">
        Free shipping for standard order over $100
      </div>
      <div className="right-top-bar flex-w h-full">
        <a href="#" className="flex-c-m trans-04 p-lr-25">
          Help &amp; FAQs
        </a>
        <a href="#" className="flex-c-m trans-04 p-lr-25">
          My Account
        </a>
        <a href="#" className="flex-c-m trans-04 p-lr-25">
          EN
        </a>
        <a href="#" className="flex-c-m trans-04 p-lr-25">
          USD
        </a>
      </div>
    </div>
  </div>
</div>

    );
  }
}

export default First_Header;
