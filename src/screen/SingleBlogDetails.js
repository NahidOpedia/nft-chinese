import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../config/index";

function SingleBlogDetails() {
  const [detail, setDetail] = useState([]);

  let { id } = useParams();
  const blogDetails = async () => {
    await axios.get(`${server}/api/main/newsdetail/?id=${id}`).then((res) => {
      setDetail(res.data.data);
    });
  };

  console.log(detail);

  useEffect(() => {
    // window.clearTimeout(this.timer)
    if (
      localStorage.getItem("Token") &&
      localStorage.getItem("defaultAddress")
    ) {
      // window.clearTimeout(this.timer)
      blogDetails();
    } else {
      console.log("please Wait");
      //如果检测到没有注入tronWeb对象，则等待100ms后重新检测
      //return
      // this.timer = setTimeout(this.waitForGlobal, 100)
    }
  }, [id]);

  return (
    <div className="productsection mt-md-5  pt-responsive">
      <div className="wrapper">
        <Grid container>
          <Grid item lg={8}>
            <div className=" ">
              <h1 className="mt-4">{detail?.title}</h1>
              <img
                src={detail?.cover}
                className="coverImg"
                style={{
                  width: "40%",
                  borderRadius: "10%",
                  display: " inline-block",
                  marginTop: "40px",
                }}
                alt=""
              />
              <p style={{ fontSize: "18px" }} className="mt-4">
                {detail.created}
              </p>

              <div
                style={{ fontSize: "18px", color: "#777" }}
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: `${detail?.content}`,
                }}
              ></div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SingleBlogDetails;
