import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task';

const Column = ({ name, tasks = [], moveTask,  deleteTask, editTask }) => {
    const [, drop] = useDrop({
      accept: 'task',
      drop: (item) => moveTask(item.id, item.column, name),
    });
  
    return (
      <div className="column" ref={drop}>
        <h2>{name}</h2>
        {tasks.map(task => (
            <Task key={task.id} task={task} column={name} deleteTask={deleteTask} editTask={editTask} />
        ))}

      </div>
    );
  };
  

export default Column;
