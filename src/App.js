import React from "react";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

import TodoList from "./TodoList";

function App() {
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
      <Table tasks={tasks} />
    </div>
  );
}

export default App;
