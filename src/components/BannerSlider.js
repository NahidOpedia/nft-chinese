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

// latest
import monas from "../assects/market/Group232@2x.png";
import sb from "../assects/market/Group233@2x.png";
import trexa from "../assects/market/Group234@2x.png";

// import banner from "../assects/market/Group_62@2x.png";

// import Link from "@material-ui/core/Link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
export default class BannerSlider extends React.Component {
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
      <div className="wrapper pt-5 mt-5">
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
            slidesToShow={3}
            {...settings}
          >
            {this.props.classify?.map((i) => (
              <div className="p-2">
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

            {/* </Link> */}
          </Slider>
        </div>
      </div>
    );
  }
}
