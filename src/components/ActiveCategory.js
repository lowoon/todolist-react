import React from 'react';

function ActiveCategory({ name, onClickCategory, list }) {
  const onClickAll = e => {
    const selectedList = [...list].filter(item => !item.isCompleted);
    onClickCategory(name, selectedList);
  }

  return (
    <li>
      <a className={name} href={"#/" + name}
         onClick={onClickAll}>해야할 일</a>
    </li>
  );
}

export default ActiveCategory;