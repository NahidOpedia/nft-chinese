import React from "react";
// item.image
function SingleProfile({ item }) {
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
            <p className="code">01</p>
            <p className="price">Axie Infinity </p>
          </div>
          <span className="overlay"></span>
        </div>
      </div>
    </div>
  );
}

export default SingleProfile;
