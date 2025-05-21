import React, { useState } from 'react';
import './ToDoCSS.css'; 

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Go to Gym", "Read a Book"]);
    const [task, setTask] = useState('');

    function handleInputChange(event) {
        setTask(event.target.value);
    }
    
    function addTask() {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask('');
        }
    }
    
    function deleteTask(index) {
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks);           
    }
    
    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);   
        }
    }
    
    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);   
        }
    }

    return (
        <div>
            <div className="To-do-List">
                <h1>To-Do-List</h1>
                <input type="text" value={task} onChange={handleInputChange} placeholder="Add a new task" />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="move-up"
                            onClick={() => moveTaskUp(index)}
                        >Move up</button>
                        <button
                            className="move-down"
                            onClick={() => moveTaskDown(index)}
                        >Move down</button>        
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;