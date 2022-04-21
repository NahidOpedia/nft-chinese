import React from "react";

function SingleProductGame({ item }) {
  console.log(localStorage.getItem("logedIn"));
  return (
    <div>
      <div style={{ margin: "10px" }} className="singlereomandation">
        <div
          className="productslider gameitem"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="detrials">
            <p className="code gametitle">{item.name}</p>
            {/* <p className="price">Axie Infinity </p> */}
          </div>
          <span className="overlay"></span>
        </div>
      </div>
    </div>
  );
}

export default SingleProductGame;
