import { configureStore, createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
  name: "switchBoard",
  initialState: true,
  reducers: {
    toggle: (state) => {
       return !state;
    },
  },
});

let appStore = configureStore({
  reducer: {
    switchBoard: switchSlice.reducer,
  },
});

export const switchBoardActions= switchSlice.actions;

export default appStore;
