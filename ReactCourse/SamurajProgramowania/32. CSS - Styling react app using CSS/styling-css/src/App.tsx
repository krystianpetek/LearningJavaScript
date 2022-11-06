import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import React, { Component } from "react";
import Text from "./Text";
import Footer from "./Footer";

class App extends Component {
    state = { underline: false }

    render(): React.ReactNode {
        const text = "Hello world!"

        const classes = ["one"]

        if (this.state.underline) classes.push("line");
        if (text.length > 10) classes.push("big");

        return (
            <div className="app" onClick={() => {
                this.setState({
                    underline: !this.state.underline
                })
            }}>
                <h1 className={classes.join(" ")}>{text}</h1>
                <Text />
            </div>
        )
    }
}

export default App;