import React, { Component } from 'react';
import Header from '../containers/navbar';

import Banner from '../containers/Banner';
import Footer from '../containers/Footer';
import WhyChooseUs from '../containers/WhyUS';
import Categories from '../containers/Categories';
import Cart from '../containers/Cart';
import First_Header from '../containers/First_Header';
import axios from "axios";
import { Navigate } from "react-router-dom";



export default class Home extends React.Component {
 /* state = {
    prod: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/GetProd`)
      .then(res => {
        const prod = res.data;
        this.setState({ prod });
      })
  }*/

  render() {
    return (
      <div>
    
  
    <Header></Header>
   
  <div>
    <Cart></Cart>
  <div>
  <Banner></Banner>
  </div>
   
   <Categories></Categories>
   <section className="bg0 p-t-23 p-b-140">
  <div className="container">
    <div className="p-b-10">
      <h3 className="ltext-103 cl5">
        Product Overview
      </h3>
    </div>
    <div className="flex-w flex-sb-m p-b-52">
      <div className="flex-w flex-l-m filter-tope-group m-tb-10">
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
          All Products
        </button>
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
          Women
        </button>
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
          Men
        </button>
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
          Bag
        </button>
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
          Shoes
        </button>
        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
          Watches
        </button>
      </div>
    </div></div></section>

  </div>
  </div>

    );
  }
}

