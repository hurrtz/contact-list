import uuid from 'uuid/v4';
import {
  SET_CONTACTS,
  SET_SELECTED_CONTACT,
  ADD_CONTACT,
  CONTACT_TOBIASWINKLER,
} from './constants';

export const initialState = {
  items: [],
  selected: undefined,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, items: [CONTACT_TOBIASWINKLER, ...action.payload] };

    case SET_SELECTED_CONTACT:
      return { ...state, selected: action.payload };

    case ADD_CONTACT:
      return {
        ...state,
        items: [...state.items, { ...action.payload, id: uuid() }],
      };

    default:
      return state;
  }
};

export default contactsReducer;
