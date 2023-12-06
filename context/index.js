import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useState, createContext, useEffect, useRef} from "react";
export const AuthContext = createContext({})

export default function AuthProvider({children}){

      
    return(
        <AuthContext.Provider 
            value={{
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}