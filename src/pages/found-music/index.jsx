import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { renderRoutes } from "react-router-config";

import { foundMusicNavList } from '../../axios/local-data';
import { MioFoundMusicDiv } from './css';
import { clickNav } from '../../store/slices/found-music/foundMusicSlice'
import { useEffect } from 'react';
import { userLoginAnonimous } from '../../axios/server/userLogin';

const MioFoundMusic = memo((props) => {
  const { route } = props;

  const dispatch = useDispatch();
  const activeKey = useSelector(state => state.foundMusicSlice.activeKey);


  useEffect(() => {
    let key = 10;
    const routerData = location.hash.split('foundmusic/')[1];
    switch (routerData) {
      case 'recommend':   key = 10; break;
      case 'custom':      key = 11; break;
      case 'songlist':    key = 12; break;
      case 'leaderboard': key = 13; break;
      case 'singer':      key = 14; break;
      case 'latestmusic': key = 15; break;
    
      default: key = 999998;break;
    }
    navClick(key);
    return () => {
      navClick(999998);
    }
  },[])

  // 事件方法
  const navClick = (key) => {
    dispatch(clickNav(key));
  }

  return (
    <MioFoundMusicDiv>
      {/* top 导航部分 */}
      <div className="found-music-nav">
        {
          foundMusicNavList.map(item => {
            return (
              <NavLink key={item.key}
                       to={item.link}
                       className={activeKey===item.key?'found-music-nav-item found-music-nav-item-active':'found-music-nav-item'}
                       onClick= { e => {navClick(item.key)}}
              >
                {item.title}
              </NavLink>
            )
          })
        }
      </div>
      {/* 子路由page */}
      <div className="found-music-child-page">
        {renderRoutes(route.routes)}
      </div>
      
    </MioFoundMusicDiv>
  )
})

export default MioFoundMusic