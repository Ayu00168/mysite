import React from "react";
import Featured from "../../Components/Featured/Featured";
import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";

const ScreenOne = () => {
  return (
    <div className="App">
      <div className="siderbar">
        <Sidebar />
      </div>
      <div className="topbar">
        <Topbar />
        <hr />
        <Featured />
      </div>
    </div>
  );
};

export default ScreenOne;
