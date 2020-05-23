import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ onCheckTodoItem, todoItems, onDelete }) {
  return (
    <ul id="todo-list" className="todo-list">
      {todoItems.map(todoItem => (
          <TodoItem todoItem={todoItem}
                    onCheckTodoItem={onCheckTodoItem}
                    onDelete={onDelete}
                    key={todoItem._id}
          />
        )
      )}
    </ul>
  );
}

export default TodoList;