import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
// import ArrowLeft from "@material-ui/icons/AcUnit";
// import ArrowRight from "@material-ui/icons/ArrowRight";
import { ButtonBase } from "@mui/material";

// images
import rightArrow from "../assects/market/Next Button.svg";
import leftArrow from "../assects/market/Previous Button.svg";
// slider image
import Axie from "../assects/market/Axie Infinity@2x.png";
import Cryprtokitties from "../assects/market/Cryprtokitties@2x.png";
import Gods from "../assects/market/Gods Unchained@2x.png";
import Sandbox from "../assects/market/The Sandbox@2x.png";
import fire from "../assects/market/Hot Icon.svg";

// testimonial image
import edison from "../assects/market/MaskGroup8@2x.png";
import reseal from "../assects/market/MaskGroup4@2x.png";
import steve from "../assects/market/MaskGroup5@2x.png";
import emma from "../assects/market/MaskGroup6@2x.png";
import handson from "../assects/market/MaskGroup7@2x.png";

// import Link from "@material-ui/core/Link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
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
export default class TestimonialSlider extends React.Component {
  renderArrows = () => {
    return (
      <div className="slider-arrow">
        <ButtonBase
          className="arrow-btn prev"
          onClick={() => this.slider.slickPrev()}
        >
          {/* <ArrowLeft /> */}
          <div className="img">
            <img src={leftArrow} alt="" />
          </div>
        </ButtonBase>
        <ButtonBase
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
          <div className="img">
            <img src={rightArrow} alt="" />
          </div>
        </ButtonBase>
      </div>
    );
  };
  render() {
    return (
      <div className="testimonialSlidermain">
        <div className="wrapper">
          <p className="headertitle">
            <img src={fire} alt="" /> 即将上线的游戏
          </p>
          <div style={{ position: "relative", marginTop: "0rem" }}>
            {this.renderArrows()}
            <Slider
              ref={(c) => (this.slider = c)}
              dots={false}
              arrows={false}
              centerMode={true}
              slidesToShow={5}
              {...settings}
            >
              {[edison, reseal, steve, emma, handson].map((i) => (
                <Link className="Link" to="/ranking">
                  <div className="testimonialSlider">
                    <div className="sliderTestimonialitem  m-3">
                      <div className="img">
                        <img className="img-fluid" src={i} alt="cat" />
                      </div>
                      <div className="des">
                        <p className="number">01</p>
                        <p className="title">Axie Infinity</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* <div className="testimonialSlider">
                <div className="sliderTestimonialitem  m-3">
                  <div className="img">
                    <img className="img-fluid" src={steve} alt="cat" />
                  </div>
                  <div className="des">
                    <p className="number">01</p>
                    <p className="title">Axie Infinity</p>
                  </div>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
