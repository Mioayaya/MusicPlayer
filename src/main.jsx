import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import App from './zdemo/App'
// import './assets/css/reset.css'
import './assets/css/reset.css'
import { store } from './store'
import { Provider } from 'react-redux'
import "@arco-design/web-react/dist/css/arco.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}><App /></Provider>
  // <App />
)
