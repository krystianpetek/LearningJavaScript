import React, { FunctionComponent } from "react";
import ITask from "./interfaces/ITask";
import "./styles/Task.css";

interface ITaskProps {
    task: ITask,
    onTaskDone: (id: number) => void,
    onTaskDelete: (id: number) => void
}

const Task: FunctionComponent<ITaskProps> = (props: ITaskProps) => {
    const task = props.task;

    return (
        <>
            <div className="task">
                <h4>Title: <span className={task.important ? "important" : ""}>{task.name}</span></h4>
                <p>Finish date:  {new Date(task.finishDate).toUTCString()}</p>
                {task.active ?
                    <>
                        <div className="listButtonContainer">
                            <button className="listButton" onClick={() => props.onTaskDone(task.id)}>Task done</button>
                            <button className="listButton" onClick={() => props.onTaskDelete(task.id)}>Cancel task</button>
                        </div>
                    </> :
                    <>
                        <p>Complete date: {new Date(task.completeDate!).toUTCString()}</p>
                        <div className="listButtonContainer">
                            <button className="listButton" onClick={() => props.onTaskDelete(task.id)}>Delete</button>
                        </div>
                    </>}
            </div>
        </>
    );
}

export default Task;