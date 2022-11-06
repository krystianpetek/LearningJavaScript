import React, { useContext } from 'react'
import { AppContext, IMyContextLogged } from './AppContext';

const Button = () => {
    const { toggleLoggedState }: IMyContextLogged = useContext(AppContext);
    return (
        <div>
            <button onClick={toggleLoggedState}>Other context</button>
        </div>
    );
}


export default Button;