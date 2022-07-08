import React, { Component } from "react";
import Header from "../containers/navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";
import Footer from "../containers/Footer";
import Heading from "../containers/pageHeadingAbout";
import Background from "../containers/aboutUsBackground";
import Team from "../containers/TeamMembers";

class about extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Heading></Heading>
        <Background></Background>
        <Team></Team>
       
        <Footer></Footer>
      </div>
    );
  }
}

export default about;
