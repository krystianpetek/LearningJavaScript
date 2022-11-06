import React, { useState } from 'react';
import { AppContext, defaultObject } from './AppContext';
import Button from './Button';
import UserAdultInfo from './UserAdultInfo';
import UserInfo from './UserInfo';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
  const [isUserAdult, setIsUserAdult] = useState(true);

  const handleToggleStateIsLogged = () => {
    setIsUserLogged((prevValue: boolean) => !prevValue);
  }

  const handleToggleStateIsAdult = () => {
    setIsUserAdult((prevValue: boolean) => !prevValue);
  }

  return (
    <div className="App">
      <AppContext.Provider value={
        {
          isUserAdult: isUserAdult,
          isUserLogged: isUserLogged,
          toggleLoggedState: handleToggleStateIsLogged,
          toggleAdultState: handleToggleStateIsAdult
        }
      } >
        <UserInfo />
        <Button />
      </AppContext.Provider>
      <AppContext.Provider value={
        {
          isUserAdult: isUserAdult,
          isUserLogged: isUserAdult,
          toggleLoggedState: handleToggleStateIsAdult,
          toggleAdultState: handleToggleStateIsAdult
        }
      } >
        <UserAdultInfo />
        <Button />
      </AppContext.Provider>
    </div >
  );
}

export default App;