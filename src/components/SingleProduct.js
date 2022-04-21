import React from "react";

function SingleProduct({ item }) {
  console.log(localStorage.getItem("logedIn"));
  return (
    <div>
      <div style={{ margin: "10px" }} className="singlereomandation">
        <div className="testimonialSlider productslider">
          <div className="sliderTestimonialitem ">
            <div className="img">
              <img className="img-fluid" src={item.image} alt="cat" />
            </div>
            <div className="des">
              <p className="number">01</p>
              <p className="title">Axie Infinity </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
