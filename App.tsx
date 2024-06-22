import React from 'react';
import Main from './rn/main';
import {NavigationContainer} from '@react-navigation/native';

import {BottomSheetProvider} from './rn/components/BottomSheetContext';

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <BottomSheetProvider>
          <Main />
        </BottomSheetProvider>
      </NavigationContainer>
    </>
  );
}

export default App;
