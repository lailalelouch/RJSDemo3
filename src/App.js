import React, { Component } from "react";

import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

class App extends Component {
  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <table>
          <thead>
            <tr>
              <th>STATUS</th>
              <th>TASK</th>
              <th>PRIORITY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fa fa-check-circle" />
              </td>
              <td>Go to the supermarket</td>
              <td className="middle">MIDDLE</td>
            </tr>
            <tr>
              <td>
                <i className="fa fa-times-circle" />
              </td>
              <td>Cook dinner</td>
              <td className="high">HIGH</td>
            </tr>
            <tr>
              <td>
                <i className="fa fa-times-circle" />
              </td>
              <td>Call Mom</td>
              <td className="low">LOW</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
