import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleBlog from "../components/SingleBlog";

import { server } from "../config/index";
import axios from "axios";

function Blog() {
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [pages, setPages] = useState([]);

  //Configuration
  const blogHandler = async () => {
    await axios.get(`${server}/api/main/news`).then((res) => {
      setBlogs(res.data.data.data);
      setPages(res.data.data.page);
    });
  };

  const loadmorehandler = () => {
    setLoaderSpin(true);
    setTimeout(() => {
      setLoaderSpin(false);
      setTotlaProduct(totlaProduct + 4);
    }, 1000);
  };

  useEffect(() => {
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("defaultAddress")
    ) {
      blogHandler();
    } else {
      console.log("please Wait");
    }
  }, []);
  return (
    <div className="productsection mt-md-5 pt-responsive">
      <div className="wrapper">
        <Grid container>
          {blogs.slice(0, totlaProduct).map((item) => (
            <Grid item xl={4} lg={4} sm={6} xs={12}>
              <SingleBlog item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Blog;
