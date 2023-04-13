import React from "react";

const CourseInfo = ({ id, onClickHandler, title }:
    { id: string; onClickHandler: void; title: string }) => {
    const handleOnClick = () => onClickHandler
    return (
        <div>
            <p>{title}</p>
            <button onClick={handleOnClick}>Delete course</button>
        </div>
    )
}