import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";

class Background extends Component {
  render() {
    return (
      <div className="team-members">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Team Members</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="assets/images/team_01.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
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
                <div className="down-content">
                  <h4>Name</h4>
                  <p>Role.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="https://taguermessmarket.com/wp-content/uploads/2022/03/267522316_1097159891079699_4375229637917245636_n.jpg" width="200px" height="290px" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
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
                <div className="down-content">
                  <h4>Mariem ben Tanfous</h4>
                  <p>Founder - CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Background;
