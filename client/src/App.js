import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import LandingPage from './/components/landingPage/LandingPage.js'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
          <LandingPage />
      </Provider>
    )
  }
}

export default App
