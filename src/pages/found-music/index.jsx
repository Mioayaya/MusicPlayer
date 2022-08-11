import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { renderRoutes } from "react-router-config";

import { getTopBanner } from '../../axios/server/foundMusic';
import { getBanner } from '../../store/slices/found-music/foundMusicSlice';
import { foundMusicNavList } from '../../axios/local-data';
import { MioFoundMusicDiv } from './css';

const MioFoundMusic = memo((props) => {
  const dispatch = useDispatch();
  const foundMusicSlice = useSelector(state => state.foundMusicSlice.topBanners);

  const { route } = props;
  // navstate
  const [ activeIndex,setActiveIndex] = useState(10);

  // useEffect(() => {
  //   // 获取轮播图
  //   getTopBanner().then(res => {
  //     // res.banners
  //     // state.topBanners.push(res.banners);
  //     dispatch(getBanner(res.banners));
  //   })
  // }, [])
  
  return (
    <MioFoundMusicDiv>
      {/* top 导航部分 */}
      <div className="found-music-nav">
        {
          foundMusicNavList.map(item => {
            return (
              <NavLink key={item.key}
                       to={item.link}
                       className={activeIndex===item.key?'found-music-nav-item found-music-nav-item-active':'found-music-nav-item'}
                       onClick= {e => {setActiveIndex(item.key)}}
              >
                {item.title}
              </NavLink>
            )
          })
        }
      </div>
      {/* 子路由page */}
      <div className="div">
      {renderRoutes(route.routes)}
      </div>
      
    </MioFoundMusicDiv>
  )
})

export default MioFoundMusic