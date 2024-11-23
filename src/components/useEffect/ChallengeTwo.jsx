import React, { useEffect, useState } from 'react'

const ChallengeTwo = () => {

    const [val, setVal] = useState(0)

    useEffect(() => {
        document.title = `Value incremented to ${val}`
        console.log(`val incremented to ${val}`)
    }, [val])
  return (
    <div>
        <h2>Value: {val}</h2>
        <button onClick={() => setVal(val + 1)} >increment</button>
    </div>
  )
}

export default ChallengeTwo