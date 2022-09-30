import React from "react";

// CSS
import "../style/Label.scss";

function Label() {
  return (
    <React.StrictMode>
      <section className="label">
        <div className="left__side">
          <img src="./images/label1.webp" alt="" />
        </div>
        <div className="right__side">
          <div className="heading">
            <h1>GET YOUR APP TODAY</h1>
          </div>
          <div className="social__icons">
            <a href="">
              <img src="./images/images.png" alt="" width="100px" />
            </a>
            <a href="">
              <img
                src="./images/image2.png"
                alt=""
                width="100px"
                className="center"
              />
            </a>
            <a href="">
              <img src="./images/image1.png" alt="" width="100px" />
            </a>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
}

export default Label;
