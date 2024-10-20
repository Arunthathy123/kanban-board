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
    const [currentTask, setCurrentTask] = useState(null);

    const openPopup = (task = null) => {
        setCurrentTask(task);
        setIsPopupOpen(true);
    };
      
    const closePopup = ()=> {
        setCurrentTask(null);
        setIsPopupOpen(false);
    }

    // ---------------------Add task logic-------------------------------------
    const addTask = (title, description, column = 'To Do') => {
        const newTask = {
          id: Date.now(),
          title,
          description,
          column, 
          date: new Date().toLocaleDateString(),
        };
        const updatedColumns = {
          ...columns,
          'To Do': [...columns['To Do'], newTask],
        };
        setColumns(updatedColumns);
    };

    // ----------------------------delete task logic----------------------------------
    const deleteTask = (id, column ) =>{
        console.log("Deleting task with ID:", id, "from column:", column);
        if (columns[column]) {
            const updatedTasks = columns[column].filter(task => task.id !== id);
            setColumns({ ...columns, [column]: updatedTasks });
        } else {
        console.error(`Column "${column}" does not exist in columns.`);
        }
    }

    // ----------------------------edit logic-----------------------------------
    const editTask = (id, column, updatedTitle, updatedDescription) => {
        const updatedTasks = columns[column]?.map(task =>
          task.id === id ? { ...task, title: updatedTitle, description: updatedDescription } : task
        );
   
        if (updatedTasks) {
          setColumns({ ...columns, [column]: updatedTasks });
        } else {
          console.error(`Column "${column}" does not exist.`);
        }
   };
   

    // ------------------- move task ------------------------------------
    const moveTask = (taskId, fromColumn, toColumn)=>{
        const task= columns[fromColumn].find(task => task.id === taskId);
        setColumns({
            ...columns,
            [fromColumn]:columns[fromColumn].filter(task => task.id !== taskId),
            [toColumn]: [...columns[toColumn],task]
        })
    }
    return (
        <div>
            <button className='add-task-btn' onClick={() => openPopup()}><b style={{fontSize:'1.2rem'}}>+ </b>Add New Task</button>
            <div className='board'>
                {Object.keys(columns).map(column => (
                    <Column key={column} name={column} tasks={columns[column]} moveTask={moveTask} deleteTask={deleteTask}  editTask={openPopup} />
                ))}
                {isPopupOpen && <AddTaskPopup closePopup={closePopup} addTask={addTask} currentTask={currentTask} editTask={editTask}/>}
            </div>
        </div>
        
    )
}

export default Board
