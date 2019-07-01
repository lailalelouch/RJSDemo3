import React from "react";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
