import React, { FunctionComponent, Fragment } from "react";
import { INewTask } from "./INewTask";

interface AddTaskProps {
    newTask: INewTask,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onAdd: () => void
}

const AddTask: FunctionComponent<AddTaskProps> = (props) =>
(
    <Fragment>
        <div>
            <form
                onSubmit={props.onAdd}>
                <div>
                    <label htmlFor="name">Task name: </label>
                    <input
                        type="text"
                        value={props.newTask.name}
                        name="name"
                        id="name"
                        onChange={props.onChange} />
                </div>
                <div>
                    <label htmlFor="dateDone">Complete date: </label>
                    <input
                        id="dateDone"
                        name="dateDone"
                        type="date"
                        defaultValue={props.newTask.dateDone?.toDateString()}
                        onChange={props.onChange} />
                </div>
                <div>
                    <label htmlFor="important">Is priority: </label>
                    <input
                        id="important"
                        name="important"
                        type="checkbox"
                        checked={props.newTask.important}
                        onChange={props.onChange} />
                </div>
                <button
                    type="submit"
                    id="submitButton">Add new Task</button>
            </form>
        </div>
    </Fragment>
);


export default AddTask;