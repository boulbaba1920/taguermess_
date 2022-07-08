import React, { Component } from 'react';
import Header from '../containers/navbar';

import Banner from '../containers/Banner';
import Footer from '../containers/Footer';
import Type from '../containers/Type';
import Categories from '../containers/Categories';
import Cart from '../containers/Cart';

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
  <Type></Type>
  <Footer></Footer>
  </div>
  </div>

    );
  }
}

