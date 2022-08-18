import { createSlice } from "@reduxjs/toolkit";

export const userInformSlice = createSlice({
  name: 'userInform',
  initialState: {
    // 登录用户的信息
    userInform: {  
      id: 0,
      avatar:'',
      nickname: '', 
    }, 
    // 用户其它信息
    userOther: ''
  },
  reducers: {
    setUserInform: (state,{payload}) => {
      // console.log(payload);
      const { id,avatar,nickname} = payload;
      state.userInform.id = id;
      state.userInform.avatar = avatar;
      state.userInform.nickname = nickname;
    }
  }

})

export const { setUserInform } = userInformSlice.actions;

export default userInformSlice.reducer;