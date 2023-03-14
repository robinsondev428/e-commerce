import React, { ReactNode, createContext, useEffect, useState, useContext } from 'react'
import Login from '../pages/login'
import { isAuthenticated } from './AuthService'
import { UserType } from '../types/user'
import {UserContextType} from '../types/usercontext'

const UserContext  = createContext<UserContextType>({
  currentUser: "",
  setCurrentUser: ()=>{}
});

interface UserProviderType {
  children: ReactNode
}

export const UserProvider = ({children}: UserProviderType) => {
  const [currentUser, setCurrentUser] = useState<UserType>();

  useEffect(() => {
    const checkLoggedIn = async() =>{
      let user = isAuthenticated();
      if (user === null) {
        localStorage.setItem('user', '');
        user = '';
      }
      
      setCurrentUser(user);

    }
    checkLoggedIn();
  }, []);
  
  console.log('usercontext', currentUser);

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext);