import React from "react";

import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import Area from "../components/Area";
import SolidButton from "../components/solid-button";
import "./page.css";
import Footer from "../components/Footer";

const ServicesArea = (props) => {
  const backgroundPlaceHolder = "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - yumee</title>
        <meta property="og:title" content="Page - yumee" />
      </Helmet>
      <NavBar />
      <div style={{backgroundImage: `url(${backgroundPlaceHolder})`, width:'100%'}} className="page-hero">
        <h1 className="page-text09">About us</h1>
        <button type="button" class="btn btn-dark btn-lg px-3">Get Started</button>
      </div>
      <div style={{width:'100%'}} className="container text-start my-5">
      <h1>Los Angeles Country:</h1>
       <div className="row">
       <Area/>
       <Area/>
       <Area/>
       <Area/>
       </div>
      </div>
      <div style={{width:'100%'}} className="container text-start my-5">
      <h1>Orange Country:</h1>
       <div className="row">
       <Area/>
       <Area/>
       <Area/>
       <Area/>
       </div>
      </div>
      <div style={{width:'100%'}} className="container text-start my-5">
      <h1>Discover our unique features:</h1>
       <div className="row">
       <Area/>
       <Area/>
       <Area/>
       <Area/>
       </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ServicesArea;
