import React, { useState } from "react";

import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import FeatureCard31 from "../components/feature-card31";
import FeatureCard311 from "../components/feature-card311";
import FeatureCard32 from "../components/feature-card32";
import PlaceCard from "../components/place-card";
import TestimonialCard2 from "../components/testimonial-card2";
import TestimonialCard21 from "../components/testimonial-card21";
import TestimonialCard4 from "../components/testimonial-card4";
import "./landing-page.css";
import Form from "../components/Form";
import Fade from 'react-reveal/Fade';
import Footer from "../components/Footer";
import SocialMedia from "../components/SocialMedia";

const Home = (props) => {
  const [isApplicantForm, setIsApplicantForm] = useState(false);
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>yumee</title>
        <meta property="og:title" content="yumee" />
      </Helmet>
      <div className="landing-page-top-container">
        <NavBar />
        <div
          style={{ height: "100%" }}
          className="container row align-items-center "
        >
          <div className="col  ">
            <img
              alt="image"
              src="/playground_assets/image_2022-07-12_090156140-600w.png"
              className="landing-page-image"
            />
          </div>
          <div style={{ backgroundColor: "#cadcd9" }} className="col py-2 ">
            <div className="landing-page-container02">
              <Form
                setIsApplicantForm={setIsApplicantForm}
                applicant={isApplicantForm}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-banner">
        <Fade top>

        <h1 className="landing-page-text17">Mission</h1>
        <span className="landing-page-text18">
          <span>
            Our Mission is all about caring with compassion and mindfulness.
          </span>
          <br></br>
          <span></span>
        </span>
        </Fade>
 
   <Fade top>
    <div className="landing-page-banner1">
          <h1 className="landing-page-text21">Vission</h1>
          <span className="landing-page-text22">
            <span>
              <span>
                Our vision is to help our elders live with pride by having a
                peace of mind, keeping them safe and protected. Assisting with
                daily activities and alleviating homesickness.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </span>
        </div>
        </Fade>
        <div className="landing-page-features">
          <h1 className="landing-page-text26">
            <span>Explore our services</span>
            <br></br>
            <span></span>
          </h1>
          <span className="landing-page-text29">
            <span>Levels of care</span>
            <br></br>
          </span>
          <div className="landing-page-container03">
            <FeatureCard31 rootClassName="feature-card31-root-class-name1"></FeatureCard31>
            <FeatureCard311 rootClassName="feature-card311-root-class-name"></FeatureCard311>
            <FeatureCard32 rootClassName="feature-card32-root-class-name"></FeatureCard32>
          </div>
        </div>
      </div>
      <div id="main-section" className="landing-page-main-mission-vission">
        <h1>Our services</h1>
        <span className="landing-page-text33">Recommended</span>
        <div className="landing-page-cards-container">
          <PlaceCard
            city="Test"
            image="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            city="Test"
            image="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            city="Test"
            image="https://images.unsplash.com/photo-1513342791620-b106dc487c94?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            city="Paris"
            image="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            city="Amsterdam"
            image="https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
          <PlaceCard
            city="Barcelona"
            image="https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          ></PlaceCard>
        </div>
      </div>
      <div className="landing-page-testimonial">
        <div className="landing-page-container04">
          <div className="landing-page-container05">
            <div className="landing-page-container06">
              <TestimonialCard2
                profile_src="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard2>
            </div>
            <TestimonialCard21 rootClassName="testimonial-card21-root-class-name"></TestimonialCard21>
          </div>
          <div className="landing-page-container07">
            <TestimonialCard4
              picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
              profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard4>
          </div>
        </div>
      </div>
      <SocialMedia/>
    <Footer/>
    </div>
  );
};

export default Home;
