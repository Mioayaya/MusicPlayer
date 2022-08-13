import React, { memo, useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

import { MioContentLeftDiv } from './css';
import { contentLeftList, contentMyMusicList } from '../../axios/local-data';
import { setNavKey } from '../../store/slices/content-left';

// 接受一个全局的 redux
const theme = 'dark';

const MioContentLeft = memo(() => {
  const dispatch = useDispatch();
  const activeKey = useSelector(state => state.contentLeftSlice.navKey);
  const [ activeIndex,setActiveIndex ] = useState(0);

  useEffect(() => {
    let routerData = location.hash.split('#/')[1];
    let key = 0;
    switch(routerData) {
      case 'foundmusic': key = 0 ; break; 
      case 'mine': key = 1 ; break; 
      default: key = 99999;
    }
    dispatch(setNavKey(key));
  },[])

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
        <div className="content-left-bottom-create-songlist">创建歌单</div>
        <div className="content-left-bottom-collet-songlist">收藏歌单</div>
      </div>

    </MioContentLeftDiv>
  )
})


export default MioContentLeft