import React from 'react'

function Person({name, age}) {
  return (
    <div>
        <h1>Name: {name}</h1>
        <p>Age: {age}</p>
    </div>
  )
}

export default Person