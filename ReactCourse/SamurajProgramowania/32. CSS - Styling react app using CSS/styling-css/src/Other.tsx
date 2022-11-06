import React, { Component } from 'react';
import CSS from "csstype";

class Other extends Component {
  state = {
    active: false
  }
  render(): React.ReactNode {

    const btn_off: CSS.Properties = {
      border: "2px solid black",
      padding: "10px 20px",
      fontFamily: "arial",
      fontSize: "30px",
      display: "block",
      margin: "20px auto",
      backgroundColor: "#fff"
    };

    const btn_on: CSS.Properties = {
      border: "2px solid black",
      padding: "10px 20px",
      fontFamily: "arial",
      fontSize: "30px",
      display: "block",
      margin: "20px auto",
      color: "white",
      backgroundColor: "cadetblue"
    };

    return (
      <div>
        <button
          style={this.state.active ? btn_on : btn_off}
          onClick={() => this.setState(() => {
            return { active: !this.state.active }
          })}>{this.state.active ? "Turn off" : "Turn on"}</button>
      </div >
    )
  }
}

export default Other;
