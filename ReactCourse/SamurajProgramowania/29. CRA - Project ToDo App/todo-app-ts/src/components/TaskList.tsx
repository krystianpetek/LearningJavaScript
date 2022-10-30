import React, { FunctionComponent } from 'react';
import ITask from './interfaces/ITask';
import Task from './Task';
import "./styles/TaskList.css";

interface ITaskListProps {
    tasks: ITask[],
    onTaskDone: (id: number) => void,
    onTaskDelete: (id: number) => void
}

const TaskList: FunctionComponent<ITaskListProps> = (props: ITaskListProps) => {
    const { tasks, onTaskDelete, onTaskDone } = props;

    const taskActive = tasks
        .filter(task => task.visible && task.active)
        .sort((taskA, taskB) => taskA.name.localeCompare(taskB.name))
        .map(task => {
            return <Task
                key={task.id}
                task={task}
                onTaskDone={onTaskDone}
                onTaskDelete={onTaskDelete}
            ></Task>
        })

    const taskDone = tasks
        .filter(task => task.visible && !task.active)
        .sort((taskA, taskB) => taskB.completeDate!.localeCompare(taskA.completeDate!))
        .map(task => {
            return <Task
                key={task.id}
                task={task}
                onTaskDone={onTaskDone}
                onTaskDelete={onTaskDelete}
            ></Task>
        })

    return (
        <div>
            <h2 className="header">Active tasks ({taskActive.length})</h2>
            <div className="taskLists">
                {taskActive.length === 0 ? <span>Nothing to do</span> : taskActive}
            </div>
            <hr></hr>
            <h2 className="header">Tasks done ({taskDone.length})</h2>
            <div className="taskLists">
                {taskDone.length === 0 ? <span>Nothing done yet</span> : taskDone}
            </div>
        </div>
    );
}

export default TaskList;