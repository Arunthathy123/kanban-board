import React from 'react'
import '../assets/boardStyle.css'
import Column from './Column'

const Board = () => {
  return (
    <div className='board'>
      <Column />
      <Column />
      <Column />
    </div>
  )
}

export default Board
