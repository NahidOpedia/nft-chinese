import React from "react";

function SingleMusic({ item }) {
  console.log(localStorage.getItem("logedIn"));
  return (
    <div>
      <div style={{ margin: "10px" }} className="singlereomandation">
        <div className="testimonialSlider  musicslider">
          <div className="sliderTestimonialitem ">
            <div className="img">
              <img className="img-fluid" src={item.image} alt="cat" />
            </div>
            <div className="music">
              <h6>01</h6>
              <p>Axie Infinity </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMusic;
