import React from 'react'

interface IProps {
  player1: string
  player2: string
  scoreOfPlayer1: number
  scoreOfPlayer2: number
}

export default function Sidebar(props: IProps) {
  const { player1, player2, scoreOfPlayer1, scoreOfPlayer2 } = props

  return (
    <div className='sidebar'>
      <h3>5 Games Tournament</h3>
      <p>Playing Game 3</p>

      <h2>Congratulation!</h2>
      <p>David, you won Game 3</p>
      <p>David, you won tournament</p>

      <div>
        <div className='details-box' style={{ backgroundColor: '#DCF6E4' }}>
          <div className='avatar-container' style={{ borderColor: '#37AC5D' }}>
            <div className='live-ring' />
            <img
              src={require('../../assets/images/avatar01/avatar01.png')}
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
            {/* <div className="live-ring" /> */}
            <img
              src={require('../../assets/images/avatar02/avatar02.png')}
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

      <button className='modal-btn primary' onClick={() => {}}>
        Undo Step
      </button>
      <button className='modal-btn' onClick={() => {}}>
        End Tournament
      </button>
    </div>
  )
}
