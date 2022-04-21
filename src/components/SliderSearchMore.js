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
import Axie from "../assects/market/Lego Game.png";
import Cryprtokitties from "../assects/market/Voxel Chimps.png";
import Gods from "../assects/market/Squid Game.png";
import Sandbox from "../assects/market/The Sandbox@2x.png";
import fire from "../assects/market/The Founder-01.png";

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
export default class SliderSearchMore extends React.Component {
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
      <div className="wrapper pt-5 mt-5">
        <p className="headertitle">更多关于 Pyromaniac</p>

        <div style={{ position: "relative", marginTop: "0rem" }}>
          {this.renderArrows()}
          <Slider
            ref={(c) => (this.slider = c)}
            dots={false}
            arrows={false}
            // infinite={false}
            centerMode={true}
            slidesToShow={5}
            {...settings}
          >
            <div className="p-1">
              <div style={{ margin: "10px" }} className="singlereomandation">
                <div className="testimonialSlider productslider">
                  <div className="sliderTestimonialitem ">
                    <div className="img">
                      <img className="img-fluid" src={Gods} alt="cat" />
                    </div>
                    <div className="des">
                      <p className="number">01</p>
                      <p className="title">Axie Infinity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1">
              <div style={{ margin: "10px" }} className="singlereomandation">
                <div className="testimonialSlider productslider">
                  <div className="sliderTestimonialitem ">
                    <div className="img">
                      <img className="img-fluid" src={Gods} alt="cat" />
                    </div>
                    <div className="des">
                      <p className="number">01</p>
                      <p className="title">Axie Infinity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1">
              <div style={{ margin: "10px" }} className="singlereomandation">
                <div className="testimonialSlider productslider">
                  <div className="sliderTestimonialitem ">
                    <div className="img">
                      <img className="img-fluid" src={Axie} alt="cat" />
                    </div>
                    <div className="des">
                      <p className="number">01</p>
                      <p className="title">Axie Infinity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div style={{ margin: "10px" }} className="singlereomandation">
                <div className="testimonialSlider productslider">
                  <div className="sliderTestimonialitem ">
                    <div className="img">
                      <img
                        className="img-fluid"
                        src={Cryprtokitties}
                        alt="cat"
                      />
                    </div>
                    <div className="des">
                      <p className="number">01</p>
                      <p className="title">Axie Infinity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-1">
              <div style={{ margin: "10px" }} className="singlereomandation">
                <div className="testimonialSlider productslider">
                  <div className="sliderTestimonialitem ">
                    <div className="img">
                      <img className="img-fluid" src={Axie} alt="cat" />
                    </div>
                    <div className="des">
                      <p className="number">01</p>
                      <p className="title">Axie Infinity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </Link> */}
          </Slider>
        </div>
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<ReactCustomArrow />, rootElement);
