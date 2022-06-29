import React, { Component } from 'react';
import Header from '../containers/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/styles.css'
import Footer from '../containers/Footer';
export default class Products extends React.Component {
  render() {
    return (
        <div>
          <Header></Header>
          <div className="page-heading products-heading header-text">
          <div className="container">
           <div className="row">
            <div className="col-md-12">
                 <div className="text-content">
                 <h4>new arrivals</h4>
                 <h2>Sneakers Outlet</h2>
            </div>
           </div>
         </div>
       </div>
      </div>


      <div className="products">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="filters">
          <ul>
            <li className="active" data-filter="*">All Products</li>
            <li data-filter=".new">Featured</li>
          </ul>
        </div>
      </div>
    </div></div></div>
     



     

        <Footer></Footer>
      </div>
     
    );
  }
}
 

