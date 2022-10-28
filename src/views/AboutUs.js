import React from "react";
import classes from './AboutUs.module.css'
import NavBar from "../components/NavBar";
import "./page1.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import aboutUs from '../assets/about-us.png'
import abutUs2 from '../assets/about-us2.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import SocialMedia from "../components/SocialMedia";
import { aboutUsOne } from "../data";
import backgroundImageText from '../assets/background.png'
import joyful1 from '../assets/joyful1.png'
import employeePic from '../assets/employee.png'

const AboutUs = (props) => {

  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];


  return (
    <div className="page1-container">
      <Helmet>
        <title>page - yumee</title>
        <meta property="og:title" content="page - yumee" />
      </Helmet>
      <NavBar />

      <Splide options={{type:'loop'}} style={{width:'100%'}} aria-label="My Favorite Images">
    {images.map(item => <SplideSlide>
      <div  style={{backgroundImage: `url(${aboutUs})`, width:'100%',}} className="page-hero img-fluid">
        <h1 className="page-text09">About Us</h1>
      </div>
    </SplideSlide>)}

 
</Splide>
<section style={{backgroundImage:`url(${backgroundImageText})`,  backgroundPosition: 'center'}} className="container-fluid">
  <div  className="container text-center my-5">
    
  <p style={{fontSize:'20px'}}> {aboutUsOne}</p>
  </div>
</section>


<Splide options={{type:'loop'}} style={{width:'100%'}} aria-label="My Favorite Images">
    {images.map(item => <SplideSlide>
      <div  style={{backgroundImage: `url(${abutUs2})`, width:'100%',}} className="page-hero img-fluid">
        <h1 className="page-text09">About Us</h1>
      </div>
    </SplideSlide>)}

 
</Splide>

<div  id='our-caregivers' className=" container">
      <h5 className="page-text12">Mandatory Training</h5>
      <ul className="page-text12">
        <li>4 hours Orientation / Once a year Continuing Education</li>
        <li>Home Care Aid Registration</li>
        <li>Fall Prevention</li>
        <li>Emergency Procedure</li>
        <li>CPR/First Aid</li>
        <li>Healthy Meal Preparation</li>
      </ul>
      <h6 className="text-left-custom">Employee Monthly Evaluation</h6>
      <h6 className="text-left-custom">Employee Benefits who has exemplary care for our Elders</h6>
 </div>

 <div class="container text-center">
  <div class="row">
    <div class="col-sm">
    <img src={joyful1} class="img-fluid" alt="Responsive image"/>

    </div>
    <div class="col-sm">
    <img src={employeePic} class="img-fluid" alt="Responsive image"/>

    </div>
   
  </div>
</div>

<div id='F&A' className="page-container">
 
        <h1 className="page-text12">
          <span>Frequently Asked Questions</span>
          <br></br>
        </h1>
        <span className="page-text15">1. Is the Company licensed?</span>
        <span className="page-text16">
          Yes, we are licensed and bonded with 3 years of experience in the
          industry.
        </span>
        <span className="page-text17">
          2. Do you conduct background check on your caregiver?
        </span>
        <span className="page-text18">
          Yes, most of our caregiver is personally picked and interviewed by our
          staff members.
        </span>
        <span className="page-text19">
          4. Are your caregivers live in/live out?
        </span>
        <span className="page-text20">
          Our caregivers can do both live in and out. Depends on the patients
          need.
        </span>
        <span className="page-text21">5. What are your minimum hours?</span>
        <span className="page-text22">
          Our hours are case to case, depends on the patient&apos;s need.
        </span>
      </div>

      <SocialMedia/>
    <Footer/>
    </div>
  );
};

export default AboutUs;
