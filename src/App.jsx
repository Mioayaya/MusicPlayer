import React,{useEffect,useState} from 'react';
import { HashRouter } from 'react-router-dom';

import './App.less'

import MioAppHeader from './components/app-header';
import MioAppFooter from './components/app-footer';
import MioContent from './components/content';
import MioSongDetail from './components/song-detail';
import { useSelector } from 'react-redux';

function App() {
  const songInform = useSelector(state => state.playlistSlice.songInform);
  const [showStyle,setShowStyle] = useState(true);

  useEffect(() => {
    if(!songInform.show) {
      setTimeout(() => {
        setShowStyle(false)
      },500)
    }else {
      setShowStyle(true)
    }
  }, [songInform])
  
  return (
    <HashRouter>
      <div className="App">
        <div className="warrap">
          <MioAppHeader /> 
          <MioContent />
          <MioAppFooter />
          <div className="song" style={{visibility: showStyle?'visible':'hidden'}}>
            <MioSongDetail />
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
