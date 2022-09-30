import React from "react";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

// CSS
import "../style/SubNavbar.scss";

// data
import sorceCode from "../data/subNavbar.json";

function SubNavbar() {
  let item = sorceCode.subNavbar;

  return (
    <React.StrictMode>
      <section className="subNavbar">
        <h1>
          ALL CATEGORIES
          <span>
            <ExpandMoreSharpIcon />
          </span>
        </h1>
        <ul>
          {item.map((value, index) => {
            return (
              <li key={index}>
                <a href="#">{value.nav1}</a>
              </li>
            );
          })}
        </ul>
      </section>
    </React.StrictMode>
  );
}

export default SubNavbar;
