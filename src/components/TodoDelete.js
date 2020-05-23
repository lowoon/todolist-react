import React from 'react';

function TodoDelete({ onDelete }) {
  const onBtn = event => {
    if (!event.target.classList.contains("destroy")) {
      return;
    }
    onDelete();
  }

  return (
    <button className="destroy" onClick={onBtn}>
    </button>
  );
}

export default TodoDelete;