import { createContext } from "react";

interface IMyContextLogged {
    isUserAdult: boolean;
    isUserLogged: boolean;
    toggleAdultState: () => void;
    toggleLoggedState: () => void;
}

const defaultObject: IMyContextLogged = {
    isUserLogged: false,
    toggleLoggedState: () => { },
    isUserAdult: true,
    toggleAdultState: () => { }
}

const AppContext: React.Context<IMyContextLogged> = createContext(defaultObject);

export { AppContext, defaultObject };
export type { IMyContextLogged };
