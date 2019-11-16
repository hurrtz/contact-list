import {
  FETCH_CONTACTS,
  SET_CONTACTS,
  SET_SELECTED_CONTACT,
} from './constants';

export const fetchContacts = () => ({ type: FETCH_CONTACTS });

export const setContacts = contacts => ({
  type: SET_CONTACTS,
  payload: contacts,
});

export const setSelectedContact = id => ({
  type: SET_SELECTED_CONTACT,
  payload: id,
});
