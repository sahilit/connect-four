import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.sass'

interface IProps {
  headerTitle: string
}

export default function Header({headerTitle}: IProps) {
  let history = useHistory()

  return (
    <div id='header'>
      <i className='fas fa-arrow-left' onClick={() => history.goBack()} />
      <p>{headerTitle}</p>
    </div>
  )
}
