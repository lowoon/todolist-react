import React, { useState } from 'react';
import ActiveCategory from './ActiveCategory';
import AllCategory from './AllCategory';
import CompletedCategory from './CompletedCategory';

function TodoCount({ todoItems, selectedCategory, length }) {
  const [classNames, setClassNames] = useState(["all selected", "active", "completed"]);
  const classNameList = ["all", "active", "completed"];

  const onClickCategory = (name, selectedList) => {
    const updatedClassNames = [...classNames].map((className, index) => {
      if (className === name) {
        return classNameList[index] + " selected";
      }
      return classNameList[index];
    })
    setClassNames(updatedClassNames);
    selectedCategory(selectedList);
  }

  return (
    <>
      <span
        className="todo-count">총 <strong>{length}</strong> 개</span>
      <ul className="filters">
        <AllCategory name={classNames[0]} onClickCategory={onClickCategory} list={todoItems}/>
        <ActiveCategory name={classNames[1]} onClickCategory={onClickCategory} list={todoItems}/>
        <CompletedCategory name={classNames[2]} onClickCategory={onClickCategory} list={todoItems}/>
      </ul>
    </>
  );
}

export default TodoCount;