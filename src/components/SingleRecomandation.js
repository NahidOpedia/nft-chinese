import React from "react";
import { Grid } from "@mui/material";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { recomnadation } from "../utils/fakedata";
import ButtonStock from "../utils/ButtonStock";
import ButtonFill from "../utils/ButtonFill";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function SingleRecomandation({ setToggleFollow, toggleFollow }) {
  return (
    <>
      <div className="singlereomandation">
        <div className="top">
          <div className="upper">
            <Grid container>
              <Grid item xs={2.5}>
                <img
                  style={{
                    height: "60px",
                    borderRadius: "50%",
                    width: "60px",
                    objectFit: "cover",
                  }}
                  src="https://images.unsplash.com/photo-1643101807569-a0db23e1c748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </Grid>
              <Grid item xs={6.5}>
                <p>Samuel Sadaha</p>
                <small className="Atname">@muel_sada</small>

                <div className="recomandLow">
                  <div>
                    <small>Total Assets </small>
                    <p>5.207 ETH</p>
                  </div>
                  <div>
                    <small>Total Assets </small>
                    <p>5.207 ETH</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3}>
                <p
                  onClick={() => {
                    setToggleFollow(!toggleFollow);
                  }}
                  className="follow"
                >
                  {/* {index === item.id && toggleFollow ? "Unfollow" : "Follow"} */}
                  {toggleFollow ? "Unfollow" : "Follow"}
                </p>
              </Grid>
            </Grid>
          </div>
          <hr />
          <p>Top NFT Collection</p>
          <Grid container>
            {recomnadation.map((i) => (
              <Grid
                sx={{
                  backgroundColor: "#3D3D52",
                  overflow: "hidden",
                  transition: "0.4s ease-in-out",
                }}
                item
                xs={4}
              >
                <CustomModal i={i} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

function CustomModal({ i }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <img
        onClick={handleOpen}
        style={{
          height: "90px",
          borderRadius: "10px",
          width: "90px",
          objectFit: "cover",
          cursor: "pointer",
        }}
        className="recomandImg"
        src={i.image}
        alt="NFT"
      />
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <Grid container>
            <Grid item xs={5}>
              <img
                onClick={handleOpen}
                style={{
                  height: "150px",
                  borderRadius: "10px",
                  width: "150px",
                  objectFit: "cover",
                }}
                src={i.image}
                alt=""
              />
            </Grid>
            <Grid item xs={7}>
              <p>Samuel Sadaha</p>
              <small className="Atname">@muel_ ১sada</small>

              <div className="recomandLow">
                <div>
                  <small>Total Assets </small>
                  <p>5.207 ETH</p>
                </div>
                <div>
                  <small>Total Assets </small>
                  <p>5.207 ETH</p>
                </div>
              </div>
            </Grid>
          </Grid>

          <br />
          <div className="modalDiv">
            {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
            <ButtonFill onClick={handleClose} title="Close " />
            <ButtonStock onClick={handleClose} title="Price a Bid" />
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default SingleRecomandation;
