import { all } from 'redux-saga/effects';
import contactsSaga from 'containers/Contacts/sagas';

export default function* rootSaga() {
  yield all([contactsSaga()]);
}
