import React, { memo,useState,useEffect } from 'react'

import { getSongComment } from '../../../axios/server/playSong';

const MioSongComment = memo((props) => {
  const {scroll,playlist} = props;
  const [offset,setOffset] = useState(0);

  useEffect(() => {
    if(scroll) {
      if(playlist[playlist.p]) {
        getSongComment(playlist[playlist.p].value.id,offset).then(res => {
          console.log(res);
          setOffset(offset+1);
        })
      }
    }
    getSongComment()
  },[scroll,playlist])

  return (
    <div>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
      <p>114514</p>
    </div>
  )
})

export default MioSongComment