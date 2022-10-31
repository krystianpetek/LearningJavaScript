import React from "react";

const LoginPage = () => {
    return (
        <>
            <div>
                <label htmlFor="login" />
                Enter login: <input type="text" name="login" />
            </div>
            <div>
                <label htmlFor="password" />
                Enter password: <input type="password" name="password" />
            </div>
            <button type="submit">Login</button>
        </>
    );
}

export default LoginPage;