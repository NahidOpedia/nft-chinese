import React, { useState } from "react";
import SingleRecomandation from "./SingleRecomandation";
import Grid from "@mui/material/Grid";

function RecomandItem() {
  const [toggleFollow, setToggleFollow] = useState(false);
  return (
    <div style={{ margin: "20px 0px" }}>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 8, 1, 2, 3, 3, 5, 8].map((item, index) => (
          <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
            <SingleRecomandation
              index={index}
              setToggleFollow={setToggleFollow}
              toggleFollow={toggleFollow}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default RecomandItem;
