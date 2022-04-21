import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonStock from "../utils/ButtonStock";
import { products } from "../utils/fakedata";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import YouTube from "./skletor";
import axios from "axios";
import {server} from '../config/index'


function Products({ filterName }) {


  const [seletedItem, setSeletedItem] = useState("全部");
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);



  const [sells,setSells] = useState([]);
  const [classifyDetail,setClassifyDetail] = useState(null);

console.log('seells, clasfy details')
  console.log(sells)
  console.log(classifyDetail)

  
  const getSales = async ()=>{
    await axios
  .get(`${server}/api/nft/sales`
  ).then(res => {
    if(res.data.code ==0){
      setSells(res.data.data)
    }
  })
  }

  const getClassifydetail = async ()=>{
    await axios
  .get(`${server}/api/nft/classifydetail`
  ).then(res => {
    if(res.data.code ==0){
      setClassifyDetail(res.data.data.cover)
    }
  })
  }

  const getClassify = async ()=>{
    await axios
  .get(`${server}/api/nft/classify`
  ).then(res => {
    console.log(res)
    // if(res.data.code ==0){
    //   setClassify(res.data.data.cover)
    // }
  })
  }


  // let data = {
  //   page: this.page,
  //   limit: this.limit,
  //   classify_pid: this.pid, // 主分类
  //   classify_id: this.classfiy_id, // 子分类
  // }
  const getSeriesList = async ()=>{
    await axios
  .get(`${server}/api/nft/serieslist`
  ).then(res => {
    console.log(res)
    // if(res.data.code ==0){
    //   setClassify(res.data.data.cover)
    // }
  })
  }

  const filteredData = products.filter((i) => i.category === seletedItem);

  const filterlist = ["全部", "冒险", "Sandbox", "韵律", "战略", "卡片"];

  const loadmorehandler = () => {
    setLoaderSpin(true);
    setTimeout(() => {
      setLoaderSpin(false);
      setTotlaProduct(totlaProduct + 4);
    }, 1000);
  };


  useEffect(() => {
    getClassify()
    // getSales()
    // getSeriesList()
    // getClassifydetail()
  }, []);
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
                  <SingleProduct item={item} />
                </Grid>
              ))
            : products.slice(0, totlaProduct).map((item) => (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <SingleProduct item={item} />
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

export default Products;
