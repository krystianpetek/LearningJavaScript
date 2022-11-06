import React, { useContext } from 'react'
import { AppContext, IAppContext } from './AppContext';

const Button = () => {
    const { toggleLoggedState }: IAppContext = useContext(AppContext);
    return (
        <div>
            <button onClick={toggleLoggedState}>Other context</button>
        </div>
    );
}


export default Button;