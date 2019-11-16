import { put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_CONTACTS, FETCH_CONTACTS_URL } from './constants';
import { setContacts } from './actions';

import { makeSelectContacts } from './selectors';

function* fetchContacts() {
  let contacts = yield select(makeSelectContacts());

  if (contacts.length === 0) {
    try {
      contacts = yield fetch(FETCH_CONTACTS_URL)
        .then(data => data.json())
        .then(data => data.map(item => ({ ...item, id: `${item.id}` }))); // convert id to string to fix proptype error with flatlist items
      yield put(setContacts(contacts));
    } catch (error) {
      console.error(error);
    }
  }
}

export default function* contactsSagas() {
  yield takeLatest(FETCH_CONTACTS, fetchContacts);
}
