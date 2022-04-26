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
import musiximg from "../assects/music/Music Icon.svg";
import fire from "../assects/market/Hot Icon.svg";

// import Link from "@material-ui/core/Link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./styles.css";

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
export default class Slidermusic extends React.Component {
  renderArrows = () => {
    return (
      <div className="slider-arrow ">
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
      <div className="wrapper pt-5 mt-md-5 pt-responsive">
        <p className="headertitle">
          <img src={fire} alt="" /> 年度最佳
        </p>

        <div style={{ position: "relative", marginTop: "0rem" }}>
          {this.renderArrows()}
          <Slider
            ref={(c) => (this.slider = c)}
            dots={false}
            arrows={false}
            infinite={false}
            centerMode={true}
            slidesToShow={5}
            {...settings}
          >
            {/* <Link href="/s"> */}
            {this.props.arts.map((art, index) => {
              return (
                <div key={index} className="p-3">
                  <div className="slideritem p-4">
                    <div className="img">
                      <img className="img-fluid" src={art?.avatar} alt="cat" />
                    </div>
                    <p className="number">0{index + 1}</p>
                    <p className="title">{art.nickname || art.username}</p>
                    <p className="price">{art.num} BNB</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<ReactCustomArrow />, rootElement);
