import React, { useState } from 'react'
import '../assets/boardStyle.css'
import Column from './Column'
import {useLocalStorage} from '../hooks/useLocalStorage'
import AddTaskPopup from './AddTaskPopup';

const initialColumns = {
    'To Do': [],
    'In Progress': [],
    'Done': []
  };

const Board = () => {
    const [columns, setColumns] = useLocalStorage('kanbanColumns', initialColumns);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup =()=> setIsPopupOpen(true);
    const closePopup = ()=> setIsPopupOpen(false);

    return (
        <div className='board'>
            <button className='add-task-btn' onClick={openPopup}>+ Add Task</button>
            {Object.keys(columns).map(column => (
                <Column key={column} name={column} task={columns[column]} moveTask='' />
            ))}
            {isPopupOpen && <AddTaskPopup closePopup={closePopup} addTask='' />}
        </div>
    )
}

export default Board
