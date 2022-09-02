import React, { memo } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import ReactVirtualList from '../../../../../components/ReactVirtualList'
import { setFirstPlay } from '../../../../../store/slices/play-list'
import calculateTimeLength from '../../../../../utils/calculateTimeLength'
import { MioSonglistBottomSonglistDiv } from './css'

// 定义可是滚动的样式
const styleObj = {
  contentHeight: 500,
  itemheight: 35,
}


const MioSonglistBottomSonglist = memo((props) => {
  const {songlist,songTotalLength} = props;
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);
  const [stayStyle,setStayStyle] = useState(false);
  const [playId,setPlayId] = useState(0);
  const [iconlike,setIconLike] = useState({});

  useEffect(() => {
    playlist[playlist.p] ? setPlayId(playlist[playlist.p].value.id) : '';
  },[playlist])

  const itemClick = (e,index) => {
    setStayStyle(index);
    if(e.target.className == 'icon'||e.target.className == 'icon liked') {
      setIconLike({...iconlike,[index]: ! iconlike[index]});
      console.log(iconlike);
    }    
  }

  const doubleClick = (item) => {
    dispatch(setFirstPlay(item));
    setPlayId(item.id);
  }

  const itemClass = useCallback((index,stay,id) => {
    let className = 'song-list-item';
    index%2 != 0 ? className = `${className} emt`: className = className;
    stay == index ? className = `${className} stay` : className = className;
    id == playId ? className = `${className} active` : className = className;
    return className;
  },[stayStyle,playId])

  // 渲染的一条数据 
  const songItem =(props) => {
    return (
      // <div className={props.value.index%2!=0?'song-list-item emt': 'song-list-item'}
      <div className={itemClass(props.value.index,props.value.stayStyle,props.value.item.id)}
           onClick={e => itemClick(e,props.value.index)}
           onDoubleClick={e => doubleClick(props.value.item)}
      >
          <span className="act">
            {
              props.value.item.id == playId 
              ?
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref={'#icon-mn_shengyin'}></use>
                  </svg>
              : <span className="number">{props.value.index<10?`0${props.value.index}`:props.value.index}</span>
            }
            
            <span className={iconlike[props.value.index]==true?'icon liked':'icon'}>❤</span>
          </span>
          <span className="title">{props.value.item.name}</span>
          <span className="singer">
            {
              props.value.item.ar.map((item,index) => {
                return (
                  <span key={item.id}>
                    <span>{item.name}</span>
                    {index+1 !=props.value.item.ar.length && <span>/</span>}
                  </span>
                )
              })
            }
          </span>
          <span className="album">{props.value.item.al.name}</span>
          <span className="time">{calculateTimeLength(props.value.item.dt)}</span>
        </div>
    )
  }

  return (
    <MioSonglistBottomSonglistDiv theme={theme}>
      <div className="song-list-item-top">
        <span className="act top">操作</span>
        <span className="title top">歌曲</span>
        <span className="singer top">歌手</span>
        <span className="album top">专辑</span>
        <span className="time top">时间</span>
      </div>
    
    <ReactVirtualList {...styleObj} list={songlist} item={songItem} stayStyle={stayStyle} playId={playId}/>
    {
      songlist.length != songTotalLength && <div>loading</div>
    }

    </MioSonglistBottomSonglistDiv>
  )

  
})

export default MioSonglistBottomSonglist