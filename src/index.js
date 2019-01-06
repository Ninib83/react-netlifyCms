import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './components/containers/appContainer/appContainer'
import * as serviceWorker from './serviceWorker'
import './index.css'
import 'tachyons'

ReactDOM.render(
  <div>
    <AppContainer />
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
