import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    test: {
      x: 'xxx',
      y: 'yyy'
    }
  },
  reducers: {

  }
});

export default testSlice.reducer;