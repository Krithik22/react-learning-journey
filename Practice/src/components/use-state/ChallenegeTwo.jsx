import React, { useEffect, useState } from 'react'

const ChallenegeTwo = () => {

    const [todoList, setTodoList] = useState([]);
    const [todoItem, setTodoItem] = useState("");

    const addTodoItem = () => {
        setTodoList([...todoList, todoItem]);
        setTodoItem("");
    }

    const handleOnChange = (e) => {
        setTodoItem(e.target.value)
    }
    useEffect(() => {
        console.log(todoList)
    },[todoList])
  return (
    <div>
        <input type="text" value={todoItem} onChange={handleOnChange} placeholder='Enter your todo task' />
        <button onClick={addTodoItem}>Add task</button>
        <h1>Todo List</h1>
        {todoList.map(item => (
            <li key={Math.random()}>{item}</li>
        ))}
    </div>
  )
}

export default ChallenegeTwo