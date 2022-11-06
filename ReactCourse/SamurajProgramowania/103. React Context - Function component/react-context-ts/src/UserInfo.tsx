import React, { useContext } from "react";
import { AppContext, IMyContextLogged } from "./AppContext";

const UserInfo = () => {
    const { isUserLogged }: IMyContextLogged = useContext(AppContext)

    return (
        <div>
            <p>User is {isUserLogged ? "logged" : "no logged"}</p>
        </div>
    );
};

export default UserInfo;