import {
  SET_CONTACTS,
  SET_SELECTED_CONTACT,
  ContactTobiasWinkler,
} from './constants';

export const initialState = {
  items: [],
  selected: undefined,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, items: [ContactTobiasWinkler, ...action.payload] };

    case SET_SELECTED_CONTACT:
      return { ...state, selected: action.payload };

    default:
      return state;
  }
};

export default contactsReducer;
