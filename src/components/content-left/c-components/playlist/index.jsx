import React, { memo } from 'react'
import { useState } from 'react';
import { Message } from '@arco-design/web-react';

import { MioPlaylistDiv  } from './css'
import { useDispatch, useSelector } from 'react-redux';
import { setNavKey } from '../../../../store/slices/content-left';
import { useHistory } from 'react-router';


const MioPlaylist = memo((props) => {
  const {theme,userPlaylist,type} = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const key = useSelector(state => state.contentLeftSlice.navKey);
  const [show,setShow] = useState(false);

  // methods
  const clickShow = (e) => {
    if(sessionStorage.getItem('login') != 'true') {
      Message.warning('请先登录');
    }else if(e.target.className == 'add'){
      // alert('创建歌单'); 
    }else {
      setShow(!show);
    }
  }

  const choosePlaylist = (id) => {
    dispatch(setNavKey(id));
    // 路由跳转

    // 1跳转到我的歌单 2跳转到别人的歌单
    if(type===1) {
      history.push({
        pathname: '/myplaylist',
        search: `?id=${id}`
      })
    }else if(type===2) {
      history.push({
        pathname: '/songlistInfomation',
        search: `?id=${id}`,         
      })
    }
  }

  return (
    <MioPlaylistDiv theme={theme} show={show}>
      <div className="title" onClick={e => clickShow(e)}>
        <span className="name">{type===1?'创建歌单':'收藏歌单'}</span>
        <span className="show">▶</span>
        {
          type === 1 && <span className="add">+</span>
        }
      </div>
      
      {/* 展示歌单 */}
      <div className="playlist-list">
        {
          userPlaylist && show && userPlaylist.map(item => {
            return (
              <div key={item.id} 
                   className={key==item.id?'playlist-item active':'playlist-item'}
                   onClick={e => choosePlaylist(item.id)}
              >
                <span className="icon">♬</span>
                <span className="name">{item.name}</span>
              </div>
            )
          })
        }
      </div>
      
    </MioPlaylistDiv>
  )
})


export default MioPlaylist