1- In TableRow.js, add an onClick event for the status <td> with an alert like this to show them what will happen

  <td onClick={alert('button clicked')}>
    <i className={statIcon()} style={iconColor()} />
  </td>

2- Next, fix the function call

  <td onClick={() => alert('button clicked')}>
    <i className={statIcon()} style={iconColor()} />
  </td>

2- create a constructer and create a function with an alert and call this function in the onClick instead

constructor(props) {
super(props)
this.clicked = this.clicked.bind(this);
}

...
clicked(){
alert('button clicked')
}

...

  <td onClick={this.clicked}>
      <i className={statIcon()} style={iconColor()} />
  </td>

3- add a state using the values of the props.task
constructor(props) {
...

    this.state = {
      status : this.props.task.status,
    }

    ...

}

4 - change the value (toggle) of the status state in the previously created function.

clicked(){
this.setState({status : !this.state.status})
console.log(this.state.status)
}

5- change the used status in the render function from props to state

render(){

    let statIcon = () => {
      return this.state.status
        ? "fa fa-check-circle"
        : "fa fa-times-circle";
    };

    let iconColor = () => {
      return this.state.status ? { color: "green" } : { color: "red" };
    };

    ...

}
