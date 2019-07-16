import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className = "form">
      {/*
        //value: input내용, onCreate: 버튼클릭시 실행함수
        //onChange: input 변경시 실행함수
        //onKeyPress: input 키입력시 실행함수(Enter시 onCreate와 동일하게하는 작업사용)
      */}
      <input value = {value} onChange = {onChange} onKeyPress = {onKeyPress}/>
      <div className = "create-button" onClick = {onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;