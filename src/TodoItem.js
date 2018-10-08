import React, { Component } from "react";

import "./App.css";

class TableRow extends Component {
  render() {
    const task = this.props.task;
    let statusIcon;

    if (task.done) {
      statusIcon = "fa fa-check-circle";
    } else {
      statusIcon = "fa fa-times-circle";
    }

    return (
      <tr className="row">
        <td>
          <i className={statusIcon} />
        </td>
        <td>{task.task}</td>
        <td className={task.priority}>{task.priority.toUpperCase()}</td>
      </tr>
    );
  }
}

export default TableRow;
