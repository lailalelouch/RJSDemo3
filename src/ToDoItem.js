import React, { Component } from "react";

class ToDoItem extends Component {
  state = {
    done: this.props.item.done
  };

  statusIcon = () => {
    if (this.state.done) {
      return "fa fa-check-circle";
    } else {
      return "fa fa-times-circle";
    }
  };

  toggleStatus = () => {
    const newStatus = !this.state.done;
    this.setState({ done: newStatus });
  };

  render() {
    const item = this.props.item;

    return (
      <tr className="row">
        <td>
          <i className={this.statusIcon()} onClick={this.toggleStatus} />
        </td>
        <td>{item.task}</td>
        <td className={item.priority}>{item.priority.toUpperCase()}</td>
        <td>
          <i
            className="fa fa-times"
            onClick={() => this.props.deleteTask(item.id)}
          />
        </td>
      </tr>
    );
  }
}

export default ToDoItem;
