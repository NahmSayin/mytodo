import React from 'react';

export default function ToDoList(props){
  let tasks = props.ToDo

  return (
    <div style={{ backgroundColor: "#ff7b25", width: "50%", minHeight: "627px", padding: "10px", margin: "auto" }}>
      {tasks.map((t, index) => 
      <li> {t} 
        <button onClick={props.removeToDo.bind(this, index)}>Remove</button> 
      </li>)}
    </div>
  )
}