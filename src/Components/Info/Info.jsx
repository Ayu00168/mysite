import React from "react";
import "./info.scss";

const Info = () => {
  return (
    <div className="intro">
      <div className="top">
        <span className="head">Financial Details</span>
        <span className="details">
          All aspects in the Financial details module
        </span>
      </div>
      <div className="bottom">
        <div className="right">
          <h4>Access Control</h4>
          <div className="info">
            <input type="radio" />
            <span className="title">Access Control</span>
            <span className="title-desc">Can access all items</span>
          </div>
          <div className="info">
            <input type="radio" />
            <span className="title">Restricted Access</span>
            <span className="title-desc">
              Can only assigned or created items
            </span>
          </div>
        </div>
        <div className="left">
          <h4>Permission</h4>
          <div className="options">
            <input type="checkbox" />
            <span>View items in access</span>
          </div>
          <div className="options">
            <input type="checkbox" />
            <span>Edit items in access</span>
          </div>
          <div className="options">
            <input type="checkbox" />
            <span>Create items in access</span>
          </div>
          <div className="options">
            <input type="checkbox" />
            <span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
