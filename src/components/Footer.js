import React from 'react'

const Footer = () => {
  return (
    <div className="landing-page-footer">
    <div className="landing-page-menu">
      <h1>
        <span>MyJoyfulHearts</span>
        <br></br>
      </h1>
      <div className="landing-page-links-container2">
        <div className="landing-page-container08">
          <a
           
            rel="noreferrer noopener"
            className= "landing-page-link03"
            onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
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
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link05"
          >
           Area of Services
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="landing-page-link04"
          >
            Terms and Condition
          </a>
        </div>
        {/* <div className="landing-page-container09">
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
        </div> */}
      </div>
      <div className="landing-page-follow-container1">
  
      </div>
    </div>
  </div>
  )
}

export default Footer