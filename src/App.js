import React, { Component } from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import ToDoList from "./ToDoList";

// Data
import tasks from "./data";

class App extends Component {
  state = {
    tasks: tasks
  };

  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
