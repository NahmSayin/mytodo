import React, {useRef} from 'react'


export default function ToDoListInput(props)   {
    const toDoRef = useRef()
    
    function handleSubmit(e){
        const name = toDoRef.current.value
        if (name === '') return
        props.addToDo(name)
        toDoRef.current.value = null
    }
  return (
    <div style={{backgroundColor: "#d64161", width: "25%", padding: "10px", margin: "auto" }}>
            <input ref={toDoRef} type="text" placeholder="Enter a task" />
            <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}