import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsReducer';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  // address: addressReducer
});
