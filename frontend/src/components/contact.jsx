import React, { Component } from 'react';
import Header from '../containers/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/styles.css';
import BannerContact from '../containers/BannerContact';
import ContactForm from '../containers/ContactForm';
import Happy from '../containers/HappyClients';
import Footer from '../containers/Footer';
class contact extends Component {
  render() {
    return (
      <div>
  <header className="header-v4">
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
      <div className="wrap-menu-desktop how-shadow1">
        <nav className="limiter-menu-desktop container">
          <a href="#" className="logo">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAARCAMAAADE859bAAAAM1BMVEUAAAD///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzN/h6ohAAAAEHRSTlMAABEiM0RVZneImaq7zN3uf6QJ9gAAAoxJREFUSMeVlVkOJCEIQC213Lf7n3YERLGmk8nw0alWxMeqUiA25JKDVVveWEqJayEcoQUDn0YJ0aHUHDQoxy1sqq6tKY52PP7dqg8aLYOkLF27F/CqcWRhwWcUELbjbp/Y9ShrYaqTA3GIv/VS7PtcN+qzYH9RNNwSkegjaW3S6NOe1tqNOn+X7Rac83mMRBTZTZl/HVA4jfIwUit4dSWb8FVoXXNG8tqeponIbQo/2qIjj91SVKbT5TMvHffiCmEcBSmUekDAxPTr5Th7pRJcZ+jkWHYnGwSACgUU+mD7aJNuNc7cFHlk1nEYKKawkAZJUbdbgDFPdc4MOt0UG9xEUyGnlU5xwxGmMMwNUuA4U+gvhbiJYjeOm0DI7g0IIn96R3Hbes3/oNgxIR/LofCwIyjsMX8aIIjvdyWYA4RR0RCQc4WendDz+6UIkgIXF4WtcEUdGRvVPOj6vynKqUZNeUs7THRHnljtvSniD4pWa20Ube5U96DR8s1IFMXAhZsEmae8BHlO+bqQN4WXFH5TTPuW8kidCnXRtlMvzEsoKS4U7FmuUi1qpU7Nbz0hdLkorBwqCXzDjOTlpazOxMHQldwr2/E8Tug46UbMMF7UjmPQ76qsJ1zTo3dR0OdNgWZb8BEch457cWgFH3BEGhq74cwGIUl9bm83hafhe+JE1RnIbUlB02qJVz8WrgneYMah9DPFG/HwkDodmtYDMp8TbLHVIzg7bgpxqxevFb4V/vuauROBdA7M56LEWLiZxZyYSr1CQTarDoVFzToqyUO5TpiNtDuPFlqkBUmRTss6alk6AI26nuB7Wjl8VFvUSv39jog3dbnzqXf9avVfYsUBfVty5q8dfHH1kucPybg2S2G5SKkAAAAASUVORK5CYII=" alt="IMG-LOGO" data-pagespeed-url-hash={786974990} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
          </a>
          <div className="menu-desktop">
            <ul className="main-menu">
              <li>
                <a href="index.html">Home</a>
                <ul className="sub-menu">
                  <li><a href="index.html">Homepage 1</a></li>
                  <li><a href="home-02.html">Homepage 2</a></li>
                  <li><a href="home-03.html">Homepage 3</a></li>
                </ul>
              </li>
              <li>
                <a href="product.html">Shop</a>
              </li>
              <li className="label1" data-label1="hot">
                <a href="shoping-cart.html">Features</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="active-menu">
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
            <a href="#" className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
              <i className="zmdi zmdi-favorite-outline" />
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div className="wrap-header-mobile">
      <div className="logo-mobile">
        <a href="index.html"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAARCAMAAADE859bAAAAM1BMVEUAAAD///8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzN/h6ohAAAAEHRSTlMAABEiM0RVZneImaq7zN3uf6QJ9gAAAoxJREFUSMeVlVkOJCEIQC213Lf7n3YERLGmk8nw0alWxMeqUiA25JKDVVveWEqJayEcoQUDn0YJ0aHUHDQoxy1sqq6tKY52PP7dqg8aLYOkLF27F/CqcWRhwWcUELbjbp/Y9ShrYaqTA3GIv/VS7PtcN+qzYH9RNNwSkegjaW3S6NOe1tqNOn+X7Rac83mMRBTZTZl/HVA4jfIwUit4dSWb8FVoXXNG8tqeponIbQo/2qIjj91SVKbT5TMvHffiCmEcBSmUekDAxPTr5Th7pRJcZ+jkWHYnGwSACgUU+mD7aJNuNc7cFHlk1nEYKKawkAZJUbdbgDFPdc4MOt0UG9xEUyGnlU5xwxGmMMwNUuA4U+gvhbiJYjeOm0DI7g0IIn96R3Hbes3/oNgxIR/LofCwIyjsMX8aIIjvdyWYA4RR0RCQc4WendDz+6UIkgIXF4WtcEUdGRvVPOj6vynKqUZNeUs7THRHnljtvSniD4pWa20Ube5U96DR8s1IFMXAhZsEmae8BHlO+bqQN4WXFH5TTPuW8kidCnXRtlMvzEsoKS4U7FmuUi1qpU7Nbz0hdLkorBwqCXzDjOTlpazOxMHQldwr2/E8Tug46UbMMF7UjmPQ76qsJ1zTo3dR0OdNgWZb8BEch457cWgFH3BEGhq74cwGIUl9bm83hafhe+JE1RnIbUlB02qJVz8WrgneYMah9DPFG/HwkDodmtYDMp8TbLHVIzg7bgpxqxevFb4V/vuauROBdA7M56LEWLiZxZyYSr1CQTarDoVFzToqyUO5TpiNtDuPFlqkBUmRTss6alk6AI26nuB7Wjl8VFvUSv39jog3dbnzqXf9avVfYsUBfVty5q8dfHH1kucPybg2S2G5SKkAAAAASUVORK5CYII=" alt="IMG-LOGO" data-pagespeed-url-hash={786974990} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></a>
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
        <li>
          <a href="index.html">Home</a>
          <ul className="sub-menu-m">
            <li><a href="index.html">Homepage 1</a></li>
            <li><a href="home-02.html">Homepage 2</a></li>
            <li><a href="home-03.html">Homepage 3</a></li>
          </ul>
          <span className="arrow-main-menu-m">
            <i className="fa fa-angle-right" aria-hidden="true" />
          </span>
        </li>
        <li>
          <a href="product.html">Shop</a>
        </li>
        <li>
          <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
    <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
      <div className="container-search-header">
        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAHlBMVEUzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzOXsuUyAAAACXRSTlMAExUWpKWm09RodY4kAAAAYUlEQVQI12MQVWAAAyZHhswmCFN9KoPGDLAwU2UTA1MnWFgdJAIWhgiASagyIAVVBRKGCoKEoYIgYZggMhOhAEkbwjCmzmaYFRozDKBWggUhwmBBiHBmM9TEaQxiBlAjEwFVbCG80ZlbNgAAAABJRU5ErkJggg==" alt="CLOSE" data-pagespeed-url-hash={2552524801} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
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
  <div className="wrap-header-cart js-panel-cart">
    <div className="s-full js-hide-cart" />
    <div className="header-cart flex-col-l p-l-65 p-r-25">
      <div className="header-cart-title flex-w flex-sb-m p-b-8">
        <span className="mtext-103 cl2">
          Your Cart
        </span>
        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
          <i className="zmdi zmdi-close" />
        </div>
      </div>
      <div className="header-cart-content flex-w js-pscroll">
        <ul className="header-cart-wrapitem w-full">
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="data:image/jpeg;base64,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" alt="IMG" data-pagespeed-url-hash={3499559366} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                White Shirt Pleat
              </a>
              <span className="header-cart-item-info">
                1 x $19.00
              </span>
            </div>
          </li>
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx//2wBDAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCABQADwDAREAAhEBAxEB/8QAHQAAAgIDAQEBAAAAAAAAAAAAAAECBAUHCAYDCf/EADoQAAEDAwMDAAYHBgcAAAAAAAECAwQABREGEiEHEzEUIkFRYXEIFRYjYpGiFzNSdIHSgpShsrPR1P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDp6gKBUCNBGgRoFQKoPvVBQI0ETQI0CoFQKgsYOM+z30FG83m02S1ybtd5bcG2Q0dyVLeOEITkAfMkkBIHJPAoKelNV2LVlgi36xyPSbdLCu2sjatKkEpUhxHlKkkeDQZU0CJoFQKgKDmb6SmrdcaI6jRJ2mr1Jt8W9W9t2THbUFNqfjLU0VdtYUnOwo5xQaav3VvqHqJluPqC8O3KChxLphOpR2SpPglCUpSoj2Zzg1Rsjo31a0toV+2WlKZahd3S9q25yd7kdhKUlMYwmGPV2qG3uOKG7yOcDAdcbgoBSSFJUAUqByCDyCPnUCzQKgVAUHF/0oNWKvnVSXASrMLT7KLewnjl0gOvq4/GoJ/w1cVqbJwARg+6g9PonWuqNOyHG9P3VdplSghh2UhtDqjH37lJSlYV6yOVJxyRkUR1h0n6t6fvBOmVahlapvMTKlXoW1yMy4gnnKm96QG/G9e3PxqDaZ4JHHBwcHPP9KBUBQFB+cl+uT9x1DdbjKVvkzJsl95Z9q3HlE1cVj1OZPjFABQ/6AoM5B1jf49mnWNm5Pwbdc1ocuCY/AkFvhPd24V487fPtBoja+luvsiBdEFl163abtds7No07FUl1Mi4IThLk11e14oWokrO7J4+NSD0zX0qL4zpu0zn4EGVeg483f7aA7HbbaCh2H23crCd6cgp9YZqwbrg9QrDdLVEuFlK7oqcyl+PCjJK3QD5DquG2tquFKWoD281BmPrJ76r9K7KPTdu30Tufd9/Ge13sY25437fjQaiuXR/okua8ZeiriiSVqLgjPENlWeShIkg7T8qK+CekPQZHB0Rdj8VOr/9VEP9kfQFZwdHXRv5OPE/pkKoEOiXQVZyjSd9P4UIuCh+lRH+tBcY6R9EY/7np5eJKh47seYf+R5sUGfs+nek9kjuzPs3adOKbVtzchDD5SBncd7r235E5oLUbqNoyc4INnuCJwzhKIDS1s5HHBQlKPyqkeo9HT9V57L2d3c249fOP4KDISrbbZR3SoUeQr3ustuH81A1BVOm9N+TZ4Gf5Vn+ygf2e06PFpg/5Zn+2gg5prTixhVsjYHgJbCP9m2gqvaI0e+PvrRHcHtCt5H5FVBGPoHQcdQWxpq1oWOd/ojKlZ9+VJUc0KzTDLEdGyO02wgeEtIS2P0gUE8mgmaBUEaAoCgVAUBQGTQGaAoCgKAoCgKD/9k=" alt="IMG" data-pagespeed-url-hash={3794059287} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                Converse All Star
              </a>
              <span className="header-cart-item-info">
                1 x $39.00
              </span>
            </div>
          </li>
          <li className="header-cart-item flex-w flex-t m-b-12">
            <div className="header-cart-item-img">
              <img src="data:image/jpeg;base64,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" alt="IMG" data-pagespeed-url-hash={4088559208} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
            </div>
            <div className="header-cart-item-txt p-t-8">
              <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                Nixon Porter Leather
              </a>
              <span className="header-cart-item-info">
                1 x $17.00
              </span>
            </div>
          </li>
        </ul>
        <div className="w-full">
          <div className="header-cart-total w-full p-tb-40">
            Total: $75.00
          </div>
          <div className="header-cart-buttons flex-w w-full">
            <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
              View Cart
            </a>
            <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
              Check Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: 'url(images/xbg-01.jpg.pagespeed.ic.xxUBV9_TEr.jpg)'}}>
    <h2 className="ltext-105 cl0 txt-center">
      Contact
    </h2>
  </section>
  <section className="bg0 p-t-104 p-b-116">
    <div className="container">
      <div className="flex-w flex-tr">
        <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
          <form>
            <h4 className="mtext-105 cl2 txt-center p-b-30">
              Send Us A Message
            </h4>
            <div className="bor8 m-b-20 how-pos4-parent">
              <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder="Your Email Address" />
              <img className="how-pos4 pointer-none" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAz1BMVEWZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmHtD7qAAAARXRSTlMAAQYHCAkKCwwNDg8REhUYGSc0NTY+P0VcYWRpanBxeXp/gYeIj5CRlJaYoLO0tbm6u7/AwcTFxsfKy87P0NLT2N3u7/CypcGvAAAAp0lEQVQY03XRRxaCUBBE0fcNKGbFnLOYc06of/9rciAIKtbwnu5BdaMZ8v6Vh6FxyfKTzJk7LnkgIZdwUrwCEgn5a8zW2LVgMqVT1NLIsYzFVA/hl4b3VWymtgkCBDZ1nExzqYCyaPHBon+ber3T9Vb94M7E0x2PejRWioNbcz9C1wW0Z743mzPWnsnFnWrXEYOhycmQs7xIgfx3qkvG9bDp3zdIQ3sCGqEcmIqTHjgAAAAASUVORK5CYII=" alt="ICON" data-pagespeed-url-hash={1685097183} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
            </div>
            <div className="bor8 m-b-30">
              <textarea className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" name="msg" placeholder="How Can We Help?" defaultValue={""} />
            </div>
            <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
              Submit
            </button>
          </form>
        </div>
        <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
          <div className="flex-w w-full p-b-42">
            <span className="fs-18 cl5 txt-center size-211">
              <span className="lnr lnr-map-marker" />
            </span>
            <div className="size-212 p-t-2">
              <span className="mtext-110 cl2">
                Address
              </span>
              <p className="stext-115 cl6 size-213 p-t-18">
                Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
              </p>
            </div>
          </div>
          <div className="flex-w w-full p-b-42">
            <span className="fs-18 cl5 txt-center size-211">
              <span className="lnr lnr-phone-handset" />
            </span>
            <div className="size-212 p-t-2">
              <span className="mtext-110 cl2">
                Lets Talk
              </span>
              <p className="stext-115 cl1 size-213 p-t-18">
                +1 800 1236879
              </p>
            </div>
          </div>
          <div className="flex-w w-full">
            <span className="fs-18 cl5 txt-center size-211">
              <span className="lnr lnr-envelope" />
            </span>
            <div className="size-212 p-t-2">
              <span className="mtext-110 cl2">
                Sale Support
              </span>
              <p className="stext-115 cl1 size-213 p-t-18">
                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="11727e7f65707265517469707c617d743f727e7c">[email&nbsp;protected]</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="map">
    <div className="size-303" id="google_map" data-map-x="40.691446" data-map-y="-73.886787" data-pin="images/icons/pin.png" data-scrollwhell={0} data-draggable={1} data-zoom={11} />
  </div>
  <footer className="bg3 p-t-75 p-b-32">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">
            Categories
          </h4>
          <ul>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Women
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Men
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Shoes
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Watches
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">
            Help
          </h4>
          <ul>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Track Order
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Returns
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                Shipping
              </a>
            </li>
            <li className="p-b-10">
              <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">
            GET IN TOUCH
          </h4>
          <p className="stext-107 cl7 size-201">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="p-t-27">
            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i className="fa fa-facebook" />
            </a>
            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i className="fa fa-instagram" />
            </a>
            <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
              <i className="fa fa-pinterest-p" />
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 p-b-50">
          <h4 className="stext-301 cl0 p-b-30">
            Newsletter
          </h4>
          <form>
            <div className="wrap-input1 w-full p-b-4">
              <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com" />
              <div className="focus-input1 trans-04" />
            </div>
            <div className="p-t-18">
              <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="p-t-40">
        <div className="flex-c-m flex-w p-b-18">
          <a href="#" className="m-all-1">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAYAAACBMvbiAAAFXUlEQVRIx8WWaWxUVRiGn3PvnaWzdCi0lK0CFhlQkAZBrSuEhiAENQJGxYVgFBXS/lATl0gUjSLUpSYlLhWaSMJmDIs11q2kUVERjcRSrSJqKUuXWdq5M/fOzD3XH+2ULqhIIrx/7smXe873nvec73uPAJg8efIFRUVFxZZlCdu2JecImqY5QqHQH7W1tZ8DUFxcPF1KGbPPI8rLy1cDUFFR8ZZ9nhGPxw1N0/yarusuANM0EUJg2zYAQoheOfvGMuOzwcD5QgicTifhcNhUVTVXS6fTNoCU5+yqDIJpminbtlUNsPvu/nQYqExGtTNR6XRqZOZmxj1C2FrmRyklUko8biea032KtZHAMFMoivL3ZIRAWhZ+jwvF4eiOSYtY3ETK/oSktPG4HThcHlJmoje3bdtomeOxLAtFUYjFDf48fJxQp87wgJeLJ41HVRUMw8Tl0DCTKSxLoipK7yKqouBwaIQ64zS3dZFMW4zLD5Cfl01Xl4HAxqEppNIWmiaI6gbfHDhCsGAohQVZvUR7lbEsi0AgQPmmGh4t24A3WEAqojNvzjR2Vpbi8/sIh6Pk5OQAElCIRiNoqoLPnw3Ak1V1VH/SyIRRATrjSR5aWETZkquQZoJoPElOjg9wsOuLAyx9djf7NtxNYUF37n5k6PlW79mHMjqX2P7XKXtpC6898grLAh6SaTjeGmJk3hBmTB1H/be/8MZTdzBiRC4Llq9l3pwivmxqY/ncS3hp1XyuL9vE81u+ZpjPRd3Bo6SsbhXXr5jDz80hCsfmMnXssL53BiVDJsupEu+K0NDcRk5+Dm9u+4zq6o+YsrCERQuK8Tk1PB43WzfWsqX2ALs3f0Y0YfJM5U4+2LGXcaPzORnWSUtJVc13fNt0kpULp3HJhfkEfFl4XA421xzk42+a+PVYhCsnjcSb7epHpvfOZHnd1O9vglCMQI6fVzd9yB0Lilly8xW8s7WeKcExqG4NcgM8dk8JT8QNHl6/g5r391P/6VqysocRjuq0dOg0Hf2RF++/jtlTRvHqzu+ZOXE4x9pjTJo4Ar/Hxfe/trLqxqJ+hdP/mBQ31e9/Bb81sH3nai6bGgTggaffprriZd5+r5qf9h0C3WDx3Bls23uQd9dVckvpfVx7eRHFD1WhqirbH78Bxa0CXh6p/ICqyjrmVy9j7w9HGT7Ew4lQjMbD7UwvzEUmTCxNG0xGj0W5qCCPpaXLKcjLpjPUitA07pw/k1DLg9R9+SPjRw7lpnXLQXXR0PA7jJzE5ufuQu+KckUwn9tnTcQwk0Q6TLxZOouvLiSiX88XDccYNczL0tkT0Y0kKxdN54I8H+0RncDQrMFkjp9op+y26/Bk+2huPklX3MC2JVMnjGD7W6XYyRTC6QDcPF2xlcaaA2zcs5osv4/Dh5spv/cqwObPthiKgLhhEhydTVXpLMxkGpdTQ08kSZhpbr2mkOb2GEZS4rOswdWkKIKTHZ2Ijk6kbSMARVHoiMQId+rYNghAc6hMC47hk7rnmXnpOH4/0oIQgqNtnZlWjrRBERDuMojGjO4+0sfrYokkmZ5sWdbgPjPQm4QQvTHbPrWQGU8za0YhbreTE60RUmmJqiqkpexnrt3zJPJfLEJKeUqZTMIzNUoBtIW6+sUyi50NBlaT6BvIeE9fDzqT+EBDPZ3Zns7beo5JAELzer1eRVFIpbrN8Eyc958c+b++fdLpNF6v1wuoWmNj4yFgUTAYxDTNc/6W8fv91NfXH0mlUi0CmLBixYoXS0pKiqLRKFJK+1wR8Xg8aiQSaV+zZs0Lra2tuwQQAIYCYwG1x5L/b9g9tSCANqAFSPwFF5ngDShZ6LIAAAAASUVORK5CYII=" alt="ICON-PAY" data-pagespeed-url-hash={1669214741} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
          </a>
          <a href="#" className="m-all-1">
            <img src="data:image/png;base64,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" alt="ICON-PAY" data-pagespeed-url-hash={1963714662} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
          </a>
          <a href="#" className="m-all-1">
            <img src="data:image/png;base64,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" alt="ICON-PAY" data-pagespeed-url-hash={2258214583} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
          </a>
          <a href="#" className="m-all-1">
            <img src="data:image/png;base64,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" alt="ICON-PAY" data-pagespeed-url-hash={2552714504} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
          </a>
          <a href="#" className="m-all-1">
            <img src="data:image/png;base64,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" alt="ICON-PAY" data-pagespeed-url-hash={2847214425} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
          </a>
        </div>
        <p className="stext-107 cl6 txt-center">
          Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        </p>
      </div>
    </div>
  </footer>
  <div className="btn-back-to-top" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="zmdi zmdi-chevron-up" />
    </span>
  </div>
</div>

    );
  }
}
 
export default contact;
