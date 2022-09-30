import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
// CSS
import "../style/Navbar.scss";

// data
import sorceCode from "../data/Product.json";

function Navbar() {
  let navigate = useNavigate();
  let cards = sorceCode.products[0];
  let company = Object.keys(cards);

  const pageSwitch = () => {
    let sArea = document.querySelector(".searchArea");
    let option1 = document.querySelector(".option");
    navigate(`result/${option1.value}/${sArea.value}`);
  };

  return (
    <React.StrictMode>
      <section className="Navbar">
        <section className="topNav">
          <div
            className="companyIcon"
            onClick={() => {
              navigate("/");
            }}
          >
            <svg
              height="25"
              viewBox="0 0 36.289 20.768"
              alt="Olx logo"
              className="_063feb70"
            >
              <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
            </svg>
          </div>
          <div className="motors">
            <DirectionsCarIcon />
            <p>Motors</p>
          </div>
          <div className="property">
            <ApartmentIcon />
            <p>Property</p>
          </div>
        </section>
        <section className="navbar__sarching__area">
          <h1
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <svg
              height="35"
              viewBox="0 0 36.289 20.768"
              alt="Olx logo"
              className="_063feb70"
            >
              <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
            </svg>
          </h1>

          <div className="search__part">
            <select className="option">
              {company.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>

            <div className="search__area">
              <input
                type="text"
                placeholder="Enter company name"
                className="searchArea"
              />
              <div className="search_icon" onClick={pageSwitch}>
                <SearchIcon />
              </div>
            </div>
          </div>

          <div className="buttons">
            <a href="">Login</a>
            <button>
              <AddIcon /> Sell
            </button>
          </div>
        </section>
      </section>
    </React.StrictMode>
  );
}

export default Navbar;

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   let showAndHide = document.querySelector(".topNav");
//   console.log(document.documentElement.scrollTop);
//   if (document.documentElement.scrollTop < 20) {
//     showAndHide.style.transform = "scale(1)";
//       showAndHide.style.display = "block";
//   } else if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     showAndHide.style.transform = "scale(0)";
//     showAndHide.style.display = "none";
//   }
// }
