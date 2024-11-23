import React, { useContext } from 'react'
import { Data } from './UserContext'

const UserProfile = () => {

    const {name} = useContext(Data)
  return (
    <div>{name}</div>
  )
}

export default UserProfile