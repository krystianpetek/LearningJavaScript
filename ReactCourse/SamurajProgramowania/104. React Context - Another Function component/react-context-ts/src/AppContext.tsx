import React, { createContext, useState } from "react";

interface IAppContext {
    isUserLogged: boolean;
    isUserAdult: boolean;
    toggleLoggedState: () => void;
    toggleAdultState: () => void;
}

const defaultObject: IAppContext = {
    isUserLogged: false,
    isUserAdult: true,
    toggleLoggedState: () => { },
    toggleAdultState: () => { }
}

const AppContext: React.Context<IAppContext> = createContext(defaultObject);

const AppProvider = ({ children }: any) => {
    const [isUserLogged, setIsUserLogged] = useState(false);
    const [isUserAdult, setIsUserAdult] = useState(true);

    const handleToggleStateIsLogged = () => {
        setIsUserLogged((prevValue: boolean) => !prevValue);
    }
    const handleToggleStateIsAdult = () => {
        setIsUserAdult((prevValue: boolean) => !prevValue);
    }

    return (
        <AppContext.Provider value={
            {
                isUserAdult: isUserAdult,
                isUserLogged: isUserLogged,
                toggleLoggedState: handleToggleStateIsLogged,
                toggleAdultState: handleToggleStateIsAdult
            }
        }>
            {children}
        </AppContext.Provider >
    )

};
export default AppProvider;
export { AppContext };
export type { IAppContext }