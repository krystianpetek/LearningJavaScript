import React, { PureComponent } from "react";
import { AppContext, IMyContextLogged, } from "./AppContext";

class UserAdultInfo extends PureComponent {
    override render() {
        return (
            <AppContext.Consumer>
                {
                    ({ isUserAdult }: IMyContextLogged) => (
                        <div>
                            <p>User is {isUserAdult ? "an adult" : "not an adult"}</p>
                        </div>
                    )
                }

            </AppContext.Consumer>
        )
    }
}
export default UserAdultInfo;