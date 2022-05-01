import React from "react";
import {
  Apps,
  HelpOutlined,
  NotificationImportantRounded,
  RssFeedOutlined,
  Sync,
} from "@material-ui/icons";

import "./topbar.scss";
const Topbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="top">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/31/11/59/androgynous-6588615__340.jpg"
            alt=""
          />
          <span className="name">Ayush</span>
          <NotificationImportantRounded className="icon" />
          <HelpOutlined className="icon" />
        </div>
        <div className="bottom">
          <div className="bottomDesc ">
            <RssFeedOutlined />
            <span className="desc active">Permission</span>
          </div>
          <div className="hr">|</div>

          <div className="bottomDesc">
            <Apps />
            <span className="desc">Approval Member</span>
          </div>

          <div className="right">
            <div className="rightDesc">
              <Sync className="rightIcon" />
              <span> Last synced 15 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
