import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue:''
    }
  }
  // 点击新增
  handleButtonClick= ()=> {
    this.setState({
      list:[...this.state.list, this.state.inputValue],
      inputValue:''
    })
  };
  //获取到输入框的值
  handleInputChange = (e)=> {
    this.setState({
      inputValue: e.target.value
    })
  }
  //删除生成的列表中的项
  handleDeleteItemClick (index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
  render() {
    return (
      <div>
          <div>
          <input value={this.state.inputValue} type="text" onChange={this.handleInputChange}/>
            <button onClick={this.handleButtonClick}>add</button>
          </div>
          <ul>
          {
            this.state.list.map( (item,index) => {
              return <li key={index} onClick={this.handleDeleteItemClick.bind(this,index)}>{item}</li>
            })
          }
          </ul>
      </div>
    );
  }
}

export default TodoList;
