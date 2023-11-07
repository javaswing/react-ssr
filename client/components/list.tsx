import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>列表</li>
      </ul>
      <p></p>
      <h1>这是列表页面</h1>
    </div>
  );
};

export default List;
