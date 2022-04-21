import React from "react";
import ButtonStock from "../utils/ButtonStock";
import RecomandItem from "./RecomandItem";

function Recomandation() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 0px",
        }}
        className="header"
      >
        <h4>
          Top NFT Assets <span className="highlighted">Creators</span>
        </h4>
        {/* <ButtonStock title="Show More" /> */}
      </div>

      <RecomandItem />
    </>
  );
}

export default Recomandation;
