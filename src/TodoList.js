import React, { Component } from "react";

import "./App.css";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    let taskRows = this.props.tasks.map(task => (
      <TodoItem task={task} key={task.taskName} />
    ));

    return (
      <table className="table">
        <tbody>
          <tr className="headerRow">
            <th>STATUS</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
          {taskRows}
        </tbody>
      </table>
    );
  }
}
export default TodoList;
