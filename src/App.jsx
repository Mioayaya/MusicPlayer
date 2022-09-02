import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.less'

import MioAppHeader from './components/app-header';
import MioAppFooter from './components/app-footer';
import MioContent from './components/content';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="warrap">
          <MioAppHeader /> 
          <MioContent />
          <MioAppFooter />
          <div className="texst">hh</div>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
