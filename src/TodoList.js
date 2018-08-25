import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  handleButtonClick= ()=> {
    this.setState({
      list:[...this.state.list,' hello world']
    })
  };
  render() {
    return (
      <div>
          <div>
            <input type="text"/>
            <button onClick={this.handleButtonClick}>add</button>
          </div>
          <ul>
          {
            this.state.list.map( (item,index) => {
              return <li key={index}>{item}</li>
            })
          }
          </ul>
      </div>
    );
  }
}

export default TodoList;
