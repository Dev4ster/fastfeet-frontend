import { all } from 'redux-saga/effects';

import auth from '~/Store/Modules/Auth/sagas';
import user from '~/Store/Modules/User/sagas';

export default function* rootSaga() {
  return yield all([auth, user]);
}
