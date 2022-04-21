import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonFill from "../utils/ButtonFill";
import ButtonStock from "../utils/ButtonStock";

import right from "../assects/home/Tick Icon.svg";
import headerlogo1 from "../assects/home/FRAME_Logo_W.png";
import headerlogo2 from "../assects/home/Opensea_Logo.png";
import headerlogo3 from "../assects/home/Rarible_Logo.png";

import serviceCard1 from "../assects/home/Connect Wallet_Icon-01.png";
import serviceCard2 from "../assects/home/Create_Icon-01.png";
import serviceCard3 from "../assects/home/Earning_Icon-01.png";

import SectionHeader from "./SectionHeader";

function CreateSupport() {
  return (
    <>
      <div className=" mt-5 pt-5">
        <SectionHeader
          head1="为什么选择 FRAME"
          pera="无复杂程序，简单又容易的创建属于您的 NFT，且低成本费用，还有海量 KOL 网络"
        />
        <div className="supportmain ">
          {/* suport main */}
          <Grid className="my-5  supportdiv" container>
            <Grid item xl={4} xs={12} md={8} sm={12}></Grid>
            <Grid item xl={8} xs={12} md={8} sm={12}>
              <Grid container>
                <Grid item xl={4} xs={4} md={4} sm={4}>
                  <div className=" survicesItemheaderlogo">
                    <img src={headerlogo1} alt="" />
                  </div>
                </Grid>
                <Grid item xl={4} xs={4} md={4} sm={4}>
                  <div className="survicesItemheaderlogo">
                    <img src={headerlogo2} alt="" />
                  </div>
                </Grid>
                <Grid item xl={4} xs={4} md={4} sm={4}>
                  <div className="survicesItemheaderlogo">
                    <img src={headerlogo3} alt="" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="my-5  supportdiv " container>
            <Grid item xl={4} xs={12} md={8} sm={12}>
              <div className="supportHeadline">
                <h5>低费用</h5>
                <h5>简单的界面</h5>
                <h5>NFT 启动台</h5>
                <h5>网红网络</h5>
                <h5>以社区为中心</h5>
              </div>
            </Grid>
            <Grid item xl={8} xs={12} md={8} sm={12}>
              <Grid container>
                <Grid item xl={4} xs={4} md={4} sm={4}>
                  <div className="survicesmain ">
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                  </div>
                </Grid>
                <Grid item xl={4} xs={4} md={4} sm={4}>
                  <div className="survicesmain ">
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                  </div>
                </Grid>
                <Grid item xl={4} xs={4} md={4} sm={4}>
                  <div className="survicesmain ">
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                    <img src={right} alt="" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* frame main */}
      <div className="servicesBottom">
        <SectionHeader head1="如何使用币安智能链在 FRAME 上创建 NFT" />
        <div className="wrapper">
          <Grid className="pt-5 mt-5 " container>
            <Grid className="p-5" item xl={4} xs={4} md={4} sm={4}>
              <div className="itemServices mx-5">
                <div className="img">
                  <img src={serviceCard1} alt="" />
                </div>
              </div>
              <div className="itemServicesDes">
                <h3>连接您的钱包</h3>
              </div>
            </Grid>
            <Grid className="p-5" item xl={4} xs={4} md={4} sm={4}>
              <div className="itemServices mx-5">
                <div className="img">
                  <img src={serviceCard2} alt="" />
                </div>
              </div>
              <div className="itemServicesDes">
                <h3>上传您的作品</h3>
              </div>
            </Grid>
            <Grid className="p-5" item xl={4} xs={4} md={4} sm={4}>
              <div className="itemServices mx-5">
                <div className="img">
                  <img src={serviceCard3} alt="" />
                </div>
              </div>
              <div className="itemServicesDes">
                <h3>开始赚钱</h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default CreateSupport;
