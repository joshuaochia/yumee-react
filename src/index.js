import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/hammersmith-one/HammersmithOne.ttf";
import "./fonts/open-sans/OpenSans-Regular.ttf";
import "./style.css";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ServicesArea from "./views/ServicesArea";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const App = () => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutUs />} path="/about" />
          {/* <Route element={<ServicesArea />} path="/area-services" /> */}
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
