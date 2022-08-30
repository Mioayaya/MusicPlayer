import React, { memo, useMemo } from 'react'
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
import MioSonglistBottomSonglist from './c-components/songlist-bottom/songlist';
import MioSonglistBottomCommentList from './c-components/songlist-bottom/comment-list';

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
  const [routerData,setRouterData] = useState(Number(location.hash.split('?id=')[1]))
  
  /* state数据 */
  const [nav,setNav] = useState(0);

  useEffect(() => {
    setRouterData(Number(location.hash.split('?id=')[1]));
    // console.log(routerData);
    getSonglistDetail(routerData).then(res => {
      dispatch(setSonglistInformation(res.playlist));
    })
  },[Number(location.hash.split('?id=')[1]),routerData]);

  useEffect(() => {
    // 判断一下是否需要请求
    if((songTotalLength-firstLoad) > 0) {
      getTotalSonglist(songlistInformation.id,(songTotalLength),0)
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
      
      {
        songlistInformation && songlistInformation.id == routerData &&
        <div className="songlist-middle">
          <span className={nav==0?'active':''} onClick={e => {setNav(0)}}>歌曲列表</span>
          <span className={nav==1?'active':''} onClick={e => {setNav(1)}}>
            {
            `评论(${calculatePlayNumber(songlistInformation.commentCount,0)})`
            }
          </span>
          <span className={nav==2?'active':''} onClick={e => {setNav(2)}}>收藏者</span>
        </div>
      }
      

      <div className="songlist-bottom">
        {
          nav==0 
          && songlistInformation
            ? songlistInformation.id == routerData 
              ? <div className="part1">
                {
                  <MioSonglistBottomSonglist songlist={songlist} songTotalLength={songTotalLength}/>                   
                }
                </div>
              : <div>loading</div>
            : <div>loading</div>
        }
        {nav==1 && <div className="part2">
                      <MioSonglistBottomCommentList id={songlistInformation.id}/>
                   </div>}
        {nav==2 && <div className="part3">部分3</div>}
      </div>

    </MioSonglistInformationDiv>
  )
})

export default MioSonglistInformation