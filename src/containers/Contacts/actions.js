import { FETCH_CONTACTS, SET_CONTACTS } from './constants';

export const fetchContacts = () => ({ type: FETCH_CONTACTS });

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts,
});
