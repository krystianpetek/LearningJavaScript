import React, { Component } from "react";
import "./App.css";
import Word from "./Word"

interface IWords {
  id: number;
  en: string;
  pl: string;
};

interface IAppProps { }
interface IAppState {
  words: IWords[],
  isLoaded: boolean
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      words: [],
      isLoaded: false
    }
  }

  componentDidMount(): void {
    setTimeout(this.fetchData, 3000);
  }

  fetchData = () => {
    fetch('data/words.json')
      .then(response =>
        (response.json()))
      .then(data =>
        this.setState({
          words: data.words,
          isLoaded: true
        }))
      .catch();
  }

  render(): JSX.Element {
    const { words: wordsState, isLoaded } = this.state;
    const words = wordsState.map(word => {
      return (<Word key={word.id} english={word.en} polish={word.pl} />)
    })
    return (
      <div className="app">
        <ul>
          {!isLoaded ? "Loading data" : words}
        </ul>
      </div>
    )
  }
}

export default App;