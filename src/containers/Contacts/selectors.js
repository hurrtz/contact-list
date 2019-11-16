import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectState = state => state.contacts || initialState;

export const makeSelectContacts = () =>
  createSelector(selectState, state => state.items);

export const makeSelectSelectedContact = () =>
  createSelector(selectState, state => state.selelected);
