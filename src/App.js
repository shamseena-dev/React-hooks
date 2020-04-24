import React, { useState } from 'react';
import AddTodo from './AddTodo';

function Todos({todos}){
  const todosList = todos.length ? (todos.map((todo,index) =>
    <Todo key={index} todo={todo} />
  )) :
  (<p> No more Todos left!!</p>);
  return(
      <div className="collection center">
          {todosList}
      </div>
  )}

function Todo({todo}){
  return(
    <div className ="collection-item blue-text">
      <span>{todo.task}</span>
      <button  className="btn-floating btn-large waves-effect waves-light red btn-small secondary-content" > X</button>
    </div>)
}

function App() {
  const [todos,setTodos] = useState([
    {
      task: "Do Exercises"
    },
    {
        task: "Practise React courses"
    },
    {
        task: "Build Project"
    }
  ])
  const addTodoFn = (todo) =>{
     const newTodos = [...todos, { task: todo }];
    setTodos(newTodos)
    console.log(todos[todos.length -1].task);
  }
  return (
    <div className="container center">
        <div className="card blue-grey">
        <h2 className="center white-text"> Todo-list Managing App</h2>
        <Todos todos={todos} />
        <AddTodo addTodo={addTodoFn}/>
        </div>
    </div>
  );
}

export default App;
