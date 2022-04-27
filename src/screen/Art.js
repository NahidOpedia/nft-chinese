import React, { useEffect, useState } from "react";
import BannerSlider from "../components/BannerSlider";
import Products from "../components/Products";
import SliderC from "../components/Slider";
import axios from "axios";
import { server } from "../config/index";

function Art() {
  const [arts, setArts] = useState([]);
  const [classify, setClassify] = useState(null);

  const getSales = async () => {
    await axios.get(`${server}/api/nft/sales`).then((res) => {
      if (res.data.code == 0) {
        setArts(res.data.data);
      }
    });
  };

  const classifydetail = async () => {
    await axios.get(`${server}/api/nft/classifydetail`).then((res) => {
      if (res.data.code == 0) {
        setClassify(res.data.data.cover);
      }
    });
  };

  useEffect(() => {
    getSales();
    classifydetail();
  }, []);

  return (
    <>
      <SliderC arts={arts} />
      {classify !== null && <BannerSlider classify={classify} />}
      <Products />
    </>
  );
}

export default Art;
