import React, { useContext, useState } from 'react'
import { Data } from './UserContext'

const UpdateUser = () => {

    const {setName} = useContext(Data)
    const [updatedName, setUpdatedName] = useState("")

    const handleInputUpdate = (e) => {
        setUpdatedName(e.target.value)
    }

    const updateName = () => {
        setName(updatedName)
        setUpdatedName("")
    }

  return (
    <div>
        <input type="text" value={updatedName} onChange={handleInputUpdate} />
        <button onClick={() => updateName(updatedName)} >Update</button>
    </div>
  )
}

export default UpdateUser