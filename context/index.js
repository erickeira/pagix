import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useState, createContext, useEffect, useRef} from "react";
import { supabase } from "../utils";
export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])
      
    return(
        <AuthContext.Provider 
            value={{
                session
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}