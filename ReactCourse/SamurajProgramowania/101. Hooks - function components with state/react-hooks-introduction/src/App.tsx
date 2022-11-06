import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
    const [info, setInfo] = useState<string>("Not concatenate with other useState");
    const [state, setState] = useState<{ a: number; b: number }>({ a: 0, b: 10 })
    const [counter, setCounter] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(true);

    const addOne = () => setCounter(prevValue => prevValue + 1)
    const handler = () => (setState((prevstate) => ({ ...prevstate, a: prevstate.a + 1 })));
    const toggleVisibilityCounter = () => (setIsActive(prevstate => !prevstate));

    const counterComponent = isActive ? <Counter rerenderCounter={counter} /> : null;
    return (
        <>
            <div onClick={handler}>
                <h1>Hello in React course!</h1>
                <p>Start editing to see some magic happens</p>
                <p>{state.a}</p>
                <p onClick={addOne}>Counter: {counter}</p>

                <button onClick={toggleVisibilityCounter}>Show/Hide counter</button>
            </div>
            <div>

                <button onClick={addOne}>Rerender component</button>
                {counterComponent}
            </div>
        </>
    );
}

export default App;