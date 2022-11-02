import React from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

import {WhiteLogo} from '../components/WhiteLogo';
import {useForm} from '../hooks/useForm';
import {loginStyles} from '../themes/loginThemes';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {email, password, name, form, onChange} = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onRegister = () => {
    Keyboard.dismiss();
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: '#5856d6'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.appFormContainer}>
          <WhiteLogo />
          <Text style={loginStyles.appTitle}>Register</Text>
          <View style={{marginBottom: 25}}>
            <Text style={loginStyles.appLabel}>Name: </Text>
            <TextInput
              style={[
                loginStyles.appTextInput,
                Platform.OS === 'ios' && loginStyles.appTextInputIOS,
              ]}
              placeholder="Write your name"
              placeholderTextColor="rgba(255,255,25,0.4)"
              underlineColorAndroid="white"
              selectionColor="white"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'name')}
              value={name}
              onSubmitEditing={onRegister}
            />
            <Text style={loginStyles.appLabel}>Password: </Text>
            <TextInput
              style={[
                loginStyles.appTextInput,
                Platform.OS === 'ios' && loginStyles.appTextInputIOS,
              ]}
              placeholder="Write your password"
              placeholderTextColor="rgba(255,255,25,0.4)"
              underlineColorAndroid="white"
              secureTextEntry
              selectionColor="white"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'password')}
              value={password}
              onSubmitEditing={onRegister}
            />
          </View>
          <View style={{marginBottom: 25}}>
            <Text style={loginStyles.appLabel}>Email: </Text>
            <TextInput
              style={[
                loginStyles.appTextInput,
                Platform.OS === 'ios' && loginStyles.appTextInputIOS,
              ]}
              placeholder="Write your email"
              placeholderTextColor="rgba(255,255,25,0.4)"
              keyboardType="email-address"
              underlineColorAndroid="white"
              selectionColor="white"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'email')}
              value={email}
              onSubmitEditing={onRegister}
            />
            <Text style={loginStyles.appLabel}>Password: </Text>
            <TextInput
              style={[
                loginStyles.appTextInput,
                Platform.OS === 'ios' && loginStyles.appTextInputIOS,
              ]}
              placeholder="Write your password"
              placeholderTextColor="rgba(255,255,25,0.4)"
              underlineColorAndroid="white"
              secureTextEntry
              selectionColor="white"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => onChange(value, 'password')}
              value={password}
              onSubmitEditing={onRegister}
            />
          </View>
          <View style={loginStyles.appContainerButton}>
            <TouchableOpacity
              style={loginStyles.appButton}
              onPress={onRegister}
              activeOpacity={0.8}>
              <Text style={loginStyles.appButton__Text}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              ...loginStyles.appButton,
              borderWidth: 0,
              borderColor: 'transparent',
              position: 'absolute',
              top: 50,
              left: 20,
              borderWidth: 1,
              borderColor: 'white',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 100,
            }}
            onPress={() => navigation.navigate('LoginScreen')}
            activeOpacity={0.8}>
            <Text style={loginStyles.appButton__Text}>Back</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
