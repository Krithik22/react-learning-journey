import React, { useState } from 'react'

const Todo = () => {

    const [todoList, setTodoList] = useState([])

    const [todoItem, setTodoItem] = useState("")

    const handleInputChange = (e) => {
        setTodoItem(e.target.value);
    }

    const addTodoItem = () => {
        setTodoList([...todoList, 
            {
                id: todoList.length,
                todo: todoItem
            }
        ]);
        setTodoItem("");
    }

    const removeTodo = (id) => {
        setTodoList(todoList.filter(t => t.id !== id));
    }

  return (
    <>
        <input type="text" value={todoItem} onChange={handleInputChange} />
        <button onClick={addTodoItem}>Add to List</button>
        {todoList.length === 0 ? (
            <h1>Add items to your todo list to complete it today</h1>
        ) : (
            <>
            {todoList.map((t) => (
                <li key={t.id}>
                    <span>{t.todo}</span>
                    <button onClick={() => removeTodo(t.id)}>X</button>
                </li>
            ))}
            </>
        )}
    </>
  )
}

export default Todo