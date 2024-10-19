import React, { useEffect, useState } from 'react';
import '../assets/AddTaskPopup.css'; 

const AddTaskPopup = ({ closePopup, addTask, currentTask, editTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        if (currentTask){
            setTitle(currentTask.title);
            setDescription(currentTask.description);
        }
        else{
            setTitle('');
            setDescription('')
        }
    },[currentTask])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentTask) {
          editTask(currentTask.id, currentTask.column, title, description); 
        } else {
          addTask(title, description, 'To Do'); 
        }
        closePopup();
      };
      
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Task</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="Task Title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
                    <textarea type='text' placeholder="Task Description" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
                    <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
                    <button type="button" onClick={closePopup}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskPopup;
