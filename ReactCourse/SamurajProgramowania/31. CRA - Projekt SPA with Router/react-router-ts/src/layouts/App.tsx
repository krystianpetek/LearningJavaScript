import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

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
            <Header />
          </header>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Page />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
          <Routes>
            <Route />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

// https://reactrouter.com/en/main/start/tutorial