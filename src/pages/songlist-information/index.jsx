import React, { memo } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';

import { getSonglistDetail } from '../../axios/server/foundMusic';
import { getTotalSonglist } from '../../axios/server/songlistInform';
import { getUserInform } from '../../axios/server/usersInform';
import { setNavKey } from '../../store/slices/content-left';
import { setAuthorInform, setSonglist, setSonglistInformation,clearAllData } from '../../store/slices/songlist-inform';
import { MioSonglistInformationDiv } from './css'

import MioSonglistTop from './c-components/songlist-top';
import { useState } from 'react';
import calculatePlayNumber from '../../utils/calculatePlayNumber';

const MioSonglistInformation = memo(() => {
  const dispatch = useDispatch();
  /* redux数据 */
  const theme = useSelector(state => state.themeSlice.theme);
  // 歌单详情
  const songlistInformation = useSelector(state => state.songlistSlice.songlistInformation);
  // 首次加载歌曲数
  const firstLoad = useSelector(state => state.songlistSlice.firstLoad);
  // 总歌曲数
  const songTotalLength = useSelector(state => state.songlistSlice.songTotalLength);
  // 歌曲列表
  const songlist = useSelector(state => state.songlistSlice.songlist);
  // 歌单作者
  const authorInform = useSelector(state => state.songlistSlice.authorInform);

  /* 路由 */
  const routerData = location.hash.split('?id=')[1];
  
  /* state数据 */
  const [nav,setNav] = useState(0);


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
    
    // 退出时清空redux数据
    return function clear() {
      dispatch(clearAllData())
    }
  },[]);

  useEffect(() => {
    // 判断一下是否需要请求
    if((songTotalLength-firstLoad) > 0) {
      getTotalSonglist(songlistInformation.id,(songTotalLength-firstLoad),firstLoad)
        .then(res => {
          dispatch(setSonglist(res.songs));
      })
    }
    // 请求用户数据
    if(songlistInformation.userId) {
      getUserInform(songlistInformation.userId).then(res => {
        dispatch(setAuthorInform(res.profile));
      })
    }
    
  },[songlistInformation.userId])

  return (
    <MioSonglistInformationDiv theme={theme}>
      {/* 上半部分 */}
      {
        songlistInformation 
          ? songlistInformation.id == routerData 
            ? <MioSonglistTop songlistInformation={songlistInformation}
                              theme={theme}
                              authorInform={authorInform}
            />
            : <div>loading</div>
        : <div>loading</div>
      }
      
      <div className="songlist-middle">
        <span className={nav==0?'active':''} onClick={e => {setNav(0)}}>歌曲列表</span>
        <span className={nav==1?'active':''} onClick={e => {setNav(1)}}>
          {
          `评论(${calculatePlayNumber(songlistInformation.commentCount,0)})`
          }
        </span>
        <span className={nav==2?'active':''} onClick={e => {setNav(2)}}>收藏者</span>
      </div>

      <div className="songlist-bottom">
        {nav==0 && <div className="part1">部分1</div>}
        {nav==1 && <div className="part2">部分2</div>}
        {nav==2 && <div className="part3">部分3</div>}
      </div>

    </MioSonglistInformationDiv>
  )
})

export default MioSonglistInformation