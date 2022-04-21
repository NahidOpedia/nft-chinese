import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonFill from "../utils/ButtonFill";
import ButtonStock from "../utils/ButtonStock";

function Newslatter() {
  return (
    <Grid container>
      <Grid item xl={6} xs={12} md={12} lg={12} sm={12}>
        <div className="newslatter " style={{ padding: "8% 0" }}>
          <h4>
            Let’s <span className="highlighted">Join Now</span> And Start
            Collect NFT Assets
          </h4>
          <p>
            Let's create your account now and start making transactions to buy
            or sell your nft assets more easily, safely and comfortably
          </p>

          <div className="buttons">
            <Link to="/signin">
              <ButtonFill title="Create Your Account" />
            </Link>
            <Link to="/about">
              <ButtonStock title="About NFTspace" />
            </Link>
          </div>
        </div>{" "}
      </Grid>
    </Grid>
  );
}

export default Newslatter;
