import React, { Component } from "react";

import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

class App extends Component {
  render() {
    return (
      <div class="rectangle">
        <p class="title">TO DO LIST</p>
        <table class="table">
          <tr class="headerRow">
            <th>STAT</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
          <tr class="row">
            <td>
              <i className="fa fa-check-circle" style={{ color: "green" }} />
            </td>
            <td>Go to the supermarket</td>
            <td style={{ color: "orange" }}>MIDDLE</td>
          </tr>
          <tr class="row">
            <i className="fa fa-times-circle" style={{ color: "red" }} />
            <td>Cook dinner</td>
            <td style={{ color: "red" }}>HIGH</td>
          </tr>
          <tr class="row">
            <i className="fa fa-times-circle" style={{ color: "red" }} />
            <td>Call Mom</td>
            <td style={{ color: "green" }}>LOW</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
