import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/Services/history';
import api from '~/Services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    if (!user.is_admin) {
      toast.error('Somente administradores podem acessar!');
      return;
    }

    yield put(signInSuccess(token, user));

    history.push('/orders');
  } catch (e) {
    // console.log(e.response);
    toast.error(e.response.data.error);
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
]);
