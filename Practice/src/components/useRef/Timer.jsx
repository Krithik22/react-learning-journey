import React, { useRef, useState, useEffect } from 'react'

const Timer = () => {

    const [interval, setTimerInterval] = useState(0)

    const timerInterval = useRef(0)


    const startTimer = () => {
        setInterval(() => {
            setTimerInterval(interval => interval + 1)
        }, 1000)
    }

    useEffect(() => {
        console.log(interval)
    }, [interval])

    const handleIntervalClick = () => {
        timerInterval.current = interval
    }

  return (
    <div>
        <h1>Timer: {interval}</h1>
        <button onClick={startTimer} >Start Timer</button>
        <button onClick={handleIntervalClick} >Interval</button>
        <h1>Interval Time: {timerInterval.current}</h1>
    </div>
  )
}

export default Timer