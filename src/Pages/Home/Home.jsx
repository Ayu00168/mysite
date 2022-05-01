import React from "react";
import ScreenOne from "../ScreenOne/ScreenOne";
import Screenth from "../Screenth/Screenth";
import ScreenTwo from "../ScreenTwo/ScreenTwo";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="a">
        <ScreenOne />
      </div>
      <div className="a">
        <ScreenTwo />
      </div>
      <div className="a">
        <Screenth />
      </div>
    </div>
  );
};

export default Home;
