import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState, getListById } from "../store";

const List = () => {
  // const dispatch = useAppDispatch();
  const list = useSelector((state: RootState) => state.app.entities);

  // 在ssr同构应用中 useEffect这个hook并不能在服务端渲染的时候被调用
  // useEffect(() => {
  //   dispatch(getListById(24381616));
  // }, []);

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
        {list.map((item) => (
          <li key={item.id}>
            <img
              src={item.al?.picUrl}
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
List.getInitialData = async (store: any) => {
  return store.dispatch(getListById(24381616));
};

export default List;
