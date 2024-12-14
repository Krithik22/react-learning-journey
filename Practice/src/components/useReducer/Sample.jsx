import React from 'react'

import { useReducer } from 'react'

const Sample = () => {

    const initialState = {count: 0}

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {...state, count: state.count + 1}
                
            case "DECREMENT":
                return {...state, count: state.count - 1}

            case "RESET":
                return {...state, count: 0}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
        <h1>Count: {state.count}</h1>
        <button onClick={() => dispatch({type: "INCREMENT"})} >+</button>
        <button onClick={() => dispatch({type: "DECREMENT"})} >-</button>
        <button onClick={() => dispatch({type: "RESET"})} >Reset</button>
    </>
  )
}

export default Sample