import React, { memo, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { MioContentLeftDiv } from './css';
import { contentLeftList, contentMyMusicList } from '../../axios/local-data';
import { setNavKey } from '../../store/slices/content-left';
import { getUserPlaylist,getUserInform } from '../../axios/server/usersInform';
import { setUserPlaylist } from '../../store/slices/user-inform';

import MioPlaylist from './c-components/playlist';

const MioContentLeft = memo(() => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const activeKey = useSelector(state => state.contentLeftSlice.navKey);
  const userId = useSelector(state => state.userInformSlice.userInform.id);
  const userPlaylist = useSelector(state => state.userInformSlice.userOtherInform.playlist.playlist);
  const userSubPlaylist = useSelector(state => state.userInformSlice.userOtherInform.playlist.subPlaylist);
  let routerData = '';

  useEffect(() => {
    routerData = location.hash.split('#/')[1];
    // 正则匹配
    /foundmusic/.test(routerData)?routerData='foundmusic':routerData=routerData;
    let key = 0;
    switch(routerData) {
      case 'foundmusic': key = 0 ; break; 
      case 'radio': key = 1 ; break; 
      case 'video': key = 2 ; break; 
      case 'dynamic': key = 3 ; break; 
      case 'fm': key = 4 ; break; 
      default: key = 99999;
    }
    dispatch(setNavKey(key));
  },[routerData])

  // 载入创建歌单以及收藏歌单
  useEffect(() => {
    if(userId) {
      getUserPlaylist(userId).then(res => {
        let _playlist = res.playlist;
        let playlist = _playlist.filter((item) => item.subscribed == false);
        let subPlaylist = _playlist.filter((item) => item.subscribed);
        dispatch(setUserPlaylist({playlist,subPlaylist}));
      })
    }
  },[userId])

  return (
    <MioContentLeftDiv theme={theme}>
        {/* 上半部分路由列表 */}
      <div className="content-left-top">
        {
          contentLeftList.map((item) => {
            return (
              // 这里navLink 点击时 会自动添加一个 active
              <NavLink className={activeKey===item.key?'content-left-top-item content-left-top-item-active':'content-left-top-item'}
                   key={item.key}
                   onClick= {e => {dispatch(setNavKey(item.key))}}
                   to={item.link}
              >
                {item.title}
              </NavLink>
            )
          })
        }
      </div>
      
        {/* 我的音乐 */}
      <div className="content-left-middle">
        <span>我的音乐</span>
        {
          contentMyMusicList.map(item => {
            return (
              // 这里navLink 点击时 会自动添加一个 active
              <NavLink className={activeKey===item.key?'content-left-middle-item content-left-middle-item-active':'content-left-middle-item'}
                   key={item.key}
                   onClick= {e => {dispatch(setNavKey(item.key))}}
                   to={item.link}
              >
                {item.title}
              </NavLink>
            )
          })
        }
      </div> 

      {/* 歌单 */}
      <div className="content-left-bottom">
        <MioPlaylist theme={theme}
                     userPlaylist={userPlaylist}
                     type={1}
        />
        <MioPlaylist theme={theme}
                     userPlaylist={userSubPlaylist}
                     type={2}
        />
      </div>

    </MioContentLeftDiv>
  )
})


export default MioContentLeft