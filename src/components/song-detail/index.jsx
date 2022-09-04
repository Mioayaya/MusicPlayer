import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSongInformShow } from '../../store/slices/play-list';

import { MioSongDetailDiv } from './css'
import MioSongDetailNormal from './n-type/type-normal';

const MioSongDetail = memo((props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);
  const songInform = useSelector(state => state.playlistSlice.songInform);

  useEffect(() => {
    if(playlist.length == 0) {
      dispatch(setSongInformShow(false))
    }    
  },[playlist])
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