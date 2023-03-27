import { useDispatch } from 'react-redux';
import { IUser } from '../../../models/IUser';
import { AppDispatch, RootState } from '../../index';
import {
  AuthActionEnum,
  SetUserAction,
  SetAuthAction,
  SetLoadingAction,
  SetErrorAction,
} from './types';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user,
  }),

  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionEnum.SET_AUTH,
    payload: auth,
  }),

  setIsLoading: (loading: boolean): SetLoadingAction => ({
    type: AuthActionEnum.SET_LOADING,
    payload: loading,
  }),

  setError: (error: string): SetErrorAction => ({
    type: AuthActionEnum.SET_ERROR,
    payload: error,
  }),
};
