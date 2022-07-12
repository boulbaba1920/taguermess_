import React, { Component } from 'react';
import Header from '../containers/navbar';

import Banner from '../containers/Banner';
import Footer from '../containers/Footer';
import Type from '../containers/Type';
import TypeShop from '../containers/TypeShop';
import Categories from '../containers/Categories';
import Cart from '../containers/Cart';

import axios from "axios";
import { Navigate } from "react-router-dom";
export default class Products extends React.Component {
  render() {
    return (
   
    
   <div>
      <Header></Header>
     

      <Cart></Cart>
      <TypeShop></TypeShop>
      <Footer></Footer>
      </div>
    );
  }
}
 

