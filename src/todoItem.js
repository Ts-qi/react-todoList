import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    //删除操作
    handleClickDelete() {
        this.props.deleteItem(this.props.index)
    }
    render(){
        return (
            <div onClick={this.handleClickDelete.bind(this)}>
                {this.props.content}
            </div>
        )
    }
}

export default TodoItem;