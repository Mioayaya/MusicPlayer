import React, { memo } from 'react'
import { useState } from 'react';

import { MioSongDetailNormalDiv } from './css'
import MioSongDetailNormalTop from './top';

import { useCallback } from 'react';
import MioSongComment from '../../../comment/song-comment';

const MioSongDetailNormal = memo((props) => {
  const {playlist,show,theme} = props;
  const [scroll,setScroll] = useState(0);
  const [scrollTop,setScrollTop] = useState(0);

  const commentOnScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
    if(Math.ceil(e.target.scrollTop+e.target.clientHeight) == e.target.scrollHeight) {
      setScroll(1);
    }else {
      setScroll(0);
    }
  })

  return (
    <MioSongDetailNormalDiv theme={theme} 
                            onScroll={e => commentOnScroll(e)}
    >
      {
        // 普通数据 封面、歌词等
        (playlist.length && playlist.p!= -1)
        ? <MioSongDetailNormalTop theme={theme}
                                  playlist={playlist}                                  
          />
        : <div>loading</div>
      }
      
      {
        // 只有show的清空下展示评论等
        show && <MioSongComment scroll={scroll} playlist={playlist} scrollTop={scrollTop}/>
      }
    </MioSongDetailNormalDiv>
  )
})

export default MioSongDetailNormal