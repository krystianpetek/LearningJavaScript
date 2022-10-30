import React, { Component } from "react";
import "./styles/App.css";
import INewTask, { NewTaskDefault } from "./interfaces/INewTask";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import ITask, { ITaskDefault } from "./interfaces/ITask";

interface IAppProps { }
interface IAppState {
  newTask: INewTask
  tasks: ITask[],
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      tasks: [
        {
          ...ITaskDefault(),
          id: 0,
          name: "Zrobić zadania z algorytmów i struktur danych",
          important: false,
        },
        {
          ...ITaskDefault(),
          id: 1,
          name: "Jechać w sobotę na studia",
          important: true,
        },
      ],
      newTask: {
        ...NewTaskDefault()
      }
    }
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    let newTaskChanged = this.state.newTask;

    if (event.target.type === "checkbox") {
      const checked: boolean = event.target.checked;
      newTaskChanged = {
        ...newTaskChanged,
        [name]: checked
      };
    }
    else {
      const value = event.currentTarget.value;
      newTaskChanged = {
        ...newTaskChanged,
        [name]: value
      };
    }

    this.setState((prevState: IAppState) => ({
      ...prevState,
      newTask: newTaskChanged
    }))
  }

  handleOnAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const id = this.state.tasks[this.state.tasks.length - 1].id + 1;
    const currentNewTask = this.state.newTask;
    let addNewTask: ITask = {
      ...ITaskDefault(),
      id: id,
      name: currentNewTask.name!,
      important: currentNewTask.priority!,
      finishDate: currentNewTask.finishDate!,
    }

    if (!addNewTask.name)
      return;

    this.setState((prevState: IAppState) => {
      let tasks = [...prevState.tasks];
      tasks.push(addNewTask);
      return {
        tasks: tasks,
        newTask: {
          ...NewTaskDefault()
        }
      }
    })
  }

  handleTaskDone = (id: number) => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.active = false;
        task.completeDate = new Date().toLocaleString();
      }
      return task;
    });

    this.setState((prevState: IAppState) => ({
      ...prevState,
      tasks: tasks
    }))
  }

  handleTaskDelete = (id: number) => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.visible = false;
      }
      return task;
    });

    this.setState((prevState: IAppState) => ({
      ...prevState,
      tasks: tasks
    }))
  }

  render(): JSX.Element {
    return (
      <div className="app" >
        <h3 style={{ textAlign: "center" }}>ToDo App</h3>
        <AddTask
          newTask={this.state.newTask}
          onChange={this.handleOnChange}
          onAdd={this.handleOnAdd} />
        <hr />

        <TaskList tasks={this.state.tasks}
          onTaskDone={this.handleTaskDone}
          onTaskDelete={this.handleTaskDelete}
        />
      </div>
    )
  }
}

export default App;