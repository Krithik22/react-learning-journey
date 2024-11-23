import React from 'react'
import UserContext from './UserContext'
import UpdateUser from './UpdateUser'
import UserProfile from './UserProfile'

const UseContext = () => {
  return (
    <UserContext>
        <UserProfile />
        <UpdateUser />
    </UserContext>
  )
}

export default UseContext