import React, { useEffect } from 'react'
import { useState } from 'react'

const ExampleOne = () => {

    const [count, setCount] = useState(() => {
        const initCnt = 10;
        return initCnt;
    })

    const handleClick = () =>{
        setCount(prevCount => prevCount + 1);
        setCount(count => count +1)
    }

    const [name, setName] = useState(() => {
      const savedName = localStorage.getItem("name");
      return savedName ? JSON.parse(savedName) : "";
    })

    const handleChange = (e) => {
      setName(e.target.value)
    }

    const handleClear = () => {
      setName("")
    }

    // useEffect(() => {
    //   localStorage.setItem("name",JSON.stringify(name))
    // },[name])

  return (
    <div>
      <h1>Your Name: {name}</h1>
      <input type="text" value={name} onChange={handleChange} placeholder='Enter your name' />
      <button onClick={handleClear} >Clear</button>
    </div>
  )
}

export default ExampleOne