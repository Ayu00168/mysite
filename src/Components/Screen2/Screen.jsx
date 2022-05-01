import React from "react";
import { AddCircleOutline, ArrowBackIos, Edit } from "@material-ui/icons";

import "./screen.scss";

const Screen = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="first">
          <div className="btn">
            <ArrowBackIos />
          </div>
          <soan>Teachers</soan>
          <Edit className="icon" />
        </div>
        <div className="second">
          <table>
            <thead>
              <tr>
                <th>Department/Role Name</th>
                <th>Access Level</th>
                <th>Summary</th>
                <th>Last Updated</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <AddCircleOutline className="icons" />
                  <label for="html">Enrolling Students</label>
                </td>
                <td>
                  <div className="access active">All Access</div>
                </td>
                <td>View| Create | Edit | Delete</td>
                <td>1 min ago</td>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" name="" checked />
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <AddCircleOutline className="icons" />
                  <label for="html">Financial Details</label>
                </td>
                <td>
                  <div className="access none">No Access</div>
                </td>
                <td></td>
                <td>1 min ago</td>

                <td>
                  <div className="checkbox">
                    <input type="checkbox" name="" />
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <AddCircleOutline className="icons" />
                  <label for="html">Furniture order</label>
                </td>
                <td>
                  <div className="access restricted">Restricted Access</div>
                </td>
                <td>View | Create</td>
                <td>1 min ago</td>

                <td>
                  <div className="checkbox">
                    <input type="checkbox" name="" checked />
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <AddCircleOutline className="icons" />
                  <label for="html">Technology Equipment</label>
                </td>
                <td>
                  <div className="access restricted">Restricted Access</div>
                </td>
                <td>View | Create</td>
                <td>1 min ago</td>

                <td>
                  <div className="checkbox">
                    <input type="checkbox" name="" checked />
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <AddCircleOutline className="icons" />
                  <label for="html">Organizational Modification</label>
                </td>
                <td>
                  <div className="access active">All Access</div>
                </td>
                <td>View | Create | Edit | Delete</td>
                <td>1 min ago</td>

                <td>
                  <div className="checkbox">
                    <input type="checkbox" name="" checked />
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <AddCircleOutline className="icons" />
                  <label for="html">Organizational Modification</label>
                </td>
                <td>
                  <div className="access none">No access</div>
                </td>
                <td> </td>
                <td>1 min ago</td>

                <td>
                  <div className="checkbox">
                    <input type="checkbox" name="" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Screen;
