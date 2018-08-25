This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


react 学习； 简单的 todoList项目；

1 什么是组件？ 
     react 是采用组件化开发，首先应该明白组件的概念； 简单说，组件就是页面上的一部分；多个组件构成了整个页面；

2 jsx 语法；只能写表达式，不能写语句；

4 jsx 中的 render 需要返回的是一个大的 jsx ；必须用一个div 包裹起来；

5 新增功能：  
   &nbsp;   1 在 state 中定义一个 inputValue；给 input 中的 value = {this.state.inputValue}将输入框绑定一个onChange 事件；<br/> 
    &nbsp;  2 每次输入后就将onChange 事件中的e 的value 值； 赋值给 inputValue; <br/> 
    &nbsp;  3 在点击新增按钮时，将this.state.inputValue 中的值，放入 uL 中的 li 的列表中； 
    &nbsp;  4 然后将输入框的值给清空；inputValue = '';

6 删除功能；<br/>
    &nbsp;  1 给 li 标签绑定事件； <br/>
    &nbsp;  2 通过新增的 Li 的下标 index; 利用splice 的方法去删除；<br/> 
7 组件拆分； <br/>
    &nbsp;  1 父组件通过属性的方式向子组件传递参数，子组件通过 props接受父组件传递过来的参数；<br/>
    &nbsp;  2子组件和父组件通信，子组件要调用父组件传递过来的方法；在子组件中将需要的参数创给父组件；


    