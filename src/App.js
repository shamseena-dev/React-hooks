import React, { useState } from 'react';

function Todos({todos}){
  const todosList = todos.length ? (todos.map(todo =>
    <Todo key={todo.id} todo={todo} />
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
      id: 1,
      task: "Do Exercises"
    },
    {
      id: 2,
      task: "Practise React courses"
    },
    {
      id: 3,
      task: "Build Project"
    }
  ])
  return (
    <div className="container center">
        <div className="card blue-grey">
        <h2 className="center white-text"> Todo-list Managing App</h2>
        <Todos todos={todos} />
        </div>
    </div>
  );
}

export default App;
