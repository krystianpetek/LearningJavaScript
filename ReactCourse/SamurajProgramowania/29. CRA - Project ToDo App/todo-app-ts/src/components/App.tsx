import React, { Component } from "react";
import "./App.css";
import { INewTask } from "./INewTask";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import { ITask } from "./ITask";

interface IAppProps { }
interface IAppState {
  tasks: ITask[],
  newTask: INewTask
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 0,
          name: "Zrobić zadania z algorytmów i struktur danych",
          important: true,
          active: true,
          visible: true,
          createDate: new Date(),
          finishDate: null,
        },
        {
          id: 1,
          name: "Jechać w sobotę na studia",
          important: true,
          active: true,
          visible: true,
          createDate: new Date(),
          finishDate: null
        },
      ],
      newTask: {
        name: "",
        dateDone: new Date(),
        important: false
      }
    }
  }

  handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;
    const newTask = this.state.newTask;
    if (name === "name")
      newTask.name = value;

    if (name === "dateDone")
      newTask.dateDone = new Date(value);

    if (name === "important")
      newTask.important = event.currentTarget.checked;

    this.setState((prevState: IAppState) => ({
      ...prevState,
      newTask: newTask
    }))

    console.log(newTask);
  }

  handleOnAdd = () => {
    const id = this.state.tasks[this.state.tasks.length - 1].id + 1;
    const currentNewTask = this.state.newTask;
    let addNewTask: ITask = {
      id: id,
      name: currentNewTask.name!,
      important: currentNewTask.important!,
      active: true,
      createDate: new Date(),
      finishDate: currentNewTask.dateDone!,
      visible: true
    }
    this.setState((prevState: IAppState) => {

      const tasks = prevState.tasks.push(addNewTask);
      return tasks;

    })
  }

  render(): JSX.Element {
    return (
      <div className="app">
        <AddTask
          newTask={this.state.newTask}
          onChange={this.handleOnChange}
          onAdd={this.handleOnAdd} />
        <hr />
        <TaskList />
      </div>
    )
  }
}

export default App;