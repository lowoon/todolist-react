import React from 'react';

function CompletedCategory({ name, onClickCategory, list }) {
  const onClickAll = e => {
    const selectedList = [...list].filter(item => item.isCompleted);
    onClickCategory(name, selectedList);
  }

  return (
    <li>
      <a className={name} href={"#/" + name}
         onClick={onClickAll}>완료한 일</a>
    </li>
  );
}

export default CompletedCategory;