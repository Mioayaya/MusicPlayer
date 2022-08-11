import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { MioContentLeftDiv } from './css';
import { contentLeftList, contentMyMusicList } from '../../axios/local-data';

// 接受一个全局的 redux
const theme = 'dark';

const MioContentLeft = memo(() => {

  const [ activeIndex,setActiveIndex ] = useState(0);

  return (
    <MioContentLeftDiv theme={theme}>
        {/* 上半部分路由列表 */}
      <div className="content-left-top">
        {
          contentLeftList.map((item) => {
            return (
              // 这里navLink 点击时 会自动添加一个 active
              <NavLink className={activeIndex===item.key?'content-left-top-item content-left-top-item-active':'content-left-top-item'}
                   key={item.key}
                   onClick= {e => {setActiveIndex(item.key)}}
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
              <NavLink className={activeIndex===item.key?'content-left-middle-item content-left-middle-item-active':'content-left-middle-item'}
                   key={item.key}
                   onClick= {e => {setActiveIndex(item.key)}}
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
        <div className="content-left-bottom-create-songlist">创建歌单</div>
        <div className="content-left-bottom-collet-songlist">收藏歌单</div>
      </div>

    </MioContentLeftDiv>
  )
})


export default MioContentLeft