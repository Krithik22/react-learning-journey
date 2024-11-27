import React, { useId } from 'react'

const UniqueId = () => {

    const id = useId()//This is used to provide unique Id

  return (
    <div>
        <label htmlFor={`${id}-uname`}>Username</label>
        <input type="text" id={`${id}-uname`} />
        <br />
        <label htmlFor={`${id}-password`}>Password</label>
        <input type="text" id={`${id}-password`} />
    </div>
  )
}

export default UniqueId