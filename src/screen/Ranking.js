import { Grid } from "@mui/material";
import React from "react";
import RankingProducts from "../components/RankingProducts";
import SectionHeader from "../components/SectionHeader";

import serviceCard1 from "../assects/home/Connect Wallet_Icon-01.png";
import serviceCard2 from "../assects/home/Create_Icon-01.png";
import serviceCard3 from "../assects/home/Earning_Icon-01.png";
import RankingSlider from "../components/MobileComponent/RankingSlider";

function Ranking() {
  return (
    <>
      {/* <CreateBanner /> */}
      {window.matchMedia("(max-width: 767px)").matches && <RankingSlider />}

      {/* frome main */}
      <RankingProducts />
      {window.matchMedia("(min-width: 768px)").matches && <RankingComp />}
    </>
  );
}

export default Ranking;

// not for mobile view
function RankingComp() {
  return (
    <div className="servicesBottom ">
      <SectionHeader head1="如何使用币安智能链在 FRAME 上创建 NFT" />
      <div className="wrapper">
        <Grid className="pt-5 mt-5 " container>
          <Grid className="" item sm={4}>
            <div className="itemServices mx-4">
              <div className="img">
                <img className="img-fluid" src={serviceCard1} alt="" />
              </div>
            </div>
            <div className="itemServicesDes">
              <h3>连接您的钱包</h3>
            </div>
          </Grid>
          <Grid className="" item sm={4}>
            <div className="itemServices  mx-4">
              <div className="img">
                <img className="img-fluid" src={serviceCard2} alt="" />
              </div>
            </div>
            <div className="itemServicesDes">
              <h3>上传您的作品</h3>
            </div>
          </Grid>
          <Grid className="" item sm={4}>
            <div className="itemServices mx-4 ">
              <div className="img">
                <img className="img-fluid" src={serviceCard3} alt="" />
              </div>
            </div>
            <div className="itemServicesDes">
              <h3>开始赚钱</h3>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
