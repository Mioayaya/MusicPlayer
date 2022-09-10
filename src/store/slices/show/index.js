import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
  name: 'show',
  initialState: {
    playListShow: false
  },
  reducers: {
    setPlayListShow: (state) => {
      state.playListShow = !state.playListShow
    },
    setPlayListShowFalse: (state) => {
      state.playListShow = false;
    },
    setPlayListShowTrue: (state) => {
      state.playListShow = true;
    }
  }
})

export const { setPlayListShow,setPlayListShowFalse,
               setPlayListShowTrue
             } = showSlice.actions;

export default showSlice.reducer;