import React, { memo } from 'react'

import ReactVirtualList from '../../../../../components/ReactVirtualList'
import calculateTimeLength from '../../../../../utils/calculateTimeLength'
import { MioSonglistBottomSonglistDiv } from './css'

// 定义可是滚动的样式
const styleObj = {
  contentHeight: 500,
  itemHeight: 35,
}

// 渲染的一条数据 
const songItem =(props) => {
  return (
    <div className='song-list-item'>
        <span className="act">
          <span className="number">{props.value.index<10?`0${props.value.index}`:props.value.index}</span>
          <span className='icon'>❤</span>
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
// 操作 标题 歌手 专辑 时间

const MioSonglistBottomSonglist = memo((props) => {

  const {songlist} = props;
  console.log(songlist[0]);
  return (
    <MioSonglistBottomSonglistDiv onScroll={e=>{console.log(e.target.scrollTop)}}>
      <div className="song-list-item-top">
        <span className="act top">操作</span>
        <span className="title top">歌曲</span>
        <span className="singer top">歌手</span>
        <span className="album top">专辑</span>
        <span className="time top">时间</span>
      </div>
    
    <ReactVirtualList {...styleObj} list={songlist} item={songItem}/>
    {
      songlist.length<=10 && <div>loading</div>
    }
    </MioSonglistBottomSonglistDiv>
  )
})

export default MioSonglistBottomSonglist