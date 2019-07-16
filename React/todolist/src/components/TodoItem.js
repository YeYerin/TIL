import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.checked !== nextProps.checked;
    // }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        // text:todo내용, checke:체크박스상태, id:todo 아이디
        // onToggle: 체크박스 켜고끄기, onRemove: 아이템 삭제

        return (
            //id 넣어줄때 onClick={onToggle{id}}로 하면 무한반복, 주의하기
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation();    //onToggle말고,idRemove만 실행
                    onRemove(id) 
                }
                }> &times; </div> {/* &times은 X표시 */}
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div> {text} </div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;

