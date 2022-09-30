import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// CSS
import "../style/Cards.scss";

// data
import sorceCode from "../data/CardsItem.json";

function Cards() {
  let cardItem = sorceCode.cardItem;
  return (
    <React.StrictMode>
      <section className="cards">
        <div className="heading">
          <h1>Fresh recommendations</h1>
        </div>
        <div className="total__cards">
          {cardItem.map((value, index) => {
            let bool, bool1;

            bool = value.featured ? true : false;
            bool1 = value.price ? true : false;

            return (
              <div
                className="card1"
                key={index}
                style={{
                  outline: bool ? "2px solid #23e5db" : null,
                  borderColor: bool ? "#3a77ff" : "#d4d4d4",
                }}
                title={value.name}
              >
                <div className="image">
                  <img src={value.image} alt="image not foind" width="100px" />
                  {bool ? <button>{value.featured}</button> : null}
                </div>
                <div className="description">
                  <div className="top__part">
                    <div className="left_side_content">
                      <p>{value.name}</p>
                      {bool1 ? <h1>RS {value.price}</h1> : null}
                    </div>
                    <div className="right_side_content">
                      <h1>
                        <FavoriteBorderIcon />
                      </h1>
                    </div>
                  </div>
                  <div className="bottom__part">
                    <p>{value.address}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="button">
          <button>Load more</button>
        </div>
      </section>
    </React.StrictMode>
  );
}

export default Cards;
