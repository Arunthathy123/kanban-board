import React from 'react'
import '../assets/boardStyle.css'
import Column from './Column'
import {useLocalStorage} from '../hooks/useLocalStorage'

const initialColumns = {
    'To Do': [],
    'In Progress': [],
    'Done': []
  };

const Board = () => {
    const [columns, setColumns] = useLocalStorage('kanbanColumns', initialColumns);
    return (
        <div className='board'>
            {Object.keys(columns).map(column => (
                <Column key={column} name={column} task={columns[column]} moveTask='' />
            ))}
        </div>
    )
}

export default Board
