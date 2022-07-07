import './App.css';
import ToDoListInput from './components/ToDoListInput';
import ToDoList from './components/ToDoList';
import React, {useState} from 'react'

function App() {

  const [ToDo, setToDo] = useState([])

  function addToDo(task){
    let addedTasks = [...ToDo]
    addedTasks.push(task)
    setToDo(addedTasks)
  }

  function removeToDo(index){
    let updatedTasks = [...ToDo]
    updatedTasks.splice(index, 1)
    setToDo(updatedTasks)
  }


  return (
    <div>
      <h1>To Do List</h1>
      <ToDoListInput addToDo={addToDo}/> 
      <ToDoList ToDo={ToDo} removeToDo={removeToDo}/>
    </div>
  );
}

export default App;
