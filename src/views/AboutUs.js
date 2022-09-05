import React from "react";

import { Helmet } from "react-helmet";
import { Slide } from 'react-slideshow-image';
import NavBar from "../components/NavBar";
import "./page1.css";
import Footer from "../components/Footer";

const AboutUs = (props) => {

  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;h=1000',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1661732017116-60d4a28d2a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;h=1000',
      caption: 'Slide 3'
    },
  ];


  return (
    <div className="page1-container">
      <Helmet>
        <title>page - yumee</title>
        <meta property="og:title" content="page - yumee" />
      </Helmet>
      
      <NavBar />
      {/* <Slide>
    {slideImages.map((slideImage, index) => (
    <div className="page-gallery-card">
     <img
       alt="image"
       src={`${slideImage.url}`}
       className="page-image"
     />
   </div>
   ))}
      </Slide> */}

            <Slide>
    {slideImages.map((slideImage, index) => {
      console.log(slideImage.url)
      return (
        <div  style={{backgroundImage: `url(${slideImage.url})`, border: '1px solid red'}} className="page-hero asdasd">
           <h1 className="page-text09">About us</h1>
         </div>
          )
    })}
      </Slide>
      
 
      {/* <div className="page-hero">
        <h1 className="page-text09">About us</h1>
      </div>
      <div style={{height:'300px'}}>

      </div> */}
    <Footer/>
    </div>
  );
};

export default AboutUs;
