import logo from "./logo.svg";
import "./Media-querry.css";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Recomandation from "./components/Recomandation";
import Newslatter from "./components/Newslatter";
import Footer from "./components/Footer";
import Landing from "./screen/Landing";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screen/About";
import Signin from "./screen/Signin";
import { useEffect } from "react";
import Create from "./screen/Create";
import Layout from "./utils/Layout";
import Market from "./screen/Market";
import GetBetterDeals from "./screen/GetBetterDeals";
import Connect from "./screen/Connect";
import CreateNFT from "./screen/CreateNFT";
import Ranking from "./screen/Ranking";
import Game from "./screen/Game";
import Music from "./screen/Music";
import Art from "./screen/Art";
import Search from "./screen/Search";
import Blog from "./screen/Blog";
import SearchItem from "./screen/SearchItem";
import SearchItemMore from "./screen/SearchItemMore";
import Profile from "./components/Profile";
import { SnackbarProvider } from "notistack";
import SearchUser from "./screen/SearchUser";
import Setting from "./screen/Setting";

import Web3 from "web3";
import { useState } from "react";
import { server } from "../src/config/index";
import axios from "axios";
import {
  marketAbi,
  nftAbi,
  erc20Abi,
  factoryAbi,
} from "../src/components/utils/abi";
import SingleBlogDetails from "./screen/SingleBlogDetails";
import RankingUser from "./screen/RankingUser";

function App() {
  const [wallet, setWallet] = useState({
    bnbAccuracy: 18,
    defaultAddress: "linking wallet...",
    timer: null,
    //     defaultAddress: this.$t('linking'),
    web3: null,
    nftContract: null,
    marketContract: null,
    factoryContract: null,
    //     nftContractAddress: '0xd65E668A8797Ce5dcbCA05D8868A2DABb069B8CE',
    //     marketContractAddress: '0xDe540b79d8Fb535d34C1872E86Db539a51a8cd45',
    //     factoryContractAddress: '0x4386D74d714AD06fFD94a4f1c9A1678Cb0Fa0BF3',
    nftContractAddress: "0xd65E668A8797Ce5dcbCA05D8868A2DABb069B8CE",
    marketContractAddress: "0x0d9A8C506495c645e892579a94ae29A9be95f653",
    factoryContractAddress: "0xFa875636634437C41E8bCE3855Aa2CB50a5DC641",
  });

  const setDefaultAddress = (address) => {
    setWallet({ defaultAddress: address });
  };
  const setWeb3 = (web3) => {
    setWallet({ web3: web3 });
  };

  const setNftContract = (web3) => {
    setWallet({
      nftContract: new web3.eth.Contract(nftAbi, wallet.nftContractAddress),
    });
  };

  const setFactoryContract = (web3) => {
    setWallet({
      factoryContract: new web3.eth.Contract(
        factoryAbi,
        wallet.factoryContractAddress
      ),
    });
  };
  const setMarketContract = (web3) => {
    wallet.marketContract = new web3.eth.Contract(
      marketAbi,
      wallet.marketContractAddress
    );
  };

  //  User information
  const userInfo = async () => {
    await axios
      .get(`${server}/api/user/info/`, {
        headers: {
          Token: window.localStorage.getItem("Token"),
        },
      })
      .then((resu) => {
        if (resu.data.code == 0) {
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(resu.data.data)
          );
          localStorage.setItem(
            "lang",
            resu.data.data.language == 0 ? "zh" : "en"
          );
        }
      });
  };

  //Configuration
  const configuration = async () => {
    await axios
      .get(`${server}/api/main/config`, {
        headers: {
          Token: window.localStorage.getItem("Token"),
        },
      })
      .then((res) => {
        localStorage.setItem("config", JSON.stringify(res.data.data));
      });
  };

  // Login Information
  const Login = async (defaultAddress) => {
    console.log("Login from" + " " + defaultAddress);
    await axios
      .post(`${server}/api/user/login`, {
        username: defaultAddress,
        password: "123456ab",
      })
      .then((res) => {
        console.log("Are you logged in", res.data.code);
        if (res.data.code == 0) {
          window.localStorage.setItem("Token", res.data.data.Token);
          window.localStorage.setItem("defaultAddress", defaultAddress);
          userInfo();
          configuration();
        } else {
          console.log("loading Toast");
          //   setTimeout(function(){
          //     alert("Please connect you metamask!");
          //  }, 2000);//wait 2 seconds
        }
      });
  };

  useEffect(() => {
    Login(wallet.defaultAddress);
  }, []);

  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />}>
              {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/getbetterdeals" element={<GetBetterDeals />}></Route>
            <Route path="/connect" element={<Connect />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<SingleBlogDetails />}></Route>
            <Route path="/ranking" element={<Ranking />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/setting" element={<Setting />}></Route>

            <Route path="/market" element={<Market />}></Route>
            <Route path="/art" element={<Art />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/game" element={<Game />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path={"/user/:id"} element={<SearchUser />}></Route>
            <Route path={"/ranking-user/:id"} element={<RankingUser />}></Route>
            {/* <Route path="/user" element={<SearchUser />}></Route> */}
            <Route path="/SearchItem" element={<SearchUser />}></Route>
            {/* <Route path="/SearchItem" element={<SearchItem />}></Route> */}
            <Route path="/series/:address" element={<SearchItemMore />}></Route>

            <Route path="/create" element={<Create />}></Route>
            <Route path="/createnft" element={<CreateNFT />}></Route>

            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Layout>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
