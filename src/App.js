import React, { Component } from "react";

import "../node_modules/font-awesome/css/font-awesome.min.css";

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
          <thead class="headerRow">
            <th>STATUS</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className={statusIcon(tasks[0].done)} />
              </td>
              <td>{tasks[0].task}</td>
              <td className={tasks[0].priority}>
                {tasks[0].priority.toUpperCase()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
