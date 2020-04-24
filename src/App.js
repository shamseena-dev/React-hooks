import React, { useState } from 'react';
import AddTodo from './AddTodo';

function Todos({todos, deleteTodo}){
  const todosList = todos.length ? (todos.map((todo,index) =>
    <Todo key={index} todo={todo} deleteTodo={deleteTodo}/>
  )) :
  (<p> No more Todos left!!</p>);
  return(
      <div className="collection center">
          {todosList}
      </div>
  )}

function Todo({todo, deleteTodo}){
  return(
    <div className ="collection-item blue-text">
      <span>{todo.task}</span>
      <button  className="btn-floating btn-large waves-effect waves-light red btn-small secondary-content" onClick={()=>{deleteTodo(todo)}} > X</button>
    </div>)
}

function App() {
  const [todos,setTodos] = useState([
    {
      id : 1,
      task: "Do Exercises"
    },
    { 
        id:2,
        task: "Practise React courses"
    },
    { 
        id:3,
        task: "Build Project"
    }
  ])
  const addTodoFn = (todo) =>{
     const newTodos = [...todos, { id: todos.length, task: todo }];
    setTodos(newTodos)
    
  }
  const deleteTodoFn = (task) =>{
    

    const newTodos = todos.filter(todo =>{
      return todo.id!== task.id
    })
    setTodos(newTodos)
  }
  
    return (
    <div className="container center">
        <div className="card blue-grey">
        <h2 className="center white-text"> Todo-list Managing App</h2>
        <Todos todos={todos} deleteTodo={deleteTodoFn} />
        <AddTodo addTodo={addTodoFn}/>
        </div>
    </div>
  );
}

export default App;
