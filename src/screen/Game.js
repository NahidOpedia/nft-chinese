import React, { useEffect, useState } from "react";
import BannerSliderGame from "../components/BannerSliderGame";
import ProductsGame from "../components/ProductsGame";
import SliderGame from "../components/SliderGame";

import axios from "axios";
import {server} from '../config/index'

function Game() {
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
      <SliderGame arts={arts}/>
      {
        classify !== null &&  <BannerSliderGame classify = {classify}/>
      }
      <ProductsGame />
    </>
  );
}

export default Game;
