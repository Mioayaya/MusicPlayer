import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { MioSongDetailDiv } from './css'
import MioSongDetailNormal from './n-type/type-normal';

const MioSongDetail = memo((props) => {
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);
  const songInform = useSelector(state => state.playlistSlice.songInform);

  return (
    <MioSongDetailDiv show={songInform.show}>
      {
        songInform.showType == 0 
        && <MioSongDetailNormal playlist={playlist} 
                                show={songInform.show}
                                theme={theme}
           />
      }
    </MioSongDetailDiv>
  )
})

export default MioSongDetail