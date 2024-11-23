import React, { createContext, useState } from 'react'
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';

export const Data  = createContext();
// export const UpdateData = createContext();

const UserContext = ({children}) => {

    const [name, setName] = useState("Krithik")
    
  return (

    // I did separatelyy, the below is the better way to do it. Send it as an object and destruct wherever required
    // <>
    // <Data.Provider value = {name}>
    //     <UserProfile />
    // </Data.Provider>
    // <UpdateData.Provider value = {setName}>
    //     <UpdateUser />
    // </UpdateData.Provider>
    // </>
    
    <Data.Provider value = {{ name, setName }} >
        {children}
    </Data.Provider>
  )
}

export default UserContext