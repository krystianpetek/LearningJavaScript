import React, { Component } from "react";
import "./App.css";
import { IAppState } from "../interfaces/IAppState";
import { IAppProps } from "../interfaces/IAppProps";

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {

    }
  }

  render(): JSX.Element {
    return (
      <div className="app">
      </div>
    )
  }
}

export default App;