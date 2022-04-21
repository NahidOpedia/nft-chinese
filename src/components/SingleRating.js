import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
// import { SnackbarProvider, useSnackbar } from "notistack";
import Button from "@mui/material/Button";
import profile1 from "../assects/market/Pyromaniacs.png";

import showcase1 from "../assects/market/Group232@2x.png";
import showcase2 from "../assects/market/Group233@2x.png";
import showcase3 from "../assects/market/Group234@2x.png";
import showcase4 from "../assects/market/Group233@2x.png";
import showcase5 from "../assects/market/Miko #9@2x.png";

import ButtonStock from "../utils/ButtonStock";
import { useSnackbar } from "notistack";

function SingleRating({ item }) {
  const [login, setLogin] = useState([localStorage.getItem("logedIn")]);

  const priceHandler = () => {
    localStorage.getItem("logedIn") === "true"
      ? alert("Price Bid added successfully")
      : alert("Login in first");
  };

  useEffect(() => {}, [login]);

  console.log(localStorage.getItem("logedIn"));
  return (
    <div>
      <div style={{ margin: "10px" }} className="singlereomandation">
        <div className="testimonialSlider productslider">
          <div className="sliderTestimonialitem p-5">
            <Grid container>
              <Grid item lg={4} md={12} sm={12}>
                <div className="d-flex justify-content-center">
                  <div className="img">
                    <img src={profile1} alt="" />
                  </div>
                  <div className="des px-lg-3">
                    <h4 className="id">{item.id}</h4>
                    <h4 className="name">Edison Mark</h4>
                  </div>
                </div>
              </Grid>
              <Grid item lg={1} xs={0}></Grid>
              <Grid item lg={7} md={12} sm={12}>
                <div className="d-flex justify-content-between maindiagramdiv">
                  <div
                    style={{
                      borderRadious: "10px!important",
                      borderTopLeftRadius: "11px",
                      borderBottomLeftRadius: "11px",
                    }}
                    className="p-5  profilediagram"
                  >
                    <h2>450k BNB</h2>
                    <p>作品总值</p>
                  </div>
                  <div className="profilediagram">
                    <h2>450k BNB</h2>
                    <p>作品总值</p>
                  </div>
                  <div
                    style={{
                      borderRadious: "10px!important",
                      borderTopRightRadius: "11px",
                      borderBottomRightRadius: "11px",
                    }}
                    className="profilediagram"
                  >
                    <h2>450k BNB</h2>
                    <p>作品总值</p>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className="nftshowcase mt-5">
              <div>
                <img className="img-fluid" src={showcase1} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={showcase2} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={showcase3} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={showcase1} alt="" />
              </div>
              <div>
                <img className="img-fluid" src={showcase2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyApp({ priceHandler }) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    localStorage.getItem("logedIn") === "true"
      ? enqueueSnackbar("Your bid is successfull!", { variant })
      : enqueueSnackbar("Login First!", { variant: "error" });
  };

  return (
    <React.Fragment>
      <div className="loadmore" onClick={handleClickVariant("success")}>
        <ButtonStock title="Price a bid" />
      </div>
    </React.Fragment>
  );
}
export default SingleRating;
