import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";

class Categories extends Component {
  render() {
    return (
      <section className="offer_section">
        <div className="latest-products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Our Categories</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 px-0">
              <div className="box offer-box2">
                <img src="images/o2.jpg" alt="" />
                <div className="detail-box">
                  <h2>Upto 10% Off</h2>
                  <a href>Shop Now</a>
                </div>
              </div>
              <div className="box offer-box3">
                <img src="images/o3.jpg" alt="" />
                <div className="detail-box">
                  <h2>Upto 15% Off</h2>
                  <a href>Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-5 px-0">
              <div className="box offer-box2">
                <img src="images/o2.jpg" alt="" />
                <div className="detail-box">
                  <h2>Upto 10% Off</h2>
                  <a href>Shop Now</a>
                </div>
              </div>
              <div className="box offer-box3">
                <img src="images/o3.jpg" alt="" />
                <div className="detail-box">
                  <h2>Upto 15% Off</h2>
                  <a href>Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;
