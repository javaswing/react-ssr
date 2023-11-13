import React from "react";
import { Route, Routes } from "react-router-dom";
import StoreProvider from "./StoreProvider";
import routes from "./routes";
import { StoreInterface } from "./store";

export type PageProps = {
  initialZustandState: StoreInterface;
};

function App({ initialZustandState }: PageProps) {
  return (
    <StoreProvider store={initialZustandState}>
      <Routes>
        {routes.map((r) => {
          return <Route key={r.path} path={r.path} Component={r.Component} />;
        })}
      </Routes>
    </StoreProvider>
  );
}

export default App;
