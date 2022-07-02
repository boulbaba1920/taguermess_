import React, { Component } from 'react';
import Header from '../containers/navbar';
import Banner from '../containers/Banner';
import Footer from '../containers/Footer';
import WhyChooseUs from '../containers/WhyUS';
import Categories from '../containers/Categories';
import PreLoader from '../containers/PreLoader';
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
   <PreLoader></PreLoader>
 
  <Header></Header>
  
  <Banner></Banner>
  

   

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
     

   </div>
      
      
      <Categories></Categories>
       <WhyChooseUs></WhyChooseUs>
       
      
        <Footer></Footer>
      </div></div></div></div>

    );
  }
}

