import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSonglistDetail } from '../../axios/server/foundMusic';
import { setUserOtherInformPlaylistDetail } from '../../store/slices/user-inform';
import MioMyPlaylistTop from './c-components/playlist-top';

import { MioMyPlaylistDiv } from './css'

const MioMyPlayList = memo(() => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.userInformSlice.userOtherInform.playlist.playlistDetail);
  const userInform = useSelector(state => state.userInformSlice.userInform);
  const [routerData,setRouterData] = useState(Number(location.hash.split('?id=')[1]));

  useEffect(() => {
    setRouterData(Number(location.hash.split('?id=')[1]));
    getSonglistDetail(routerData).then(res => {
      dispatch(setUserOtherInformPlaylistDetail(res.playlist));
    })
  },[Number(location.hash.split('?id=')[1]),routerData])

  return (
    <MioMyPlaylistDiv theme={theme}>
      {
        playlist 
        ? playlist.id == routerData
          ? <MioMyPlaylistTop theme={theme}
                              playlist={playlist}
                              userInform={userInform}
            />
          : <div>loading</div>
        : <div>loading</div>
      }
    </MioMyPlaylistDiv>
  )
})

export default MioMyPlayList