import React from 'react';
import CheckBox from './CheckBox';
import TodoDelete from './TodoDelete';

function TodoList({ onCheckTodoItem, todoItems, onDelete }) {
  return (
    <ul id="todo-list" className="todo-list">
      {todoItems.map(todoItem => {
        return (
          <li className={todoItem.isCompleted && "completed"} key={Math.random()}>
            <div className="view">
              <CheckBox onCheck={() => onCheckTodoItem(todoItem._id)}
                        isCompleted={todoItem.isCompleted}/>
              <label className="label">{todoItem.content}</label>
              <TodoDelete onDelete={() => onDelete(todoItem._id)}/>
            </div>
            <input className="edit" value="새로운 타이틀"/>
          </li>
        )
      })
      }
    </ul>
  );
}

export default TodoList;