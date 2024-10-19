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

    // ---------------------Add task logic-------------------------------------
    const addTask =(title, description)=>{
        const newTask = {
            id: Date.now(),
            title,
            description
        };
        const updatedColumns ={
            ...columns, 
            'To Do': [...columns['To Do'], newTask]
        };
        setColumns(updatedColumns);
        console.log('Updated Columns:', updatedColumns);
    }

    // ----------------------------Edit task logic----------------------------------
    const deleteTask = (id, column ) =>{
        const updateTasks =  columns[column].filter(task => task.id !== id);
        setColumns({...columns, [column]: updateTasks})
    }

    // ----------------------------Update logic-----------------------------------
    const editTask = (id, column, updatedTitle, updatedDescription)=>{
        const updatedTasks = columns[column].map(task => task.id === id ? 
            {...task, title: updatedTitle, description: updatedDescription } : task
        );
        setColumns({...columns, [column]:updatedTasks})
    }


    return (
        <div>
            <button className='add-task-btn' onClick={openPopup}>+ Add Task</button>
            <div className='board'>
                {Object.keys(columns).map(column => (
                    <Column key={column} name={column} tasks={columns[column]} moveTask='' deleteTask={deleteTask}  editTask={editTask} />
                ))}
                {isPopupOpen && <AddTaskPopup closePopup={closePopup} addTask={addTask}/>}
            </div>
        </div>
        
    )
}

export default Board
