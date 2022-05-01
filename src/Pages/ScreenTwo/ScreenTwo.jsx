import React from "react";
import Screen from "../../Components/Screen2/Screen";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";

const ScreenTwo = () => {
  return (
    <div className="App">
      <div className="siderbar">
        <Sidebar />
      </div>
      <div className="topbar">
        <Topbar />
        <hr />
        <Screen />
      </div>
    </div>
  );
};

export default ScreenTwo;
