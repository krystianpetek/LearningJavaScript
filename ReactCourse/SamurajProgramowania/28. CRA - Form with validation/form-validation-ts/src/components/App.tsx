import React, { Component } from "react";
import "./App.css";
import { IAppState, IAppProps } from "../interfaces/IAppState";
import { IFormValid } from "../interfaces/FormValidFields";
import { Input } from "./Input"
import { setTimeout } from "timers/promises";

const DefaultFormValues: IFormValid = {
  username: true,
  email: true,
  password: true,
  accept: true,
};

const DefaultStateValues: IAppState = {
  username: "",
  email: "",
  password: "",
  accept: false,
  errors: DefaultFormValues,
  message: ""
};

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = DefaultStateValues;
  }

  messages = {
    username_incorrect: "Name must be longer rather than 10 chars and cannot contain space.",
    email_incorrect: "Missing @ in e-mail.",
    password_incorrect: "Password must have 8 chars.",
    accept_incorrect: "Not agreed restrictions."
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    const name: string = e.target.name;

    if (e.target.type === "checkbox") {
      const checked: boolean = e.target.checked;
      this.setState((prevState) => ({
        ...prevState,
        [name]: checked
      }))
    }
    else {
      this.setState((prevState) => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  formValidation = () => {
    let valid = DefaultFormValues;
    const { username, email, password, accept } = this.state;

    if (username.length > 10 && username.indexOf(" ") === -1)
      valid.username = true;
    else
      valid.username = false;

    if (email.indexOf("@") !== -1)
      valid.email = true;
    else
      valid.email = false;

    if (password.length > 8)
      valid.password = true;
    else
      valid.password = false;

    if (accept)
      valid.accept = true;
    else
      valid.accept = false;

    return valid;
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = this.formValidation();

    this.setState({
      errors: validation
    });

    if (Object.values(validation)
      .some(restriction => restriction === false)) {
      return;
    }

    this.setState({
      username: "",
      accept: false,
      email: "",
      password: "",
      message: "Form has been sended!"
    });

    console.log("form sended");
  }

  componentDidUpdate(prevProps: Readonly<IAppProps>, prevState: Readonly<IAppState>, snapshot?: any): void {
    window.setTimeout(() => this.setState({ message: "" }), 10000);
  }

  render(): JSX.Element {
    const { username, email, password, accept, errors, message } = this.state;

    return (
      <div className="app">
        <form onSubmit={this.handleSubmit} noValidate>
          <Input
            type="text"
            name="username"
            label="Your name: "
            value={username}
            change={this.handleChange}
            error={errors.username}
            message={this.messages.username_incorrect}
          />
          <Input
            type="email"
            name="email"
            label="Your e-mail address: "
            value={email}
            change={this.handleChange}
            error={errors.email}
            message={this.messages.email_incorrect}
          />

          <Input
            type="password"
            name="password"
            label="Your password: "
            value={password}
            change={this.handleChange}
            error={errors.password}
            message={this.messages.password_incorrect}
          />

          <Input
            type="checkbox"
            name="accept"
            label="I agree to accept the regulations: "
            accept={accept}
            change={this.handleChange}
            error={errors.accept}
            message={this.messages.accept_incorrect}
          />

          <div className="button">
            <button>Sign in</button>
          </div>
          <h3 style={{ color: "#eee" }}>{Object.values(this.state.errors).every(error => error === true) ? message : ""}</h3>
        </form>
      </div>
    )
  }
}

export default App;