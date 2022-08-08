import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import './App.less'

import MioAppHeader from '@/components/app-header';
import MioAppFooter from '@/components/app-footer';
import MiocontentLeft from '@/components/content-left';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <MioAppHeader /> 
        <div className="content">
          <div className="content-left">
            <MiocontentLeft />
          </div>
          <div className="content-right">
            {renderRoutes(routes)}
          </div>
        </div>
        <MioAppFooter />
      </div>
    </HashRouter>
  )
}

export default App
