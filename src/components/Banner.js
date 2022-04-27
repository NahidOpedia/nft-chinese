import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonFill from "../utils/ButtonFill";
import BannerSlider from "./MobileComponent/BannerSlider";
import MobileBanner from "./MobileComponent/MobileBanner";

import SectionHeader from "./SectionHeader";

const unsplashpic =
  "https://images.unsplash.com/photo-1647643050583-3ab2bf9e3ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const unsplashpic2 =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";

const unsplashpic3 =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

function Banner() {
  return (
    <>
      {/* Upper banner section  */}

      {window.matchMedia("(min-width: 768px)").matches && <DesktopBanner />}

      {window.matchMedia("(max-width: 767px)").matches && <MobileBanner />}

      {/* down banner section  */}
      <div className="bannerBottom">
        <SectionHeader
          head1="每个人都可以轻松 "
          head2="创建属于自己的 NFT"
          pera="FRAME 是一个 NFT 社区平台，让有抱负的艺术家和名人轻松启动自己的项目"
        />
        <div className="wrapper">
          <Grid className="pt-xxl-5 mt-5 justify-content-center" container>
            <Grid className="p-4" item xl={4} md={6} xs={12}>
              <div className="itemBanner">
                <h1>create</h1>
              </div>
              <div className="des">
                <h3>轻松创建您的 NFT</h3>
                <p>
                  上传您的艺术作品并创建您的 NFT，设置价格后，便可开始销售！
                </p>
              </div>
            </Grid>
            <Grid className="p-4" item xl={4} md={6} xs={12}>
              <div className="itemBanner">
                <h1>launch</h1>
              </div>
              <div className="des">
                <h3>轻松创建您的 NFT</h3>
                <p>
                  上传您的艺术作品并创建您的 NFT，设置价格后，便可开始销售！
                </p>
              </div>
            </Grid>
            <Grid className="p-4" item xl={4} md={6} xs={12}>
              <div className="itemBanner">
                <h1>collab</h1>
              </div>
              <div className="des">
                <h3>轻松创建您的 NFT</h3>
                <p>
                  上传您的艺术作品并创建您的 NFT，设置价格后，便可开始销售！
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Banner;

function DesktopBanner() {
  return (
    <div className="wrapper home py-115 mt-md-5 pt-responsive">
      <Grid className="wrapper" container>
        <Grid item xl={4} lg={12} md={12} xs={12}>
          <div className="banner">
            <h3>
              任何社区 <br />
              都可通过 <br />
              NFT 空间赚钱
            </h3>
            <div className="bannerText">
              <span className="tag">艺术家 -</span>
              <span>创作与销售您的作品</span>
            </div>
            <div className="bannerText">
              <span className="tag">网红 -</span>
              <span> 合作并启动属于您的 NFT</span>
            </div>
            <div className="bannerText">
              <span className="tag">投资者 -</span>
              <span>购买或转卖有价值的 NFT</span>
            </div>

            <div className="buttons">
              <Link to="/about">
                <ButtonFill title="浏览市场" />
              </Link>
              <Link to="/signin">
                <ButtonFill title="开始销售" />
              </Link>
            </div>
          </div>
        </Grid>
        <Grid className="mt-sm-5" item xl={8} lg={12} md={12} xs={12}>
          {window.matchMedia("(min-width: 1024px)").matches && (
            <Grid container>
              {/* slider section */}

              <Grid item xl={4} xs={4} md={4} sm={4}>
                <div className="bannerProfile">
                  <div className="img">
                    <img height={270} width={257} src={unsplashpic} alt="" />
                  </div>
                  <div className="description">
                    <h2>Jay-Z</h2>
                    <h2>Cryptopunk</h2>
                    <p className="totalamount">32..08BNB</p>
                  </div>
                </div>
              </Grid>
              <Grid className="mt-xl-5" item xl={4} xs={4} md={4} sm={4}>
                <div className="bannerProfile">
                  <div className="img">
                    <img height={270} width={257} src={unsplashpic2} alt="" />
                  </div>
                  <div className="description">
                    <h2>Jay-Z</h2>
                    <h2>Cryptopunk</h2>
                    <p className="totalamount">32..08BNB</p>
                  </div>
                </div>
              </Grid>
              <Grid item xl={4} xs={4} md={4} sm={4}>
                <div className=" bannerProfile">
                  <div className="img">
                    <img height={270} width={257} src={unsplashpic3} alt="" />
                  </div>
                  <div className="description">
                    <h2>Jay-Z</h2>
                    <h2>Cryptopunk</h2>
                    <p className="totalamount">32..08BNB</p>
                  </div>
                </div>
              </Grid>

              {/* slider section */}
            </Grid>
          )}
          {window.matchMedia("(max-width: 1023px)").matches && <BannerSlider />}
        </Grid>
      </Grid>
    </div>
  );
}
