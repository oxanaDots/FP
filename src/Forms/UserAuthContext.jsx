import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext()
export const UserAuthContext=()=> useContext(AuthContext)
export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)

  return (
   <AuthContext.Provider value={{user, setUser}}>
    {children}
   </AuthContext.Provider>
  );

}
