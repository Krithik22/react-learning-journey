import React, { useRef } from 'react'

const FocusInput = () => {

    const FocusInput = useRef(null)

    const handleClick = () => {
        FocusInput.current.focus()
        console.log(FocusInput)
    }
  return (
    <div>
        <input type="text" ref={FocusInput} />
        <button onClick={handleClick} >Focus Input</button>
    </div>
  )
}

export default FocusInput