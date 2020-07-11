import React, { useState } from 'react'
import './App.sass'
import Home from './screens/Home'
import Details from './screens/Details'
import Game from './screens/Game'
import CommingSoon from './screens/CommingSoon'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const noOfGameOptions: string[] = ['2 Games', '3 Games', '5 Games', '10 Games']

const whoStartsOptions: string[] = [
  'Alternative turn',
  'Looser first',
  'Winner first',
  'Always player 01',
  'Always player 02',
]

function App() {
  const [player1, setPlayer1] = useState<string>('')
  const [player2, setPlayer2] = useState<string>('')
  const [noOfGame, setNoOfGame] = useState<string>(noOfGameOptions[0])
  const [whoStarts, setWhoStarts] = useState<string>(whoStartsOptions[0])

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/details'>
            <Details
              noOfGameOptions={noOfGameOptions}
              whoStartsOptions={whoStartsOptions}
              player1={player1}
              player2={player2}
              noOfGame={noOfGame}
              whoStarts={whoStarts}
              onPlayer1Change={(text: string) => setPlayer1(text)}
              onPlayer2Change={(text: string) => setPlayer2(text)}
              onNoOfGameChange={(text: string) => setNoOfGame(text)}
              onWhoStartsChange={(text: string) => setWhoStarts(text)}
            />
          </Route>
          <Route path='/game'>
            <Game
              player1={player1}
              player2={player2}
              noOfGame={noOfGame}
              whoStarts={whoStarts}
            />
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
