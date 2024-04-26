import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  
  const [user ,setUser] = React.useState(null)
  
  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>
      {children}
      </UserContext.Provider>
      
    </div>
  );
}

export default UserContextProvider;

