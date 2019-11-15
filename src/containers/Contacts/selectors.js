import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectState = state => state || initialState;

export const makeSelectContacts = () =>
  createSelector(selectState, state => state.contacts);
