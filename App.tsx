import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {IndexNavigator} from './src/navigator/IndexNavigator';
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
