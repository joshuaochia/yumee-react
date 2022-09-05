import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-slideshow-image/dist/styles.css'
import "./style.css";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import ServicesArea from "./views/ServicesArea";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutUs />} path="/about" />
        <Route element={<ServicesArea />} path="/area-services" />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
