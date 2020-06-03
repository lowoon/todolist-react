import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function TodoInput({ onAdd }) {
  const [state, dispatch] = useReducer(reducer, {
    input: ''
  });
  const { input } = state;

  const changeInput = event => {
    dispatch(event.target);
  };

  const onEnter = event => {
    if (event.key === "Enter") {
      onAdd(input);
      event.target.value = "";
    }
  };

  return (
    <>
      <input id="new-todo-title" className="new-todo" placeholder="할일을 추가해 주세요" autoFocus
             name="input" value={input} onChange={changeInput} onKeyPress={onEnter}/>
    </>
  );
}

export default TodoInput;