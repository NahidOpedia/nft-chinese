import { Grid } from "@mui/material";
import React, { useState } from "react";

import Binance from "../assects/connect/Binance_Logo.png";
import Metamask from "../assects/connect/Metamask_Logo-01.png";
import Tronlink from "../assects/connect/Tronlink Wallet_Logo-01.png";

import ModalC from "../utils/ModalC";

function Connect() {
  const [optiontype, setOptionType] = useState("");
  const [open, setOpen] = React.useState(false);

  const optionHandler = ({ title }) => {
    setOptionType(title);
    const handleOpen = () => setOpen(true);
  };
  return (
    <div className="connectMain">
      <div className="wrapper">
        <Grid container>
          <Grid item xl={6} md={6} xs={12} className="connectheader">
            <h1>您需要一个</h1>
            <h1>币安钱包</h1>
            <h1>使用 FRAME</h1>

            <p style={{ marginTop: "56px" }}>连接我们提供可用之一的钱包</p>
            <p>或创建一个新的</p>
          </Grid>
          <Grid item xl={6} md={6} xs={12}>
            {/* 1st */}
            <div className="connectionitem d-flex justify-content-between">
              <div className="img d-flex">
                <img className="img-fluid" src={Binance} alt="" />
                <p className="connectionName">Binance</p>
              </div>
              <div className="option">
                <ModalC name="Binance" logo={Binance} />
                {/* <BsCircle onClick={() => optionHandler("Binance")} /> */}
              </div>
            </div>

            {/* 2nd */}
            <div className="connectionitem d-flex justify-content-between">
              <div className="img d-flex">
                <img className="img-fluid" src={Metamask} alt="" />
                <p className="connectionName">Metamask</p>
              </div>
              <div className="option">
                <ModalC name="Metamask" logo={Metamask} />
                {/* <BsCircle onClick={() => optionHandler("Metamask")} /> */}
              </div>
            </div>

            {/* 4th */}
            {/* <div className="connectionitem d-flex justify-content-between">
              <div className="img d-flex">
                <img className="img-fluid" src={Tronlink} alt="" />
                <p className="connectionName">Tronlink</p>
              </div>
              <div className="option">
                <ModalC name="Tronlink" logo={Tronlink} />
              </div>
            </div> */}

            {/* last */}
            <div className="connectionitem d-flex justify-content-between">
              <div className="img d-flex">
                <p className="connectionNamelast">显示更多选项</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Connect;
