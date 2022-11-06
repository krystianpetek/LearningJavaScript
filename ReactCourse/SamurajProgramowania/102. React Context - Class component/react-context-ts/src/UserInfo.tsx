import React, { PureComponent } from "react";
import { AppContext, IMyContextLogged } from "./AppContext";

class UserInfo extends PureComponent {
    override render(): React.ReactNode {
        return (
            <AppContext.Consumer>
                {
                    ({ isUserLogged }: IMyContextLogged) => (
                        <div>
                            <p>User is {isUserLogged ? "logged" : "no logged"}</p>
                        </div>
                    )
                }

            </AppContext.Consumer>
        )
    }
}
export default UserInfo;