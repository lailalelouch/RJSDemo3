import React, { Component } from "react";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

class App extends Component {
  render() {
    const statusIcon = done => {
      if (done) {
        return "fa fa-check-circle";
      } else {
        return "fa fa-times-circle";
      }
    };

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
                <i className={statusIcon(true)} />
              </td>
              <td>Go to the supermarket</td>
              <td className="middle">MIDDLE</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
