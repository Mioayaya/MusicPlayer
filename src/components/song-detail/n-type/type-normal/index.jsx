import React, { memo } from 'react'

import { MioSongDetailNormalDiv } from './css'

const MioSongDetailNormal = memo((props) => {
  const {playlist,show,theme} = props;

  return (
    <MioSongDetailNormalDiv theme={theme}>
      {
        // 普通数据 封面、歌词等
        playlist.length 
        ? playlist[playlist.p].value.name
        : <div>loading</div>
      }
      
      {
        // 只有show的清空下展示评论等
        show && 'hh'
      }
    </MioSongDetailNormalDiv>
  )
})

export default MioSongDetailNormal