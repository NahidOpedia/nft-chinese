import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";

import logo from "../assects/brandLogo.png";
import menubar from "../assects/home/menu.svg";
import menubarX from "../assects/menubar/cross.svg";
import arrowM from "../assects/menubar/Next Button.svg";
import arrowB from "../assects/menubar/Previous Button.svg";
import country from "../assects/home/america.jpg";
import userPink from "../assects/menubar/pinkprofile.svg";

import store from "../assects/mobileicon/商城图标.png";
import create from "../assects/mobileicon/创建图标.png";
import sound from "../assects/mobileicon/部落格图标.png";
import menu from "../assects/mobileicon/Group 526.png";
import setting from "../assects/mobileicon/Group 532.png";
import logout from "../assects/mobileicon/Group 534.png";

import binance from "../assects/connect/Binance_Logo.png";
import metamask from "../assects/connect/Metamask_Logo-01.png";
import tronlink from "../assects/connect/Tronlink Wallet_Logo-01.png";
import CustomizedSwitches from "../utils/SwitchC";
import { server } from "../config";
import axios from "axios";

function ResponsiveHeader() {
  const [active, setActive] = useState("Home");
  const [isSearch, setIsSearch] = useState(null);
  const [topbar, setTopbar] = useState(false);

  return (
    <div className="responsivefixmenu">
      <div className="p-4 responsiveNav d-flex justify-content-between">
        <p></p>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <img
            src={!topbar ? menubar : menubarX}
            onClick={() => setTopbar(!topbar)}
            alt=""
          />
        </div>
      </div>
      <div
        className="menubody"
        style={{
          transition: "transform  0.7s ease-in-out",
          // marginTop: topbar ? "0" : "-130vh",
          // height: topbar ? "100vh" : "0",
          transform: topbar
            ? "rotate3d(1, 1, 1, 0deg)"
            : "rotate3d(1, 1, 1, 120deg)",
        }}
      >
        <ul>
          <li>
            <div className="menuitem  d-flex justify-content-between">
              <div className="img">
                <img src={store} alt="" />
                <span>Market </span>
              </div>
              <div className="img">
                <img src={arrowM} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="menuitem  d-flex justify-content-between">
              <div className="img">
                <img src={create} alt="" />
                <span>Create NFT </span>
              </div>
              <div className="img">
                <img src={arrowM} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="menuitem  d-flex justify-content-between">
              <div className="img">
                <img src={sound} alt="" />
                <span>Sound </span>
              </div>
              <div className="img">
                <img src={arrowM} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="menuitem  d-flex justify-content-between">
              <div className="img">
                <img src={menu} alt="" />
                <span>Menu </span>
              </div>
              <div className="img">
                <img src={arrowM} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="menuitem  d-flex justify-content-between">
              <div className="img">
                <img src={setting} alt="" />
                <span>setting </span>
              </div>
              <div className="img">
                <img src={arrowM} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="menuitem  d-flex justify-content-between">
              <div className="img">
                <img src={logout} alt="" />
                <span>Logout </span>
              </div>
              <div className="img">
                <img src={arrowM} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="menuitem  d-flex justify-content-between">
              <div className="img">
                <img src={store} alt="" />
                <span>Night Mode </span>
              </div>
              <div className="img">
                <img src={arrowM} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

// old navbar

// old navbar

export default ResponsiveHeader;

function Wallet({ setSubmenus, handledropdownmenu }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    let data = window.localStorage.getItem("userInfo");
    setUserInfo(JSON.parse(data));
  }, []);

  return (
    <div
      style={{
        height: "100%",
      }}
      className="p-4"
    >
      <header>
        <div className=" headerwallet d-flex justify-content-between">
          <div className="img d-flex">
            <img width={40} src={userInfo?.avatar} alt="" />
            <p className="p-2">{userInfo?.nickname}</p>
          </div>
          {/* <small>{`${str?.slice(0,6)}...${str?.slice(str.length-4, str.length)} `}</small> */}
        </div>
      </header>

      <div className="ammoundbox">
        <p>总余额</p>
        <h1>{userInfo?.bnb.slice(0, userInfo?.bnb.indexOf(".") + 3)}</h1>
        {/* <h1> { Web3.utils.fromWei(`${(userInfo?.bnb)?.split('.')?.join()}` , 'ether')} BNB</h1> */}
        <div className="footer">
          <p>增加资金</p>
        </div>
      </div>

      <img
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "50%",
        }}
        onClick={() => {
          setSubmenus("mainsub");
          handledropdownmenu();
        }}
        src={arrowB}
        alt="image"
      />
    </div>
  );
}

function Coins({ setSubmenus, handledropdownmenu }) {
  return (
    <div>
      <div class="card-body">
        <div className="profile-settings p-4">
          <p className="profile-item">
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                marginRight: "30px",
                // marginRight: "10px",
              }}
              onClick={() => {
                setSubmenus("coins");
                handledropdownmenu();
              }}
              src={userPink}
              alt="image"
            />
            我的钱包
          </p>
        </div>
        <p className="profil-des">连接与我们提供可用的钱包 或创建一个新的</p>

        {/* coin1 */}
        <div className="coins">
          <div className="coin-div d-flex justify-content-between">
            <p className="profile-item">
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "30px",
                  // marginRight: "10px",
                }}
                onClick={() => {
                  setSubmenus("coins");
                }}
                src={binance}
                alt="image"
              />
              我的钱包
            </p>
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                // marginRight: "10px",
              }}
              onClick={() => {
                setSubmenus("wallets");
              }}
              src={arrowM}
              alt="image"
            />
          </div>
          {/* coin1 */}
          <div className="coin-div d-flex justify-content-between">
            <p className="profile-item">
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "30px",
                }}
                onClick={() => {
                  setSubmenus("coins");
                }}
                src={metamask}
                alt="image"
              />
              我的钱包
            </p>
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                // marginRight: "10px",
              }}
              onClick={() => {
                setSubmenus("wallets");
              }}
              src={arrowM}
              alt="image"
            />
          </div>
          {/* coin1 */}
          <div className="coin-div d-flex justify-content-between">
            <p className="profile-item">
              <img
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  marginRight: "30px",
                  // marginRight: "10px",
                }}
                onClick={() => {
                  setSubmenus("wallets");
                }}
                src={tronlink}
                alt="image"
              />
              我的钱包
            </p>
            <img
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                // marginRight: "10px",
              }}
              onClick={() => {
                setSubmenus("wallets");
              }}
              src={arrowM}
              alt="image"
            />
          </div>
        </div>
        <div className="coin-footer d-flex justify-content-between">
          <p className="profile-item">显示更多选项</p>
        </div>
      </div>
      <div className="submenu-container">
        <img
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            // marginRight: "10px",
          }}
          onClick={() => {
            setSubmenus("wallets");
            handledropdownmenu();
          }}
          src={arrowB}
          alt="image"
        />
      </div>
    </div>
  );
}
