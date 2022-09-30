import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
// CSS
import "../style/Footer.scss";

// data
import sorceCode from "../data/Footerdata.json";

// components
import BackToTop from "./BackToTop";

function Footer() {
  let footerItem = sorceCode.footerItem;
  return (
    <React.StrictMode>
      <section className="footer">
        <div className="footer__top">
          <div className="center">
            {footerItem.map((value, index) => {
              let { heading, item1, item2, item3, item4 } = value;
              return (
                <div className="categories" key={index}>
                  <h4>{heading}</h4>
                  <ul>
                    <li>
                      <a href="#">{item1}</a>
                    </li>
                    <li>
                      <a href="#">{item2}</a>
                    </li>
                    <li>
                      <a href="#">{item3}</a>
                    </li>
                    <li>
                      <a href="#">{item4}</a>
                    </li>
                  </ul>
                </div>
              );
            })}

            <div className="foolow__us">
              <h4>FOLLOW US</h4>
              <ul className="social__icon">
                <li>
                  <a href="#">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <PlayCircleOutlineIcon />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
              <div className="download__app__option">
                <a href="">
                  <img src="./images/images.png" alt="App Store" width="70px" />
                </a>
                <a href="">
                  <img src="./images/image1.png" alt="App Store" width="70px" />
                </a>
                <a href="">
                  <img src="./images/image2.png" alt="App Store" width="70px" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Free Classifieds in Pakistan</p>
          <p className="copyright">. © 2006-2022 OLX</p>
        </div>

        <BackToTop />
      </section>
    </React.StrictMode>
  );
}

export default Footer;
