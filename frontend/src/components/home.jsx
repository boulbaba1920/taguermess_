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
      
           
      <div>
  <section className="section features" id="features">
    <div className="container">
      <h2 className="h2 section-title underline">Looking for the best products?</h2>
      <ul className="features-list">
        <li>
          <div className="features-card">
            <div className="icon">
              <ion-icon name="share-social-outline" />
            </div>
            <div className="content">
              <h3 className="h3 title">Best Quality</h3>
              <div className="">
                <ul className="featured-list">
                <li><a href="#">Taguermess Provide you with high quality of Artisan products</a></li>
                 
                </ul>
              </div>
            </div>
          </div>
        </li>
        <br /><br />
        <li>
          <div className="features-card">
            <div className="icon">
              <ion-icon name="color-palette-outline" />
            </div>
            <div className="content">
              <h3 className="h3 title">All countries Shipping</h3>
              <div className="">
                <ul className="featured-list">
                <li><a href="#">Tunisian Artisanal Products in all countries (olive wood / ceramics / Fouta / Halfa)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <figure className="features-banner">
        <img src="/assets/images/like it.png" width={370} height={318} loading="lazy" alt="Features Banner" className="w-100 banner-animation" />
      </figure>
      <ul className="features-list">
        <li>
          <div className="features-card">
            <div className="icon">
              <ion-icon name="code-slash-outline" />
            </div>
            <div className="content">
              <h3 className="h3 title">Best Offers</h3>
              <div className="">
                <ul className="featured-list">
                <li><a href="#">We have the best offers</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <br /><br />
        <li>
          <div className="features-card">
            <div className="icon">
              <ion-icon name="rocket-outline" />
            </div>
            <div className="content">
              <h3 className="h3 title">Secure Payments</h3>
              <div className="">
                <ul className="featured-list">
                <li><a href="#">We provide you with secure payments methods</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>
     
        
      
       
       
      
        <Footer></Footer>
      </div></div></div></div>

    );
  }
}

