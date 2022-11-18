import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {ProtectedScreen} from '../screens/ProtectedScreen';
import {AuthContext} from '../contexts/AuthContext';
import {useContext} from 'react';
import {LoadingScreen} from '../screens/LoadingScreen';
import {ProductsNavigator} from './ProductsNavigator';
const Stack = createNativeStackNavigator();

export const IndexNavigator = () => {
  const {status} = useContext(AuthContext);
  if (status === 'checking') {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {status === 'authenticated' ? (
        <>
          <Stack.Screen name="Home" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />;
          <Stack.Screen
            name="ProductsNavigator"
            component={ProductsNavigator}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
