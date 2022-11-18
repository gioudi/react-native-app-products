import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ProductsStackParmas} from '../navigator/ProductsNavigator';

interface Props
  extends StackScreenProps<ProductsStackParmas, 'ProductScreen'> {}

export const ProductScreen = ({route, navigation}: Props) => {
  const {id, name = ''} = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Nuevo producto',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>{id}Name Product</Text>
        <TextInput placeholder="Name product" style={styles.textInput} />
        <Text style={styles.label}>Select Category</Text>;{/*Picker*/}
        <TouchableOpacity
          onPress={() => {}}
          style={{backgroundColor: '#5856d6'}}>
          <Text style={{...styles.title, color: 'white'}}>Create</Text>;
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{backgroundColor: '#5856d6'}}>
            <Text style={{...styles.title, color: 'white'}}>
              Take a picture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{backgroundColor: '#5856d6'}}>
            <Text style={{...styles.title, color: 'white'}}>Upload local</Text>;
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    maeginTop: 15,
    marginBottom: 20,
  },
});
