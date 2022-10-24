import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import { IUser } from "./IUser";
import UsersList from "./UsersList";

interface IAppProps { }
interface IAppState {
  users: Array<IUser>
}
const API = "https://randomuser.me/api/?results=1";

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      users: []
    }
  }

  handleViaFetch = (): void => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status.toString() + "something went wrong!");
      })
      .then(response => response.json())
      .then(response => {
        const newValues = response.results;
        this.setState(prevState => ({
          users: prevState.users.concat(newValues)
        }))
      })
      .catch(error => console.log(error));
  }

  handleViaAxios = (): void => {
    axios.get(API)
      .then(response => {
        if (response.status) {
          return response;
        }
        throw Error(response.status.toString() + "something went wrong!");
      })
      .then(response => response.data)
      .then(response => {
        const newValues = response.results;
        this.setState(prevState => ({
          users: prevState.users.concat(newValues)
        }))
      })
      .catch(error => console.log(error));
  }

  render(): JSX.Element {
    const users = this.state.users;
    return (
      <div className="app">
        <div className="buttons">
          <ButtonFetchUsers title={"axios"} click={this.handleViaAxios} />
          <ButtonFetchUsers title={"fetch"} click={this.handleViaAxios} />
        </div>
        <UsersList users={users} />
      </div>
    )
  }
}

export default App;