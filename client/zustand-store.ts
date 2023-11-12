import { create } from "zustand";
import { getPlayListById } from "./service";


const useListStore = create((set) => ({
  list: {},
  fetch: async () => {
    const response = await getPlayListById();
    set({ list: response });
  },
}));

export { useListStore };
