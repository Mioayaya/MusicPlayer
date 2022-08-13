import React, { memo } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { getSonglistDetail } from '../../axios/server/foundMusic';
import { getTotalSonglist } from '../../axios/server/songlistInform';

import { setNavKey } from '../../store/slices/content-left';
import { setSonglist, setSonglistInformation } from '../../store/slices/songlist-inform';
import { MioSonglistInformationDiv } from './css'


const MioSonglistInformation = memo(() => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const songlistInformation = useSelector(state => state.songlistSlice.songlistInformation);
  const firstLoad = useSelector(state => state.songlistSlice.firstLoad);
  const songTotalLength = useSelector(state => state.songlistSlice.songTotalLength);
  

  const history = useHistory();
  
  useEffect(() => {
    // 修改左侧nav条
    dispatch(setNavKey(9999));
    const routerData = location.hash.split('?id=')[1];
    getSonglistDetail(routerData).then(res => {
      dispatch(setSonglistInformation(res.playlist));
    })
    // console.log(routerData);
    //console.log(JSON.parse(decodeURI(routerData)))对象解码
    // 注意！当刷新页面获取的参数还在
  },[]);

  useEffect(() => {
    // 判断一下是否需要请求
    if((songTotalLength-firstLoad) > 0) {
      getTotalSonglist(songlistInformation.id,(songTotalLength-firstLoad),firstLoad)
        .then(res => {
          dispatch(setSonglist(res.songs));
      })
    }
    
  },[firstLoad])

  return (
    <MioSonglistInformationDiv theme={theme}>歌单页面</MioSonglistInformationDiv>
  )
})

export default MioSonglistInformation