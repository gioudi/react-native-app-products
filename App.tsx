import 'react-native-gesture-handler';

import * as React from 'react';

import {IndexNavigator} from './src/navigator/IndexNavigator';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <IndexNavigator />
    </NavigationContainer>
  );
};

export default App;
