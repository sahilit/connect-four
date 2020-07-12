import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import InputField from './InputField'
import SelectField from './SelectField'

import './style.sass'

interface IProps {
  noOfGameOptions: string[]
  whoStartsOptions: string[]
  player1: string
  player2: string
  noOfGame: string
  whoStarts: string
  player1Avatar: string
  player2Avatar: string
  onPlayer1Change: (text: string) => void
  onPlayer2Change: (text: string) => void
  onNoOfGameChange: (text: string) => void
  onWhoStartsChange: (text: string) => void
  onPlayer1AvatarChange: (text: string) => void
  onPlayer2AvatarChange: (text: string) => void
}

export default function Details(props: IProps) {
  const {
    noOfGameOptions,
    whoStartsOptions,
    player1,
    player2,
    noOfGame,
    whoStarts,
    player1Avatar,
    player2Avatar,
    onPlayer1Change,
    onPlayer2Change,
    onNoOfGameChange,
    onWhoStartsChange,
    onPlayer1AvatarChange,
    onPlayer2AvatarChange
  } = props

  return (
    <div id='details'>
      <Header headerTitle='Two Players Game' />

      <div className='card'>
        <InputField
          label='Player 01'
          value={player1}
          onChange={onPlayer1Change}
          image={player1Avatar}
          onImageChange={onPlayer1AvatarChange}
          defaultImage={require('../../assets/images/avatar01/avatar01.png')}
          backgroundColor='#DCF6E4'
          borderColor='#37AC5D'
        />
        <InputField
          label='Player 02'
          value={player2}
          onChange={onPlayer2Change}
          image={player2Avatar}
          onImageChange={onPlayer2AvatarChange}
          defaultImage={require('../../assets/images/avatar02/avatar02.png')}
          backgroundColor='#F6EFD5'
          borderColor='#F8D146'
        />
        <SelectField
          label='Number of game'
          value={noOfGame}
          onChange={onNoOfGameChange}
          defaultImage={require('../../assets/images/winner/winner.png')}
          modalTitle='Number of game'
          modalOptions={noOfGameOptions}
        />
        <SelectField
          label='Who starts'
          value={whoStarts}
          onChange={onWhoStartsChange}
          defaultImage={require('../../assets/images/run/run.png')}
          modalTitle='Who starts'
          modalOptions={whoStartsOptions}
        />

        <div className='bottom-line' />

        <Link to='/game' className='start-btn'>
          Start Game
        </Link>
      </div>
    </div>
  )
}
