import { createContext } from "react";

const Context = createContext();

export const UserContext = ({children}) => {
    const user = {name:"pavi",phno:"9874561230"}
    return(
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    )
}
export default Context;