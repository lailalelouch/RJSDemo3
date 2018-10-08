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
            <th>STATUS</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
          <tr class="row">
            <td>
              <i className="fa fa-check-circle" />
            </td>
            <td>Go to the supermarket</td>
            <td className="middle">MIDDLE</td>
          </tr>
          <tr class="row">
            <i className="fa fa-times-circle" />
            <td>Cook dinner</td>
            <td className="high">HIGH</td>
          </tr>
          <tr class="row">
            <i className="fa fa-times-circle" />
            <td>Call Mom</td>
            <td className="low">LOW</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
