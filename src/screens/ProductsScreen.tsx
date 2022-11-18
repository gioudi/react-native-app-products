import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {ProductsContext} from '../contexts/ProductsContext';
import {ProductsStackParmas} from '../navigator/ProductsNavigator';

interface Props
  extends StackScreenProps<ProductsStackParmas, 'ProductsScreen'> {}

export const ProductsScreen = ({navigation}: Props) => {
  const {products} = useContext(ProductsContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductScreen', {})}>
          <Text style={styles.title}>New Product</Text>;
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prducts Screen</Text>

      <FlatList
        data={products}
        keyExtractor={p => p._id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductScreen', {
                id: item._id,
                name: item.nombre,
              })
            }>
            <Text style={styles.title}>{item.nombre}</Text>;
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  itemSeparator: {
    borderBottomWidth: 5,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
});
