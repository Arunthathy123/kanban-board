import React, { useState } from 'react';
import '../assets/AddTaskPopup.css'; 

const AddTaskPopup = ({ closePopup, addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(title && description){
            addTask(title, description);
            closePopup();
        }
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add Task</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="Task Title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
                    <textarea type='text' placeholder="Task Description" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
                    <button type="submit">Add Task</button>
                    <button type="button" onClick={closePopup}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskPopup;
