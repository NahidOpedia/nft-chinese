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

import twitter from "../assects/home/Twitter Icon.svg";
import instra from "../assects/home/Instagram Icon.svg";
import telogram from "../assects/home/Telegram Icon.svg";
import descord from "../assects/home/Discord Icon.svg";

import binance from "../assects/connect/Binance_Logo.png";
import metamask from "../assects/connect/Metamask_Logo-01.png";
import tronlink from "../assects/connect/Tronlink Wallet_Logo-01.png";
import CustomizedSwitches from "../utils/SwitchC";
import { server } from "../config";
import axios from "axios";

function Header(props) {
  const [active, setActive] = useState("Home");
  const [isSearch, setIsSearch] = useState(null);
  const [isdropdown, setIsdropdown] = useState(false);

  const [submenus, setSubmenus] = useState("mainsub");
  const [collections, setCollections] = useState([]);
  const [users, setUsers] = useState([]);

  const [searchCollections, setSearchCollections] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);

  useEffect(() => {
    console.log(active);
  }, [active]);

  const searchHandler = (e) => {
    let searchTerm = e.target.value;
    const newCollectionList = collections.filter((collection) => {
      return collection.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const newUserList = users.filter((user) => {
      return user.nickname.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (searchTerm !== "") {
      setSearchCollections(newCollectionList);
      setSearchUsers(newUserList);
    } else {
      setSearchCollections([]);
      setSearchUsers([]);
    }
    console.log(users);
    setIsSearch(e.target.value);
  };

  const handleSearch = () => {
    window.location.href = "/search";
  };

  const handledropdown = () => {
    setIsdropdown(!isdropdown);
  };
  const handledropdownmenu = () => {};

  const SignOutHandler = () => {
    localStorage.setItem("logedIn", false);
  };

  const logoutHandler = async () => {
    await axios
      .post(
        `${server}/api/user/loginout`,
        {},
        {
          headers: {
            Token: localStorage.getItem("Token"),
          },
        }
      )
      .then((res) => {
        if (res.data.code == 40200 || res.data.code == 0) {
          alert(res.data.msg);
        }
      });
    console.log("log OUt successfully");
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("defaultAddress");
    window.localStorage.removeItem("userInfo");
    window.localStorage.removeItem("lang");
  };

  const [userInfo, setUserInfo] = useState(null);

  const searchItems = async () => {
    await axios
      .get(`${server}/api/main/search`, {
        headers: {
          Token: window.localStorage.getItem("Token"),
        },
      })
      .then((res) => {
        setCollections(res.data.data.series);
        setUsers(res.data.data.user);
      });
  };

  useEffect(() => {
    searchItems();
    let data = window.localStorage.getItem("userInfo");
    setUserInfo(JSON.parse(data));
  }, [isSearch]);

  return (
    // <div className="navbar">
    <nav class="wrapper navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid">
        <Link className={`Link navbar-brand me-auto`} to="/">
          <img
            style={{ width: "138px", height: "60px" }}
            src={logo}
            alt="alt"
          />
        </Link>

        <div className="search-wrap">
          <input
            style={{ position: "relative", width: "200px!important" }}
            className="search"
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            onChange={(e) => searchHandler(e)}
            placeholder="搜索收藏品和用户资料"
          />

          <div
            className={`search-list `}
            style={{
              display: isSearch ? "block" : "none",
            }}
          >
            <div class="card">
              <ul class="list-group list-group-flush">
                <li className="search-item">收藏品</li>

                {/* items */}
                {searchCollections.length > 0 ? (
                  searchCollections?.map((item) => {
                    return (
                      <Link
                        onClick={() => setIsSearch(null)}
                        className="Link"
                        to={
                          "/series/" +
                          window.localStorage.getItem("defaultAddress")
                        }
                      >
                        <div className="search-list-item">
                          <div className="search-author">
                            <img src={item?.cover} alt="" />
                            <p>{item?.name}</p>
                          </div>
                          <span className="items">{item?.series_id} items</span>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <div className="search-list-item ">
                    <div className="search-author ">
                      <p>No Collections found </p>
                    </div>
                  </div>
                )}

                {/* items */}
                <li className="search-item">用户</li>
                {/* items */}
                {searchUsers.length > 0 ? (
                  searchUsers?.map((user) => {
                    return (
                      <Link
                        onClick={() => setIsSearch(null)}
                        className="Link"
                        to={"/user/" + user.sale_uid}
                      >
                        <div className="search-list-item">
                          <div className="search-author">
                            <img src={user?.avatar} alt="" />
                            <p>{user?.nickname}</p>
                          </div>
                        </div>
                        {/* items */}
                      </Link>
                    );
                  })
                ) : (
                  <div className="search-list-item ">
                    <div className="search-author ">
                      <p>No User Found</p>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
            src={menubar}
            alt=""
          />
        </button>
        <div
          class="collapse navbar-collapse navbarMenu"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav alcauto  mb-2 mb-lg-0">
            <li class="nav-item" style={{ position: "relative" }}>
              <a class="nav-link active" aria-current="page">
                <Link
                  onClick={() => setActive("market")}
                  className={`Link  ${active === "market" && "active"}`}
                  to="/market"
                >
                  市场
                </Link>
              </a>

              {/* dropdownmenu */}
              <ul class="dropdown">
              
                <li class="nav-item" onClick={() => setActive("page2")}>
                  <a
                    class="nav-link active"
                    aria-current="page"
                  >
                    <Link
                      onClick={() => setActive("create")}
                      className={`Link ${active === "create" && "active"}`}
                      to="/art"
                    >
                      Art
                    </Link>
                  </a>
                </li>
                <li class="nav-item " onClick={() => setActive("page2")}>
                  <a
                    class="nav-link active"
                    aria-current="page"
                  >
                    <Link
                      onClick={() => setActive("create")}
                      className={`Link ${active === "create" && "active"}`}
                      to="/music"
                    >
                      music
                    </Link>
                  </a>
                </li>
                <li class="nav-item " onClick={() => setActive("page2")}>
                  <a
                    class="nav-link active"
                    aria-current="page"
                  >
                    <Link
                      onClick={() => setActive("create")}
                      className={`Link ${active === "create" && "active"}`}
                      to="/game"
                    >
                      game
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item " onClick={() => setActive("page2")}>
              <a
                class="nav-link active"
                aria-current="page"
              >
                <Link
                  onClick={() => setActive("connect")}
                  className={`Link ${active === "connect" && "active"}`}
                  to="/connect"
                >
                  创建
                </Link>
              </a>
            </li>
            <li class="nav-item " onClick={() => setActive("blog")}>
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "red" }}
              >
                <Link
                  className={`Link ${active === "blog" && "active"}`}
                  to="/blog"
                >
                  blog
                </Link>
              </a>
            </li>
            <li class="nav-item " onClick={() => setActive("profile")}>
              <a
                onClick={SignOutHandler}
                class="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "red" }}
              >
                <div className="img">
                  <Link className={`Link `} to="/profile">
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                      src={userInfo?.avatar}
                      alt=""
                    />
                  </Link>
                </div>
              </a>
            </li>
            <li
              class="nav-item "
              onClick={() => setActive("About")}
              style={{
                marginLeft: "30px",
              }}
            >
              {localStorage.getItem("logedIn") === "true" ? (
                <a
                  onClick={SignOutHandler}
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "red" }}
                >
                  <div className="img">
                    <Link className={`Link `} to="/signin">
                      <img
                        style={{
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                        }}
                        src={country}
                        alt=""
                      />
                    </Link>
                  </div>
                </a>
              ) : (
                <div className="img">
                  <Link className={`Link `} to="/signin">
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50%",
                      }}
                      src={country}
                      alt=""
                    />
                  </Link>
                </div>
        
              )}
            </li>
            <li
              class="nav-item "
              style={{
                marginLeft: "30px",
              }}
            >
              <div className="img">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                  onClick={() => handledropdown()}
                  src={isdropdown ? menubarX : menubar}
                  alt=""
                />
              </div>
              {isdropdown && (
                <div className="nav-sub">
                  <div class="card">
                    <div class="card-header"></div>
                    {submenus === "mainsub" ? (
                      <div class="card-body p-4">
                        <div className="profile-settings">
                          <p className="profile-item">我的钱包</p>
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                            }}
                            onClick={() => {
                              setSubmenus("coins");
                              handledropdownmenu();
                            }}
                            src={arrowM}
                            alt="image"
                          />
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">每日挑战</p>
                          <Link
                            to="/setting"
                            onClick={() => {
                              setIsdropdown(false);
                            }}
                          >
                            <img
                              style={{
                                height: "40px",
                                width: "40px",
                                borderRadius: "50%",
                              }}
                              src={arrowM}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">奖励</p>
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                            }}
                            onClick={() => handledropdownmenu()}
                            src={arrowM}
                            alt=""
                          />
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">登出 logout</p>
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                            }}
                            onClick={() => {
                              handledropdownmenu();
                              logoutHandler();
                            }}
                            src={arrowM}
                            alt=""
                          />
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">设置</p>
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                              // marginRight: "10px",
                            }}
                            onClick={() => handledropdownmenu()}
                            src={arrowM}
                            alt=""
                          />
                        </div>
                        <div className="profile-settings">
                          <p className="profile-item">夜间模式</p>
                          <CustomizedSwitches />
                        </div>
                      </div>
                    ) : submenus === "coins" ? (
                      <Coins
                        setSubmenus={setSubmenus}
                        handledropdownmenu={handledropdownmenu}
                      />
                    ) : submenus === "wallets" ? (
                      // wallets section
                      <Wallet
                        setSubmenus={setSubmenus}
                        handledropdownmenu={handledropdownmenu}
                      />
                    ) : (
                      ""
                    )}
                    <div className="p-4 d-flex justify-content-between">
                      <div className="img">
                        <Link to="/">
                          <img
                            style={{ width: "138px", height: "60px" }}
                            src={logo}
                            alt="alt"
                          />
                        </Link>
                      </div>
                      <div className="social-logos">
                        <Link className="Link p-2" to="facebook.com">
                          <img src={twitter} alt="email" />
                        </Link>

                        <Link className="Link p-2" to="facebook.com">
                          <img src={instra} alt="facebook" />
                        </Link>

                        {/* <Link className="Link p-2" to="www.facebook.com">
                          <img src={instra} alt="alt" />
                        </Link> */}

                        <Link className="Link p-2" to="www.facebook.com">
                          <img src={telogram} alt="alt" />
                        </Link>
                        <Link className="Link p-2" to="www.facebook.com">
                          <img src={descord} alt="alt" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default Header;

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

        {/* coins div `` */}
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
