import React, { useEffect } from 'react'

const ChallengeOne = () => {

    useEffect(() => {
        //logs this message 2 times because of strict mode
        console.log("challenge one")
    }, [])
  return (
    <div>Hello from useEffect Challenge 1</div>
  )
}

export default ChallengeOne