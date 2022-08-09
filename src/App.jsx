import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import './App.less'

import MioAppHeader from '@/components/app-header';
import MioAppFooter from '@/components/app-footer';
import MiocontentLeft from '@/components/content-left';
import MioContent from './components/content';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="warrap">
          <MioAppHeader /> 
          <MioContent />
          <MioAppFooter />
        </div>
      </div>
    </HashRouter>
  )
}

export default App
