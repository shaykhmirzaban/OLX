import React from "react";
import { useParams } from "react-router-dom";

// data
import sorceCode from "../data/Product.json";

function SearchResult() {
  let { productName, companyName } = useParams();

  let data = sorceCode.products[0];
  let ca = data[productName];

  let arr = ca.map((value, index) => {
    if (value.companyName === companyName) {
      return value;
    }
  }).filter(Boolean);
  console.log(arr);

  return (
    <React.StrictMode>
      <section className="All__Items">
        {arr.map((value, index) => {
          return (
            <div className="item" key={index}>
              <div className="left__side">
                <img src={value.image} alt={value.name} />
                <button>{value.featured}</button>
              </div>
              <div className="right__side">
                <div className="top">
                  <p>{value.name}</p>
                  <h1>{value.price}</h1>
                </div>
                <div className="bottom">
                  <p>{value.address}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </React.StrictMode>
  );
}

export default SearchResult;
