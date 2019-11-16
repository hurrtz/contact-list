import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectState = state => state.contacts || initialState;

export const makeSelectContacts = () =>
  createSelector(selectState, state => state.items);

const makeSelectSelectedContactId = () =>
  createSelector(selectState, state => state.selected);

export const makeSelectSelectedContact = () =>
  createSelector(
    [makeSelectContacts(), makeSelectSelectedContactId()],
    (contacts, selectedId) =>
      (contacts.filter(contact => contact.id === selectedId) || [])[0]
  );
