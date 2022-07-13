import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";

class MainContact extends Component {
  render() {
    return (
      
      <div>
        <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{backgroundImage: 'url(images/xbg-01.jpg.pagespeed.ic.xxUBV9_TEr.jpg)'}}>
  <h2 className="ltext-105 cl0 txt-center">Contact</h2>
</section>

      <section className="bg0 p-t-104 p-b-116">
        <div className="container">
          <div className="flex-w flex-tr">
            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              <form>
                <h4 className="mtext-105 cl2 txt-center p-b-30">Send Us A Message</h4>
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
                  <span className="mtext-110 cl2"> Address </span>
                  <p className="stext-115 cl6 size-213 p-t-18">
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                    US
                  </p>
                </div>
              </div>
              <div className="flex-w w-full p-b-42">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-phone-handset" />
                </span>
                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2"> Lets Talk </span>
                  <p className="stext-115 cl1 size-213 p-t-18">+1 800 1236879</p>
                </div>
              </div>
              <div className="flex-w w-full">
                <span className="fs-18 cl5 txt-center size-211">
                  <span className="lnr lnr-envelope" />
                </span>
                <div className="size-212 p-t-2">
                  <span className="mtext-110 cl2"> Sale Support </span>
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
    </div>
    
    
      
      
    );
  }
}

export default MainContact;
