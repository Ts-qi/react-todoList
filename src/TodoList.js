import React, { Component } from 'react';
import TodoItem from './todoItem';

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
  };
  //删除生成的列表中的项
  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    })
  };
  //获取列表数据
  getItemListData () {
    return(
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            deleteItem={this.handleDelete.bind(this)}
            content={item}
            index={index}
            key={index} />
        )
      })
    )
  }
  render() {
    return (
      <div>
          <div>
          <input value={this.state.inputValue} type="text" onChange={this.handleInputChange}/>
            <button onClick={this.handleButtonClick}>add</button>
          </div>
          <ul>{this.getItemListData()}</ul>
      </div>
    );
  }
}
export default TodoList;
