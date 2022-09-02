import React, { memo } from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import { setPlayListId,clearAllData } from '../../store/slices/play-list';
import calculateTimeLength from '../../utils/calculateTimeLength';

import { MioBarPlayListDiv } from './css'


const MioBarPlayList = memo((props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);
  const [activeId,setActiveId] = useState(0);

  // methods 
  const itemClassName = useCallback((index,id) => {
    let itemclass = 'item-list'
    playlist.p == index? itemclass = `${itemclass} playing`: '';
    id == activeId ? itemclass = `${itemclass} active`: '';
    index%2 == 0 ? itemclass = `${itemclass} emt`: '';
    return itemclass;
  },[activeId,playlist])

  const playThisSong = (id) => {
    dispatch(setPlayListId(id));
  }

  return (
    <MioBarPlayListDiv theme={theme}>
      <div className="title">当前播放</div>
      <div className="tips">
        <span className="num">共{playlist.length}首</span>
        <span className="clear" onClick={e => dispatch(clearAllData())}>清空列表</span>
      </div>
      <div className="menu-item-list">
        {
          playlist.length != 0 &&
          playlist.idlist.map((item,index) => {
            return (
              <span key={index+33}
                    // className={playlist.p == index?'item-list playing':'item-list'}
                    className={itemClassName(index,playlist[index].value.id)}
                    draggable   
                    onClick={e => setActiveId(playlist[index].value.id)}
                    onDoubleClick={e => playThisSong(playlist[index].value.id)}
              >
                <span className="playing">{playlist.p == index ? '♪' : ''}</span>
                <span className="item-name item-text" title={playlist[index].value.name}>{playlist[index].value.name}</span>
                <span className="item-author item-text">
                  {
                    playlist[index].value.ar.map((itemx,indexy) => {
                      return (
                        <span key={itemx.id}>
                          <span>{itemx.name}</span>
                          {indexy+1 !=playlist[index].value.ar.length && <span>/</span>}
                        </span>
                      )
                    })
                  }
                </span>
                <span className="item-time">{calculateTimeLength(playlist[index].value.dt)}</span>
                <span className="item-delete" title="删除">▮</span>
              </span>
            )
          })
        }  
      </div>
      
    </MioBarPlayListDiv>
  )
})

export default MioBarPlayList