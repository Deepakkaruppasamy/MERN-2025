import { createContext } from "react";

export const Context=createContext();

export const UserContext=({children})=>{
    const user={username: "Deepak" ,phn:"1234567890"}
        return(
            <Context.Provider value={user}>
                {children}
                </Context.Provider>
        )
    
}
