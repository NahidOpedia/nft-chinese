import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";

import profile from "../assects/menubar/The Sandbox.png";
import background from "../assects/menubar/AstroNutzNFT.png";

import { AiOutlineCheckCircle } from "react-icons/ai";

import axios from "axios";
import { server } from "../config";
import TransferList from "../utils/ListTransfer";

function Setting() {
  const [seletedNav, setSeletedNav] = useState("账户");

  return (
    <div className="wrapper setting-main mt-md-5  pt-responsive">
      <Grid container spacing={1}>
        <Grid item md={2}>
          <div className="setting-sidebar">
            <h4>设置</h4>
            {/* options */}
            <div className="btns">
              {["账户", "通知", "优惠", "帮助", "收益"].map((i) => (
                <button
                  onClick={() => setSeletedNav(i)}
                  className={`sidebar-btn ${i == seletedNav ? "active" : ""}  `}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item md={10}>
          {seletedNav === "账户" && <Account />}
          {seletedNav === "通知" && <Notice />}
          {seletedNav === "优惠" && <Discount />}
          {seletedNav === "帮助" && <Help />}
          {seletedNav === "收益" && <Income />}
        </Grid>
      </Grid>
    </div>
  );
}

export default Setting;

function Account() {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [mark, setMark] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [skype, setSkype] = useState("");

  const userHandler = async () => {};

  return (
    <div className="account">
      <h1>账户设置</h1>
      <Grid container>
        <Grid item md={6}>
          <small>用户名称 nickname</small>
          <input
            type="text"
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
            placeholder="Elvis Khoo"
          />
          <small>个人简介 mark</small>
          <input
            type="text"
            onChange={(e) => setMark(e.target.value)}
            value={mark}
            placeholder="Mind Blowing NFT Creator Let Us Grow Together!"
          />
          <small>电子邮件 Email</small>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="elviskhoocreative@gmail.com"
          />

          <button className="submit" onClick={userHandler}>
            Submit
          </button>
        </Grid>
        <Grid item md={6} className="px-5">
          <div className="images d-flex justify-content-between">
            {/* profile  */}
            <div>
              <small>Cover</small>
              <input
                type="file"
                onChange={(e) => setAvatar(e.target.value)}
                value={avatar}
              />
            </div>

            <div>
              <small>Profile</small>
              <input
                type="file"
                onChange={(e) => setPicture(e.target.value)}
                value={picture}
              />
            </div>
          </div>

          <p className="pt-md-5">账户链接</p>
          <div className="social">
            <input
              type="text"
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
              placeholder="facebook.com"
            />
            <input
              type="text"
              onChange={(e) => setYoutube(e.target.value)}
              value={youtube}
              placeholder="youtube.com"
            />
            <input
              type="text"
              onChange={(e) => setSkype(e.target.value)}
              value={skype}
              placeholder="skype.com"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
function Income() {
  return (
    <div className="p-5">
      <h1>帮助中心</h1>
      <p className="mt-5 mb-5">
        如果您需要与您的账户相关的帮助，我们可以为您提供帮助
      </p>

      <p className="wid50 mt-4">
        使用 FRAME 钱包，查看您的钱包在 2022 年 NFT 创作
        者销售中所获取的收益，请参阅下文了解更多信息。
      </p>
      <p className="wid50 py-3">
        温馨提示，您将全权负责验证此信息并确保……， 如有…的话，您的 NFT
        销售额或创作者收入将被征税， FRAME 无法为您确定您所欠的税款 如有任何疑问
      </p>
      <p className="wid50">
        如有任何疑问,请联系{" "}
        <a
          href="mailto:creatorearnings@framenft.com"
          style={{ color: "#F146C8", fontSize: "18px", cursor: "pointer" }}
        >
          creatorearnings@framenft.com
        </a>
      </p>

      <div className="contenttitle">
        <p>此钱包地址在 2022 年使用 FRAME 的销售中没有任何创作者收入</p>
      </div>
      <p className="incomefooter">
        请注意，此报告不包括您不是创作者的 NFT 销售收入，以及不包括
        <span style={{ color: "#F146C8", margin: "5px", fontSize: "18px" }}>
          Polygon
        </span>{" "}
        或
        <span style={{ color: "#F146C8", margin: "5px", fontSize: "18px" }}>
          Klaytn
        </span>
        上赚取的费用 有关您的其他 FRAME
        活动的信息，请参考您的个人资料页面中的活动选项卡
      </p>
    </div>
  );
}

function Help() {
  const [isAgree, setIsAgree] = useState("false");
  return (
    <div className="help">
      <h1 className="p-5">帮助中心</h1>
      <p className="px-5">
        如果您需要与您的账户相关的帮助，我们可以为您提供帮助
      </p>
      <Grid container>
        <Grid item lg={6} xs={12}>
          <div className="accordion p-5" id="accordionExample">
            <div className="accordion-item ">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  常规帮助
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  访问我们的帮助中心，<code>了解如何开</code> 了解如何开始购买
                  销售和创建 overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  联系 FRAME 帮助
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  找不到您正在寻找的答案？ 您可以在此处提交请求 overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  账户被盗
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  如果您认为您的帐户已被盗用，请告知我们，我们可以
                  锁定您的帐户，将禁用您钱包中的项目使用 FRAME
                  购买、出售或转让。了解更多
                </div>

                {/* next accordion */}
                <select class="form-control" id="exampleSelect">
                  <option>描述您的问题</option>
                  <option>我的账户上有未知交易</option>
                  <option>资料完整无损，但相信我的帐户已被盗用</option>
                  <option>其他</option>
                </select>

                <p onClick={() => setIsAgree(!isAgree)} className="aggrytoggle">
                  <span>
                    <AiOutlineCheckCircle color={!isAgree && "red"} />
                  </span>
                  本人明白必须提供一份经认证的宣誓声明公证人解锁账户
                </p>

                <button className={`btn submit ${isAgree ? "disabled" : ""}`}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function Discount() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  return (
    <div className="p-5">
      <h1>优惠设置</h1>
      <p className="mt-5">设置最低报价以忽略低报价</p>
      <div
        className="uploadfile p-2"
        style={
          selectedFile && {
            backgroundImage: `url(${URL?.createObjectURL(selectedFile)})`,
          }
        }
      >
        <p className="uploadname" onClick={() => onButtonClick()}>
          没有收藏品来管理优惠
        </p>
        <input
          type="file"
          name=""
          id=""
          ref={inputFile}
          onChange={changeHandler}
          style={{ display: "none" }}
        />
        <p>您目前没有任何收藏品和管理优惠的项目</p>
      </div>
    </div>
  );
}

function Notice() {
  return (
    <div className="account">
      <h1>账户设置</h1>
      <Grid container>
        <Grid item md={6}>
          <TransferList />

          <small>钱包地址</small>
          <input
            type="text"
            placeholder="0xA678Saa5b4a7bapsm68caf0bfab93d3ljaP58d1f"
          />
          <button className="submit">Submit</button>
        </Grid>
        <Grid item md={6} className="px-5">
          <TransferList />
        </Grid>
      </Grid>
    </div>
  );
}
