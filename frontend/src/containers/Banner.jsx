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
    
      
      
    );
  }
}
 
export default banner;











