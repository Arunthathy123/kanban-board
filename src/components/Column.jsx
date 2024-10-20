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
        <h2 className='taskName'>{name}</h2>
        {tasks.length === 0 ? (
          <p className="no-tasks-message">No tasks available in this column...!</p>
        ) : (
          tasks.map(task => (
              <Task key={task.id} task={task} column={name} deleteTask={deleteTask} editTask={() => editTask(task, name)} />
          ))
        )}
      </div>
    );
  };
  

export default Column;
