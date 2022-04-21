import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonFill from "../utils/ButtonFill";
import ButtonStock from "../utils/ButtonStock";

import banner1 from "../assects/home/Covid Alien.png";
import banner2 from "../assects/home/Jay-Z.png";
import banner3 from "../assects/home/Snoop Dogg.png";
import SectionHeader from "./SectionHeader";

function Banner() {
  return (
    <>
      <div className="wrapper home">
        <Grid className="my-xl-5 wrapper" container>
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
          <Grid item xl={8} lg={12} md={12} xs={12}>
            <Grid container className="mt-lg-5">
              <Grid item xl={4} xs={4} md={4} sm={4}>
                <div className="img">
                  <img className="img-fluid" src={banner1} alt="" />
                </div>
              </Grid>
              <Grid item xl={4} xs={4} md={4} sm={4}>
                <div className="mt-xl-5 img">
                  <img className="img-fluid" src={banner2} alt="" />
                </div>
              </Grid>
              <Grid item xl={4} xs={4} md={4} sm={4}>
                <div className="img">
                  <img className="img-fluid" src={banner3} alt="" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="bannerBottom ">
        <SectionHeader
          head1="每个人都可以轻松 "
          head2="创建属于自己的 NFT"
          pera="FRAME 是一个 NFT 社区平台，让有抱负的艺术家和名人轻松启动自己的项目"
        />
        <div className="wrapper">
          <Grid className="pt-xxl-5 mt-5 " container>
            <Grid className="p-4" item xl={4} xs={12} md={4} sm={6}>
              <div className="itemBanner">
                <h1>create</h1>
                {/* <h1></h1> */}
              </div>
              <div className="des">
                <h3>轻松创建您的 NFT</h3>
                <p>
                  上传您的艺术作品并创建您的 NFT，设置价格后，便可开始销售！
                </p>
              </div>
            </Grid>
            <Grid className="p-4" item xl={4} xs={12} md={4} sm={6}>
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
            <Grid className="p-4" item xl={4} xs={12} md={4} sm={6}>
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
