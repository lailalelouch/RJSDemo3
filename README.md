## Toggle Status

presentation : https://drive.google.com/open?id=1sVGFKDgr3Kd138my5XHJuJfwJMAuWPgH

1. In `ToDoItem.js`, add an onClick event for the status icon with an alert like this to show them what will happen

```javascript
<i className={statIcon()} onClick={() => alert("CHANGE STATUS")} />
```

2. create a function with an alert and call this function in the onClick instead

```javascript

...
const toggleStatus = () => alert('CHANGE STATUS')
...

<i className={statIcon()} onClick={toggleStatus} />
```

3. toggle the `done` property manually. Show that it **is** actually being toggled. Explain that react uses **state** to track changes and trigger updates.

```javascript
...
  const toggleStatus = () => {
    item.done = !item.done;
    console.log(item);
  };
...
```

4. Explain stateful (class-based) components.

5. Turn `ToDoItem` into a class-based component. Explain that `props` are now inherited as `this.props`.

```javascript
import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    const item = this.props.item;

    ...

    return (
      <tr className="row">
        ...
      </tr>
    );
  }
}
```

6. Turn `toggleStatus` and `statusIcon` into methods

```javascript
class ToDoItem extends Component {
  statusIcon = () => {
    const item = this.props.item;

    ...
  };

  toggleStatus = () => {
    const item = this.props.item;

    ...
  };

  render() {
    const item = this.props.item;

    return (
      <tr className="row">
        <td>
          <i className={this.statusIcon()} onClick={this.toggleStatus} />
        </td>
        ...
      </tr>
    );
  }
}
```

7. add a state using the value of the `this.props.item.done`.
   Show the state in the dev tools.
   Switch to using state in the methods.
   Show that directly mutating state doesn't work and throws a warning.

```javascript
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
  this.state.done = !this.state.done;
  console.log(this.state);
};
```

8. Use `setState` to change the value (toggle) of the in `toggleStatus`. Show the state changing in the dev tools.

```javascript
toggleStatus = () => {
  const newStatus = !this.state.done;
  this.setState({ done: newStatus });
};
```

### Delete Task

1. in `ToDoItem.js`, add an onClick event for the delete icon with an alert

```javascript
<i className="fa fa-times" onClick={() => alert(`DELETE task #${task.id}`)} />
```

2. Discuss why this component cannot delete itself. To delete itself it needs access to the array of items. It doesn't have the array.

3. Turn `App.js` into a class-based component, add a method that recieves an `id` and alerts it

```javascript

class App extends Component {

  deleteTask = id => {
    alert(`DELETE task #${id}`);
  };

  ...
}
```

4. Pass this method down through `ToDoList` to `ToDoItem` as a prop

`App.js`

```javascript
<ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
```

`ToDoList.js`

```javascript
let taskRows = this.props.tasks.map(task => (
  <ToDoItem task={task} key={task.task} deleteTask={props.deleteTask} />
));
```

5. Replace the alert with this method

`ToDoItem.js`

```javascript
<i className="fa fa-times" onClick={() => this.props.deleteTask(task.id)} />
```

6. Give `App` a list of tasks for state. Rewrite `deleteTask` to actually modify state.

`App.js`

```javascript
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
```
