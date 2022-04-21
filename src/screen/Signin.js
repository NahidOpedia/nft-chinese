import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Signin() {
  const navigate = useNavigate();

  const signinhandlere = () => {
    localStorage.setItem("logedIn", true);
    navigate("/", { replace: true });
  };

  return (
    <div className="wrapper mt-4">
      <Grid container>
        <Grid item xl={6} lg={6} md={0}>
          <div className="signContent">
            <h1>
              NFT <span>Frame</span>
            </h1>
            <p>
              Best Collection Of <span>NFT</span> Digital Assets
            </p>
          </div>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sx={{ alignSelf: "center" }}>
          <div class="containerF">
            <form>
              <label for="lname">Email</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="ex: nahid.muradabir@gmail.com"
              />
              <label for="lname">Password</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <p className="forgot">Forgot password? Click here</p> <br />
              <button className="submit" onClick={signinhandlere}>
                Submit
              </button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signin;
