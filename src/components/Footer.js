import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="landing-page-footer">
      <div className="landing-page-menu">
        <h1>
          <span>My Joyful Hearts</span>
          <br></br>
        </h1>
        <div className="landing-page-links-container2">
          <div className="landing-page-container08">
            <a
              rel="noreferrer noopener"
              className="landing-page-link03"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Home
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-page-link04"
            >
              About Us
            </a>
          </div>
          <div className="landing-page-container09">
            <HashLink to="/about#our-caregivers">Our Caregivers</HashLink>
            <HashLink className="mt-1" to="/about#F&A">
              FAQ's
            </HashLink>
            <HashLink className="mt-1" to="/about#area-services">
              Area of Services
            </HashLink>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="landing-page-link09"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
        <div className="landing-page-follow-container1"></div>
      </div>
    </div>
  );
};

export default Footer;
