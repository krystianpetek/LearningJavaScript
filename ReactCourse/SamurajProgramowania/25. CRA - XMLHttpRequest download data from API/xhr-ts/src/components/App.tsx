import React, { Component } from "react";
import "./App.css";

interface Geolocation {
  lat: number,
  lng: number
}
interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geolocation
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address
  phone: string,
  website: string,
  company: Company
}

interface IAppProps { }
interface IAppState { users: User[] }

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      users: []
    }
  }

  requestData = () => {
    const xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = (): void => {
      if (xhr.status === 200) {
        const users: User[] = JSON.parse(xhr.responseText);
        this.setState({
          users: users
        })
      }
    }
    xhr.send();
  }

  componentDidMount(): void {
    this.requestData();
  }

  render(): JSX.Element {
    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.address.city}</p>
      </div>
    ))
    return (
      <div className="app">
        {users}
      </div>
    )
  }
}

export default App;