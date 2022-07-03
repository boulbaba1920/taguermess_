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
          <Header></Header>
           <BannerContact></BannerContact> 
           <ContactForm></ContactForm>
           <Happy></Happy>
           <Footer></Footer>
      </div>
    );
  }
}
 
export default contact;
