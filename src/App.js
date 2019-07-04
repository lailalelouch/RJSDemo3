import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import ToDoList from "./ToDoList";

// Data
import tasks from "./data";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
