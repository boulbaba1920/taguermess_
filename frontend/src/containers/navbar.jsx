import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/styles.css'
import { NavLink } from 'react-router-dom';

  const path = window.location.pathname;
   console.log('path = ',path) ;
class navbar extends Component {
  render() {
    return (
      <header className>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2>Sneakers <em>Outlet</em></h2></a>
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
    
      
      
    );
  }
}
 
export default navbar;