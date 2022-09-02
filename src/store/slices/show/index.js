import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
  name: 'show',
  initialState: {
    playListShow: false
  },
  reducers: {
    setPlayListShow: (state) => {
      state.playListShow = !state.playListShow
    }
  }
})

export const {setPlayListShow} = showSlice.actions;

export default showSlice.reducer;