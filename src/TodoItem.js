import React, { Component } from "react";

import "./App.css";

class TableRow extends Component {
  render() {
    const task = this.props.task;

    const statusIcon = done => {
      if (done) {
        return "fa fa-check-circle";
      } else {
        return "fa fa-times-circle";
      }
    };

    return (
      <tr className="row">
        <td>
          <i className={statusIcon(task.done)} />
        </td>
        <td>{task.task}</td>
        <td className={task.priority}>{task.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default TableRow;
