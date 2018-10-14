import React from "react";

import "font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

import TodoList from "./TodoList";

function App() {
  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
