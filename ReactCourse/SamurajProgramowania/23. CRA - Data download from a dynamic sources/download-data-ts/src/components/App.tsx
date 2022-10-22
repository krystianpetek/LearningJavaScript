import React, { Component } from "react";
import "./App.css";

interface IDataType {
  id: number,
  title: string,
  body: string
}

const data: IDataType[] = [
  {
    id: 1,
    title: "Wiadomość numer 1",
    body: "Zawartość wiadomości numer 1 ..."
  },
  {
    id: 2,
    title: "Wiadomość numer 2",
    body: "Zawartość wiadomości numer 2 ..."
  },
]

window.setInterval(() => {
  const index = data.length + 1;
  console.log(index);
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Zawartość wiadomości numer ${index} ...`
  })
}, 2000);


interface IAppProps { }
interface IAppState {
  comments: IDataType[],
}

class App extends Component<IAppProps, IAppState> {
  intervalId: number = 0;
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      comments: [...data]
    }
  }

  getData = (): void => {
    const comments = this.state.comments;

    if (comments.length !== data.length)
      this.setState((previousState: IAppProps) => ({
        comments: [...data]
      }))
  }

  componentDidMount(): void {
    this.intervalId = window.setInterval(this.getData, 5000);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);
  }

  render(): JSX.Element {
    const reverseComments = this.state.comments.map(comment =>
    (
      <div key={comment.id}>
        <h4>{comment.title}</h4>
        <div>{comment.body}</div>
      </div>
    )).reverse();

    return (
      <div className="app">
        {reverseComments}
      </div>
    )
  }
}

export default App;