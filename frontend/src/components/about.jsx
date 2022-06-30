import React, { Component } from "react";
import Header from "../containers/navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../components/styles.css";
import Footer from "../containers/Footer";
import Heading from "../containers/pageHeadingAbout";
import Background from "../containers/aboutUsBackground";
import Team from "../containers/TeamMembers";
import Feedbacks from "../containers/FeedbacksAbout"
class about extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Heading></Heading>
        <Background></Background>
        <Team></Team>
       <Feedbacks></Feedbacks>
        <Footer></Footer>
      </div>
    );
  }
}

export default about;