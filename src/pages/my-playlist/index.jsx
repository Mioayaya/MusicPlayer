import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getSonglistDetail } from '../../axios/server/foundMusic';
import { getTotalSonglist } from '../../axios/server/songlistInform';
import { setUserOtherInformPlaylistDetail, setUserOtherInformSonglist } from '../../store/slices/user-inform';
import calculatePlayNumber from '../../utils/calculatePlayNumber';
import { MioMyPlaylistDiv } from './css'

import MioSonglistBottomCommentList from '../songlist-information/c-components/songlist-bottom/comment-list';
import MioSonglistBottomSonglist from '../songlist-information/c-components/songlist-bottom/songlist';
import MioMyPlaylistTop from './c-components/playlist-top';


const MioMyPlayList = memo(() => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.userInformSlice.userOtherInform.playlist.playlistDetail);
  const songlist = useSelector(state => state.userInformSlice.userOtherInform.playlist.songlist);
  const userInform = useSelector(state => state.userInformSlice.userInform);
  const [routerData,setRouterData] = useState(Number(location.hash.split('?id=')[1]));
  const [offset,setOffset] = useState(0);
  const [nav,setNav] = useState(0);
  const Limit = 50;

  useEffect(() => {
    setOffset(0);
    setRouterData(Number(location.hash.split('?id=')[1]));
    getSonglistDetail(routerData).then(res => {
      dispatch(setUserOtherInformPlaylistDetail(res.playlist));
      setOffset(res.playlist.tracks.length);
    })
  },[Number(location.hash.split('?id=')[1]),routerData])

  useEffect(() => {
    if(playlist) {
      if(offset < playlist.trackIds.length && offset!=0) {      
        getTotalSonglist(playlist.id,offset,Limit).then(res => {
          dispatch(setUserOtherInformSonglist(res.songs));
          setOffset(offset+Limit);
        })
      }
    }
  },[playlist,offset])

  return (
    <MioMyPlaylistDiv theme={theme}>
      {
        playlist 
        ? playlist.id == routerData
          ? <MioMyPlaylistTop theme={theme}
                              playlist={playlist}
                              userInform={userInform}
            />
          : <div className="loading">加载中</div>
        : <div className="loading">加载中</div>
      }

      {
        playlist && playlist.id == routerData &&
        <div className="songlist-middle">
          <span className={nav==0?'active':''} onClick={e => {setNav(0)}}>歌曲列表</span>
          <span className={nav==1?'active':''} onClick={e => {setNav(1)}}>
            {
            `评论(${calculatePlayNumber(playlist.commentCount,0)})`          
            }
          </span>
          <span className={nav==2?'active':''} onClick={e => {setNav(2)}}>收藏者</span>
        </div>
      }
      

      <div className="songlist-bottom">
        {/* playlist 存在 -> 当前的  */}
        {
          nav==0 
          && 
          (
            playlist 
            ? playlist.id == routerData 
              ? <div className="part1">
                {
                  <MioSonglistBottomSonglist songlist={songlist} songTotalLength={playlist.trackIds.length}/>
                }
                </div>
              : ''
            : ''
          )
        }
        {
          nav==1 && <div className="part2">
                     <MioSonglistBottomCommentList id={playlist.id}/>
                    </div>
        }
        {nav==2 && <div className="part3">暂未开发</div>}
      </div>

    </MioMyPlaylistDiv>
  )
})

export default MioMyPlayList