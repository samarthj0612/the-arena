import React from 'react';
import Main from './rn/main';
import { NavigationContainer } from '@react-navigation/native';


function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
}

export default App;
