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
        <h1 className="landing-page-text17">Mission</h1>
        <span className="landing-page-text18">
          <span>
            Our Mission is all about caring with compassion and mindfulness.
          </span>
          <br></br>
          <span></span>
        </span>
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
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <h1>
            <span>JoyfulHearts</span>
            <br></br>
          </h1>
          <div className="landing-page-links-container2">
            <div className="landing-page-container08">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link03"
              >
                Contact
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link04"
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link05"
              >
                Special deals
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link06"
              >
                Summer holiday
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </a>
            </div>
            <div className="landing-page-container09">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link07"
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link08"
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link09"
              >
                Terms and conditions
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container1">
            <span className="landing-page-text36">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <div className="landing-page-icons-container1">
              <a
                href="https://www.instagram.com/myjoyfulhearts_hcs"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link10"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/My-Joyful-Hearts-HCS-102159499224384"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link11"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link12"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="landing-page-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
