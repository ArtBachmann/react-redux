import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

// create an instance of the Provider object and wrap App with it.
// Connect communicates with Provider, and so with the data inside the redux store.
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root'))
