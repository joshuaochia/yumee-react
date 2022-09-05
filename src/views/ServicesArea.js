import React from "react";

import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";

import SolidButton from "../components/solid-button";
import "./page.css";
import Footer from "../components/Footer";

const ServicesArea = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - yumee</title>
        <meta property="og:title" content="Page - yumee" />
      </Helmet>
      <NavBar />

      <div className="page-container1">
        <h1 className="page-text10">Shipping &amp; Returns</h1>
        <span className="page-text11">
          We are team of four designers and two animators. We are passionate
          about our craft. We are passionate about what we do. And we believe
          that work should be fun and creative. We are a team of four
          experienced interior designers, animators and visualizers. What makes
          us different? We are passionate about design. We are passionate about
          what we do. And we believe that work should be creative. We are a team
          of four experienced interior designers, animators and visualizers.
        </span>
        <h1 className="page-text12">
          <span>Frequently Asked Questions</span>
          <br></br>
        </h1>
        <span className="page-text15">1. is company licensed ?</span>
        <span className="page-text16">
          Yes, we are licensed and bonded with 3 years of experience in the
          industry
        </span>
        <span className="page-text17">
          2. Do you conduct background check on your caregiver?
        </span>
        <span className="page-text18">
          Yes, most of our caregiver is personally picked and interviewed by our
          staff members
        </span>
        <span className="page-text19">
          4. are your caregivers live in/live out?
        </span>
        <span className="page-text20">
          Our caregivers can do both live in and out. Depends on the patients
          need.
        </span>
        <span className="page-text21">5. What are your minimum hours?</span>
        <span className="page-text22">
          Our hours are case to case, depends on the patient&apos;s need
        </span>
      </div>
      <Footer/>
    </div>
  );
};

export default ServicesArea;
