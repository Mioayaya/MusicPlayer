import React, { memo } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';

import { setNavKey } from '../../store/slices/content-left';
import { MioSonglistInformationDiv } from './css'


const MioSonglistInformation = memo(() => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const history = useHistory();
  
  useEffect(() => {
    // 修改左侧nav条
    dispatch(setNavKey(9999));
    const routerData = location.hash.split('?id=')[1];
    
    // console.log(routerData);
    //console.log(JSON.parse(decodeURI(routerData)))对象解码
    // 注意！当刷新页面获取的参数还在
  },[]);

  return (
    <MioSonglistInformationDiv theme={theme}>歌单页面</MioSonglistInformationDiv>
  )
})

export default MioSonglistInformation