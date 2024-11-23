import React, { useEffect, useState } from 'react'

const ChallengeThree = () => {

    const [profileData, setProfileData] = useState(
        {
            name: "krithik",
            age: 21
        }
    )

    const [updateToggle, setUpdateToggle] = useState(false)
    const [updatedName, setUpdatedName] = useState("")
    const [updatedAge, setUpdatedAge] = useState(0)

    const updateDetails = () => {
        setUpdateToggle(!updateToggle)
    }

    const updateName = () => {
        setProfileData({...profileData, name: updatedName})
        setUpdatedName("")
    }

    const updateAge = () => {
        setProfileData({...profileData, age: updatedAge})
        setUpdatedAge()
    }

    const handleUpdateName = (e) => {
        setUpdatedName(e.target.value)
    }

    const handleUpdateAge = (e) => {
        setUpdatedAge(Number(e.target.value))
    }

  return (
    <div>
        <h3>Name: {profileData.name}</h3>
        <h4>Age: {profileData.age}</h4>
        <button onClick={updateDetails}>Update Details</button>
        {
            updateToggle ? (
                <>
                <input type="text" name='updatedName' value={updatedName} onChange={handleUpdateName} placeholder='Enter Updated name'/>
                <button onClick={updateName}>Update Name</button>
                <input type="number" name='updatedAge' value={updatedAge} onChange={handleUpdateAge} placeholder='Enter updated age'/>
                <button onClick={updateAge}>Update Age</button>
                </>
            ) : (null)
        }
    </div>
  )
}

export default ChallengeThree