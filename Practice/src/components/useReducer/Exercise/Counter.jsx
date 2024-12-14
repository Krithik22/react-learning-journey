import React, { useReducer, useState } from 'react'
import { counterReducer } from './CounterReducer'

const Counter = () => {
    const initialState = {count: 0};
    const [counter, dispatch] = useReducer(counterReducer, initialState)
    const [byVal, setByVal] = useState("");

  return (
    <>
        <h1>Count: {counter.count}</h1>
        <button onClick={() => dispatch({type: "INCREMENT"})} >+</button>
        <button onClick={() => dispatch({type: "DECREMENT"})} >-</button>
        <button onClick={() => dispatch({type: "RESET"})} >RESET</button>
        <input type="text" value={byVal} onChange={e => setByVal(e.target.value)} />
        <button onClick={() => dispatch({type: "INCREMENT_BY_VAL", payload: parseInt(byVal)})} >+ by {byVal}</button>
        <button onClick={() => dispatch({type: "DECREMENT_BY_VAL", payload: parseInt(byVal)})} >- by {byVal}</button>
    </>
  )
}

export default Counter