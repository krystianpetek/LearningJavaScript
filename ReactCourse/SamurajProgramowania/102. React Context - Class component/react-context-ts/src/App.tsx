import React, { PureComponent } from 'react';
import { AppContext, defaultObject, IMyContextLogged } from './AppContext';
import Button from './Button';
import UserAdultInfo from './UserAdultInfo';
import UserInfo from './UserInfo';

class App extends PureComponent {
  override state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true
  }

  override render() {
    return (
      <div className="App">
        <AppContext.Provider value={
          {
            isUserAdult: this.state.isUserAdult,
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
            toggleAdultState: this.handleToggleStateIsAdult
          }
        } >
          <UserInfo />
          <Button />
        </AppContext.Provider>
        <AppContext.Provider value={
          {
            isUserAdult: this.state.isUserAdult,
            isUserLogged: this.state.isUserAdult,
            toggleLoggedState: this.handleToggleStateIsAdult,
            toggleAdultState: this.handleToggleStateIsAdult
          }
        } >
          <UserAdultInfo />
          <Button />
        </AppContext.Provider>
      </div >
    );
  }

  handleToggleStateIsLogged = () => {
    this.setState(
      (prevState: IMyContextLogged) => ({ isUserLogged: !prevState.isUserLogged }));
  }

  handleToggleStateIsAdult = () => {
    this.setState(
      (prevState: { isUserAdult: boolean }) => ({ isUserAdult: !prevState.isUserAdult }));
  }
}

export default App;