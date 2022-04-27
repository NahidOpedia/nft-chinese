import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import SingleProduct from "../components/SingleProduct";
import YouTube from "../components/skletor";
import SliderC from "../components/Slider";
import SliderSearchMore from "../components/SliderSearchMore";
import profile from "../assects/market/Miko#9.png";
import Axie from "../assects/market/Group234@2x.png";
import { search } from "../utils/fakedata";
import ButtonFill from "../utils/ButtonFill";

// all menu list
const menuTitle = [
  { name: "art", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
  { name: "music", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
  { name: "game", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
];

function SearchItemMore({ filterName }) {
  const [seletedItem, setSeletedItem] = useState("全部");
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);

  const filteredData = search.filter((i) => i.category === seletedItem);

  const filterlist = ["全部", "冒险", "韵律", "卡片"];

  const loadmorehandler = () => {
    setLoaderSpin(true);
    setTimeout(() => {
      setLoaderSpin(false);
      setTotlaProduct(totlaProduct + 4);
    }, 1000);
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="productsection wrapper mt-md-5  pt-responsive">
        <div className="profileItem">
          <Grid container>
            <Grid item md={6} xs={12}>
              <div className="img">
                <img className="img-fluid" src={Axie} alt="cat" />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className="description">
                <h1>Pyromaniac 0678</h1>
                <p>NFT 合集描述段 01 </p>
                <p>NFT 合集描述段 01 </p>
                <p>NFT 合集描述段 01 </p>
                <p>NFT 合集描述段 01 </p>
                <p>NFT 合集描述段 01 </p>
              </div>

              <h1>1 BNB</h1>
              <ButtonFill styleC={{ width: "100%" }} title="购买" />
              <Filter
                menuTitle={["信息", "历史记录"]}
                setSeletedItem={setSeletedItem}
                seletedItem={seletedItem}
              />
              <h4>列印交易</h4>
              <p>0x4e0c7c6a6xxxxxxxxcd3eb11fa8b7121a5</p>
              <h4>列印交易</h4>
              <p>0x4e0c7c6a6xxxxxxxxcd3eb11fa8b7121a5</p>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="bg-p">
        <SliderSearchMore />
      </div>
    </>
  );
}

export default SearchItemMore;
