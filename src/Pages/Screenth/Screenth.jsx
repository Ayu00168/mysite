import React from "react";
import Screens from "../../Components/ScreenThree/Screens";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";

const Screenth = () => {
  return (
    <div className="App">
      <div className="siderbar">
        <Sidebar />
      </div>
      <div className="topbar">
        <Topbar />
        <hr />
        <Screens />
      </div>
    </div>
  );
};

export default Screenth;
