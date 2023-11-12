import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import List from "./components/list";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Provider>
  );
}

export default App;
