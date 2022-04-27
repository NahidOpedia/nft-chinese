import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import SingleProduct from "../components/SingleProduct";
import YouTube from "../components/skletor";
import ButtonStock from "../utils/ButtonStock";
import { search } from "../utils/fakedata";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import propix from "../assects/market/Mask Group 5.png";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import CollapsibleTable from "../utils/CollapedC";
import { useParams } from "react-router-dom";

import { server } from "../config/index";
import axios from "axios";

function SearchUser() {
  const [detail, setDetail] = useState([]);

  let { id } = useParams();

  const getUser = async () => {
    await axios.get(`${server}/api/user/userinfo/?id=${id}`).then((res) => {
      // setDetail(res.data.data)
      console.log(res);
    });
  };

  const [seletedItem, setSeletedItem] = useState("全部");
  const [totlaProduct, setTotlaProduct] = useState(8);
  const [loaderSpin, setLoaderSpin] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const usersidebar = () => {
    setSidebar(!sidebar);
  };

  const filteredData = search.filter((i) => i.category === seletedItem);

  const filterlist = ["全部", "冒险"];

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
      getUser();
    } else {
    }
  }, [detail]);
  return (
    <div
      className="productsection mt-md-5  pt-responsive"
      style={{ background: "#fff" }}
    >
      <div className="userprofile">
        <div
          className="profile profilebackground"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1422466654108-5e533f591881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="img">
            <img src={propix} alt="" />
          </div>
        </div>
        <div className="background">
          <h4 className="name">Elvis Khoo</h4>

          <div className="badges">
            <div className="d-flex justify-content-between maindiagramdiv">
              <div
                style={{
                  borderRadious: "10px!important",
                  borderTopLeftRadius: "11px",
                  borderBottomLeftRadius: "11px",
                }}
                className="profilediagram"
              >
                <h2>30</h2>
                <p> 项目</p>
              </div>
              <div className="profilediagram">
                <h2>1</h2>
                <p>拥有者</p>
              </div>
              <div className="profilediagram">
                <h2>0.04 BNB</h2>
                <p>底价</p>
              </div>
              <div
                style={{
                  borderRadious: "10px!important",
                  borderTopRightRadius: "11px",
                  borderBottomRightRadius: "11px",
                }}
                className="profilediagram"
              >
                <h2>0.00 BNB</h2>
                <p>成交额</p>
              </div>
            </div>
            <p>
              Welcome to the “Burn It Down!” Pyromaniacs collection, a
              collaboration between Cipher Volt and Centric. Only 1000
              Pyromaniacs are available. *Not affiliated with Larva Labs
            </p>
            <Filter
              menuTitle={filterlist}
              setSeletedItem={setSeletedItem}
              seletedItem={seletedItem}
            />
          </div>
        </div>
      </div>

      <div className="wrapper" style={{ borderTop: "1px solid #e6e6e6" }}>
        <Grid container>
          <Grid item xl={sidebar ? 2 : 1} lg={sidebar ? 2 : 1}>
            {!sidebar ? (
              <div className="sidebar">
                <AiOutlineMenu className="sidebaricon" onClick={usersidebar} />
              </div>
            ) : (
              <div className="sidebarExpand">
                <div className="mb-4 header d-flex justify-content-between">
                  <div>
                    <span className="px-2">筛选</span>
                  </div>
                  <div className="collapsarrow">
                    <MdOutlineKeyboardArrowLeft
                      className="sidebaricon"
                      onClick={usersidebar}
                    />
                  </div>
                </div>
                <CollapsibleTable />
              </div>
            )}
          </Grid>
          <Grid
            className="px-4"
            item
            xl={sidebar ? 10 : 11}
            lg={sidebar ? 10 : 11}
          >
            <Grid container className="mb-1">
              <Grid className="p-2" item md={6} xs={12}>
                <input
                  className="profileinput"
                  type="text"
                  placeholder="搜索收藏品"
                />
              </Grid>
              <Grid className="p-2" item md={3} xs={6}>
                <UnstyledSelectSimple />
              </Grid>
              <Grid className="p-2" item md={3} xs={6}>
                <UnstyledSelectSimple />
              </Grid>
            </Grid>
            <h2 className="TotalItem">30 items</h2>
            <Grid container>
              {search.slice(0, totlaProduct).map((item) => (
                <Grid item xl={2.4} lg={3} md={4} sm={6} xs={12}>
                  <Link className="Link" to="/moreAboutItem">
                    <SingleProduct item={item} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* widgets */}
        {loaderSpin && (
          <div onClick={() => loadmorehandler()} className="loadmore">
            <YouTube />
          </div>
        )}
        {
          <div onClick={() => loadmorehandler()} className="loadmore">
            <ButtonStock title="Load More" />
          </div>
        }
      </div>
    </div>
  );
}

export default SearchUser;

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 100%;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  margin: 25px 0 60px;

  &:hover {
    background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

function UnstyledSelectSimple() {
  return (
    <CustomSelect defaultValue={10}>
      <StyledOption value={10}>Ten</StyledOption>
      <StyledOption value={20}>Twenty</StyledOption>
      <StyledOption value={30}>Thirty</StyledOption>
    </CustomSelect>
  );
}
