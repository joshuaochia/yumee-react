import React from "react";
import classes from "./AboutUs.module.css";
import NavBar from "../components/NavBar";
import "./page1.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import aboutUs from "../assets/about-us.png";
import abutUs2 from "../assets/about-us2.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SocialMedia from "../components/SocialMedia";
import { aboutUsOne } from "../data";
import backgroundImageText from "../assets/background.png";
import joyful1 from "../assets/joyful1.png";
import employeePic from "../assets/employee.png";

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

      <Splide
        options={{ type: "loop" }}
        style={{ width: "100%" }}
        aria-label="My Favorite Images"
      >
        {images.map((item) => (
          <SplideSlide>
            <div
              style={{ backgroundImage: `url(${aboutUs})`, width: "100%" }}
              className="page-hero img-fluid"
            >
              <h1 className="page-text09">
                <strong>About Us</strong>
              </h1>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <section
        style={{
          backgroundImage: `url(${backgroundImageText})`,
          backgroundPosition: "center",
        }}
        className="container-fluid"
      >
        <div className="container text-center my-5">
          <p style={{ fontSize: "20px" }}> {aboutUsOne}</p>
        </div>
      </section>

      <Splide
        options={{ type: "loop" }}
        style={{ width: "100%" }}
        aria-label="My Favorite Images"
      >
        {images.map((item) => (
          <SplideSlide>
            <div
              style={{ backgroundImage: `url(${abutUs2})`, width: "100%" }}
              className="page-hero img-fluid"
            >
              <h1 className="page-text09">
                <strong>Our care givers</strong>
              </h1>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <div id="our-caregivers" className=" container">
        <h5 className="page-text12">
          <strong>Mandatory Training</strong>
        </h5>
        <ul className="page-text12">
          <li>4 hours Orientation / Once a year Continuing Education</li>
          <li>Home Care Aid Registration</li>
          <li>Fall Prevention</li>
          <li>Emergency Procedure</li>
          <li>CPR/First Aid</li>
          <li>Healthy Meal Preparation</li>
        </ul>
        <h6 className="text-left-custom">Employee Monthly Evaluation</h6>
        <h6 className="text-left-custom">
          Employee Benefits who has exemplary care for our Elders
        </h6>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-sm">
            <img src={joyful1} class="img-fluid" alt="Responsive image" />
          </div>
          <div class="col-sm">
            <img src={employeePic} class="img-fluid" alt="Responsive image" />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5 pt-5">Area of Services</h1>
      <div
        style={{
          width: "100%",
          boxShadow: "5px 5px 10px 2px rgba(18, 18, 18, 0.1)",
        }}
        className="container  my-5 p-5"
        id="area-services"
      >
        <h1 className="text-center pb-4">Los Angeles Country:</h1>
        <div className="row">
          <div class="col-sm-4 d-flex justify-content-center">
            <ul style={{ display: "inline-block", verticalAlign: "middle" }}>
              <li>Beverly Hills, Pasadena</li>
              <li>Santa Monica</li>
              <li>Calabasas</li>
              <li>Culver</li>
              <li>Malibu</li>
            </ul>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <ul style={{ display: "inline-block", verticalAlign: "middle" }}>
              <li>Alhambra</li>
              <li>Rancho Palos Verdes</li>
              <li>Torrance</li>
              <li>Lomita</li>
              <li>Gardena</li>
            </ul>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <ul style={{ display: "inline-block", verticalAlign: "middle" }}>
              <li>Hawthorne</li>
              <li>Lawndale</li>
              <li>San Pedro</li>
              <li>Pacific Palisades</li>
              <li>Rolling Hills</li>
              <li>South Bay</li>
              <li>Redondo & Long Beach</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-primary mt-5 text-center">
            Avail our Services for this Area
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          boxShadow: "5px 5px 10px 2px rgba(18, 18, 18, 0.1)",
        }}
        className="container  my-5 p-5"
      >
        <h1 className="text-center pb-4">Orange Country:</h1>
        <div className="row">
          <div class="col-sm-4 d-flex justify-content-center">
            <ul style={{ display: "inline-block", verticalAlign: "middle" }}>
              <li>Anaheim</li>
              <li>Laguna Hills</li>
              <li>Newport Beach</li>
              <li>Irvine</li>
              <li>Seal Beach</li>
            </ul>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <ul style={{ display: "inline-block", verticalAlign: "middle" }}>
              <li>Huntington</li>
              <li>Whittier Glendora</li>
              <li>Arcadia & Claremont</li>
            </ul>
          </div>
          <div class="col-sm-4 d-flex justify-content-center"></div>
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-primary mt-5 text-center">
            Avail our Services for this Area
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          boxShadow: "5px 5px 10px 2px rgba(18, 18, 18, 0.1)",
        }}
        className="container  my-5 p-5"
      >
        <h1 className="text-center pb-4">Los Angeles Country:</h1>
        <div className="row ">
          <div class="col-sm-4 d-flex justify-content-center">
            <ul style={{ display: "inline-block", verticalAlign: "middle" }}>
              <li>Westlake</li>
              <li>Thousand Oaks Camarillo</li>
              <li>Oxnard</li>
              <li>Simi Valley</li>
              <li>Moorpark</li>
            </ul>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <ul style={{ display: "inline-block", verticalAlign: "middle" }}>
              <li>Ojai & Santa Barbara</li>
            </ul>
          </div>
          <div class="col-sm-4 d-flex justify-content-center"></div>
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-primary mt-5 text-center">
            Avail our Services for this Area
          </button>
        </div>
      </div>
      <div id="F&A" className="page-container">
        <h1 className="page-text12">
          <span>
            <strong>Frequently Asked Questions</strong>
          </span>
          <br></br>
        </h1>
        <span className="page-text15">
          1. What kind of services does the homecare offer?
        </span>
        <span className="page-text16">
          My Joyful Hearts provide caregiver/s to a person that cannot perform
          ADL(activities of daily living). Our caregivers will help in
          taking/planning taking medications
        </span>
        <span className="page-text17">2. What is ADL?</span>
        <span className="page-text18">
          ADL or Activities of Daily Living is a way to determine what level of
          care your loved one needs. Bathing, toilet hygiene, grooming,
          dressing/ undressing Mobility at home Bed and wheelchair transfer
        </span>
        <span className="page-text19">
          3. Do you handle patients with special needs?
        </span>
        <span className="page-text20">
          MJHhcs can also provide care for patients with Dementia and/or
          Alzheimer's.
        </span>
        <span className="page-text21">
          4. How do I know if my loved ones need a caregiver/s?
        </span>
        <span className="page-text22">
          If your loved ones cannot manage to perform ADL and/or they need
          somebody round the clock to look after him/her/them. We could help in
          developing a plan and support for your loved ones.
        </span>
        <span className="page-text21">
          5. What if I don't like the caregiver that you assigned to me??
        </span>
        <span className="page-text22">
          Before we assign caregivers that will take care of you or your loved
          one, there is always an opportunity to do an interview. And you can
          call us for the replacement.
        </span>
        <span className="page-text21">
          6. What if my caregiver gets sick and/or goes on a vacation?
        </span>
        <span className="page-text22">
          For caregivers who will go on vacation, it will be planned and we will
          send another caregiver to substitute(a reliever). This is the same as
          when the caregiver gets sick.
        </span>
        <span className="page-text21">7. Who pays for homecare?</span>
        <span className="page-text22">
          We are accepting long term care insurance payments depending on the
          level of care that is needed. There is also an option to do direct
          payment.
        </span>
        <span className="page-text21">8. Are you licensed?</span>
        <span className="page-text22">
          Yes, My Joyful Hearts are a licensed and bonded in health service in
          state of california( pls verify the agency)
        </span>
        <span className="page-text21">9. Do you provide medical services?</span>
        <span className="page-text22">
          We only provide non medical, however, we could help to coordinate
          medical services.
        </span>
        <span className="page-text21">
          10. Are you only providing care in private residence?
        </span>
        <span className="page-text22">
          MJHHcs also provide care for senior living communities, facilities
          etc.
        </span>
      </div>

      <SocialMedia />
      <Footer />
    </div>
  );
};

export default AboutUs;
