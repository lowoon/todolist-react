import React from 'react';

function AllCategory({ name, onClickCategory, list }) {
  const onClickAll = e => {
    onClickCategory(name, list);
  }

  return (
    <li>
      <a className={name} href={"#/" + name}
         onClick={onClickAll}>전체 보기</a>
    </li>
  );
}

export default AllCategory;