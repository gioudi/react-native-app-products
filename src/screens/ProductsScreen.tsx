import * as React from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prducts Screen</Text>
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
