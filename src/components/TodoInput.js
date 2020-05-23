import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const changeInput = event => {
    setInput(event.target.value);
  }

  const onEnter = event => {
    if (event.key === "Enter") {
      onAdd(input);
      event.target.value = "";
    }
  }

  return (
    <>
      <input id="new-todo-title" className="new-todo" placeholder="할일을 추가해 주세요" autoFocus
             onChange={changeInput} onKeyPress={onEnter}/>
    </>
  );
}

export default TodoInput;