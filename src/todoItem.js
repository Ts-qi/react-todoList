import React, { Component } from 'react';

class TodoItem extends Component {
    //删除操作
    handleClickDelete = ()=> {
        const { deleteItem,index} = this.props
        deleteItem(index)
    }
    render(){
        const { content} = this.props;
        return (
            <div onClick={this.handleClickDelete}>
                {content}
            </div>
        )
    }
}

export default TodoItem;