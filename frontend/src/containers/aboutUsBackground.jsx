import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";

class Background extends Component {
  render() {
    return (
      <div className="best-features about-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Background</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="assets/images/feature-image.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Who we are &amp; What we do?</h4>
                <p>
                Taguermess Market is an operated business based in Tunisia, 
                specializing in the production of olivewood handicrafts, 
                and the wholesale of stock olivewood in its raw form, Fouta, ceramics, and halfa.... 
                We provide our partners in Nordic countries (Denmark, Finland, Iceland , Norway Sweden ) 
                with Artisanal Products ..... Our products are of high quality and competitively priced, 
                and our unmatched services in this sector are virtually unlimited,
                 we deliver our products in Nordic countries at unbeatable prices....
                  All of our products are backed by a 100% Satisfaction Guarantee and 
                  come with a Certificate of Authenticity certifying Thank you for your interest in Taguermess Market.
                </p>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
