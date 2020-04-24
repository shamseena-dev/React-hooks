import React, { useState } from 'react';

function Todos({todos}){
  return(
  todos.map(todo => (
    <Todo todo={todo}/>
  ))
  )
}
function Todo({todo}){
  return(
    <div key={todo.id}>
      <p>{todo.id}</p>
      <p>{todo.task}</p>
    </div>
  )
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
