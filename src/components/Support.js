import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonFill from "../utils/ButtonFill";
import ButtonStock from "../utils/ButtonStock";

import right from "../assects/home/Tick Icon.svg";
import headerlogo1 from "../assects/home/FRAME_Logo_W.png";
import headerlogo2 from "../assects/home/Opensea_Logo.png";
import headerlogo3 from "../assects/home/Rarible_Logo.png";

import fram1 from "../assects/market/batch.svg";
import fram2 from "../assects/market/doller.svg";
import fram3 from "../assects/market/clock.svg";
import fram4 from "../assects/market/menu.svg";

import SectionHeader from "./SectionHeader";

function Support() {
  return (
    <>
      <div>
        <div className="servicesmain py-115">
          <SectionHeader
            head1="为什么选择 FRAME"
            pera="无复杂程序，简单又容易的创建属于您的 NFT，且低成本费用，还有海量 KOL 网络"
          />
          <div className="">
            <Grid container>
              <Grid item lg={3} sm={6} xs={12}>
                <div className="flowmain">
                  <div className="img">
                    <img className="img-fluid" src={fram1} alt="" />
                  </div>
                  <h2>安全可信</h2>
                  <p>NFT 铸造链上留痕 来源可溯和记录可查</p>
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <div className="flowmain">
                  <div className="img text-center">
                    <img className="img-fluid" src={fram2} alt="" />
                  </div>
                  <h2>费用更低</h2>
                  <p>手续费低于业内平均水平 NFT 交易佣金比例低</p>
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <div className="flowmain">
                  <div className="img">
                    <img className="img-fluid" src={fram3} alt="" />
                  </div>
                  <h2>铸造更快</h2>
                  <p>流程操作更便捷 NFT 生成更迅速</p>
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <div className="flowmain">
                  <div className="img">
                    <img className="img-fluid" src={fram4} alt="" />
                  </div>
                  <h2>作品无数</h2>
                  <p>拥有独家 NFT 与多位创作者 NFT 分类涵盖范围广</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="supportmain ">
          {/* suport main */}
          {window.matchMedia("(min-width: 768px)").matches && (
            <Grid className=" supportdiv" container>
              <Grid item xl={4} md={4} xs={4}></Grid>
              <Grid item xl={8} md={8} xs={8} className="supportdivLogo">
                <Grid container>
                  <Grid item xl={4} xs={4} md={4} sm={4}>
                    <div className="p-1  survicesItemheaderlogo">
                      <img
                        className="img-fluid px-md-4"
                        src={headerlogo1}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item xl={4} xs={4} md={4} sm={4}>
                    <div className="p-1 survicesItemheaderlogo">
                      <img
                        className="img-fluid px-md-4"
                        src={headerlogo2}
                        alt=""
                      />
                    </div>
                  </Grid>
                  <Grid item xl={4} xs={4} md={4} sm={4}>
                    <div className="p-1 survicesItemheaderlogo">
                      <img
                        className="img-fluid px-md-4"
                        src={headerlogo3}
                        alt=""
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {window.matchMedia("(min-width: 768px)").matches && (
            <Grid className="my-5  supportdiv " container>
              <Grid item xl={4} md={4} xs={4}>
                <div className="supportHeadline">
                  <h5>低费用</h5>
                  <h5>简单的界面</h5>
                  <h5>NFT 启动台</h5>
                  <h5>网红网络</h5>
                  <h5>以社区为中心</h5>
                </div>
              </Grid>
              <Grid item xl={8} md={8} xs={8}>
                <Grid container>
                  <Grid item xl={4} md={4} sm={4}>
                    <div className="survicesmain ">
                      <img src={right} alt="" />
                      <img src={right} alt="" />
                      <img src={right} alt="" />
                      <img src={right} alt="" />
                      <img src={right} alt="" />
                    </div>
                  </Grid>
                  <Grid item xl={4} md={4} sm={4}>
                    <div className="survicesmain ">
                      <img src={right} alt="" />
                      <img src={right} alt="" />
                      <img src={right} alt="" />
                      <img src={right} alt="" />
                      <img src={right} alt="" />
                    </div>
                  </Grid>
                  <Grid item xl={4} md={4} sm={4}>
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
          )}
          {window.matchMedia("(max-width: 767px)").matches && (
            <Grid
              className="my-5 d-flex justify-content-center  supportdiv "
              container
            >
              <Grid className="p-2" item xs={4}>
                <span>低费用</span>
              </Grid>
              <Grid className="p-2" item xs={4}>
                <span>简单的界面</span>
              </Grid>
              <Grid className="p-2" item xs={4}>
                <span>NFT 启动台</span>
              </Grid>
              <Grid className="p-2" item xs={4}>
                <span>网红网络</span>
              </Grid>
              <Grid className="p-2" item xs={4}>
                <span>以社区为中心</span>
              </Grid>
            </Grid>
          )}
        </div>
      </div>
    </>
  );
}

export default Support;
