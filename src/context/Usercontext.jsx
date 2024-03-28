import React, {  createContext } from 'react'

export const UserDatacontext = createContext();

const Usercontext = ({children}) => {
    const name = "prakhar"
  return (
    <UserDatacontext.Provider value={{name}}>
      {children}
    </UserDatacontext.Provider>
  )
}

export default Usercontext;
