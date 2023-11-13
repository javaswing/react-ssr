import { PropsWithChildren } from "react";
import { Provider, StoreInterface, StoreType, initializeStore } from "./store";
import { useRef } from "react";
import React from "react";

const StoreProvider = ({
  children,
  store,
}: PropsWithChildren<{ store: StoreInterface }>) => {
  const storeRef = useRef<StoreType>();

  if (!storeRef.current) {
    storeRef.current = initializeStore(store);
  }

  return <Provider value={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
