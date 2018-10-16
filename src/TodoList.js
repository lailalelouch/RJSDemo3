import React, { Component } from "react";

import "./App.css";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    let taskRows = this.props.tasks.map(task => (
      <TodoItem task={task} key={task.task} />
    ));

    return (
      <table className="table">
        <thead>
          <tr className="headerRow">
            <th>STATUS</th>
            <th>TASK</th>
            <th>PRIORITY</th>
          </tr>
        </thead>
        <tbody>{taskRows}</tbody>
      </table>
    );
  }
}
export default TodoList;
