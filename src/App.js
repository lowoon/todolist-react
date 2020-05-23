import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoCount from './components/TodoCount';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      _id: 1, content: "자바 스크립트", isCompleted: false
    },
    {
      _id: 2, content: "자바", isCompleted: false
    }
  ]);
  const [id, setId] = useState(3);
  const [selectedItems, setSelectedItems] = useState([...todoItems]);
  const [length, setLength] = useState(todoItems.length);

  const setItems = updatedItems => {
    setTodoItems(updatedItems);
    setSelectedItems(updatedItems);
    setLength(updatedItems.length);
  }

  const todoItemsAddHandler = newItem => {
    setItems([...todoItems, { _id: id, content: newItem, isCompleted: false }]);
    const changedId = id + 1;
    setId(changedId);
  }

  const todoItemsCheckHandler = _id => {
    const updatedTodoItems = [...todoItems].map(todoItem => {
      if (todoItem._id === _id) {
        return { _id: _id, content: todoItem.content, isCompleted: !todoItem.isCompleted }
      }
      return todoItem
    })
    setItems(updatedTodoItems);
  }

  const todoItemsDeleteHandler = _id => {
    setItems([...todoItems].filter(item => item._id !== _id));
  }

  const selectedCategoryHandler = selectedList => {
    setLength(selectedList.length);
    setSelectedItems(selectedList);
  }

  return (
    <section className="todoapp">
      <div>
        <h1>TODOS</h1>
        <TodoInput onAdd={todoItemsAddHandler}/>
      </div>
      <div className="main">
        <input className="toggle-all" type="checkbox"/>
        <TodoList
          key={Math.random()}
          onCheckTodoItem={todoItemsCheckHandler}
          todoItems={selectedItems}
          onDelete={todoItemsDeleteHandler}/>
      </div>
      <div className="count-container">
        <TodoCount todoItems={todoItems}
                   selectedCategory={selectedCategoryHandler}
                   length={length}/>
      </div>
    </section>
  );
}

export default App;
