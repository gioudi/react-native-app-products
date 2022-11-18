import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ProductsStackParmas} from '../navigator/ProductsNavigator';

interface Props
  extends StackScreenProps<ProductsStackParmas, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: Props) => {
  const {id, name = ''} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Nuevo producto',
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{id}Products Screen</Text>
      <Text style={styles.title}>{name}</Text>
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
