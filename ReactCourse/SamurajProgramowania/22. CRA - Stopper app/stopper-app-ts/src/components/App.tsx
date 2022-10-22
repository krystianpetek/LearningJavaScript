import React, { Component } from "react";
import "./App.css";
import { SwitchButton } from "./SwitchButton";

interface IAppProps { }
interface IAppState {
  time: number,
  active: boolean
}

class App extends Component<IAppProps, IAppState> {
  idInterval: number = 0;
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      time: 0,
      active: false
    }
  }

  handleClick = (): void => {
    if (this.state.active) {
      clearInterval(this.idInterval);
    }
    else {
      this.idInterval = window.setInterval(() => this.addSecond(), 1000);
    }

    this.setState((previousState: IAppState) => ({
      active: !previousState.active
    }))
  }

  addSecond = (): void => {
    this.setState((prevState: IAppState) => ({
      time: prevState.time + 1
    }))
  }

  render() {
    return (
      <>
        <p>{this.state.time}</p>
        <SwitchButton
          click={this.handleClick}
          active={this.state.active} />
      </>
    )
  }
}

export default App;