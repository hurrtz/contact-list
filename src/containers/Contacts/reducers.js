import { SET_CONTACTS } from './constants';

export const initialState = [];

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default contactsReducer;
