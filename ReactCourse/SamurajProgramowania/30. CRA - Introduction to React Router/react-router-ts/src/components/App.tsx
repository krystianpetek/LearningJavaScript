import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import "./styles/App.css";

interface IAppProps { }
interface IAppState {
}

const Home = () => <h1>Starting page</h1>;
const News = () => <h1>News</h1>;
const Contact = () => <h1>Contact for us</h1>;
const NotFound = () => <h1>Page not found!</h1>;

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
                <li>
                  <NavLink end to="/">Start</NavLink>
                </li>
                <li>
                  <NavLink end to="news">News</NavLink>
                </li>
                <li>
                  <NavLink end to="contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            Welcome page

            <Routes>
              <Route index element={<Home />} />
              <Route path="news" element={<News />} />
              <Route element={<NotFound />}></Route>
              <Route path="contact" element={<Contact />} />
            </Routes>

          </section>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

// https://reactrouter.com/en/main/start/tutorial