import React from 'react';
import CheckBox from './CheckBox';
import TodoDelete from './TodoDelete';

function TodoItem({ todoItem, onCheckTodoItem, onDelete }) {
  return (
    <li className={todoItem.isCompleted && "completed"}>
      <div className="view">
        <CheckBox onCheck={() => onCheckTodoItem(todoItem._id)}
                  isCompleted={todoItem.isCompleted}/>
        <label className="label">{todoItem.content}</label>
        <TodoDelete onDelete={() => onDelete(todoItem._id)}/>
      </div>
      <input className="edit" value="새로운 타이틀"/>
    </li>
  )
}

export default TodoItem;