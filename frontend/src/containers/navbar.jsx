import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { NavLink } from 'react-router-dom';

  const path = window.location.pathname;
   console.log('path = ',path) ;
class navbar extends Component {
  render() {
    return (/*
      <header className>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
        <a class="navbar-brand" href="#">
          <img src="https://taguermessmarket.com/wp-content/uploads/2022/03/Taguermess-3-2.png" width="150" height="150" alt=""></img>
         </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item  ${path == '/' ? 'active' : ''} `} >
                <a className="nav-link" href="http://localhost:3000/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li> 
              <li className={`nav-item  ${path == '/products' ? 'active' : ''} `} >
                <a className="nav-link" href="http://localhost:3000/products">Our Products</a>
              </li>
              <li className={`nav-item  ${path == '/about' ? 'active' : ''} `} >
                <a className="nav-link" href="http://localhost:3000/about">About Us</a>
              </li>
              <li className={`nav-item  ${path == '/contact' ? 'active' : ''} `} >
                <a className="nav-link" href="http://localhost:3000/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    <div className="wrap-menu-desktop">
    <nav className="limiter-menu-desktop container">
      <a href="#" className="logo">
        <img src="https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/291594632_1122082418343987_8988809142517773715_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DT_2psNI6R0AX82kWds&tn=3L2xplFGnV0PQiln&_nc_ht=scontent.ftun8-1.fna&oh=03_AVI2rNWmwHw6PULl8XkXP66F7d_JlD2V2TzuMohc5SvD0g&oe=62EB3BB5"  alt="IMG-LOGO" />
      </a>
      <div className="menu-desktop">
        <ul className="main-menu">
          <li className={`nav-item  ${path == '/' ? 'active-menu' : ''} `}>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li className={`nav-item  ${path == '/products' ? 'active-menu' : ''} `}>
            <a href="product.html">Shop</a>
          </li>
         
          <li className={`nav-item  ${path == '/about' ? 'active-menu' : ''} `}>
            <a href="about.html">About</a>
          </li>
          <li className={`nav-item  ${path == '/contact' ? 'active-menu' : ''} `} >
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
   
    <div className="wrap-icon-header flex-w flex-r-m">
  <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
    <i className="zmdi zmdi-search" />
  </div>
  <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
    <i className="zmdi zmdi-shopping-cart" />
  </div>
  <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
    <i className="zmdi zmdi-favorite-outline" />
  </a>
</div>
</nav>
</div>
   */
<header>
<div className="container-menu-desktop">
  <div className="top-bar">
    <div className="content-topbar flex-sb-m h-full container">
      <div className="left-top-bar">
        Free shipping for standard order over $100
      </div>
      <div className="right-top-bar flex-w h-full">
        <a href="#" className="flex-c-m trans-04 p-lr-25">
          Help &amp; FAQs
        </a>
        <a href="#" className="flex-c-m trans-04 p-lr-25">
          My Account
        </a>
        <a href="#" className="flex-c-m trans-04 p-lr-25">
          EN
        </a>
        <a href="#" className="flex-c-m trans-04 p-lr-25">
          USD
        </a>
      </div>
    </div>
  </div>
  <div className="wrap-menu-desktop">
    <nav className="limiter-menu-desktop container">
      <a href="#" className="logo">
        <img src="https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/291594632_1122082418343987_8988809142517773715_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DT_2psNI6R0AX82kWds&tn=3L2xplFGnV0PQiln&_nc_ht=scontent.ftun8-1.fna&oh=03_AVI2rNWmwHw6PULl8XkXP66F7d_JlD2V2TzuMohc5SvD0g&oe=62EB3BB5" alt="IMG-LOGO" />
      </a>
      <div className="menu-desktop">
        <ul className="main-menu">
        <li className={`nav-item  ${path == '/' ? 'active-menu' : ''} `}>
            <a href="http://localhost:3000/">Home</a>
           
          </li>
          <li className={`nav-item  ${path == '/products' ? 'active-menu' : ''} `}>
            <a href="http://localhost:3000/products">Shop</a>
          </li>
          
          <li className={`nav-item  ${path == '/about' ? 'active-menu' : ''} `}>
            <a href="http://localhost:3000/about">About</a>
          </li>
          <li className={`nav-item  ${path == '/contact' ? 'active-menu' : ''} `}>
            <a href="http://localhost:3000/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="wrap-icon-header flex-w flex-r-m">
        <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
          <i className="zmdi zmdi-search" />
        </div>
        <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
          <i className="zmdi zmdi-shopping-cart" />
        </div>
        <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
          <i className="zmdi zmdi-favorite-outline" />
        </a>
      </div>
    </nav>
  </div>
</div>
<div className="wrap-header-mobile">
  <div className="logo-mobile">
    <a href="index.html"><img src="https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/291594632_1122082418343987_8988809142517773715_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DT_2psNI6R0AX82kWds&tn=3L2xplFGnV0PQiln&_nc_ht=scontent.ftun8-1.fna&oh=03_AVI2rNWmwHw6PULl8XkXP66F7d_JlD2V2TzuMohc5SvD0g&oe=62EB3BB5" alt="IMG-LOGO" /></a>
  </div>
  <div className="wrap-icon-header flex-w flex-r-m m-r-15">
    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
      <i className="zmdi zmdi-search" />
    </div>
    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={2}>
      <i className="zmdi zmdi-shopping-cart" />
    </div>
    <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify={0}>
      <i className="zmdi zmdi-favorite-outline" />
    </a>
  </div>
  <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </div>
</div>
<div className="menu-mobile">
  <ul className="topbar-mobile">
    <li>
      <div className="left-top-bar">
        Free shipping for standard order over $100
      </div>
    </li>
    <li>
      <div className="right-top-bar flex-w h-full">
        <a href="#" className="flex-c-m p-lr-10 trans-04">
          Help &amp; FAQs
        </a>
        <a href="#" className="flex-c-m p-lr-10 trans-04">
          My Account
        </a>
        <a href="#" className="flex-c-m p-lr-10 trans-04">
          EN
        </a>
        <a href="#" className="flex-c-m p-lr-10 trans-04">
          USD
        </a>
      </div>
    </li>
  </ul>
  <ul className="main-menu-m">
  <li className={`nav-item  ${path == '/' ? 'active-menu' : ''} `}>
            <a href="index.html">Home</a>
           
          </li>
          <li className={`nav-item  ${path == '/products' ? 'active-menu' : ''} `}>
            <a href="product.html">Shop</a>
          </li>
          
          <li className={`nav-item  ${path == '/about' ? 'active-menu' : ''} `}>
            <a href="about.html">About</a>
          </li>
          <li className={`nav-item  ${path == '/contact' ? 'active-menu' : ''} `}>
            <a href="contact.html">Contact</a>
          </li>
  </ul>
</div>
<div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
  <div className="container-search-header">
    <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
      <img src="https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/291594632_1122082418343987_8988809142517773715_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DT_2psNI6R0AX82kWds&tn=3L2xplFGnV0PQiln&_nc_ht=scontent.ftun8-1.fna&oh=03_AVI2rNWmwHw6PULl8XkXP66F7d_JlD2V2TzuMohc5SvD0g&oe=62EB3BB5" alt="CLOSE" />
    </button>
    <form className="wrap-search-header flex-w p-l-15">
      <button className="flex-c-m trans-04">
        <i className="zmdi zmdi-search" />
      </button>
      <input className="plh3" type="text" name="search" placeholder="Search..." />
    </form>
  </div>
</div>
</header>
      
    );
  }
}
 
export default navbar;