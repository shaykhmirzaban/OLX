import React from "react";
import {Outlet} from "react-router-dom";
// components
import Navbar from "./Navbar";
import Footer from "./Footer";
import SubNavbar from "./SubNavbar";
import Label from "./Label";

function BoilerPlate() {
  return (
    <React.StrictMode>
      <Navbar />
      <SubNavbar />
      <Outlet />
      <Label />
      <Footer />
    </React.StrictMode>
  );
}

export default BoilerPlate;
