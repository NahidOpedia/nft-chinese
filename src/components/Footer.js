import React from "react";
import { Link } from "react-router-dom";

import twitter from "../assects/home/Twitter Icon.svg";
import instra from "../assects/home/Instagram Icon.svg";
import telogram from "../assects/home/Telegram Icon.svg";
import logo from "../assects/FRAME_Logo@2x.png";
import descord from "../assects/home/Discord Icon.svg";

import envolupe from "../assects/home/Mail Icon.svg";
import { Grid } from "@mui/material";

function Footer() {
  return (
    <>
      <div className="wrapper upperfooter py-115">
        <Grid container>
          <Grid className="footer1" item md={6} xs={12}>
            <div className="img footerimg">
              <img src={logo} alt="" />
            </div>
            <p className="title">币安智能链上的社区 NFT 市场</p>
            <p className="email">
              <img src={envolupe} alt="" />
              <span className="m-4">FRAMENFT@gmail.com</span>
            </p>
          </Grid>
          <Grid item md={3} xs={6}>
            <h3>FRAME</h3>
            <p>
              <Link to="/home" className="Link LinkFooter">
                NFT 部落格
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                NFT 启动台
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                购买 NFTs
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                常问问题
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                条款和条件
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                隐私政策
              </Link>
            </p>
          </Grid>
          <Grid item md={3} xs={6}>
            <h3>NFTs</h3>
            <p>
              <Link to="/home" className="Link LinkFooter">
                艺术
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                运动
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                摄影
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                收藏品
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                收藏品
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                视频
              </Link>
            </p>
            <p>
              <Link to="/home" className="Link LinkFooter">
                音乐
              </Link>
            </p>
          </Grid>
        </Grid>
      </div>
      <hr />
      <nav className="footer navbar navbar-expand-lg navbar-light wrapper">
        <div className="footercontent container-fluid">
          <p>©版权所有 2021 保留所有权利</p>
          <ul>
            <li>
              <Link to={{ pathname: "www.facebook.com" }} target="_blank">
                <div className="img">
                  <img src={twitter} alt="" />
                </div>
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "www.facebook.com" }} target="_blank">
                <div className="img">
                  <img src={instra} alt="" />
                </div>
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "www.facebook.com" }} target="_blank">
                <div className="img">
                  <img src={telogram} alt="" />
                </div>
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "www.facebook.com" }} target="_blank">
                <div className="img">
                  <img src={descord} alt="" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Footer;
