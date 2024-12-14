import React, { useState } from 'react'

const ChallengeOne = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment} >increase</button>
    </div>
  )
}

export default ChallengeOne