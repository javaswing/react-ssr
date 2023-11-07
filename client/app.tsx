import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import List from "./components/list";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default App;
