import React, { useContext } from "react";
import { AppContext, IAppContext } from "./AppContext";

const UserInfo = () => {
    const { isUserLogged }: IAppContext = useContext(AppContext)

    return (
        <div>
            <p>User is {isUserLogged ? "logged" : "no logged"}</p>
        </div>
    );
};

export default UserInfo;