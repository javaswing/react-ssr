import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getPlayListById } from "../service";

export const fetchList = createAsyncThunk<any>("/list", async() => {
    try {
        const data = getPlayListById()
        return data;
    } catch (error) {
        console.error(error)
    }
}) 

export interface ListState {
    entities: any[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    entities: [],
    loading: 'idle',
  } as ListState

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchList.pending, (state) => {
            state.loading = 'pending'
            state.entities = []
        }).addCase(fetchList.fulfilled, (state, action) => {
            state.loading = 'idle'
            state.entities = action.payload
        })
    }
})

export default listSlice.reducer;