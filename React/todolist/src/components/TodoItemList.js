//이 컴포넌트는 TodoItem 컴포넌트 여러개를 렌더링해주는 역할
//Template 컴포넌트를 만들었기 때문에 따로 스타일링 필요 없음
//리스트를 렌더링할때, 특히 동적인 경우 함수형이 아닌 클래스형으로 작성(성능 최적화)

import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    //todos : todo 객체들이 있는 배열
    //onToggle : 체크박스 키고 끄는 함수
    //onRemove : 아이템 삭제하는 함수

    const todoList = todos.map(
      ({id, text, checked}) => (
        <TodoItem
          id = {id}
          text = {text}
          checked = {checked}
          onToggle = {onToggle}
          onRemove = {onRemove}
          key = {id} //배열 렌더링 때 key 값 반드시
        />
      )
    )
    return (
      <div>
          {todoList}
      </div>
    );
  }
}

export default TodoItemList;