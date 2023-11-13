import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ul>
        <li>首页</li>
        <li>
          <Link to="/list">列表</Link>
        </li>
      </ul>
      <p></p>
      <h1>你好！React Server render </h1>
      <p>count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>添加</button>
      <p />
      <button onClick={() => console.log("click me")}>触发console</button>
    </div>
  );
}

export default Home;
