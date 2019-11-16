import { SET_CONTACTS, SET_SELECTED_CONTACT } from './constants';

export const initialState = {
  items: [],
  selected: undefined,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, items: action.payload };

    case SET_SELECTED_CONTACT:
      return { ...state, selected: action.payload };

    default:
      return state;
  }
};

export default contactsReducer;
