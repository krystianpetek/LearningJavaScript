import React, { Component } from "react";

const Old = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h1>Presentation state in React</h1>
            <p>State value: {counter}</p>
        </div>
    )
}

export default Old;