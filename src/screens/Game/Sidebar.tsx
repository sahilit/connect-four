import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  player1: string
  player2: string
  scoreOfPlayer1: number
  scoreOfPlayer2: number
  noOfGame: string
  gameNumber: number
  winner: string
  currentPlayer: string
  playAgainClick: () => void
  nextGameClick: () => void
  undoStepClick: () => void
  player1Avatar: string
  player2Avatar: string
  lastStep: any[]
}

export default function Sidebar(props: IProps) {
  const {
    player1,
    player2,
    scoreOfPlayer1,
    scoreOfPlayer2,
    noOfGame,
    gameNumber,
    winner,
    currentPlayer,
    playAgainClick,
    nextGameClick,
    undoStepClick,
    player1Avatar,
    player2Avatar,
    lastStep,
  } = props

  const totalGames = parseInt(noOfGame)
  const totalScore = scoreOfPlayer1 + scoreOfPlayer2

  const matchWonText = () => {
    if (winner.length > 0 && totalGames > totalScore) {
      return (
        <>
          <h2>Congratulation!</h2>
          <p>
            {winner}, you won Game {gameNumber}
          </p>
        </>
      )
    }
  }

  const tournamentWonText = () => {
    if (totalGames === totalScore) {
      if (scoreOfPlayer1 === scoreOfPlayer2) {
        return (
          <>
            <h2>Draw!</h2>
            <p>Tournament is Draw</p>
          </>
        )
      }
      return (
        <>
          <h2>Congratulation!</h2>
          <p>
            {scoreOfPlayer1 > scoreOfPlayer2 ? player1 : player2}, you won
            tournament
          </p>
        </>
      )
    }
  }

  const renderButton = () => {
    if (totalGames === totalScore) {
      return (
        <button className='modal-btn primary' onClick={playAgainClick}>
          Play Again
        </button>
      )
    } else if (winner.length > 0) {
      return (
        <button className='modal-btn primary' onClick={nextGameClick}>
          Next Game
        </button>
      )
    } else {
      return (
        <button className={`modal-btn primary ${lastStep.length < 1 ? 'disabled' : ''}`} onClick={undoStepClick} disabled={lastStep.length < 1}>
          Undo Step
        </button>
      )
    }
  }

  return (
    <div className='sidebar'>
      <h3>{noOfGame} Tournament</h3>
      {winner.length === 0 && <p>Playing Game {gameNumber}</p>}

      {matchWonText()}
      {tournamentWonText()}

      <div>
        <div className='details-box' style={{ backgroundColor: '#DCF6E4' }}>
          <div className='avatar-container' style={{ borderColor: '#37AC5D' }}>
            {currentPlayer === player1 && winner.length === 0 && <div className='live-ring' />}
            <img
              src={player1Avatar || require('../../assets/images/avatar01/avatar01.png')}
              alt=''
            />
          </div>
          <div className='input-field' style={{ flex: 1 }}>
            <span>Player 01</span>
            <p>{player1}</p>
          </div>
          <div className='input-field-score'>
            <span>Score</span>
            <p>{scoreOfPlayer1}</p>
          </div>
        </div>

        <div className='details-box' style={{ backgroundColor: '#F6EFD5' }}>
          <div className='avatar-container' style={{ borderColor: '#F8D146' }}>
            {currentPlayer === player2 && winner.length === 0 && <div className='live-ring' />}
            <img
              src={player2Avatar || require('../../assets/images/avatar02/avatar02.png')}
              alt=''
            />
          </div>
          <div className='input-field'>
            <span>Player 02</span>
            <p>{player2}</p>
          </div>
          <div className='input-field-score'>
            <span>Score</span>
            <p>{scoreOfPlayer2}</p>
          </div>
        </div>
      </div>

      <div className='bottom-line' />

      {renderButton()}
      <Link to='/' className='modal-btn'>
        End Tournament
      </Link>
    </div>
  )
}
