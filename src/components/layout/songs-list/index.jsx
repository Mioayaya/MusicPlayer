import React, { memo } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstPlay } from '../../../store/slices/play-list';
import calculateTimeLength from '../../../utils/calculateTimeLength';

import { MioLayoutSongListDiv } from './css'

const MioLayoutSongList = memo((props) => {
  const {songList,offset} = props;
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const [active,setActive] = useState(-1);

  const itemDoubleClick = (item) => {
    dispatch(setFirstPlay(item));    
  }

  return (
    <MioLayoutSongListDiv theme={theme}>
      <div className="song-list-item-top">
        <span className="act top">操作</span>
        <span className="song-title top">歌曲</span>
        <span className="singer top">歌手</span>
        <span className="album top">专辑</span>
        <span className="time top">时间</span>
        <span className="pop top">热度</span>
      </div>
      {
        songList.map((item,index) => {
          return (
            <div className={active==item.id?'song-list-item active':'song-list-item'}
                 key={item.id}
                 onClick={e => setActive(item.id)}
                 onDoubleClick={e => itemDoubleClick(item)}
            >
              <span className="act">
                <span className="number">{(index+1+offset)<10?`0${index+1+offset}`:(index+1+offset)}</span>
                <span className={'icon'}>❤</span>
              </span>
              <span className="song-title">{item.name}</span>
              <span className="singer">
                {
                  item.ar.map((itemx,indexy) => {
                    return (
                      <span key={itemx.name}>
                        <span>{itemx.name}</span>
                        {indexy+1 !=item.ar.length && <span>/</span>}
                      </span>
                    )
                  })
                }
              </span>
              <span className="album">{item.al.name}</span>
              <span className="time">{calculateTimeLength(item.dt)}</span>
              <span className="pop">{item.pop}</span>
            </div>
          ) 
        })
      }
    </MioLayoutSongListDiv>
  )
})

export default MioLayoutSongList

/*
songs: {
  id,
  name,
  ar[
    id,
    name
  ],
  publishTime,
  al.name
  dt (时长)

}

*/