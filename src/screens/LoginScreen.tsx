import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {useForm} from '../hooks/useForm';
import {loginStyles} from '../themes/loginThemes';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../contexts/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);
  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    Keyboard.dismiss();
    signIn({correo: email, password: password});
  };

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }
    Alert.alert('We have a problem', errorMessage, [
      {
        text: 'Understood',
        onPress: removeError,
      },
    ]);
  });
  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.appFormContainer}>
          <WhiteLogo />
          <Text style={loginStyles.appTitle}>Login</Text>
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
              onSubmitEditing={onLogin}
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
              onSubmitEditing={onLogin}
            />
          </View>
          <View style={loginStyles.appContainerButton}>
            <TouchableOpacity
              style={loginStyles.appButton}
              onPress={onLogin}
              activeOpacity={0.8}>
              <Text style={loginStyles.appButton__Text}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* Create a new account */}
          <View style={loginStyles.appContainerButton}>
            <TouchableOpacity
              style={{
                ...loginStyles.appButton,
                borderWidth: 0,
                borderColor: 'transparent',
              }}
              onPress={() => navigation.navigate('RegisterScreen')}
              activeOpacity={0.8}>
              <Text style={loginStyles.appButton__Text}>
                Create a new account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
