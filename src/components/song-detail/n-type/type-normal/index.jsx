import React, { memo } from 'react'

import { MioSongDetailNormalDiv } from './css'
import MioSongDetailNormalTop from './top';

const MioSongDetailNormal = memo((props) => {
  const {playlist,show,theme} = props;

  return (
    <MioSongDetailNormalDiv theme={theme}>
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
        show && <div>bottom</div>
      }
    </MioSongDetailNormalDiv>
  )
})

export default MioSongDetailNormal