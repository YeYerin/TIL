import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 이채은 바보', checked: false },
      { id: 1, text: ' 박예린 천재', checked: true }, 
      { id: 2, text: ' 김다은 멍청이', checked: false }
    ]
  }

  //input 내용 변경
  handleChange = (e) => {
    this.setState({
      input : e.target.value
    });
  }

  //todo 추가
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input:'',
      // 리액트 state에서 배열은 push 사용 안됨. 새롭게 만드는 concat으로!
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }
  //enter 눌러도 추가가능
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos]; //배열복사

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const {input, todos} = this.state;
    //비구조화할당 
    //this.handleChange,this.handleCreate,this.handleKeyPress 생략
    const{
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form 
          value = {input}
          onKeyPress = {handleKeyPress}
          onChange = {handleChange}
          onCreate = {handleCreate}
        />
      )}>
        <TodoItemList 
          todos={todos} 
          onToggle = {handleToggle} 
          onRemove = {handleRemove}/>
      </TodoListTemplate> 
    );
  }
}

export default App;