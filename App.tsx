import 'react-native-gesture-handler';

import * as React from 'react';

import {IndexNavigator} from './src/navigator/IndexNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/contexts/AuthContext';

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <IndexNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
