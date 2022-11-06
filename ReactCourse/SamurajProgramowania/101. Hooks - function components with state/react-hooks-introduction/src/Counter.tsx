import React, { useEffect, useState } from "react";

const Counter = (props: { rerenderCounter: number }) => {
    const [counter, setCounter] = useState(0);

    const handleMouseMove = (event: MouseEvent) => {
        setCounter(event.clientX);
    }

    useEffect(() => {
        console.log("zdarzenie mousemove zamontowane");
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            console.log("odmontowane");
            window.removeEventListener("mousemove", handleMouseMove);
        }

    }, [props.rerenderCounter]);

    return (
        <div>
            <p>{counter}</p>
            <p>{props.rerenderCounter}</p>
        </div>
    )
};

export default Counter;