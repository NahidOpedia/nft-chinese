import React from "react";
import Slider from "react-slick";
import { ButtonBase } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images =
  "https://images.unsplash.com/photo-1650598308282-9629a232e77f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80";

var settings = {
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export default class BannerSlider extends React.Component {
  render() {
    return (
      <div className="wrapper pt-5 mt-5">
        <div style={{ position: "relative", marginTop: "0rem" }}>
          <Slider
            ref={(c) => (this.slider = c)}
            dots={false}
            arrows={false}
            centerMode={true}
            slidesToShow={3}
            {...settings}
          >
            {[images, images, images].map((i) => (
              <div className="p-md-2 p-sm-1 p-1">
                <div
                  style={{
                    backgroundImage: `url(${i})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    margin: "5px",
                  }}
                  className="bannerslideritem"
                ></div>
              </div>
            ))}
            {/* <div className="p-2">
              <div
                style={{
                  backgroundImage: `url(${images})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  margin: "5px",
                }}
                className="bannerslideritem"
              ></div>
            </div>
            <div className="p-2">
              <div
                style={{
                  backgroundImage: `url(${images})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  margin: "5px",
                }}
                className="bannerslideritem"
              ></div>
            </div> */}

            {/* </Link> */}
          </Slider>
        </div>
      </div>
    );
  }
}
