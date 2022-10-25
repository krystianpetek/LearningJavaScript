import React, { Component } from "react";
import "./App.css";
import Form from "./Form"
import Result from "./Result"
const APIKEY = "5ea7920c2566f27e7e0005ff93b89ad6";

export interface IWeather {
  city: string,
  country: string,
  date: string,
  sunrise: string,
  sunset: string,
  temp: string,
  pressure: string,
  wind: string
}

interface IAppProps { }
interface IAppState {
  city: string,
  weather: IWeather | null,
  error: boolean,
  errorMessage: string
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      city: "",
      weather: null,
      error: true,
      errorMessage: ""
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = (event.currentTarget.value);
    this.setState(prevState => ({
      city: input
    }))
  }

  handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
  }
  static d = 0;
  componentDidUpdate(prevProps: IAppProps, prevState: IAppState): void {
    let timeout = 0;
    if (prevState.city !== this.state.city) {
      timeout = window.setTimeout(() => this.handleFetchData(), 2000);
    } else {
      clearTimeout(timeout);
    }
  }

  handleFetchData = (): void => {
    const API = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}&q=${this.state.city}`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw Error(`${response.status.toString()} ${response.statusText}`);
      })
      .then(response => {
        this.setState({
          weather: {
            city: response.name,
            country: response.sys.country,
            date: new Date(response.dt * 1000).toLocaleDateString(),
            sunrise: new Date(response.sys.sunset * 1000).toLocaleTimeString(),
            sunset: new Date(response.sys.sunset * 1000).toLocaleTimeString(),
            temp: `${(response.main.temp - 273.15).toFixed(1)} &C`,
            pressure: `${response.main.pressure} Pa`,
            wind: `${response.wind.speed} m/s`
          },
          error: false
        })
      })
      .catch(error => {
        console.log(error);
        this.setState(prevState => ({
          error: true,
          errorMessage: "Error!"
        }));
      });
  }

  render(): JSX.Element {
    const { city, weather, error, errorMessage } = this.state;

    return (
      <div>
        <div className="form">
          <Form
            change={this.handleInputChange}
            city={city}
            submit={this.handleSubmitForm}
            click={this.handleFetchData} />
        </div>
        <div className="result">
          <Result
            error={error}
            errorMessage={errorMessage}
            weather={weather} />
        </div>
      </div>
    )
  }
}

export default App;