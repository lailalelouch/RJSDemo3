import React from "react";

function ToDoItem(props) {
  const item = props.item;

  const statusIcon = () => {
    if (item.done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };

  return (
    <tr className="row">
      <td>
        <i className={statusIcon()} />
      </td>
      <td>{item.task}</td>
      <td className={item.priority}>{item.priority.toUpperCase()}</td>
      <td>
        <i className="fa fa-times" />
      </td>
    </tr>
  );
}

export default ToDoItem;
