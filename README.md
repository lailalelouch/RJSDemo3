## Toggle Status

presentation : https://docs.google.com/presentation/d/1XD1QxGNfEP_BmNRlHPyP2h5WTj6gi4ql0WemniTw4vY

1. In `ToDoItem.js`, add an onClick event for the status icon with an alert like this to show them what will happen

   ```jsx
   <i className={statusIcon()} onClick={() => alert("CHANGE STATUS")} />
   ```

2. create a function with an alert and call this function in the onClick instead

   ```jsx

   ...
   const toggleStatus = () => alert('CHANGE STATUS')
   ...

   <i className={statusIcon()} onClick={toggleStatus} />
   ```

3. toggle the `done` property manually. Show that it **is** actually being toggled. Explain that react uses **state** to track changes and trigger updates.

   ```jsx
   ...
     const toggleStatus = () => {
       item.done = !item.done;
       console.log(item);
     };
   ...
   ```

4. Explain stateful (class-based) components.

5. Turn `ToDoItem` into a class-based component. Explain that `props` are now inherited as `this.props`.

   ```jsx
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

   ```jsx
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

   ```jsx
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

   ```jsx
   toggleStatus = () => {
     const newStatus = !this.state.done;
     this.setState({ done: newStatus });
   };
   ```

### Delete Task

1. in `ToDoItem.js`, add an onClick event for the delete icon with an alert

   ```jsx
   <i
     className="fa fa-times"
     onClick={() => alert(`DELETE task #${task.id}`)}
   />
   ```

2. Discuss why this component cannot delete itself. To delete itself it needs access to the array of items. It doesn't have the array.

3. Turn `App.js` into a class-based component, add a method that recieves an `id` and alerts it

   ```jsx

   class App extends Component {

     deleteTask = id => {
       alert(`DELETE task #${id}`);
     };

     ...
   }
   ```

4. Pass this method down through `ToDoList` to `ToDoItem` as a prop

   `App.js`

   ```jsx
   <ToDoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
   ```

   `ToDoList.js`

   ```jsx
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

   ```jsx
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
