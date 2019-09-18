import React from "react";

import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  const taskRows = props.tasks.map(item => (
    <ToDoItem item={item} key={item.id} />
  ));

  return (
    <table className="table">
      <thead>
        <tr className="headerRow">
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>{taskRows}</tbody>
    </table>
  );
}

export default ToDoList;
