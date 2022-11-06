import React from 'react';
import AppContextProvider from './AppContext';
import Button from './Button';
import UserInfo from './UserInfo';

const App = () => (
  <div className="App">
    <AppContextProvider>
      <UserInfo />
      <Button />
    </AppContextProvider>
  </div >
);

export default App;