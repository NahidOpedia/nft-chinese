import React, { useEffect, useState } from "react";
import BannerSlider from "../components/BannerSlider";
import CreateBanner from "../components/CreateBanner";
import CreateSupport from "../components/CreateSupport";
// import CreateBanner from "../components/create/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newslatter from "../components/Newslatter";
import Products from "../components/Products";
import Recomandation from "../components/Recomandation";
import SliderC from "../components/Slider";
import TestimonialSlider from "../components/TestimonialSlider";
// import CreateSupport from "../components/create/Support";
import axios from "axios";
import {server} from '../config/index'
function Market() {
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
      <SliderC  arts={arts}/>
      <BannerSlider />
      {/* <Products />
      <TestimonialSlider /> */}
    </>
  );
}

export default Market;
