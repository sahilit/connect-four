import React from 'react'
import './App.sass'
import Home from './screens/Home'
import Details from './screens/Details'
import Game from './screens/Game'
import CommingSoon from './screens/CommingSoon'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/details'>
            <Details />
          </Route>
          <Route path='/game'>
            <Game />
          </Route>
          <Route path='/comming_soon'>
            <CommingSoon />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
