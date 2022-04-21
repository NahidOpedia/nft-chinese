import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import SingleProduct from "../components/SingleProduct";
import YouTube from "../components/skletor";
import ButtonStock from "../utils/ButtonStock";
import { search } from "../utils/fakedata";
// import ButtonStock from "../utils/ButtonStock";
// import { products } from "../utils/fakedata";
// import Filter from "./Filter";
// import SingleProduct from "./SingleProduct";
// import YouTube from "../skletor";

function Search() {
  const [seletedItem, setSeletedItem] = useState("全部");
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);

  const filteredData = search.filter((i) => i.category === seletedItem);

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
        <Grid container>
          {search.slice(0, totlaProduct).map((item) => (
            <Grid item xl={2.4} lg={3} md={4} sm={6} xs={12}>
              <Link className="Link" to="/searchItem">
                <SingleProduct item={item} />
              </Link>
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

export default Search;
