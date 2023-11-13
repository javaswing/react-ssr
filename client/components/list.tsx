import React from "react";
import { Link } from "react-router-dom";
import { PageType } from "../../types";
import { StoreInterface, StoreType, initializeStore, useStore } from "../store";

const List: PageType<{
  props: {
    initialZustandState: StoreInterface;
  };
}> = () => {
  const list = useStore((s) => s.list);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>列表</li>
      </ul>
      <p></p>
      <h1>这是列表页面：歌单详情</h1>
      <ul>
        {list?.map((item) => (
          <li key={item.id}>
            <img
              src={item.al?.picUrl + "?param=140y140"}
              style={{ width: "100px", height: "100px", background: "#ccc" }}
            ></img>
            <h4>{item.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 服务端调用
List.getInitialProps = async (store: StoreType) => {
  await store.getState().fetch();
  return {
    props: {
      initialZustandState: JSON.parse(JSON.stringify(store.getState())),
    },
  };
};

export default List;
