import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonStock from "../utils/ButtonStock";
import { profileItem } from "../utils/fakedata";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import YouTube from "./skletor";
import propix from "../assects/market/Mask Group 5.png";
import { FiCopy } from "react-icons/fi";
import SingleProfile from "./SingleProfile";
import { useSnackbar } from "notistack";

// all menu list
const menuTitle = [
  { name: "art", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
  { name: "music", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
  { name: "game", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
];

function Profile({ filterName }) {
  const [seletedItem, setSeletedItem] = useState("全部");
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [copiedtext, setCopiedtext] = useState("0xDE5D…6cfD");

  const filteredData = profileItem.filter((i) => i.category === seletedItem);

  const filterlist = ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"];

  const loadmorehandler = () => {
    setLoaderSpin(true);
    setTimeout(() => {
      setLoaderSpin(false);
      setTotlaProduct(totlaProduct + 4);
    }, 1000);
  };
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    let data = window.localStorage.getItem("userInfo");
    setUserInfo(JSON.parse(data));
  }, []);

  const str = userInfo?.username;

  const handleClickVariant = () => {
    navigator.clipboard.writeText(copiedtext);
    enqueueSnackbar("Coppied successfull!", {
      variant: "success",
      autoHideDuration: 1000,
    });
  };

  return (
    <div className="productsection">
      <div
        className="profile profilebackground"
        style={{
          backgroundImage: `url(${userInfo?.picture})`,
          // backgroundImage: `url("https://images.unsplash.com/photo-1422466654108-5e533f591881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="img">
          <img src={userInfo?.avatar} alt="" />
        </div>
        <h4 className="name">{userInfo?.nickname}</h4>
        <p onClick={handleClickVariant} className="id">
          <FiCopy />
          {`${str?.slice(0, 6)}...${str?.slice(str.length - 4, str.length)} `}
        </p>
        <p className="surname">编辑主页</p>
      </div>
      <div className="wrapper">
        <h1 className="p-2">探索 </h1>
        {/* filter section */}

        <Filter
          menuTitle={filterlist}
          setSeletedItem={setSeletedItem}
          seletedItem={seletedItem}
        />
        <Grid container className="mb-5">
          <Grid className="p-2" item md={8} xs={12}>
            <input
              className="profileinput"
              type="text"
              placeholder="搜索收藏品"
            />
          </Grid>
          <Grid className="p-2" item md={2} xs={6}>
            <input
              className="profileinput"
              type="text"
              placeholder="全部项目"
            />
          </Grid>
          <Grid className="p-2" item md={2} xs={6}>
            <input
              className="profileinput"
              type="text"
              placeholder="最近获得"
            />
          </Grid>
        </Grid>

        <Grid container>
          {seletedItem !== filterlist[0]
            ? filteredData.slice(0, totlaProduct).map((item) => (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <SingleProfile item={item} />
                </Grid>
              ))
            : profileItem.slice(0, totlaProduct).map((item) => (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <SingleProfile item={item} />
                </Grid>
              ))}
        </Grid>

        {loaderSpin && (
          <div onClick={() => loadmorehandler()} className="loadmore">
            <YouTube />
          </div>
        )}
        {
          <div onClick={() => loadmorehandler()} className="loadmore">
            <ButtonStock title="Load More" />
          </div>
        }
      </div>
    </div>
  );
}

export default Profile;
