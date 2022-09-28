import React, {useState} from "react";
import SolidButton from "./solid-button";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <nav data-role="Header" className="landing-page-navbar">
      <h1>My Joyful Hearts</h1>
      <div className="landing-page-right-side">
        <div className="la nding-page-links-container">
          <span onClick={() => navigate("/")} className="landing-page-text">
            Home
          </span>
          <span
            onClick={() => navigate("/about")}
            className="landing-page-text01"
          >
            About Us
          </span>
          <span
            onClick={() => navigate("/area-services")}
            className="landing-page-text02"
          >
            Area of Services
          </span>
        </div>
        {/* <SolidButton button="Explore"></SolidButton> */}
      </div>
      <div  onClick={handleShow}  data-type="BurgerMenu" className="landing-page-burger-menu">
        <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
          <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
        </svg>
      </div>


      <Offcanvas style={{width:'70%'}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>JoyfulHearts</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="la nding-page-links-container">
          <p onClick={() => {
            navigate("/")
            handleClose()
          }} className="landing-page-text">
            Home
          </p>
          <p
            onClick={() => {
              navigate("/about")
              handleClose()
            }}
            className="landing-page-text01"
          >
            About Us
          </p>
          <p
            onClick={() => {
              navigate("/area-services")
              handleClose()
            }}
            className="landing-page-text02"
          >
            Area of Services
          </p>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
};

export default NavBar;
