import React from 'react';
import Main from './rn/main';
import { NavigationContainer } from '@react-navigation/native';

import { BottomSheetProvider } from './rn/components/BottomSheetContext';
import { StatusBar } from 'react-native';

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={'#020202'} />
        <BottomSheetProvider>
          <Main />
        </BottomSheetProvider>
      </NavigationContainer>
    </>
  );
}

export default App;
