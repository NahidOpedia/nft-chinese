import { Grid } from "@mui/material";
import React from "react";

import mobileshow from "../assects/market/mobile.svg";
import PrimaryButton from "../utils/PrimaryButton";

function GetBetterDealsBanner() {
  return (
    <>
      <div className="wrapper CreateBanner mt-md-5 pt-responsive">
        <Grid className="my-5 wrapper" container>
          <Grid item xl={6} md={6} xs={12}>
            <div className="banner">
              <h3>
                创建 NFT 获得 <br />
                更好的优惠
              </h3>
              <div className="bannerText">
                <span>创建者在 FRAME 上上传自己的 NFT 项目</span>
              </div>
              <div className="bannerText">
                <span>获批后享受最低 5% 以上的手续费</span>
              </div>
              <div className="bannerText">
                <span>免费帮助此项目进行推广宣传</span>
              </div>

              <div className="buttons  mt-xl-5 mt-lg-3">
                <span className="tag">返回</span>
              </div>
            </div>
          </Grid>
          <Grid item xl={6} md={6} xs={12}>
            <Grid container>

              <Grid item xl={12} sm={12}>
                <div className="img mobilecase">
                  <img className="img-fluid" src={mobileshow} alt="" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div className="bannerBottom createBannerBottom">
        <div className="wrapper">
          {/* creation */}
          <h1 className="p-4">上传 NFT 项目</h1>
          <Grid className="py-5 mb-5 " container>
            <Grid className="p-5" item md={12} lg={6} xs={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "95%",
                  height: "400px",
                }}
                className="itemBanner top"
              >
                <span className="getdealtitla">
                  PDF, PPT, PNG, JPG (max 8mb)
                </span>
                <PrimaryButton title="添加文件" />
              </div>
            </Grid>

            <Grid className="py-5" item md={12} lg={6} xs={12}>
              <div className="right getbetterRight">
                <p className="">名称</p>
                <p className="">联络方式</p>
                <p className="">电子邮件</p>
                <p className="pb-10">NFT 项目描述（最多 300 个字)</p>
                <p className="getbetterbutton">提交</p>
              </div>
            </Grid>
          </Grid>
          {/* creation */}
        </div>
      </div>
    </>
  );
}

export default GetBetterDealsBanner;
