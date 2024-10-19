import React from 'react'
import { useDrag } from 'react-dnd'
const Task = (task, column) => {

    const [{isDragging}, drag ] = useDrag({
        
        type : 'task',
        item : { id: task.id, column },
        collect : (monitor)=>({
            isDragging : !!monitor.isDragging(),
        }),
    })

    return (
        <div className="task" ref={drag} style={{ opacity:isDragging ? 0.5 : 1}}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>  
    )
}

export default Task