import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { NavLink } from "react-router-dom";

const path = window.location.pathname;
console.log("path = ", path);

class NavbarContact extends Component {
  render() {
    return (
      <header className="header-v4">
        <div className="container-menu-desktop">
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  {" "}
                  Help &amp; FAQs{" "}
                </a>
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  {" "}
                  My Account{" "}
                </a>
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  {" "}
                  EN{" "}
                </a>
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  {" "}
                  USD{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="wrap-menu-desktop how-shadow1">
            <nav className="limiter-menu-desktop container">
              <a href="#" className="logo">
                <img
                  src="https://scontent.ftun8-1.fna.fbcdn.net/v/t1.15752-9/291594632_1122082418343987_8988809142517773715_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DT_2psNI6R0AX82kWds&tn=3L2xplFGnV0PQiln&_nc_ht=scontent.ftun8-1.fna&oh=03_AVI2rNWmwHw6PULl8XkXP66F7d_JlD2V2TzuMohc5SvD0g&oe=62EB3BB5"
                  alt="IMG-LOGO"
                  data-pagespeed-url-hash={786974990}
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </a>
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li
                    className={`nav-item  ${path == "/" ? "active-menu" : ""} `}
                  >
                    <a href="http://localhost:3000/">Home</a>
                  </li>
                  <li
                    className={`nav-item  ${
                      path == "/products" ? "active-menu" : ""
                    } `}
                  >
                    <a href="http://localhost:3000/products">Shop</a>
                  </li>

                  <li
                    className={`nav-item  ${
                      path == "/about" ? "active-menu" : ""
                    } `}
                  >
                    <a href="http://localhost:3000/about">About</a>
                  </li>
                  <li
                    className={`nav-item  ${
                      path == "/contact" ? "active-menu" : ""
                    } `}
                  >
                    <a href="http://localhost:3000/contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search" />
                </div>
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={2}
                >
                  <i className="zmdi zmdi-shopping-cart" />
                </div>
                <a
                  href="#"
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify={0}
                >
                  <i className="zmdi zmdi-favorite-outline" />
                </a>
              </div>
            </nav>
          </div>
        </div>
        <div className="wrap-header-mobile">
          <div className="logo-mobile">
            <a href="index.html">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAARCAMAAADE859bAAAAM1BMVEUAAAD///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzN/h6ohAAAAEHRSTlMAABEiM0RVZneImaq7zN3uf6QJ9gAAAoxJREFUSMeVlVkOJCEIQC213Lf7n3YERLGmk8nw0alWxMeqUiA25JKDVVveWEqJayEcoQUDn0YJ0aHUHDQoxy1sqq6tKY52PP7dqg8aLYOkLF27F/CqcWRhwWcUELbjbp/Y9ShrYaqTA3GIv/VS7PtcN+qzYH9RNNwSkegjaW3S6NOe1tqNOn+X7Rac83mMRBTZTZl/HVA4jfIwUit4dSWb8FVoXXNG8tqeponIbQo/2qIjj91SVKbT5TMvHffiCmEcBSmUekDAxPTr5Th7pRJcZ+jkWHYnGwSACgUU+mD7aJNuNc7cFHlk1nEYKKawkAZJUbdbgDFPdc4MOt0UG9xEUyGnlU5xwxGmMMwNUuA4U+gvhbiJYjeOm0DI7g0IIn96R3Hbes3/oNgxIR/LofCwIyjsMX8aIIjvdyWYA4RR0RCQc4WendDz+6UIkgIXF4WtcEUdGRvVPOj6vynKqUZNeUs7THRHnljtvSniD4pWa20Ube5U96DR8s1IFMXAhZsEmae8BHlO+bqQN4WXFH5TTPuW8kidCnXRtlMvzEsoKS4U7FmuUi1qpU7Nbz0hdLkorBwqCXzDjOTlpazOxMHQldwr2/E8Tug46UbMMF7UjmPQ76qsJ1zTo3dR0OdNgWZb8BEch457cWgFH3BEGhq74cwGIUl9bm83hafhe+JE1RnIbUlB02qJVz8WrgneYMah9DPFG/HwkDodmtYDMp8TbLHVIzg7bgpxqxevFb4V/vuauROBdA7M56LEWLiZxZyYSr1CQTarDoVFzToqyUO5TpiNtDuPFlqkBUmRTss6alk6AI26nuB7Wjl8VFvUSv39jog3dbnzqXf9avVfYsUBfVty5q8dfHH1kucPybg2S2G5SKkAAAAASUVORK5CYII="
                alt="IMG-LOGO"
                data-pagespeed-url-hash={786974990}
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
            </a>
          </div>
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search" />
            </div>
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify={2}
            >
              <i className="zmdi zmdi-shopping-cart" />
            </div>
            <a
              href="#"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify={0}
            >
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
                  {" "}
                  Help &amp; FAQs{" "}
                </a>
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  {" "}
                  My Account{" "}
                </a>
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  {" "}
                  EN{" "}
                </a>
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  {" "}
                  USD{" "}
                </a>
              </div>
            </li>
          </ul>
          <ul className="main-menu-m">
            <li className={`nav-item  ${path == "/" ? "active-menu" : ""} `}>
              <a href="index.html">Home</a>
            </li>
            <li
              className={`nav-item  ${
                path == "/products" ? "active-menu" : ""
              } `}
            >
              <a href="product.html">Shop</a>
            </li>

            <li
              className={`nav-item  ${path == "/about" ? "active-menu" : ""} `}
            >
              <a href="about.html">About</a>
            </li>
            <li
              className={`nav-item  ${
                path == "/contact" ? "active-menu" : ""
              } `}
            >
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAHlBMVEUzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzOXsuUyAAAACXRSTlMAExUWpKWm09RodY4kAAAAYUlEQVQI12MQVWAAAyZHhswmCFN9KoPGDLAwU2UTA1MnWFgdJAIWhgiASagyIAVVBRKGCoKEoYIgYZggMhOhAEkbwjCmzmaYFRozDKBWggUhwmBBiHBmM9TEaQxiBlAjEwFVbCG80ZlbNgAAAABJRU5ErkJggg=="
                alt="CLOSE"
                data-pagespeed-url-hash={2552524801}
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
            </button>
            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input
                className="plh3"
                type="text"
                name="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default NavbarContact;
