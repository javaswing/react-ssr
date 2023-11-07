import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>你好！React Server render </h1>
      <p>count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>添加</button>
      <p />
      <button onClick={() => console.log("click me")}>触发console</button>
    </div>
  );
}

export default App;
