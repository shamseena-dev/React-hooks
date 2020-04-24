import React, { useState} from 'react';

function AddTodo({addTodo}){
    const [task,setTask] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      addTodo(task);
      console.log("bfr",task);
      setTask('')
    };
    return (
      <div className="card blue-grey">
       <div className="card-content">
           <h5 className="white-text">Add New Todo Tasks:</h5>
           <form onSubmit={handleSubmit}>                           
               <input type="text" placeholder="Add New Todo here..." value={task} onChange={e => setTask(e.target.value)} ></input>
               <button className="btn waves-effect waves-light" type="submit">Add Task</button>
           </form>
           </div>
      </div>
  )
    }
export default AddTodo;  