import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Sidebar from './Sidebar'

import './style.sass'

interface IProps {
  player1: string
  player2: string
  noOfGame: string
  whoStarts: string
}

export default function Game(props: IProps) {
  const { player1, player2, noOfGame, whoStarts } = props

  const initStartPlayer = whoStarts === 'Always player 02' ? player2 : player1

  const [board, setBoard] = useState<any[]>(
    new Array(8).fill(new Array(8).fill(null))
  )
  const [currentPlayer, setCurrentPlayer] = useState<string>(initStartPlayer)
  const [winner, setWinner] = useState<string>('')
  const [scoreOfPlayer1, setScoreOfPlayer1] = useState<number>(0)
  const [scoreOfPlayer2, setScoreOfPlayer2] = useState<number>(0)
  const [gameNumber, setGameNumber] = useState<number>(1)
  const [winningCombination, setWinningCombination] = useState<any[]>([])

  useEffect(() => {
    let win = checkWinner(board)
    console.log('win', win)
    if (winner !== win) {
      setWinner(win)
      if (win === player1) {
        setScoreOfPlayer1(scoreOfPlayer1 + 1)
      } else {
        setScoreOfPlayer2(scoreOfPlayer2 + 1)
      }
    }
  }, [board, winner])

  const handleClick = (id: number) => {
    if (winner === '') {
      const boardCopy = board.map((arr: any) => {
        return arr.slice()
      })

      if (boardCopy[id].indexOf(null) !== -1) {
        let newSlat = boardCopy[id].reverse()
        newSlat[newSlat.indexOf(null)] = currentPlayer
        newSlat.reverse()
        setCurrentPlayer(currentPlayer === player1 ? player2 : player1)
        setBoard(boardCopy)
      }
    }
  }

  const checkLine = (a: string, b: string, c: string, d: string) => {
    return a !== null && a === b && a === c && a === d
  }

  const checkWinner = (bs: any[]) => {
    for (let c = 0; c < 8; c++)
      for (let r = 0; r < 5; r++)
        if (checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3])) {
          setWinningCombination([
            [c, r],
            [c, r + 1],
            [c, r + 2],
            [c, r + 3],
          ])
          return bs[c][r]
        }

    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 5; c++)
        if (checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r])) {
          setWinningCombination([
            [c, r],
            [c + 1, r],
            [c + 2, r],
            [c + 3, r],
          ])
          return bs[c][r]
        }

    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 5; c++)
        if (
          checkLine(
            bs[c][r],
            bs[c + 1][r + 1],
            bs[c + 2][r + 2],
            bs[c + 3][r + 3]
          )
        ) {
          setWinningCombination([
            [c, r],
            [c + 1, r + 1],
            [c + 2, r + 2],
            [c + 3, r + 3],
          ])
          return bs[c][r]
        }

    for (let r = 0; r < 6; r++)
      for (let c = 3; c < 8; c++)
        if (
          checkLine(
            bs[c][r],
            bs[c - 1][r + 1],
            bs[c - 2][r + 2],
            bs[c - 3][r + 3]
          )
        ) {
          setWinningCombination([
            [c, r],
            [c - 1, r + 1],
            [c - 2, r + 2],
            [c - 3, r + 3],
          ])
          return bs[c][r]
        }

    return ''
  }

  const playAgainClick = () => {
    setBoard(new Array(8).fill(new Array(8).fill(null)))
    setWinner('')
    setScoreOfPlayer1(0)
    setScoreOfPlayer2(0)
    setGameNumber(1)
    setWinningCombination([])
    setCurrentPlayer(whoStarts === 'Always player 02' ? player2 : player1)
  }

  const nextGameClick = () => {
    setBoard(new Array(8).fill(new Array(8).fill(null)))
    setWinner('')
    setGameNumber(gameNumber + 1)
    setWinningCombination([])

    if (whoStarts === 'Always player 01') setCurrentPlayer(player1)
    if (whoStarts === 'Always player 02') setCurrentPlayer(player2)
    if (whoStarts === 'Looser first')
      setCurrentPlayer(winner === player1 ? player2 : player1)
    if (whoStarts === 'Winner first') setCurrentPlayer(winner)
  }

  const undoStepClick = () => {}

  return (
    <div id='game'>
      <Header headerTitle='Two Players Game' />

      <div className='card'>
        <div className='game-board'>
          {board.map((x: any, i: number) => (
            <div key={i} className='grid-col' onClick={() => handleClick(i)}>
              {board[i].map((y: any, j: number) => (
                <div
                  className={
                    winningCombination.filter(
                      (d) => JSON.stringify(d) === JSON.stringify([i, j])
                    ).length > 0
                      ? 'winning-ring'
                      : ''
                  }
                >
                  <div
                    key={j}
                    className='grid-row'
                    style={{
                      borderColor:
                        board[i][j] === player1
                          ? '#37AC5D'
                          : board[i][j] === player2
                          ? '#F8D146'
                          : '#fff',
                    }}
                  >
                    {board[i][j] === player1 ? (
                      <img
                        src={require('../../assets/images/avatar01/avatar01.png')}
                        alt={board[i][j]}
                      />
                    ) : board[i][j] === player2 ? (
                      <img
                        src={require('../../assets/images/avatar02/avatar02.png')}
                        alt={board[i][j]}
                      />
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Sidebar
          player1={player1}
          player2={player2}
          scoreOfPlayer1={scoreOfPlayer1}
          scoreOfPlayer2={scoreOfPlayer2}
          noOfGame={noOfGame}
          gameNumber={gameNumber}
          winner={winner}
          currentPlayer={currentPlayer}
          playAgainClick={playAgainClick}
          nextGameClick={nextGameClick}
          undoStepClick={undoStepClick}
        />
      </div>
    </div>
  )
}
