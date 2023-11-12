import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        {routes.map((r) => {
          return <Route key={r.path} path={r.path} element={r.element} />;
        })}
      </Routes>
    </Provider>
  );
}

export default App;
