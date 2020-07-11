import React, { useState } from 'react'
import Header from '../../components/Header'
import InputField from './InputField'
import SelectField from './SelectField'

import './style.sass'

const noOfGameOptions: string[] = ['2 Games', '3 Games', '5 Games', '10 Games']

const whoStartsOptions: string[] = [
  'Alternative turn',
  'Looser first',
  'Winner first',
  'Always player 01',
  'Always player 02',
]

export default function Details() {
  const [player1, setPlayer1] = useState<string>('')
  const [player2, setPlayer2] = useState<string>('')
  const [noOfGame, setNoOfGame] = useState<string>(noOfGameOptions[0])
  const [whoStarts, setWhoStarts] = useState<string>(whoStartsOptions[0])

  return (
    <div id='details'>
      <Header headerTitle='Two Players Game' />

      <div className='card'>
        <InputField
          label='Player 01'
          value={player1}
          onChange={(text: string) => setPlayer1(text)}
          defaultImage={require('../../assets/images/avatar01/avatar01.png')}
          backgroundColor='#DCF6E4'
          borderColor='#37AC5D'
        />
        <InputField
          label='Player 02'
          value={player2}
          onChange={(text: string) => setPlayer2(text)}
          defaultImage={require('../../assets/images/avatar02/avatar02.png')}
          backgroundColor='#F6EFD5'
          borderColor='#F8D146'
        />
        <SelectField
          label='Number of game'
          value={noOfGame}
          onChange={(text: string) => setNoOfGame(text)}
          defaultImage={require('../../assets/images/winner/winner.png')}
          modalTitle='Number of game'
          modalOptions={noOfGameOptions}
        />
        <SelectField
          label='Who starts'
          value={whoStarts}
          onChange={(text: string) => setWhoStarts(text)}
          defaultImage={require('../../assets/images/run/run.png')}
          modalTitle='Who starts'
          modalOptions={whoStartsOptions}
        />

        <div className='bottom-line' />

        <button className='start-btn'>Start Game</button>
      </div>
    </div>
  )
}
