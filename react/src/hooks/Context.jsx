import { createContext } from "react";

const Context = createContext();

export const UserContext = ({children}) => {
    const user = {name:"John wick", phno:"9998887777"}
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}
export default Context;