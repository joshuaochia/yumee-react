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
       <Area title={'Beverly Hills'} img=""/>
       <Area title={'Pasadena'} img=""/>
       <Area title={'Santa Monica'} img=""/>
       <Area title={'Calabasas'} img=""/>
       <Area title={'Culver'} img=""/>
       <Area title={'Malibu'} img=""/>
       <Area title={'Alhambra'} img=""/>
       <Area title={'Rancho Palos Verdes'} img=""/>
       <Area title={'Torrance'} img=""/>
       <Area title={'Lomita'} img=""/>
       <Area title={'Gardena'} img=""/>
       <Area title={'Hawthorne'} img=""/>
       <Area title={'Lawndale'} img=""/>
       <Area title={'San Pedro'} img=""/>
       <Area title={'Pacific Palisades'} img=""/>
       <Area title={'Rolling Hills'} img=""/>
       <Area title={'South Bay'} img=""/>
       <Area title={'Redondo'} img=""/>
       <Area title={'Long Beach'} img=""/>
       </div>
      </div>
      <div style={{width:'100%'}} className="container text-start my-5">
      <h1>Orange Country:</h1>
       <div className="row">
       <Area title={'Anaheim'} img=""/>
       <Area title={'Laguna Hills'} img=""/>
       <Area title={'Newport Beach'} img=""/>
       <Area title={'Irvine'} img=""/>
       <Area title={'Seal Beach'} img=""/>
       <Area title={'Huntington'} img=""/>
       <Area title={'Whittier Glendora'} img=""/>
       <Area title={'Arcadia'} img=""/>
       <Area title={'Claremont'} img=""/>

       </div>
      </div>
      <div style={{width:'100%'}} className="container text-start my-5">
      <h1>Ventura Country:</h1>
       <div className="row">
       <Area title={'Westlake'} img=""/>
       <Area title={'Thousand Oaks Camarillo'} img=""/>
       <Area title={'Oxnard'} img=""/>
       <Area title={'Simi Valley'} img=""/>
       <Area title={'Moorpark'} img=""/>
       <Area title={'Ojai'} img=""/>
       <Area title={'Santa Barbara'} img=""/>
       </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ServicesArea;
