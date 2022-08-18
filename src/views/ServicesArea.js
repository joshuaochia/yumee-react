import React from "react";

import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";

import SolidButton from "../components/solid-button";
import "./page.css";

const ServicesArea = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - yumee</title>
        <meta property="og:title" content="Page - yumee" />
      </Helmet>
      <NavBar />
      <div className="page-gallery-card">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="page-image"
        />
      </div>
      <div className="page-hero">
        <h1 className="page-text09">About us</h1>
      </div>
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
      <div className="page-footer">
        <div className="page-menu">
          <h1>
            <span>JoyfulHearts</span>
            <br></br>
          </h1>
          <div className="page-links-container2">
            <div className="page-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link03"
              >
                Tour packages
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link04"
              >
                Contact
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link05"
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link06"
              >
                Special deals
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link07"
              >
                Summer holiday
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </a>
            </div>
            <div className="page-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link08"
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link09"
              >
                FAQ
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link10"
              >
                Terms and conditions
              </a>
            </div>
          </div>
          <div className="page-follow-container1">
            <span className="page-text25">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <div className="page-icons-container1">
              <a
                href="https://www.instagram.com/myjoyfulhearts_hcs"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link11"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="page-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/My-Joyful-Hearts-HCS-102159499224384"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link12"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="page-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="page-link13"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="page-icon15"
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

export default ServicesArea;
