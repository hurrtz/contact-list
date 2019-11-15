import { combineReducers } from 'redux';

import contactsReducer from 'containers/Contacts/reducers';

export default combineReducers({
  contacts: contactsReducer,
});
