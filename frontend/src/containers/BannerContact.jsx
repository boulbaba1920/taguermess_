import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";

class BannerContact extends Component {
  render() {
    return (
        <div className="page-heading contact-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>contact us</h4>
                <h2>let’s get in touch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default BannerContact;
