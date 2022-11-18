import 'react-native-gesture-handler';

import * as React from 'react';

import {IndexNavigator} from './src/navigator/IndexNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/contexts/AuthContext';
import {ProductsProvider} from './src/contexts/ProductsContext';

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </AuthProvider>
  );
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
