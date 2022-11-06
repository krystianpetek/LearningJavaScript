import React, { useContext } from "react";
import { AppContext, IMyContextLogged } from "./AppContext";

const UserAdultInfo = () => {
    const { isUserAdult }: IMyContextLogged = useContext(AppContext);

    return (
        <div>
            <p>User is {isUserAdult ? "an adult" : "not an adult"}</p>
        </div>
    );
};
export default UserAdultInfo;