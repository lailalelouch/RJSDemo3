import React, { Component } from "react";

import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import tasks from "./data";

import Table from "./Table";

class App extends Component {
  render() {
    return (
      <div className="rectangle">
        <p className="title">TO DO LIST</p>
        <Table tasks={tasks} />
      </div>
    );
  }
}

export default App;
