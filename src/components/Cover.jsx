import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// CSS
import "../style/Cover.scss";

function Cover() {
  return (
    <React.StrictMode>
      <AwesomeSlider animation="cubeAnimation">
        <div data-src="./images/cover1.jpg" />
        <div data-src="./images/cover1.jpg" />
        <div data-src="./images/cover1.jpg" />
      </AwesomeSlider>
    </React.StrictMode>
  );
}

export default Cover;
