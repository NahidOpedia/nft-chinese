import React, { useEffect, useState } from "react";
import BannerSliderMusic from "../components/BannerSliderMusic";
import ProductsMusic from "../components/ProductsMusic";
import Slidermusic from "../components/Slidermusic";

import axios from "axios";
import {server} from '../config/index'

function Music() {
  const [arts,setArts] = useState([]);
  const [classify,setClassify] = useState(null);

  const getSales = async ()=>{
    await axios
  .get(`${server}/api/nft/sales`
  ).then(res => {
    if(res.data.code ==0){
      setArts(res.data.data)
    }
  })
  }

  const classifydetail = async ()=>{
    await axios
  .get(`${server}/api/nft/classifydetail`
  ).then(res => {
    if(res.data.code ==0){
      setClassify(res.data.data.cover)
    }
  })
  }


  useEffect(()=>{
    getSales()
    classifydetail();
  },[])
  return (
    <>
      <Slidermusic  arts = {arts}/>

      {
        classify !== null &&   <BannerSliderMusic classify = {classify} />
      }
      <ProductsMusic />
    </>
  );
}

export default Music;
