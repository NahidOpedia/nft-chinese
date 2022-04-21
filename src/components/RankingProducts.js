import { Grid } from "@mui/material";
import React, { useState } from "react";
import ButtonStock from "../utils/ButtonStock";
import { RankingProductsdata, products } from "../utils/fakedata";
import FilterR from "./FilterR";
import SingleProduct from "./SingleProduct";
import SingleRating from "./SingleRating";
import YouTube from "./skletor";

function RankingProducts() {
  const [seletedItem, setSeletedItem] = useState("热门创作者");
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);

  const filteredData = RankingProductsdata.filter(
    (i) => i.category === seletedItem
  );

  const loadmorehandler = () => {
    setLoaderSpin(true);
    setTimeout(() => {
      setLoaderSpin(false);
      setTotlaProduct(totlaProduct + 4);
    }, 1000);
  };

  return (
    <div className="productsection">
      <div className="wrapper">
        <h1 className="p-2 text-center">全球创作者排行榜</h1>
        {/* filter section */}

        <FilterR setSeletedItem={setSeletedItem} seletedItem={seletedItem} />

        <Grid container>
          {seletedItem !== "热门创作者"
            ? filteredData.slice(0, totlaProduct).map((item) => (
                <Grid item sm={12} xs={12}>
                  <SingleRating item={item} />
                </Grid>
              ))
            : RankingProductsdata.slice(0, totlaProduct).map((item) => (
                <Grid item xs={12}>
                  <SingleRating item={item} />
                </Grid>
              ))}
        </Grid>

        {/* {loaderSpin && (
          <div onClick={() => loadmorehandler()} className="loadmore">
            <YouTube />
          </div>
        )}
        {
          <div onClick={() => loadmorehandler()} className="loadmore">
            <ButtonStock title="Load More" />
          </div>
        } */}
      </div>
    </div>
  );
}

export default RankingProducts;
