import {
  PayloadAction,
  combineReducers,
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { PlayListType, TrackType, getPlayListById } from "./service";
import { useDispatch } from "react-redux";

export const getListById = createAsyncThunk(
  "app/getPlayListById",
  async (id: number, thunkAPI) => {
    const response = await getPlayListById(id);    
    return response.data;
  }
);

interface ListState {
  entities: TrackType[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}
const initialState: ListState = {
  entities: [],
  loading: "idle",
};

const listSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getListById.fulfilled,
      (
        state,
        action: PayloadAction<{
          playlist: PlayListType;
        }>
      ) => {        
        const tracks = action.payload.playlist.tracks;    
        tracks && (state.entities = [...tracks]);
      }
    );
  },
});

const store = configureStore({
  // @ts-ignore
  preloadedState: typeof window !== 'undefined' && window.INITIAL_STATE,
  reducer: combineReducers({ app: listSlice.reducer }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
