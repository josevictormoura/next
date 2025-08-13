'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextData{
    user: string | null;
    login: (username: string) => void;
    isLoggedIn: boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined)

export function AuthProvider ({children}: {children: ReactNode}){
    const [user, setUser] = useState<string | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)


    function login(username: string){
        setUser(username)
        setIsLoggedIn(true)
    }

    function logout(){
        setUser(null)
        setIsLoggedIn(false)
    }

    return (
        //isLoggedIn: !!user
        <AuthContext.Provider value={{user, login, logout, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}