import React from 'react';

export default function ToDoList(props){
  let tasks = props.ToDo

  return (
    <div>
      {tasks.map((t, index) => 
      <li> {t} 
        <button onClick={props.removeToDo.bind(this, index)}>Remove</button> 
      </li>)}
    </div>
  )
}