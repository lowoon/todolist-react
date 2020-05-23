import React from 'react';

function CheckBox({ onCheck, isCompleted }) {
  const onCheckBox = event => {
    if (!event.target.classList.contains("toggle")) {
      return;
    }
    onCheck();
  }

  return (
    <>
      <input className="toggle" type="checkbox" onClick={onCheckBox}
             checked={isCompleted && "checked"}/>
    </>
  );
}

export default CheckBox;