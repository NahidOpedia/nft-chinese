import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonStock from "../utils/ButtonStock";
import { productsMusic } from "../utils/fakedata";
import Filter from "./Filter";
import SingleMusic from "./SingleMusic";
import SingleProduct from "./SingleProduct";
import YouTube from "./skletor";

// all menu list
const menuTitle = [
  { name: "art", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
  { name: "music", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
  { name: "game", value: ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"] },
];

function ProductsMusic({ filterName }) {
  const [seletedItem, setSeletedItem] = useState("全部");
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);

  const filteredData = productsMusic.filter((i) => i.category === seletedItem);

  const filterlist = ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"];

  const loadmorehandler = () => {
    setLoaderSpin(true);
    setTimeout(() => {
      setLoaderSpin(false);
      setTotlaProduct(totlaProduct + 4);
    }, 1000);
  };
  useEffect(() => {}, []);
  return (
    <div className="productsection">
      <div className="wrapper">
        <h1 className="p-2">探索 </h1>
        {/* filter section */}

        <Filter
          menuTitle={filterlist}
          setSeletedItem={setSeletedItem}
          seletedItem={seletedItem}
        />

        <Grid container>
          {seletedItem !== filterlist[0]
            ? filteredData.slice(0, totlaProduct).map((item) => (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <SingleMusic item={item} />
                </Grid>
              ))
            : productsMusic.slice(0, totlaProduct).map((item) => (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <SingleMusic item={item} />
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

export default ProductsMusic;
