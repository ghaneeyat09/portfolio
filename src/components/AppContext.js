import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [status, setStatus] = useState(false);
    const changeStatus = () => {
        console.log("changed")
        setStatus(!status)
    }
    return(
        <AppContext.Provider value={{status, changeStatus}}>{children}</AppContext.Provider>
    )
}


export default AppContext;