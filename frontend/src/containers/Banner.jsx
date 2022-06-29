import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/styles.css'
import { NavLink } from 'react-router-dom';
import {Helmet} from "react-helmet";




class banner extends Component {
  render() {
    return (
      <div className="banner header-text">
      <div className="owl-banner owl-carousel">
        <div className="banner-item-01">
          <div className="text-content">
            <h4>Best Offer</h4>
            <h2>New Arrivals</h2>
          </div>
        </div>
        <div className="banner-item-02">
          <div className="text-content">
            <h4>Delivery </h4>
            <h2>Free delivery within 24 hours</h2>
          </div>
        </div>
      </div>
    </div>
    
      
      
    );
  }
}
 
export default banner;











