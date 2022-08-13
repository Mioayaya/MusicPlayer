import { createSlice } from "@reduxjs/toolkit";


export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'dark',
  },
  reducers: {
    setTheme: (state,{payload}) => {
      state.theme = payload;
    }
  }

});

export const { setTheme }  = themeSlice.actions;

export default themeSlice.reducer;