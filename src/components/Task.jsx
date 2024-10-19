import React from 'react';
import { useDrag } from 'react-dnd';

const Task = ({ task, column, deleteTask, editTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id, column },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="task" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <div className="task-actions">
            <button onClick={() => editTask(task.id, column)}>✏️</button>
            <button onClick={() => deleteTask(task.id, column)}>🗑️</button>
        </div>
        <div className="task-content">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    </div>
  );
};

export default Task;
