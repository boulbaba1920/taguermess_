import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";

class WhyChooseUs extends Component {
  render() {
    return (
        
        <div className="section-heading">
            <br></br>
            <hr></hr>
            <br></br>
      <section className="_choose_real_wrapper">
        <div className="_choose_real_wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="_choose_real_heading">
                  <h3 className="_choose_real_title1">Why Choose Us</h3>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="_choose_real_content_wrap">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="_choose_real_content">
                        <div className="_choose_real_content_img">
                          <img
                            src="https://taguermessmarket.com/wp-content/uploads/2018/12/globe-free-img.png"
                            height="70"
                            alt="Image"
                            className="_buy_img"
                          />
                        </div>
                        <div className="_choose_real_txt">
                          <h3 className="_choose_real_inner_title">
                            Scandinavian Shipping
                          </h3>
                          <p className="_choose_real_inner_para">
                            Tunisian Artisan Products in all countries
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="_choose_real_content">
                        <div className="_choose_real_content_img">
                          <img
                            src="https://taguermessmarket.com/wp-content/uploads/2018/12/quality-free-img.png"
                            height="70"
                            alt="Image"
                            className="_sell_img"
                          />
                        </div>
                        <div className="_choose_real_txt">
                          <h3 className="_choose_real_inner_title">
                            Best Quality
                          </h3>
                          <p className="_choose_real_inner_para">
                            Taguermess Provide you with high quality of Artisan
                            products.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                      <div className="_choose_real_content">
                        <div className="_choose_real_content_img">
                          <img
                            src="https://taguermessmarket.com/wp-content/uploads/2018/12/lock-free-img.png"
                            height="70"
                            alt="Image"
                            className="_rent_img"
                          />
                        </div>
                        <div className="_choose_real_txt">
                          <h3 className="_choose_real_inner_title">
                            Secure Payments
                          </h3>
                          <p className="_choose_real_inner_para">
                            We provide you with secure payments methods.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default WhyChooseUs;
