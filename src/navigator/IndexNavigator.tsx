import * as React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {ProtectedScreen} from '../screens/ProtectedScreen';
import {AuthContext} from '../contexts/AuthContext';
import {useContext} from 'react';

const Stack = createNativeStackNavigator();

export const IndexNavigator = () => {
  const {status} = useContext(AuthContext);
  status === 'authenticated';
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
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      )}
    </Stack.Navigator>
  );
};
