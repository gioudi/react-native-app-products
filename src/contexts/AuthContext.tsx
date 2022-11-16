import React, {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cafeApi from '../api/cafeApi';
import {
  LoginData,
  LoginResponse,
  RegisterData,
  User,
} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './AuthReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (registerData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const initialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      return dispatch({type: 'notAuthenticated'});
    }

    const {data} = await cafeApi.get('/auth');

    dispatch({
      type: 'signUp',
      payload: {
        token: data.token,
        user: data.usuario,
      },
    });
  };

  const signIn = async ({correo, password}: LoginData) => {
    try {
      const resp = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });

      dispatch({
        type: 'signUp',
        payload: {
          token: resp.data.token,
          user: resp.data.usuario,
        },
      });

      await AsyncStorage.setItem('token', resp.data.token);
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'addError',
        payload: 'error' || 'There is a wrong information',
      });
    }
  };
  const signUp = async ({correo, password, nombre}: RegisterData) => {
    try {
      const resp = await cafeApi.post('/auth/usuarios', {
        correo,
        password,
        nombre,
      });
      dispatch({
        type: 'signUp',
        payload: {
          token: resp.data.token,
          user: resp.data.usuario,
        },
      });

      await AsyncStorage.setItem('token', resp.data.token);
    } catch (error) {
      dispatch({
        type: 'addError',
        payload: 'error' || 'We had a wrong, try again later please!',
      });
    }
  };
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: 'logout',
    });
  };
  const removeError = () => {
    dispatch({
      type: 'removeError',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
