import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonFill from "../../utils/ButtonFill";
import VideoModal from "../../utils/VideoModal";
import BannerSlider from "./BannerSlider";

const unsplashpic =
  "https://images.unsplash.com/photo-1647643050583-3ab2bf9e3ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const unsplashpic2 =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";

const unsplashpic3 =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

function MobileBanner() {
  return (
    <>
      {/* Upper banner section  */}
      <div className="wrapper home mt-md-5 pt-responsive">
        <Grid className="wrapper" container>
          <Grid item xl={4} lg={12} md={12} xs={12}>
            <div className="banner bannerText text-center">
              <h3>
                任何社区 NFT<span className="tag">艺术家</span>
              </h3>
              <h3>
                都可通过 空间赚钱 <span className="tag">艺术家</span>
              </h3>

              {/* <div className="bannerText"> */}
              <p>创作与销售您的作品</p>
              <p>创作与销售您的作品</p>
              {/* </div> */}
            </div>
          </Grid>
          <Grid className="mt-sm-5" item xl={8} lg={12} md={12} xs={12}>
            <BannerSlider />
          </Grid>
        </Grid>
        <div className="buttons">
          <Link to="/about">
            <ButtonFill title="浏览市场" />
          </Link>
          <Link to="/signin">
            <ButtonFill title="开始销售" />
          </Link>
        </div>
        <div className="Videosection">
          <VideoModal />
        </div>
      </div>
    </>
  );
}

export default MobileBanner;
