import React, { FunctionComponent, Fragment } from "react";
import INewTask from "./interfaces/INewTask";
import "./styles/AddTask.css";

interface AddTaskProps {
    newTask: INewTask,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onAdd: (e: React.FormEvent<HTMLFormElement>) => void
}

const AddTask: FunctionComponent<AddTaskProps> = (props) => {
    const minDate: string = new Date().toISOString().slice(0, 10);
    return (
        <div className="addTask">
            <form
                onSubmit={props.onAdd}>
                <div className="inputContainer">
                    <label htmlFor="name">Task name: </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Add new task"
                        value={props.newTask.name}
                        onChange={props.onChange} />
                </div>
                <div className="inputContainer">
                    <label htmlFor="finishDate">Complete date: </label>
                    <input
                        className="finishDate"
                        id="finishDate"
                        name="finishDate"
                        type="date"
                        min={minDate}
                        value={props.newTask.finishDate}
                        onChange={props.onChange} />
                </div>
                <div className="inputContainer">
                    <label htmlFor="priority">Is priority: </label>
                    <input
                        className="priority"
                        id="priority"
                        name="priority"
                        type="checkbox"
                        checked={props.newTask.priority}
                        onChange={props.onChange} />
                </div>
                <div className="buttonContainer">
                    <button className="submitButton"
                        type="submit"
                        id="submitButton">Add new task</button>
                </div>
            </form>
        </div>
    )
};


export default AddTask;