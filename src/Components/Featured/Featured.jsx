import {
  Add,
  Delete,
  RemoveRedEyeOutlined,
  WrapTextOutlined,
} from "@material-ui/icons";
import React from "react";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="first">
          <div className="btn">
            <button>
              <Add />
              <span>Add Role</span>
            </button>
          </div>
          <WrapTextOutlined className="icon" />
          <Delete className="icon" />
        </div>
        <div className="second">
          <table>
            <thead>
              <tr>
                <th>Department/Role Name</th>
                <th>Access Level</th>
                <th>No. of members</th>
                <th>Last Updated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    className="input"
                  />
                  <label for="html">Person</label>
                </td>
                <td>
                  <div className="access active">All Access</div>
                </td>
                <td>4</td>
                <td>1 min ago</td>

                <td>
                  <RemoveRedEyeOutlined />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">External Faculty</label>
                </td>
                <td>
                  <div className="access restricted">Restricted Access</div>
                </td>
                <td>4</td>
                <td>1 min ago</td>

                <td>
                  <RemoveRedEyeOutlined />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">Lab Assistants</label>
                </td>
                <td>
                  <div className="access restricted">Restricted Access</div>
                </td>
                <td>16</td>
                <td>1 min ago</td>

                <td>
                  <RemoveRedEyeOutlined />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">Non-teaching staff</label>
                </td>
                <td>
                  <div className="access restricted">Restricted Access</div>
                </td>
                <td>4</td>
                <td>1 min ago</td>

                <td>
                  <RemoveRedEyeOutlined />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label for="html">Supervisors</label>
                </td>
                <td>
                  <div className="access active">All Access</div>
                </td>
                <td>1</td>
                <td>1 min ago</td>

                <td>
                  <RemoveRedEyeOutlined />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Featured;
