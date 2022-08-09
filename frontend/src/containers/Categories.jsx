import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "../components/styles.css";

class Categories extends Component {
  render() {
    return (
      <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img src="images/DSC_0678.jpg" alt="IMG-BANNER" />
              <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                  Olive Wood
                  </span>
                  <span className="block1-info stext-102 trans-04">
                  Best olive wood products in Nordic countries
                  </span>
                </div>
                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                  Visit store
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img src="images/DSC_0003.jpg" alt="IMG-BANNER" />
              <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                  vegetable fibre
                  </span>
                  <span className="block1-info stext-102 trans-04">
                  Naturel Fibre : Halfa 
                  </span>
                </div>
                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                  Visit store
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img src="images/DSC_0638.jpg" alt="IMG-BANNER" />
              <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    
Ceramic & pottery                   
                  </span>
                  <span className="block1-info stext-102 trans-04">
                  From the Origin of ceramics to Nordics coutries
                  </span>
                </div>
                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                  Visit store
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">
              <img src="images/DSC_0174.jpg" alt="IMG-BANNER" />
              <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Fouta
                  </span>
                  <span className="block1-info stext-102 trans-04">
                  Best fouta products in Nordic countries
                  </span>
                </div>
                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Visit store
                  </div>
                </div>
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    
    
    );
  }
}

export default Categories;
