import { Grid } from "@mui/material";
import React from "react";

import redtick from "../assects/home/Next Button.svg";

function CreateNFT() {
  return (
    <div className="CreateNFT">
      <div className="wrapper">
        <Grid container className="pb-5">
          <Grid className="px-4" item xl={4} lg={6} md={6} xs={12}>
            <div className="itemCreateNFt">
              <h1>cre</h1>
              <h1>ate</h1>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} xs={12}>
            <div className="d-flex justify-content-between">
              <div className="content">
                <h1>创建自己的 NFT</h1>

                <p>首次销售，FRAME 平台将收取 15% 的手续费成交金额 </p>
                <p>
                  二次发售，FRAME 平台和内容创作者均会收费根据交易金额，
                  每人收取 5% 的佣金
                </p>
                <p>前五名的NFT收藏，FRAME 平台将免费进行宣传推广它的 NFT</p>
              </div>
              <div className="iconNft">
                <img src={redtick} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
        <hr className="my-5 mx-4" />
        <Grid container className="pt-5">
          <Grid className="px-4" item xl={4} lg={6} md={6} xs={12}>
            <div className="itemCreateNFt">
              <h1>bet</h1>
              <h1>ter</h1>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} xs={12}>
            <div className="d-flex justify-content-between">
              <div className="content">
                <h1>创建自己的 NFT</h1>

                <p>首次销售，FRAME 平台将收取 15% 的手续费成交金额 </p>
                <p>
                  二次发售，FRAME 平台和内容创作者均会收费根据交易金额，
                  每人收取 5% 的佣金
                </p>
                <p>前五名的NFT收藏，FRAME 平台将免费进行宣传推广它的 NFT</p>
              </div>
              <div className="iconNft">
                <img src={redtick} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CreateNFT;
