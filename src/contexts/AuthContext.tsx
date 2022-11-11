import React, {createContext, useReducer} from 'react';
import cafeApi from '../api/cafeApi';
import {LoginData, LoginResponse, User} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './AuthReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
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
    } catch (error) {
      console.log(error);
    }
  };
  const signUp = () => {
    try {
      const resp = await cafeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = () => {};
  const removeError = () => {};

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
