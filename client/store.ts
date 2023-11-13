import { createStore, useStore as useZustandStore } from "zustand";
import { getPlayListById, type TrackType } from "./service";
import { createContext } from "react";
import { useContext } from "react";

export interface StoreInterface {
  list: TrackType[];
  fetch: () => Promise<void>;
}

const getDefaultInitialState = () => ({
  list: [],
});

export type StoreType = ReturnType<typeof initializeStore>;

const zustandContext = createContext<StoreType | null>(null);

export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInterface) => T) => {
  const store = useContext(zustandContext);

  if (!store) throw new Error("Store is missing the provider");
  return useZustandStore(store, selector);
};

export const initializeStore = (
  preloadedState: Partial<StoreInterface> = {}
) => {
  return createStore<StoreInterface>((set, get) => ({
    ...getDefaultInitialState(),
    ...preloadedState,
    fetch: async () => {
      const response = await getPlayListById();
      const tracks = response.data.playlist.tracks;      
      set((state) => (state.list = tracks));
    },
  }));
};
