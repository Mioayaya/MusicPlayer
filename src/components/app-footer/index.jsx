import React, { memo,useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import MioFooterCardNative from './c-components/card-native';
import MioFooterCardSong from './c-components/card-song';
import MioFooterPlayerBar from './c-components/player-bar';

import { MioFooterDiv } from './css';

const MioAppFooter = memo(() => {
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);
  const songInform = useSelector(state => state.playlistSlice.songInform)
  const [cardShow,setCardShow] = useState(false);  

  useEffect(() => {
    setCardShow(songInform.show)
  },[songInform])

  return (
    <MioFooterDiv theme={theme}>
      {
        playlist[playlist.p] 
        ? <div className="left">
            <MioFooterCardSong theme={theme} 
                               songId={playlist[playlist.p].value.id} 
                               cardShow={cardShow}
                               setCardShow={setCardShow}
            />
            <MioFooterCardNative theme={theme} 
                                 playlist={playlist}
                                 cardShow={cardShow}
                                 setCardShow={setCardShow}
            />
          </div>
        : <div className="left">loading</div>
      }
      
      <div className="player">
        {
          playlist[playlist.p] 
          && 
          <MioFooterPlayerBar fee={playlist[playlist.p].value.fee} 
                              songId={playlist[playlist.p].value.id}
                              playlist={playlist}
          />
        }
        
      </div>

      <div className="right">      
      </div>
    </MioFooterDiv>
  )
})

export default MioAppFooter