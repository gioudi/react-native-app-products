import * as React from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';

export const ProtectedScreen = () => {
  const {user, logOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Screen</Text>
      <Button title="logout" color="#5856d6" onPress={logOut} />
      <Text>{JSON.stringify(user, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
