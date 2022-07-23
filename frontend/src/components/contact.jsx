import React, { Component } from "react";
import NavbarContact from "../containers/NavbarContact";

import Banner from "../containers/Banner";
import Footer from "../containers/Footer";
import Type from "../containers/Type";
import Categories from "../containers/Categories";
import Cart from "../containers/Cart";
import MainContact from "../containers/MainContact";

import axios from "axios";
import { Navigate } from "react-router-dom";
class contact extends Component {
  render() {
    return (
      <div>
        <NavbarContact></NavbarContact>
        <Cart></Cart>
        <MainContact></MainContact>
        <Footer></Footer>
      </div>
    );
  }
}

export default contact;
