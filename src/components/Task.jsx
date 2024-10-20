import React from 'react';
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, column, deleteTask, editTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id, column },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const columnTaskColors = {
    'To Do': '#f1c1c1',        
    'In Progress': '#ffeb99',  
    'Done': '#c1e1c5'          
  };
  return (
    <div className="task" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 , backgroundColor: columnTaskColors[column] || '#fff', padding: '10px',borderRadius: '8px',marginBottom: '10px',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',transition: 'box-shadow 0.3s ease',}}>
        
        <div className="task-content">
          <div className='taskHead'>
            <h3 className='taskTitle'>{task.title}</h3>
            <div className="task-actions">
              <button className="task-actions-btn" onClick={() => editTask(task.id, column)}> <FontAwesomeIcon style={{color:'#1f497d',fontSize:'1rem'}} icon={faEdit} /></button>
              <button className="task-actions-btn" onClick={() => deleteTask(task.id, column)}><FontAwesomeIcon style={{color:'red', fontSize:'1rem'}} icon={faTrashAlt} /></button>
            </div>
          </div>
          <div className='taskHead' style={{gap:'3rem', marginTop:'-15px'}}>
            <p className='taskDescription'>{task.description}</p>
            <p className='taskDate'><strong>Created on:</strong> {task.date}</p>
          </div> 
        </div>
    </div>
  );
};

export default Task;
