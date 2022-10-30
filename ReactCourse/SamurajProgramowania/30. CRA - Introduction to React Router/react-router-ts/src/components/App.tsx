import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./styles/App.css";

interface IAppProps { }
interface IAppState {
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {

    }
  }

  render(): JSX.Element {
    return (
      <BrowserRouter>

        <div className="app" >
          <header>
            <nav>
              <ul>
                {/* <li><a href="/">Start</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/contact">Contact</a></li> */}

                <li>
                  <Link to="/">Start</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            Page - welcome
          </section>
        </div>

      </BrowserRouter>
    )
  }
}

export default App;