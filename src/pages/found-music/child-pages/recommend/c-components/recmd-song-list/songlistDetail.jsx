import React, { memo } from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
import calculateTimeLength from '../../../../../../utils/calculateTimeLength';

const MiosonglistDetail = memo((props) => {
  const history = useHistory();

  const [active,setActive] = useState(-1);
  
  // 模拟是否被喜欢
  const [liked,setLiked] = useState([false,false,false,false,false,false,false,false,false,false]);
  // 歌曲头像 名称 作者 时长
  // name -- 歌曲名字
  // dt -- 时长(毫秒)
  // ar[] -- 作者
  // al.picUrl -- 专辑图片
  // id -- 歌曲id 用于请求 mp3数据
  const {tracks,name} = props.songListDetail;
  const arr = [0,1,2,3,4];
  // <div className="id">{tracks[0].id}</div>

  /* 业务逻辑代码 */

  // 点击爱心 传入 被点击歌曲 id , 歌曲序号
  const clickLike = (id,index) => {
    if(liked) {
      //  已经被点击过了
    }else {
      // 没有被点击过
    }
    liked[index] = !liked[index];
    setLiked([...liked]);    
    // console.log(id,index);
  }

  return (
    <div className='recmd-song-list-bottom-detail'>
      <span className='song-list-name'>{`[${name}]`}</span>
      {
        arr.map(index => {
          const indexy = index*2;
          const indexz = index*2+1;
          return(
            <div className="item" key={index}>

              <div className={ active===indexy?'item-left item-active':'item-left'}
                   onClick={e => setActive(indexy)}
                   onDoubleClick={e => alert('双击了')}
              >
                <img src={tracks[indexy].al.picUrl} alt="" />
                <div className="item-desc">
                  <span className="name">{tracks[indexy].name}</span>
                  <span className="author">{tracks[indexy].ar[0].name}</span>
                </div>
                <div className="item-icon">
                  {/* 喜欢事件 */}
                  <span className="like icon"
                        onClick={e => {clickLike(tracks[indexy].id,indexy)}}
                        style={liked[indexy]?{color:'red'}:{color:'white'}}
                  >
                    ❤
                  </span>
                  {/* 播放 */}
                  <span className="play icon">▶</span>
                  {/* 跳转到评论区 */}
                  <span className="comment icon">▤</span>
                  <span className="time-length">{calculateTimeLength(tracks[indexy].dt) }</span>
                </div>
                
              </div>
              
              <div className={ active===indexz?'item-right item-active':'item-right'}
                   onClick={e => setActive(indexz)}
                   onDoubleClick={e => alert('双击了')}
              >
                <img src={tracks[indexz].al.picUrl} alt="" />
                <div className="item-desc">
                  <span className="name">{tracks[indexz].name}</span>
                  <span className="author">{tracks[indexz].ar[0].name}</span>
                </div>
                <div className="item-icon">
                  <span className="like icon"
                        onClick={e => {clickLike(tracks[indexz].id,indexz)}}
                        style={liked[indexz]?{color:'red'}:{color:'white'}}
                  >
                    ❤
                  </span>
                  <span className="play icon">▶</span>
                  <span className="comment icon">▤</span>
                  <span className="time-length">{calculateTimeLength(tracks[indexz].dt)}</span>
                </div>
              </div>
              
            </div>
          )
        })
      }
      
    </div>
  )
})

export default MiosonglistDetail