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

  console.log(player1, player2, noOfGame, whoStarts);

  const [board, setBoard] = useState<any>(
    new Array(8).fill(new Array(8).fill(null))
  )
  const [currentPlayer, setCurrentPlayer] = useState<string>('player1')
  const [winner, setWinner] = useState<string>('')

  useEffect(() => {
    let win = checkWinner(board)
    console.log('win', win)
    if (winner !== win) {
      setWinner(win)
    }
  }, [board])

  const handleClick = (slatID: number) => {
    if (winner === '') {
      const boardCopy = board.map(function (arr: any) {
        return arr.slice()
      })

      if (boardCopy[slatID].indexOf(null) !== -1) {
        let newSlat = boardCopy[slatID].reverse()
        newSlat[newSlat.indexOf(null)] = currentPlayer
        newSlat.reverse()
        setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1')
        setBoard(boardCopy)
      }
    }
  }

  const checkLine = (a: any, b: any, c: any, d: any) => {
    return a !== null && a === b && a === c && a === d
  }

  const checkWinner = (bs: any) => {
    for (let c = 0; c < 8; c++)
      for (let r = 0; r < 4; r++)
        if (checkLine(bs[c][r], bs[c][r + 1], bs[c][r + 2], bs[c][r + 3]))
          return bs[c][r] + ' wins!'

    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 4; c++)
        if (checkLine(bs[c][r], bs[c + 1][r], bs[c + 2][r], bs[c + 3][r]))
          return bs[c][r] + ' wins!'

    for (let r = 0; r < 3; r++)
      for (let c = 0; c < 4; c++)
        if (
          checkLine(
            bs[c][r],
            bs[c + 1][r + 1],
            bs[c + 2][r + 2],
            bs[c + 3][r + 3]
          )
        )
          return bs[c][r] + ' wins!'

    for (let r = 0; r < 4; r++)
      for (let c = 3; c < 6; c++)
        if (
          checkLine(
            bs[c][r],
            bs[c - 1][r + 1],
            bs[c - 2][r + 2],
            bs[c - 3][r + 3]
          )
        )
          return bs[c][r] + ' wins!'

    return ''
  }

  // console.log(board);

  return (
    <div id='game'>
      <Header headerTitle='Two Players Game' />

      <div className='card'>
        <div className='game-board'>
          {board.map((x: any, i: number) => (
            <div key={i} className='grid-col' onClick={() => handleClick(i)}>
              {board[i].map((y: any, j: number) => (
                <div
                  key={j}
                  className='grid-row'
                  style={{
                    borderColor:
                      board[i][j] === 'player1'
                        ? '#37AC5D'
                        : board[i][j] === 'player2'
                        ? '#F8D146'
                        : '#fff',
                  }}
                >
                  {board[i][j] === 'player1' ? (
                    <img
                      src={require('../../assets/images/avatar01/avatar01.png')}
                      alt={board[i][j]}
                    />
                  ) : board[i][j] === 'player2' ? (
                    <img
                      src={require('../../assets/images/avatar02/avatar02.png')}
                      alt={board[i][j]}
                    />
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <Sidebar
          player1={'David'}
          player2={'Maria'}
          scoreOfPlayer1={3}
          scoreOfPlayer2={1}
        />
      </div>
    </div>
  )
}
