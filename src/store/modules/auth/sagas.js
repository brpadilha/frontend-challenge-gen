import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { cpf, password } = payload;

    const response = yield call(api.post, 'sessions', {
      cpf,
      password,
    });

    const { token, client } = response.data;

    if (!client.manager) {
      toast.error('User is not a manager');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, client));
    toast.success(`Welcome ${client.name} !`);
    history.push('/transactions');
  } catch (error) {
    toast.error('User authentication failure. Review your CPF or Password');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, cpf, password } = payload;

    yield call(api.post, 'clients', {
      name,
      cpf,
      password,
      manager: true,
    });
    toast.success('User successfully registered');
    history.push('/');
  } catch (error) {
    toast.error('Fail to register the user, check the data');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
