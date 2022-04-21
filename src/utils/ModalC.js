import * as React from "react";
import Box from "@mui/material/Box";
import { BsCircle } from "react-icons/bs";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

import metaqr from "../assects/connect/Group 78.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "rgba(0, 0, 0, 0.61)",
  border: "0px solid transparent",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  //   p: 4,
};

export default function ModalC({ name, logo }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const QR = metaqr;

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <BsCircle onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography> */}
          <div className="modalheader">
            <div className="qr">
              <div className="header pb-3 d-flex justify-content-between">
                <div className="img">
                  <img style={{ width: "30px" }} src={logo} alt="" />
                  <small
                    style={{
                      color: "#fff",
                      marginLeft: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {name}
                  </small>
                </div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ color: "#fff", cursor: "pointer" }}
                />
              </div>
              <div className="img">
                <img className="img-fluid" src={QR} alt="" />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
