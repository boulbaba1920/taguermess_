import React, { Component } from 'react';
import Header from '../containers/navbar';
import Banner from '../containers/Banner';
import Footer from '../containers/Footer';
import axios from "axios";
import { Navigate } from "react-router-dom";



export default class Home extends React.Component {
  state = {
    prod: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/GetProd`)
      .then(res => {
        const prod = res.data;
        this.setState({ prod });
      })
  }

  render() {
    return (
      <div>
  <div id="preloader">
    <div className="jumper">
      <div />
      <div />
      <div />
    </div>
  </div>  
 
  <Header></Header>
  
  <div className="banner header-text">
    <div className="owl-banner owl-carousel">
      <div className="banner-item-01">
        <div className="text-content col_r">
          <h3>MAKING ART FROM NATURE</h3>
          <h2>Wholesale Marketplace Shipping to All countries​</h2>
        </div>
      </div>
      <div className="banner-item-02">
        <div className="text-content">
         
         
        </div>
      </div>
    </div>
  </div>
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
            <h2>
              Upto 10% Off
            </h2>
            <a href>
              Shop Now
            </a>
          </div>
        </div>
        <div className="box offer-box3">
          <img src="images/o3.jpg" alt="" />
          <div className="detail-box">
            <h2>
              Upto 15% Off
            </h2>
            <a href>
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-5 px-0">
        <div className="box offer-box2">
          <img src="images/o2.jpg" alt="" />
          <div className="detail-box">
            <h2>
              Upto 10% Off
            </h2>
            <a href>
              Shop Now
            </a>
          </div>
        </div>
        <div className="box offer-box3">
          <img src="images/o3.jpg" alt="" />
          <div className="detail-box">
            <h2>
              Upto 15% Off
            </h2>
            <a href>
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


   

  <div className="latest-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Latest Products</h2>
            <a href="products.html">view all products <i className="fa fa-angle-right" /></a>
          </div>
        </div>
       {
         this.state.prod.map((data) => (
          <div className="col-md-4">
          <div className="product-item">
            <a href="#"><img src="./Products/1.jpg" alt="" /></a>
            <div className="down-content">
            <a href="#"><h4>{data.Name}</h4></a>
              <h6>{data.price}</h6>
              <p>{data.desc}</p>
            </div>
          </div>
        </div>
         ))}
      
           
              
        
      
       
       
        <div className="best-features">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>About Sneakers Outlet</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="left-content">
                  <h4>Looking for the best products?</h4>
                  <ul className="featured-list">
                    <li><a href="#">disc</a></li>
                    <li><a href="#">disc</a></li>
                  </ul>
                  <a href="about.html" className="filled-button">Read More</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img src="assets/images/feature-image.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div></div></div></div>

    );
  }
}

