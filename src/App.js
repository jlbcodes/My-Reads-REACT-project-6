//help from Ryan Waite, Andrew Wong, Doug Brown, Forrest
import React from 'react'
import './App.css'

import { Route } from 'react-router-dom'

import MainPage from './components/pages/MainPage'
import SearchPage from './components/pages/SearchPage'

class BooksApp extends React.Component {
  render() {
    return(
      <div>
        <Route exact path= "/" component= { MainPage } />
        <Route exact path= "/search" component= { SearchPage } />
      </div> //stopped here
    )
  }
}

export default BooksApp
