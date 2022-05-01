import React from "react";
import "./sidebar.scss";
import {
  AccountTreeOutlined,
  SecurityOutlined,
  WorkOutlined,
} from "@material-ui/icons";
const Sidebar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="infoContainer">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.ugRiJ3RVikVV42BTMcqHigHaHa&pid=Api&P=0&w=165&h=165"
            alt=""
          />
          <span className="desc">Classroom Manager</span>
        </div>
        <div className="options">
          <div className="icon">
            <AccountTreeOutlined />
            <span className="iconDesc">Project</span>
          </div>
          <div className="icon">
            <WorkOutlined />
            <span className="iconDesc">Classroom</span>
          </div>
          <div className="icon active">
            <SecurityOutlined />
            <span className="iconDesc">Permission</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
