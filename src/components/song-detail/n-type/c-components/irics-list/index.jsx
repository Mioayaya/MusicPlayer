import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSonglyric } from '../../../../../axios/server/playSong';
import { setIricsInform } from '../../../../../store/slices/play-list';
import { getSonglyricArr } from '../../../../../utils/getSonglyricArr';

import { MioSongDetailIricsDiv } from './css'

const MioSongDetailIrics = memo((props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);

  useEffect(() => {
    if(playlist[playlist.p]) {
      getSonglyric(playlist[playlist.p].value.id).then(res => {
        dispatch(setIricsInform(getSonglyricArr(res)));
      })
    }
  },[playlist])

  return (
    <MioSongDetailIricsDiv theme={theme}>
      <div className="shadow shadow-top"></div>
      <div className="shadow shadow-bottom"></div>
      <div className="lyric-list">

      </div>
    </MioSongDetailIricsDiv>
  )
})

export default MioSongDetailIrics